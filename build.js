import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary);

const sd = new StyleDictionary({
  excludeParentKeys: true,
  source: ["tokens.json"],
  preprocessors: ["tokens-studio"],
  platforms: {
    js: {
      transformGroup: "tokens-studio",
      transforms: ["name/camel"],
      buildPath: "build/js/",
      files: [
        { destination: "tokens.js", format: "javascript/es6" },
        { destination: "tokens.cjs", format: "javascript/module" },
        { destination: "tokens.ts", format: "typescript/es6-declarations" },
        { destination: "tokens.json", format: "json" },
      ],
    },
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"],
      buildPath: "build/css/",
      files: [{ destination: "variables.css", format: "css/variables" }],
    },
    scss: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"],
      buildPath: "build/scss/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
