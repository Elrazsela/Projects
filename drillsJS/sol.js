



function createParagraphes(arr) {
    let paragraphes = []
    for (let string of arr) {
        const element = document.createElement('p');
        element.innerText = string;
        paragraphes.push(element);
    }
    return paragraphes;
}

function createParagraphes2(arr) {
    return arr.map(function (string) {
        const element = document.createElement('p')
        element.innerText = string;
        return element;
    });
}


// ["29/01/2001"];

function createDateParagraphes(arr) {
    let paragraphes = []
    for (let dateString of arr) {
        const year = Number(dateString.split('/')[2]);
        if (year >= 2018 && year <= 2022) {
            let p = document.createElement('p');
            p.innerText = dateString;
            paragraphes.push(p);
        }
    }
    return paragraphes;
}

let dateStrings = [
    "29/01/1999",
    "29/01/2020",
    "29/01/2018",
    "29/01/2050",
    "29/01/2021"
]


const dateElements = createDateParagraphes(dateStrings);


const container = document.createElement('div');
for (let dateEl of dateElements) {
    container.appendChild(dateEl);
}
document.body.appendChild(container);


console.log(dateElements);