const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
    created_By: {
        type: String,
        ref: 'User',
    },
    members : {
        type: Array,
        default: [],
    },

    title : {
        type: String
    },
    description : {
        type : String
    },
    department : {
        type : String,
        enum : ["Business", "Education", "IT", "Marketing", "others"],
        default : "others"
    },
    status : {
        type : String,
        enum : ["Pending", "In-Progress", "Completed"],
        default : "Pending"
    },
    time_frame : {
        type : String,
    },
    start_date : {
        type : String,
        default : Date.now
    }
},
    
    {
        timestamps: true,
    },
)

const TeamTaskModel = mongoose.model("TeamTask", teamSchema);

module.exports = TeamTaskModel;