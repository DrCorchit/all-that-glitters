import fs from "fs";
import {Plugin} from "vite";

const tsx = ".tsx";

export default function jsonToTsx(ext: string, transformer: (input: string) => string): Plugin {
	return {
		name: "json-to-tsx",

		/** @see https://github.com/vitejs/vite/issues/1899#issuecomment-775259950 */
		enforce: "pre",

		/** @see https://rollupjs.org/plugin-development/#resolveid */
		async resolveId(source, importer, options) {
			const resolution = await this.resolve(source, importer, options);
			if (!resolution || !resolution.id.endsWith(ext)) {
				return;
			}
			const resolutionId = resolution.id;

			// Rewrite module ID
			const modifiedImport = resolutionId.replaceAll(ext, tsx);

			console.log(`Resolved TSX JSON file: '${resolutionId}' -> '${modifiedImport}'.`);

			return {
				id: modifiedImport,
				// Store the original module filepath.
				meta: {tsxJsonFilepath: resolutionId},
			};
		},

		/**
		 * Since we modified import paths in builds, we need to explicitly read/load it manually.
		 * @see https://rollupjs.org/plugin-development/#load
		 */
		load(id) {
			if (!id.endsWith(tsx)) {
				return;
			}

			const moduleInfo = this.getModuleInfo(id);
			// If the module does not have "tsxjson" filepath in meta (e.g. another actual TSX file)
			if (!moduleInfo?.meta.tsxJsonFilepath) {
				return;
			}

			// ".tsx.json" filepath is available. Let's try reading the JSON file.
			const filepath = moduleInfo.meta.tsxJsonFilepath;
			return fs.readFileSync(filepath, "utf8");
		},

		/**
		 * Transform JSON to TSX.
		 * @see https://rollupjs.org/plugin-development/#transform
		 */
		transform(source, id) {
			if (!id.endsWith(tsx)) {
				//throw new Error("Attempting to transform .tsx.json to non-tsx file")
				return;
			}

			const moduleInfo = this.getModuleInfo(id);

			// If the module does not have "tsxjson" filepath in meta (e.g. another actual TSX file)
			if (!moduleInfo?.meta.tsxJsonFilepath) {
				return;
			}

			return transformer(source);
		},
	};
}
