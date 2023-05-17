//https://omdbapi.com/?s=Tarzan&apikey=bd91a38a
// // https://omdbapi.com/?s=Tarzan&apikey=5b9b7798

const apiKey = "bd91a38a";
const apiUrl = "https://omdbapi.com/";

export async function getMovieByTitle(title, page=1) {
    //console.log("farid");
    let response = await fetch (`${apiUrl}?s=${title}&apikey=${apiKey}&page=${page}`);
    let json = await response.json();
    return json;
}