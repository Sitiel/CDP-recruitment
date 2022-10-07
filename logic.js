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
const filter = (letters, dataService=require('./dataservice')) => {
    if(typeof letters !== 'string') {
        throw new Error('Letters must be a string');
    }
    if(letters.length === 0) {
        throw new Error('Letters must not be empty');
    }

    let countries = [...dataService.getCountries()];
    countries = countries.filter((country) => {
        country.people = country.people.filter((people) => {
            people.animals = people.animals.filter((animal) => {
                return animal.name.includes(letters);
            });
            return people.animals.length > 0;
        });
        return country.people.length > 0;
    });
    return countries;
}


/**
 * Count the number of countries, people, and animals and append the count to the name of the parent.
 * @param [dataService] - Depency injection of the data.
 * @returns An array of countries with the number of people and animals in each country in the name.
 */
 const count = (dataService=require('./dataservice')) => {
    let countries = [...dataService.getCountries()];
    return countries.map((country) => {
        return {
            name: `${country.name} [${country.people.length}]`,
            people: country.people.map((people) => {
                return {
                    name: `${people.name} [${ people.animals.length}]`,
                    animals: people.animals
                }
            })
        }
    });
}


module.exports = {filter, count};
