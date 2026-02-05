import fs from "fs";
function createTodo(name, task, status) {
    try{
        let ob= {
            id: new Date(),
            createtime: new Date(),
            task, status: false,
        }
        if(fs.existsSync("todo.json")){
            let data = JSON.parse(fs.readFileSync("todo.json","utf-8"));
            for(let i=0;i<data.length;i++){
                if(data[i].name === name){
                    data[i].todo.push(ob);
                    // delete data[i].todo.pop();
                }
            }
            fs.writeFileSync("todo.json", JSON.stringify(data,null));
            console.log("todo created");
        }
    }
    catch(err){
        console.log("error");
    }
}
export default createTodo;

            
           