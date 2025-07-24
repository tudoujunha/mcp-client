import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		react(),
		cloudflare({
			// ensure that we can run two instances of the dev server
			inspectorPort: 9230,
		}),
	],
});
