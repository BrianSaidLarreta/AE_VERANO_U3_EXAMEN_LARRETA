const status = require('http-status');
const _config = require('../_config');

let _fanpage;

const createFanpage = (req, res) => {
    const fanpage = req.body;
    _fanpage.create(fanpage)
        .then((data) => {
            res.status(200);
            res.json({msg:"FanPage creada exitosamente", data: data});
        })
        .catch((err) => {
            res.status(400);
            res.json({msg:"Error!!!!", data:err});
        })
}

const addComment = (req, res) => {
    let query ={
        _id:req.params.id
    } 
    let data = {
         $push: { 
            comments: req.body.comment
        }
    }

    _fanpage.update(query,data)
        .then((data) => {
            res.status(200);
            res.json({msg:"Comentario agregado exitosamente", data: data});
        })
        .catch((err) => {
            res.status(400);
            res.json({msg:"Error!!!!", data:err});
        })
}

const getComments = (req, res) => {
    const id = {
        _id: req.params.id
    }
        _fanpage.findOne(id)
        .then((data) => {
            res.status(200);
            res.json({msg:"Éxito", Comentarios: data.comments});
        })
        .catch((err) => {
            res.status(400);
            res.json({msg:"Error!!!!", data:err});
        })
}


const getCalifGlobal = (req, res) => {

        const id = {
            _id: req.params.id
        }
            _fanpage.findOne(id)
            .then((data) => {
                res.status(200);
                res.json({msg:"Éxito", Comentarios: data.calif.reduce( (a,b) => (a+b))/data.calif.length});
            })
            .catch((err) => {
                res.status(400);
                res.json({msg:"Error!!!!", data:err});
            })
}

module.exports = (Fanpage) => {
    _fanpage = Fanpage;
    return({
        createFanpage,
        addComment,
        getComments,
        getCalifGlobal
    });
}
