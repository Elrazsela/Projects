function getRoundedSecondTime(callbackFunction){
    
    const time = 1000;
    setInterval(   ()=>{
                 const date = new Date();
                if(date.getSeconds()==0)
                {
                    //כאן אנחנו יודעים את השעה העגולה
                    //אבל כאן הבעיה שהוא פשוט לא מחזיר 
                  //  return date.toLocaleTimeString(); 

                  callbackFunction(date.toLocaleTimeString());
                }

    }     ,time);
}
getRoundedSecondTime((time)=>{
    console.log(time);
});


function getName(){
    return 'Tomer Keisar';
}
//getName מה הערך החוזר מפונקציית
//getName מה הסוג החוזר מפונקציית 

function getAge(){
    return 39;
}
//getAge מה הערך החוזר מפונקציית
//getAge מה הסוג החוזר מפונקציית 

console.log('My name is: ' + getName());
console.log('My age is: ' + getAge());
