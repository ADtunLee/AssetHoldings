var post = require('../models/post')
exports.getAll = async () =>{
    return await post.find({})
}
exports.FindByName = async (name) =>{
    var ListPost = await post.find({name:name})
    ListPost.map((post,index)=>{
        post._doc = {
            type: 'post',
            ...post._doc
        }
        console.log(post._doc)
    })
    return ListPost
    
}