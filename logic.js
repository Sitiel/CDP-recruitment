const countries = require('./data')['data'];


/**
 * Filter the countries, people, and animals to only include those that match the given letters.
 * 
 * @param letters - The letters used to filter.
 * @returns An array of countries with people with animals that match the letters.
 */
 function filter(letters) {
    if(typeof letters !== 'string') {
        throw new Error('Letters must be a string');
    }
    if(letters.length === 0) {
        throw new Error('Letters must not be empty');
    }
    
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

module.exports = {filter};
