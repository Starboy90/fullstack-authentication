const User = require('../model/user-model');

const Register = async(req,res)=>{

    try{
        const {firstName,lastName,email,password} =req.body;
        const userExist= await User.findOne({email}) ;
        if(userExist){
            res.status(400).json({messege:"User already exist"});
            
        }

        const newUser = new User({firstName,lastName,email,password});
        const saveUser= await newUser.save();
         res.status(200).json({messege:"Registation Done"});
    }
    catch{
       res.status(500).json({messege:"Error"});
    }

}

const Login = async(req,res)=>{
  
  try{
    const {email,password}=req.body;
    
    const user = await User.findOne({email});

    if(!user||user.password!==password){
        return res.status(401).json({messege:"Invalid Email or Password"});
      
    }
     res.status(200).json({ firstName:user.firstName,lastName:user.lasttName,email: user.email });
}
catch(error){
    console.error("Login error:",error);
    res.status(500).json({ message: "Internal Server Error" });
}
;

}


const DasBoard =async(req,res)=>{
try{
    const {email} = req.query;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({messege:"User not found"});
    }

    res.status(200).json({
        firstName:user.firstName,lastName:user.lastName,email: user.email

    })
}
catch(error){
    console.error("Dashboard error:",error);
    res.status(500).json({ message: "Internal Server Error" });
}


}


module.exports={Register,Login,DasBoard}