import ts from "rollup-plugin-ts";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "named", // Add this line to preserve named exports
  },
  plugins: [
    ts({
      typescript: require("typescript"),
      tsconfig: "./tsconfig.json",
    }),
    terser(),
  ],
  external: ["react"],
};
