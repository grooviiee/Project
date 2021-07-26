const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send(
        {
        serverid : 'Hello react',
        servername : 'Grooviiee'
        });
    
    console.log('Send server info');
})

router.post('/Sendserver', (req, res) =>{
    const serverid = req.body.server_id;
    const servername = req.body.server_name;
    console.log(`Post.. serverid: ${serverid}, servername: ${servername}`);
})

module.exports = router;