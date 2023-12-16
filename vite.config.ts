import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import pkg from "./package.json" assert { type: "json" };

const makeExternalPredicate = (externalArr: string[]) => {
    if (externalArr.length === 0) {
        return () => false;
    }
    const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
    return (id: string) => pattern.test(id);
};

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "react-trace-update",
            formats: ["es", "cjs"],
            fileName: (format) => `react-trace-update.${format}.js`,
        },
        rollupOptions: {
            external: makeExternalPredicate([
                ...Object.keys(pkg.peerDependencies),
            ]),
        },
    },
    plugins: [react(), dts({ include: ["src"] })],
});
