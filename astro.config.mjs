import { defineConfig } from "astro/config";

import rename from "astro-rename";

import HashRenamer from "./src/lib/hash-renamer";

const renamer = new HashRenamer();

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    rename({
      rename: {
        strategy: (key) => renamer.rename(key),
      },
    }),
  ],
});
