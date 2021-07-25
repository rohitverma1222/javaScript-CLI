let helpobj=require("./commands/help");
let treeobj=require("./commands/tree");
let organizeobj=require("./commands/organize");

let inarr=process.argv.slice(2);
let command=inarr[0];
let path=inarr[1];

if(command=='tree')
{
  treeobj.fxn(path);
}
else if(command=='help')
{
  helpobj.fxn();
}
else if(command=='organize')
{
   organizeobj.fxn(path);
}