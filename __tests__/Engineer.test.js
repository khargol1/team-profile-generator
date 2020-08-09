// const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('create an engineer object', function (){
    const laForge = new Engineer('Geordi', 1701, 'laforge@enterprise.ship', 'NCC1701-D');

    expect(laForge instanceof Engineer).toBeTruthy();
    expect(laForge.github).toEqual(expect.any(String));
});

test('test of get Github', function (){
    const laForge = new Engineer('Geordi', 1701, 'laforge@enterprise.ship', 'NCC1701-D');

    expect(laForge.getGithub()).toEqual(expect.any(String));
});

test('Test getRole for engineer', function (){
    const laForge = new Engineer('Geordi', 1701, 'laforge@enterprise.ship', 'NCC1701-D');

    expect(laForge.getRole()).toBe('Engineer');
});