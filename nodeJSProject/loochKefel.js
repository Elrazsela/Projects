const kefel = function(){
let str="";
for(let i=1; i<=10;i++)
{
   let  str="";
  for(let j=1; j<=10; j++)
  {
      str+= (i*j).toString().padEnd(3);    
  }
  console.log(str);
  
}
}
kefel()
module.exports=kefel;