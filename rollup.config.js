import ts from "rollup-plugin-ts";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "named",
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
