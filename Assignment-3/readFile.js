import fs from "fs";

export function readFile(path) {
    if (!fs.existsSync(path)) {
        console.log(" File does not exist");
        return;
    }

    const data = fs.readFileSync(path, "utf-8");
    console.log("File Content:\n", data);
}
