import { Plugin } from "../../deps.ts";

export function pluginTypescriptTransform(opts?: Deno.CompilerOptions): Plugin {
  return {
    name: "denopack-plugin-typescriptTransform",
    async transform(code, id) {
      const result = await Deno.transpileOnly({ [id]: code }, opts);
      return { code: result[id].source, map: result[id].map };
    },
  };
}

export default pluginTypescriptTransform;
