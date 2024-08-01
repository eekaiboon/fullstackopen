import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
        .catch(error => {
            console.log(error.response.data.error)
        })
}

const create = (newPerson, setErrorMessage) => {
    return axios
        .post(baseUrl, newPerson)
        .then(response => response.data)
        .catch(error => {
            console.log(error.response.data.error)
            setErrorMessage(`${error.response.data.error}`)
        })
}

const deletePerson = deletePerson => {
    return axios
        .delete(`${baseUrl}/${deletePerson.id}`)
        .then(response => response.data)
        .catch(error => {
            console.log(error.response.data.error)
        })
}

const update = updatePerson => {
    return axios
        .put(`${baseUrl}/${updatePerson.id}`, updatePerson)
        .then(response => response.data)
        .catch(error => {
            console.log(error.response.data.error)
        })
}

export default { getAll, create, deletePerson, update }