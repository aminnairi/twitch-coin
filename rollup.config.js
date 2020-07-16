import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import remove from "rollup-plugin-delete";
import {terser} from "rollup-plugin-terser";
import {resolve} from "path";

export default {
    input: resolve("src", "twitch-coin.ts"),

    plugins: [
        remove({
            targets: resolve("build", "*")
        }),
        copy({
            targets: [
                {
                    src: resolve("static", "*"),
                    dest: resolve("build")
                }
            ]
        }),
        typescript(),
        babel({
            babelHelpers: "bundled",
            babelrc: false,
            presets: [
                "@babel/preset-env"
            ]
        }),
        terser()
    ],

    output: {
        file: resolve("build/scripts/twitch-coin.js"),
        format: "iife"
    }
}
