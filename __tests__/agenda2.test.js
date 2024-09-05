const {getAgendaLanguages, getAgendaIds, getAgendaSize, getAgendaMainFields} = require('../agenda');


test('min size of the agenda', () => {
    expect(getAgendaSize()).toBeGreaterThanOrEqual(100);
});

test('max languages of the agenda', () => {
    expect(getAgendaLanguages().length).toBeLessThanOrEqual(15);
})

test('check unique ids', () => {
    const uniqueIds = getAgendaIds();
    const agendaSize = getAgendaSize();
    expect(uniqueIds.length).toBe(agendaSize);
})

test('check user fields', () => {
    const agendaMainFields = getAgendaMainFields();
    const allValues = [];
    agendaMainFields.forEach((user) => {
        allValues.push(...Object.values(user))
    });

    expect(allValues.some((value) => !value)).toBe(false);
})