import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
//import {prebuild} from "./src/scripts/prebuild";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
});
