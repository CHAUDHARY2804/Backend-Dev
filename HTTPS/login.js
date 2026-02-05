import fs from "fs";
import { STATUSCODES } from "http-status-pro-";

function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    if (!fs.existsSync("user.json")) {
      return res.status(404).send("No users found");
    }
    const users = JSON.parse(fs.readFileSync("user.json", "utf-8"));

    const isUser = users.find(
      user => user.email === email && user.password === password
    );

    if (!isUser) {
      return res.status(STATUSCODES.NOT_FOUND).JSON
    }

   let ispassword= bcrypt.compareSync(password,isUser.password);
   if(!ispassword){
    return res.status(STATUSCODES.UNAUTHORIZED).json({
        code:STATUSCODES.UNAUTHORIZED.code,
        message:"Invalid password",
        data:null
    });
   }

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}

export default login