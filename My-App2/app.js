//Exercise 1
fetch (`https://picsum.photos/500/300?random=1
`)
.then(function(response){
    console.log(response);
    document.getElementById('returnFetch').src = response.url;
})
.catch(function(error){
    console.log(error);
})

//Exercise 2
function getMyData(){
    fetch (`https://jsonplaceholder.typicode.com/posts`)
    .then(function(response1){
    console.log(response1);

        document.getElementById('divId').innerHTML = response1;
    // there are 2 ways to get element and inner html - Above and below are 2 ways, one line and seperate using an integer.

    //solution #2
    // let res = document.getElementById('divId');
    // res.innerHTML = response1;
})
.catch(function(error1){
    console.log(error1);
})
};


//excersize 3 JSON
    fetch (`https://jsonplaceholder.typicode.com/posts`)
.then(response => {
console.log(response);
return response.json(); // Filter only the JSON DATA
})
.then (json => {
console.log(json);
});

//exersize 4 JSON

fetch (`https://jsonplaceholder.typicode.com/posts`)
.then(response => {
console.log(response);
return response.json(); // Filter only the JSON DATA
})
.then (json => {
console.log(json);

function getUl(){
console.log(json);
let html = '';
json.forEach(item => {
    html +=`<li>${item.title}</li>`;
    
});
document.getElementById('ulId').innerHTML = html;
};
getUl();})
