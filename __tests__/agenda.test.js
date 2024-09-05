const agenda = require('../agenda');

test('check agenda size', () => {
    expect(agenda.getAgendaNames().length).toBeGreaterThan(100);
});

test('check agenda languages', () => {
    expect(agenda.getAgendaLanguages().length).toBeLessThan(100);
});

test('check agenda ids', () => {
    const agendaIds = agenda.getAgendaIds();
    expect(agendaIds.length).toBe(agenda.getAgendaSize());
});

// test('check agenda fields', () => {
//     const agendaMainFields = agenda.getAgendaMainFields();

//     const allValues = [];

//     agendaMainFields.forEach((user) => {
//         const values = Object.values(user);
//         allValues.push(...values);
//     })

//     console.log(allValues.length)

//     expect(allValues.some((value) => !value)).toBe(false);
// });