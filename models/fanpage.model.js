const mongoose = require ('mongoose');


let fanpageSchema = new mongoose.Schema({
    title: {
        type: String 
    },
    description: {
        type: String
    },
    Keywords:[
        { 
            type:String
        }
    ],
    comments:[
        { 
            type:String
        }
    ],
    calif:[
        { 
            type:Number
        }
    ]
	
		
});

const fanpageModel = mongoose.model('Fanpage', fanpageSchema, 'fanpage');
module.exports = fanpageModel;