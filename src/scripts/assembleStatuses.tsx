import fs from "fs";
import {StatusEffect, statuses} from "../concepts/statusEffect";
import {FileBuilder} from "../utils/tsxBuilder";
import {createDirectory} from "../utils/tsxDirectory";

export function assembleStatuses() {
	const file = new FileBuilder();
	file.withImport(`import Sub from "../components/Sub"`);

	const statusEffects = createDirectory<StatusEffect>(
		file,
		statuses.array,
		status => status.name,
		status => status.effect
	);

	fs.writeFileSync("src/generated/statusEffects.tsx", statusEffects.build());

	const file2 = new FileBuilder();
	file2.withImport(`import Tooltip from "../components/Tooltip"`);

	const statusRecovery = createDirectory<StatusEffect>(
		file2,
		statuses.array,
		status => status.name,
		status => status.recovery
	);

	fs.writeFileSync("src/generated/statusRecovery.tsx", statusRecovery.build());
}
