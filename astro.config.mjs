import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), compress()]
  // site: 'https://webferrol.github.io',
  // base: "/portfolio-astro",
  // output: "static"
});