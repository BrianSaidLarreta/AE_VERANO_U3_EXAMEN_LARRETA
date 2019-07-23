const router = require('express').Router();

module.exports = (wagner) => {
    
    const sellerCtrl = wagner.invoke((Fanpage) => 
        require('../controllers/fanpage.controller')(Fanpage));
    
    router.post('/', (req, res) => sellerCtrl.createFanpage(req, res));
    router.put('/addComment/:id', (req, res) => sellerCtrl.addComment(req, res));
    router.get('/getComments/:id', (req, res) => sellerCtrl.getComments(req, res));
    router.get('/getCalifGlobal/:id', (req, res) => sellerCtrl.getCalifGlobal(req, res));
    
    return router;
}