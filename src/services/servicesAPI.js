const API = "https://api.chucknorris.io/jokes";


const getData = (file) =>
  fetch(file)
    .then((data) => (data.ok ? data.json() : Promise.reject(data.statusText)))
    .catch((error) => console.log(error));

export const jokesCategories = () => fetch(API + "/categories").then(data => data.json())


export const handleJokesFrom = (searchingItem) => getData(API + searchingItem).then(data =>
     data.result
    ? [...data.result]
    : data)


export default jokesCategories
