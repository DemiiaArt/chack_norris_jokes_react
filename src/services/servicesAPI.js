const API = "https://api.chucknorris.io/jokes";

// const URLS = {
//   random: "/random",
//   categories: "/random?category=",
//   search: "/search?query=",
// };

// const getData = (file) =>
//   fetch(file)
//     .then((data) => (data.ok ? data.json() : Promise.reject(data.statusText)))
//     .catch((error) => console.log(error));

export const jokesCategories = () => fetch(API + "/categories").then(data => data.json())


export const handleJokesFrom = (searchingItem) => fetch(API + searchingItem).then(data => data.json())


export default jokesCategories
