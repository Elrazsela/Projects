function validateCustomer(customer){
    if(
        !customer.email ||
        !customer.password)
        return false;

        return true;
}

module.exports = validateCustomer