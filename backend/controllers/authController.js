const userModel = require("../models/user");
const bcrypt = require("bcrypt");

// Signup functionality
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save(); // Save the new user to the database

        return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Login functionality (to be implemented)
const login = async (req, res) => {
    // You can add the login functionality here
        try{
            const {email,password}=req.body;
            const user=await userModel.findOne({email})
            if(!user){
                return res.status(403).json({message:"Wrong email/password"})
            }
            const passCheck=bcrypt.compare(password,user.password)
            if(!passCheck){
                
            }

        }
        catch(error){

        }
};

module.exports = {
    signup,
    login
};
