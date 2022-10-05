import UserModule from "../models/userModule.js";
export const addUserModule=async(request,response)=>{
    try{
        console.log("SJSSSSSS")
        console.log(request.body)
        const userm=new UserModule(request.body)
        //console.log(request.body)
        await userm.save();
        return response.status(200).json(userm)
    }catch(error){
        return response.status(500).json(error.message)
    }
};
export const deleteUser=async(req,response)=>{
    try{
        console.log(req)
        
        const {id ,token  } = req.body;
        const idd=id;
         
        const userm=new UserModule.findByIdAndDelete(req.id,{id:idd})
        //console.log(request.body)
        await userm.save();
        return response.status(200).json(userm)
    }catch(error){
        return response.status(500).json(error.message)
    }
}