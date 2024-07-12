export function normalize(str: string): string {
	return str
		.toLowerCase()
		.replaceAll(/[_ —–-]+/g, " ")
		.replaceAll(/[^a-z0-9 ]+/g, "")
		.trim()
		.replaceAll(/ +/g, "_");
}

export function range(start: number, length: number): number[] {
	return Array.from({length: length}, (v, k) => k + start);
}

const ordinalSuffixes = ["th", "st", "nd", "rd", "th"];

export function toOrdinal(num: number): string {
	const remainder = Math.min(num % 10, ordinalSuffixes.length - 1);
	return `${num}${ordinalSuffixes[remainder]}`;
}

export function recordEquals<T>(r1: Record<string, T>, r2: Record<string, T>): boolean {
	if (r1 === r2) return true;
	const r1Entries = Object.entries(r1);
	const r2Entries = Object.entries(r2);
	if (r1Entries.length !== r2Entries.length) return false;
	r1Entries.forEach(entry => {
		if (entry[1] !== r2[entry[0]]) return false;
	});
	return true;
}
