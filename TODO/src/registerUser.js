import fs from "fs";
function registerUser(name, email,password) {
    try{
        let user =[];
        let ob = {
            id: new Date(), name, email,password, todo:[],
    }
    if(fs.existsSync("todo.json")){
        let data = JSON.parse(fs.readFileSync("todo.json"));
        let isUser = data.some((value)=> value.email === email);
        if(isUser){
        
            return "User exists";
        }
        user = data;
    }
    user.push(ob);
    fs.writeFileSync("todo.json", JSON.stringify(user,null));
    console.log("user create");
}
catch(err){
    console.log("error");

}
}
export default registerUser;