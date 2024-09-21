const joi=require("joi")
const signupvalidation=(req,res,next)=>{
    const Schema=joi.object({
        name:joi.string().min(8).max().required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).required()
    })
    const {error}=Schema.validate(req.body)
    if(error){
        return res.status(400).json({message:"Sign up Failed",error})

    }
next()}