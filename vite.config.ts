import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {prebuild} from "./src/scripts/prebuild";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), prebuild()],
	server: {
		port: 5173,
		strictPort: true,
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id.toString().split("node_modules/")[1].split("/")[0].toString();
					}
				},
			},
		},
	},
});
