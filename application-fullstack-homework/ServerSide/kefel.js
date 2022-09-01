const kefel = function(){
//let str=[""];
for(let i=1; i<=10;i++)
{
   let  str=[];
  for(let j=1; j<=100; j++)
  {
      str+= (i*j).toString().padEnd(3);    
  }
return str;
  
}
}
kefel()
module.exports=kefel;