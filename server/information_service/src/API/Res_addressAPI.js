var express = require('express');
var router = express.Router();
var res_addressBL = require('../BL/res_address');
router.get('/get_by_id',async(req,res)=>{
    let list_Address = await res_addressBL.FindAllProductByID(req.query.addressID);
    console.log(list_Address)
    return res.json(list_Address)
})

module.exports = router;