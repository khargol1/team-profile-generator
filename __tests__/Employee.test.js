const Employee = require('../lib/Employee');

test ('create a new employee object', () => {
    const employee = new Employee('Sadine', 8, 'email@email.com');

    expect(employee.name).toBe('Sadine');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email@email.com');
});

test('test getName', () => {
    const employee = new Employee('Sadine', 8, 'email@email.com');
    
    expect(employee.getName()).toEqual(expect.any(String));
});

test('test getId', () => {
    const employee = new Employee('Sadine', 8, 'email@email.com'); 

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('test getEmail', () => {
    const employee = new Employee('Sadine', 8, 'email@email.com');
    
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('test getRole', () => {
    const employee = new Employee('Sadine', 8, 'email@email.com');
    
    expect(employee.getRole()).toBe('Employee');
});