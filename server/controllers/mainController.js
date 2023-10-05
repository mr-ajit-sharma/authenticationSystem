const User = require('../../models/user')

const home = (req, res) => {
    res.render("index")
}

const signin = (req, res) => {
    res.render('signIn')
}

const signup = (req, res) => {
    res.render('signUp')
}
const postsignup = async(req, res) => {
    try {
        let user=await User.findById({email:req.body.email})
        console.log(user,"created already")
        if(user!=User.email){
            let newUser =await  User.create({ name: req.body.name, email: req.body.email, password: req.body.password });
            console.log(newUser,"user created succesdfully")
            return res.render('signIn')
        }
        console.log("user is alredy exist")
    return  res.redirect('/')   
        
    } catch (error) {
        console.log("internal system error in the post sign up",error)
    }

}
const postsignin=async(req,res)=>{
try {
    let userId=await User.findById(req.body.email)
    if(userId!=User.email){
        res.render('signUp')
    }
    res.redirect('/')
} catch (error) {
    console.log("internal system error in the post signin",error)
}
}
module.exports = { home, signin, signup, postsignup,postsignin }