const mongoose= require('mongoose');

const {Schema}=mongoose;

const activity=new Schema({

    name:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    hour:{
        type:String,
        required:true
    },
    
    matter:{
        type:Schema.Types.ObjectId,
        ref:'matter'
    },

    
})

module.exports=mongoose.model('activity',activity);

