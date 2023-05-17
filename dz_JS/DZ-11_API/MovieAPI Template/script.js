import * as movieApi from './movieApi.js'
let tPages;
let sLimit = 3;
let cPage = 1;
let title;
document.forms.myForm.addEventListener('submit', async function() {
    event.preventDefault();
    title = document.querySelector('#name').value;
    let movieData = await movieApi.getMovieByTitle(title, cPage);

    tPages = Math.ceil(movieData.totalResults / 10);

    let pag = {
        totalPages: tPages,
        curentPage: cPage,
        sizeLimit: sLimit
    }
    console.log("Pag FORM => ");
    console.log(pag);
    pagination(pag);
    drawMovie(movieData, true);
    document.querySelector('nav').hidden = false;
    document.forms.myForm.reset();
})



document.querySelector('.myMovie').addEventListener('click', async function() {
    // console.log(event.target);
    if (event.target.tagName == 'I') {
        //  console.log("Hello");
        console.log(event.target.dataset.id);
        let id = event.target.dataset.id;



        let json = await movieApi.getMovieById(id);
        console.log(json);

        document.querySelector('.myImg').src = json.Poster;
        document.querySelector('.list').innerHTML =
            `
          <h1 class="text-white">Title : ${json.Title}</h1>
          <h1>Year : ${json.Year}</h1>
          <h1>Actors : ${json.Actors}</h1>
          <h2>Writer : ${json.Writer}</h2>
          <h2>Plot : ${json.Plot}</h2>
          <h2>Awards : ${json.Awards}</h2>
          <h3>DVD : ${json.DVD}</h3>
          <h3>Type : ${json.Type}</h3>
          <h2>imdbRating : ${json.imdbRating}</h2>
          <h2>Runtime : ${json.Runtime}</h2>
          <h3>Released : ${json.Released}</h3>
          `;


        document.querySelector(".infoD").hidden = false;
        document.querySelector(".listD").hidden = true;
    }
})

document.querySelector('.back').addEventListener('click', function() {
    document.querySelector(".infoD").hidden = true;
    document.querySelector(".listD").hidden = false;
})


function drawMovie(movieData, isAdd) {
    if (!isAdd) {
        document.querySelector('.myMovie').innerHTML = "";
    }
    for (const movie of movieData.Search) {

        document.querySelector('.myMovie').insertAdjacentHTML('afterbegin', `
        <div class="col-3">
        <div class="product-image-wrapper">
            <div class="single-products bg-info border border-danger border-4 rounded-5 mt-5">
                <div class="productinfo text-center border border-danger rounded-5 mt-5">
                    <img src="${movie.Poster}" onerror="event.target.src='./images.png'" alt="" />
                    <h2>${movie.Title}</h2>
                    <h3>${movie.Year} ${movie.Type}</h3>
                </div>
                <div  class="product-overlay rounded-5">
                    <div class="overlay-content rounded-5">
                        <h2 class="details text-center">${movie.Title}</h2>
                        </div>
                </div>
            </div>
            <div class="choose">
            <ul class="nav nav-pills nav-justified d-flex justify-content-center fs-5">
                <li><i class="btn btn-danger btn-lg fs-4" data-id="${movie.imdbID}">INFO<p hidden>${movie.Title}</p></i></li>
                
                </ul>
        </div>
        </div>
    </div>
    `);
    }
}

function pagination(pag) {
    document.querySelector('.pagination').innerHTML = '';


    if (pag.curentPage > 1) {
        document.querySelector('.pagination').insertAdjacentHTML('beforeend', `
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    `);

    }
    console.log(pag.curentPage + pag.sizeLimit);
    for (let i = pag.curentPage - pag.sizeLimit; i <= pag.curentPage + pag.sizeLimit; i++) {
        if (i >= 1 && i <= pag.totalPages) {

            if (i == pag.curentPage) {
                document.querySelector('.pagination').insertAdjacentHTML('beforeend', `
            <li class="page-item"><a class="page-link active" href="#">${i}</a></li>
            `);
            } else {
                document.querySelector('.pagination').insertAdjacentHTML('beforeend', `
            <li class="page-item"><a class="page-link" href="#">${i}</a></li>
            `);
            }
        }
    }

    if (pag.totalPages > pag.curentPage) {
        document.querySelector('.pagination').insertAdjacentHTML('beforeend', `
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
    `);

    }

}
document.querySelector('nav').addEventListener('click', async function() {
    if (event.target.innerText == "Next") {
        cPage++;
    } else if (event.target.innerText == "Previous") {
        cPage--;
    } else {
        cPage = parseInt(event.target.innerText);
    }

    let movieData = await movieApi.getMovieByTitle(title, cPage);

    let pag = {
        totalPages: tPages,
        curentPage: cPage,
        sizeLimit: sLimit
    }
    pagination(pag);
    drawMovie(movieData, false);

})

