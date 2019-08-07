var express = require('express')
var router = express.Router();
var fs = require('fs')
var postBL = require('../BL/post')
router.get('/get_list', async (req, res) => {

    let list_post = await postBL.getAll()
    return res.json(list_post)
})
router.get('/list_category', async (req, res) => {
    let list_category = await postBL.GetAllCategory();
    return res.json(list_category);
})

router.get('/get_by_id', async (req, res) => {
    if (!req.query.postID) { return res.status(404).json({}); }
    var document = await postBL.GetDocumentByID(req.query.postID);
    var post = await postBL.GetByID(req.query.postID);
    if (!post.length) { return res.status(404).json({ message: "Not found" }); }
    if (!document) { document = "" };
    post[0].document = document;
    return res.json(post[0])

})

router.get('/get_by_category_sequence', async (req, res) => {
    var sequence = req.query.sequence || 'a';
    var limit = parseInt(req.query.limit) || 10;
    var offset = parseInt(req.query.offset) || 0;
    if (!parseInt(sequence)) {
        return res.json({ error: true, message: 'Not a number' })
    }

    let list_post = [];
    list_post = await postBL.GetByCategorySequence(sequence,offset,limit);
    return res.json(list_post)
})

router.get('/get_document', async (req, res) => {
    if (req.query.PostID) {
        var contents = fs.readFileSync('\\192.168.1.251\disk/99500440-9fa7-4c98-9947-ba0fce369ed9', 'utf8');
        console.log(contents)
        return res.end(contents)
    }
    return res.json({})
})

module.exports = router;