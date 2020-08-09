const Intern = require('../lib/Intern');

test('create Intern object', function(){
    const crusher = new Intern('wesley', 2234, 'crusherwesley@enterprise.ship', 'Starfleet Academy');

    expect(crusher instanceof Intern).toBeTruthy();
    expect(crusher.school).toEqual(expect.any(String));
});

test('getter functions return appropriate values', function(){
    const crusher = new Intern('wesley', 2234, 'crusherwesley@enterprise.ship', 'Starfleet Academy');

    expect(crusher.getRole()).toBe('Intern');
    expect(crusher.getSchool()).toEqual(expect.any(String));
});

