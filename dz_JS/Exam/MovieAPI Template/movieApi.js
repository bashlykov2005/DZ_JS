//https://omdbapi.com/?s=Batman&apikey=5b9b7798


const apiKey = "5b9b7798";
const apiUrl = "https://omdbapi.com";


export async function getMovieByTitle(title, page = 1) {
    let response = await fetch(`${apiUrl}?s=${title}&apikey=${apiKey}&page=${page}`);

    let json = await response.json();
    return json;

}

export async function getMovieById(id) {
    let response = await fetch(`${apiUrl}?i=${id}&apikey=${apiKey}`);

    let json = await response.json();
    return json;

}