import { access, mkdir, writeFile } from "fs/promises";
import { resolve } from "path";
import timestamp from "../utils/timestamp";

export default async (text: string) => {
    const dir = resolve(__dirname, '../../migrations');

    try {
        await access(dir);
    } catch (err) {
        if (err instanceof Error) {
            await mkdir(dir);
        }
    }

    await writeFile(`${dir}/${timestamp()}_autogen.ts`, text);
}