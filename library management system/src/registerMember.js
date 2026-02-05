import fs from "fs";

const filePath = process.cwd() + "/Member.json";

function registerMember(memberId, name, membershipType) {
    try {
        let members = [];

        let member = {
            memberId,
            name,
            membershipType
        };

        if (fs.existsSync(filePath)) {
            let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            let exists = data.some(m => m.memberId === memberId);
            if (exists) return "Member already exists";
            members = data;
        }

        members.push(member);
        fs.writeFileSync(filePath, JSON.stringify(members, null, 2));
        return "Member registered successfully";
    } catch (err) {
        return "Error registering member";
    }
}

export default registerMember;
