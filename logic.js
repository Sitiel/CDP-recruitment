/**
 * @file Contains the logic of the CLI program.
 */


/**
 * Filter the countries, people, and animals to only include those that match the given letters.
 * 
 * @param letters - The letters used to filter.
 * @param [dataService] - Dependency injection of the data.
 * @returns An array of countries with people with animals that match the letters.
 */
 function filter(letters, dataService=require('./dataservice')) {
    if(typeof letters !== 'string') {
        throw new Error('Letters must be a string');
    }
    if(letters.length === 0) {
        throw new Error('Letters must not be empty');
    }
    
    let countries = dataService.getCountries();
    for(let i = 0; i < countries.length; i++) {
        for(let j = 0; j < countries[i].people.length; j++) {

            //Filtering matching animals
            let matchingAnimals = countries[i].people[j].animals.filter(
                (animal) => animal.name.includes(letters)
            );
            countries[i].people[j].animals = matchingAnimals;
        }

        //Filtering people with no matching animals
        countries[i].people = countries[i].people.filter(
            (people) => people.animals.length > 0
        );
    }
    //Filtering countries with no people matching animals
    return countries.filter(
        (country) => country.people.length > 0
    );
}

/**
 * Count the number of countries, people, and animals and append the count to the name of the parent.
 * @param [dataService] - Depency injection of the data.
 * @returns An array of countries with the number of people and animals in each country in the name.
 */
function count(dataService=require('./dataservice')) {
    let countries = dataService.getCountries();
    for(let i = 0; i < countries.length; i++) {
        countries[i].name = `${countries[i].name} [${countries[i].people.length}]`;
        for(let j = 0; j < countries[i].people.length; j++) {
            countries[i].people[j].name = `${countries[i].people[j].name} [${countries[i].people[j].animals.length}]`;
        }
    }
    return countries;

}

module.exports = {filter, count};
