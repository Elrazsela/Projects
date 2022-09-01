//לך למודול בסיסי של חברת 
//node js
//ותטען משם מודול שמתעסק עם העניין של יצירת שרת
const http= require('http');

//בכול פעם שמשתמש יגיע לשרת שלנו
//אז ניתן לו בתגובה את המילים 
//Hello from haker U 
//ואת הכותרת הלוגית
//'200',{"Content-Type":"text/plain"}
//ונסיים את הסאגה מולו
//const server=  http.createServer(   כאן אשלח תהליך שלם) ;

const server=http.createServer(  (req,res)=>{
     res.writeHead('200',{"Content-Type":"text/plain"});
     res.write('Hello from haker U ');
     res.end();
}     );

//תפעיל את השרת
//תתחיל להאזין
server.listen(3000);
