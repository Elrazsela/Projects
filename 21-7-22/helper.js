function printTime (time){
    console.log(time);
}

function getRoundedTime(){
    const date = new Date();
    if(date.getSeconds()==0)
         return date;
    return null;
}
//רוצה ליצור תהליך   שבכול שניה 
//מדפיס את הערך 123
function doEverySecondPrintTime(callBackFunk){
    const timeInterval = 1000;
    const operationToDo = ()=>{
        if (getRoundedTime()!==null){
         callBackFunk(new Date().toLocaleTimeString());
    }}
      setInterval(operationToDo,timeInterval);
}

module.exports= {printTime,getRoundedTime,doEverySecondPrintTime };
