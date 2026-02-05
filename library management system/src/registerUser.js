import fs from "fs";

const filePath = process.cwd() + "/Book.json";

function registerUser(bookID, title, author, price) {
    try {
        let books = [];

        let ob = {
            id: Date.now(),
            bookID,
            title,
            author,
            price
        };

        if (fs.existsSync(filePath)) {
            let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            let isBook = data.some(value => value.title === title);

            if (isBook) {
                return "Book already exists";
            }

            books = data;
        }

        books.push(ob);
        fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
        return "Book created successfully";

    } catch (err) {
        return "Error occurred";
    }
}

export default registerUser;
