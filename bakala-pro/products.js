const products = [{id:1, name:'Product1'},{id:2, name:'Product2'}];



function addProduct() {
    const args = process.argv.slice(2);
    products.push({
        id:args[0],
        name:args[1]
    });
    
}
addProduct();

function productList(){
    products.forEach(text=>
    console.log(text.name));
}
productList()