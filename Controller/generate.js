const path = require("path");
const submitPath = path.join(__dirname, "../View/pages/index.ejs");
console.log(submitPath);

const generateResume=(req,res)=>{
    const name=req.body.name;
    const location=req.body.location;
    const occupation=req.body.occupation;
    const education=req.body.education;
    const experience=req.body.experience;

    const data={
        name:name,
        location:location,
        occupation:occupation,
        education:education,
        experience:experience
    };

    res.render(submitPath, data)
}

module.exports=generateResume;