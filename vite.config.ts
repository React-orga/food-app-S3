import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@types": path.resolve(__dirname, "src/types"),
            "@types/Input": path.resolve(__dirname, "src/types/Input/*"),
            "@types/Typography": path.resolve(
                __dirname,
                "src/types/Typography/*"
            ),

            "@atoms": path.resolve(__dirname, "src/components/atoms/*"),
            "@molecules": path.resolve(__dirname, "src/components/molecules/*"),
            "@organisms": path.resolve(__dirname, "src/components/organisms/*"),
            "@templates": path.resolve(__dirname, "src/components/templates/*"),
            "@pages": path.resolve(__dirname, "src/pages/*"),
            "@utils": path.resolve(__dirname, "src/utils/*"),
        },
    },
});
