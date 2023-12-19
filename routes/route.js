import express from "express";

import {subscribe, unSubscribe, updateCity, getData, getOneSubscriber} from '../controller/subscriptionController.js';

const router = express.Router()

router.get('/', async (req, res)=>{
    res.send(await getData());
});
router.get('/:id', async(req, res)=>{
    var chatId = req.params.id;
    res.send(await getOneSubscriber(chatId));
})
router.post('/subscribe', async(req, res) =>{
    var chatId = req.body.chatId;
    var location = req.body.location;

    // checking for valid chatId
    if(chatId > 0){
        res.send(await subscribe(chatId, location));
    } else {
        res.send("Invalid Id, user not inserted");
    }
});
router.post('/unsubscribe', async(req, res) =>{
    var chatId = req.body.chatId;
    res.send(await unSubscribe(chatId));
});
router.put('/:id', async(req, res) =>{
    var chatId = req.body.chatId;
    var location = req.body.location;
    res.send(await updateCity(chatId, location));
});



export default router;