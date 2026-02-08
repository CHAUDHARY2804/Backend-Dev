import fs from "fs";

export function deleteFile(path) {
    if (!fs.existsSync(path)) {
        console.log(" File not found");
        return;
    }

    fs.unlinkSync(path);
    console.log("File deleted successfully");
}
