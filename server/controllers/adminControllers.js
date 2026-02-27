import jwt from "jsonwebtoken";

export const adminLogin = async(req,res)=>{
    try{

        const {email,password} = req.body;

        if(email!== process.env.ADMIN_EMAIL || password!== process.env.ADMIN_PASSWORD)
            
            {
                    return res.json({success:false, messege: "Invalid Credentials"})
            }

        const token = jwt.sign(email,process.env.JWT_SECRET)
            res.json({success:true, token, messege:"Admin Logged in successfully"})

    }
    catch(error)
        {
            res.json({success:false, messege: error.messege})

        }
}

