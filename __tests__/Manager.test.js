const Manager = require('../lib/Manager');

test('create manager objectg', function(){
    const riker = new Manager('william', 11076, 'rikerwilliamt@enterprise.ship', 'Ten Forward');

    expect(riker instanceof Manager).toBeTruthy();
    expect(riker.officeNumber).toEqual(expect.any(String));
});

test('getter functions return appropriate values', function (){
    const riker = new Manager('william', 11076, 'rikerwilliamt@enterprise.ship', 'Ten Forward');

    expect(riker.getRole()).toBe('Manager');
    expect(riker.getOfficeNumber()).toEqual(expect.any(String));
});

