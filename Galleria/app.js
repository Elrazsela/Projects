import { pictures } from './data/pictures.js';

/*
window.searchProduct = function() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim(); // ' tab '.trim() => 'tab'

    const searchResult = products.filter(prod => {
        return prod.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayProducts(searchResult);
}

// and then the button in the html has to have "onclick"
<button id="search-btn" type="button" onclick="searchProduct()">Search</button>
*/

function searchPictures() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim(); // ' tab '.trim() => 'tab'

    const searchResult = pictures.filter(prod => {
        return prod.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayPictures(searchResult);
}

const searchButton = document.getElementById(`search-btn`);
searchButton.addEventListener('click', searchPictures);


function getTotalPictures() {
    const total = document.getElementById('total-pictures');
    total.innerHTML = pictures.length;
}


// take products data and add it into the html of each card
function displayPictures(pictureData) {
    const container = document.getElementById('pictures-container');
    let html = '';

    pictureData.forEach(pic => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${pic.getImage()}"
                    class="card-img-top" alt="${pic.getDescription()}">
                <div class="card-body">
                    <h5 class="card-title">${pic.getName()}</h5>
                    <p class="card-text">
                        ${pic.getPrice()}
                    </p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>`;
    })

    container.innerHTML = html;
    getTotalPictures();
}

// call the first function
displayPictures(pictures);