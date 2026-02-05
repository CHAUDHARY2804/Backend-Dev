import fs from 'fs';
function loginUser(email, password) {
    try {
        if (fs.existsSync("todo.json")) {
            let data = JSON.parse(fs.readFileSync("todo.json"));
            let user = data.find((value) => value.email === email && value.password === password);
            if (user) {
                return "Login successful";
            } else {
                return "Invalid email or password";
            }
        } else {
            return "No users registered";
        }
    } catch (err) {
        console.log("error");
    }
}
export default loginUser;