import fs from "fs";

export function copyFile(source, destination) {
    if (!fs.existsSync(source)) {
        console.log("Source file not found");
        return;
    }

    fs.copyFileSync(source, destination);
    console.log(" File copied successfully");
}
