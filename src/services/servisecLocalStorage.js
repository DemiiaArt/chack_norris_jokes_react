// export default function getFromLocalStorage(key, defaultValue = []) {
//   let storage = localStorage.getItem(key);
//   storage = storage ? JSON.parse(storage) : defaultValue;

//   return storage;
// }
// export function addToLocalStorage(joke) {
//   const likedJokes = getFromLocalStorage("likedJokes");
//   likedJokes.push(joke);
//   localStorage.setItem("likedJokes", JSON.stringify(likedJokes));
// }
// export function removeFromLocalStorage(joke) {
//   let storageJokes = getFromLocalStorage("likedJokes");
//   let storageJokeIndex = storageJokes.findIndex((item) => item.id === joke.id);
//   storageJokes.splice(storageJokeIndex, 1);
//   localStorage.setItem("likedJokes", JSON.stringify(storageJokes));
// }
