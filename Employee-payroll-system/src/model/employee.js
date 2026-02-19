import fs from "fs";

export function createEmployee(Name,Email,Password,Department,Salary){
    try {
        let employee={
            id:Date.now(),
            Name:Name,
            Email:Email,
            Password:Password,
            Department:Department,
            Salary:Salary
        }
        let employees=[];
        if(fs.existsSync("employees.json")){
            let data=JSON.parse(fs.readFileSync("employees.json","utf-8"));
            if(!data){
                return null;

            }
            employees=data;
        }
        employees.push(employee);
        fs.writeFileSync("employees.json",JSON.stringify(employees,null,2));
        return {Name,Email,Department};
        
        
    } catch (err) {
        console.log("Error creating employee:", err);
        return null;
        
    }
}

export function deleteEmployee(id){
    try {
        if(!fs.existsSync("employees.json")){
            return null;
        }
        let data=JSON.parse(fs.readFileSync("employees.json","utf-8"));
        let employee=data.find((emp)=>emp.id===id)
        if(!employee){
            return "user not found";
        }
        let delEmployee=data.filter((emp)=>emp.id!==id);
        fs.writeFileSync("employees.json",JSON.stringify(delEmployee,null,2));
        return employee;
        
    } catch (err) {
        console.log("Error deleting employee:", err);
        return null;
        
    }
}

export function updateEmployee(Name,Email,Department,Salary){
    try {
        if(!fs.existsSync("employees.json")){
            return null;
        }
        let data=JSON.parse(fs.readFileSync("employees.json","utf-8"));
        let employee=data.find((emp)=>emp.id===id);
        if(!employee){
            return "user not found";
        }
        let employeeIndex=data.findIndex((emp)=>emp.id===id);
        data[employeeIndex].Name=Name;
        data[employeeIndex].Email=Email;
        data[employeeIndex].Department=Department;
        data[employeeIndex].Salary=Salary;
        fs.writeFileSync("employees.json",JSON.stringify(data,null,2));
        
        
    } catch (err) {
        console.log("Error updating employee:", err);
        return null;
        
    }
}

export function loginEmployee(Email,Password){
    try {
        if(!fs.existsSync("employees.json")){
            return null;
        }
        let data=JSON.parse(fs.readFileSync("employees.json","utf-8"));
        let employee=data.find((emp)=>emp.Email===Email && emp.Password===Password);
        if(!employee){
            return "user not found";
        }
        return employee;
        
    } catch (err) {
        console.log("Error logging in employee:", err);
        return null;
        
    }
}