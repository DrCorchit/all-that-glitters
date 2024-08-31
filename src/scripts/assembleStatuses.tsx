import {StatusEffect, statuses} from "../concepts/statusEffect";
import {createDirectory} from "../utils/tsxDirectory";

export function assembleStatuses() {
	createDirectory<StatusEffect>(
		"statusDescriptions",
		statuses.array,
		status => status.name,
		status => status.effect
	)
		.withImport(`import Sub from "../components/Sub"`)
		.save("src/generated/statusDescriptions.tsx");

	createDirectory<StatusEffect>(
		"statusRecoveries",
		statuses.array,
		status => status.name,
		status => status.recovery
	)
		.withImport(`import Tooltip from "../components/Tooltip"`)
		.save("src/generated/statusRecoveries.tsx");
}
