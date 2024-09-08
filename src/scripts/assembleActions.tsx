import {Action, actions} from "../concepts/actions";
import {createDirectory} from "../utils/tsxDirectory";

export function assembleActions() {
	createDirectory<Action>(
		"actionDescriptions",
		actions.array,
		action => action.name,
		action => action.description
	)
		.withImport(`import Tooltip from "../components/Tooltip"`)
		.save("src/generated/actionDescriptions.tsx");
}
