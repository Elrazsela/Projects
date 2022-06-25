function sum(num1, num2){
 return num1 + num2
};

function random(){
    return Math.random();
};
function precentage(num, total){
    return `${num / total * 100}%`;
};

export{
    sum,
    random,
    precentage,
};