function validateCustomer(customer){
    if(!customer.name||
        !customer.email ||
        !customer.password)
        return false;

        return true;
}

module.exports = validateCustomer