const countries = ['Lebanon', 'Israel','Iraq'];

function addCountry (newCountry){
      countries.push(newCountry);
}

function getAllCountries (){
    return countries;
}

function deleteCountry (country){
     const index = countries.indexOf(country);  
     if(index >-1)
         countries.splice(index,1);  
}

function updateCountry (oldCountry, newCountry){
    const index = countries.indexOf(oldCountry);  
    if(index >-1)
        countries[index]  = newCountry; 
}
function printCountries(){
    console.log(getAllCountries());
}
