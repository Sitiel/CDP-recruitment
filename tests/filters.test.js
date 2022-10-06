
const logic = require('../logic');

describe('filter', () => {

    test('ry should return John Dory and Oryx', () => {
        expect(logic.filter('ry')).toMatchObject([
            {
            name: 'Uzuzozne',
            people: [
                {
                name: 'Lillie Abbott',
                animals: [
                    {
                    name: 'John Dory'
                    }
                ]
                }
            ]
            },  
            {
            name: 'Satanwi',
            people: [
                {
                name: 'Anthony Bruno',
                animals: [
                    {
                    name: 'Oryx'
                    }
                ]
                }
            ]
            }
        ]);
    });
});
