
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

    test('zz should return an empty array', () => {
        expect(logic.filter('zz')).toMatchObject([]);
    });

    const dataSet = [
        [],
        {},
        1,
        "",
        null,
        undefined,
        NaN,
        true,
        false,
        () => {},
    ];


    test.each(dataSet)('%p should throw an error', (data) => {
        expect(() => logic.filter(data)).toThrow();
    });
});
