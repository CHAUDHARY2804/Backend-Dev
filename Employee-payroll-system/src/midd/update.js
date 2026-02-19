import joi from "joi";
import {StatusCodes} from "http-status-pro-js"
function employeeupdate(req,res,next){
    try{
        let scheam= joi.object({
            name:joi.string().trim().lowercase().min(3).max(200).required(),
            email:joi.string().trim().lowercase().min(6).max(200).required(),
            password:joi.string().trim().lowercase().min(3).max(10).required(),
            Department:joi.string().trim().lowercase().min(3).max(200).required(),
            Salary:joi.number().min(0).required()
        })
        let {error, value}= scheam.validate(req.body)
        if(error){
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message:error,
                data:null
            })
            return;
        }
        req.body = value;
        next()
    }catch(error){
        console.log("update mid", error);
        res.status(StatueCodes.INTERNAL_SERVER_ERROR.code).json({
            code: StatusCodes.INTERNAL_SERVER_ERROR.code,
                message:error,
                data:null
        })
    }
}
export default employeeupdate;