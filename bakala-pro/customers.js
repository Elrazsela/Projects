const customers = [{id:1, name:'Ice Cream'},{id:2, name:'Banana'}];

function addCustomer() {
    const args = process.argv.slice(2);
    customers.push({
        id:args[0],
        name:args[1]
    });
    
}
addCustomer();

function customersList(){
    customers.forEach(text=>
    console.log(text.name));
}
customersList()