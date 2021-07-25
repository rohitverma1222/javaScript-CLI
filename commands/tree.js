let fs=require("fs");
function tree(path)
{
    let len=fs.readdirSync(path);
    for(let i=0;i<len.length;i++)
    {
        console.log("|-"+len[i]);
    }
    
}
module.exports={
    fxn:tree
}