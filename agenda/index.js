const { parsedData } = require('./agendaStoreHandler')

const getAgendaNames = () => {
    const uniqNames = new Set(parsedData.map((user) => user.name));

    return [...uniqNames];
}

const getAgendaLanguages = () => {
    const uniqLanguages = new Set(parsedData.map((user) => user.language));

    return [...uniqLanguages];
}

const getAgendaIds = () => {
    const uniqLanguages = new Set(parsedData.map((user) => user.id));

    return [...uniqLanguages];
}

const getAgendaSize = () => {
    return parsedData.length;
}

const getAgendaMainFields = () => {
    return parsedData.map((user) => {
        const {id, name, bio} = user
        return {id, name, bio}
    })
}

const getUser = (id) => {
    return parsedData.find((user) => user.id === id);
}

module.exports = {
    getAgendaNames,
    getAgendaLanguages,
    getAgendaIds,
    getAgendaSize,
    getAgendaMainFields,
    getUser
}
