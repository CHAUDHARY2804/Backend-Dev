import fs from "fs";

export function listDirectory(path) {
    if (!fs.existsSync(path)) {
        console.log("Directory not found");
        return;
    }

    const files = fs.readdirSync(path);
    console.log(" Directory Contents:");
    files.forEach(file => console.log(file));
}
