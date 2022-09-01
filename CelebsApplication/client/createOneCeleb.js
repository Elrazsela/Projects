function createOneCeleb(celeb){
    const {name,age,imageUrl} = celeb;

    document.querySelector('#container').innerHTML += 
    `
            <div  class="card">
            <img style="height:300px;width:200px;" src="${imageUrl}" alt="${name}" >
            <div class="container">
            <h4><b>${name} </b></h4> 
            <p>${age}</p> 
            </div>
            </div>
    `;

}