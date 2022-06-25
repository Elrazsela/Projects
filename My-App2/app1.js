
fetch (`http://127.0.0.1:5500/My-App2/users.json`)
.then(response => {
console.log(response);
return response.json(); // Filter only the JSON DATA
})
.then (json => {
console.log(json);

function getUl(){
let html = '';
json.forEach(item => {
    document.getElementById('divId').innerHTML +=`
    <thead>
            <tr>
                <th>${item.userName}</th>
                <th>${item.email}</th>
                <th>${item.lastName}</th>
                <th>${item.firstName}</th>
            </tr>
        </thead>
    `;
    
});

};
getUl();


});
