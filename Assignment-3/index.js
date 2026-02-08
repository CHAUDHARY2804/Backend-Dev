import { readFile } from "./readFile.js";
import { writeFile } from "./writeFile.js";
import { copyFile } from "./copyFile.js";
import { deleteFile } from "./deleteFile.js";
import { listDirectory } from "./listDir.js";

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case "read":
        readFile(args[1]);
        break;

    case "write":
        writeFile(args[1], args[2]);
        break;

    case "copy":
        copyFile(args[1], args[2]);
        break;

    case "delete":
        deleteFile(args[1]);
        break;

    case "list":
        listDirectory(args[1]);
        break;

    default:
        console.log(`
 File Manager Commands:
node index.js read <filePath>
node index.js write <filePath> <content>
node index.js copy <source> <destination>
node index.js delete <filePath>
node index.js list <directoryPath>
        `);
}
