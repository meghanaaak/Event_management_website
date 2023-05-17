
const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://Honey:f8zic9GUVGOmeNRL@cluster2.tksstvk.mongodb.net/eventManagement", {useNewUrlParser: true}, {useUnifiedTopology: true})

.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log("failed to connect")
})

const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    branch:{
        type:String,
        required:true
    }
})

const collection= new mongoose.model("Collection1", LogInSchema)

module.exports=collection

