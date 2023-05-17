import * as movieApi from './movieApi.js';
let cPage = 1;
let sLimit = 5;
let tPages;
let title

document.forms.myForm.addEventListener('submit', async function(){
    event.preventDefault();
    title = document.querySelector('#name').value;
    //console.log( title);
    let movieData = await movieApi.getMovieByTitle(title, cPage);
    console.log(movieData);
    tPages = Math.ceil(movieData.totalResults/10);
    
    let pag={
        totalPages:tPages,
        curentPage:cPage,
        sizeLimit:sLimit
    }

    console.log('Total pages = ' + pag);
    pagination(pag);
    drawMovie(movieData, false);

    document.querySelector('nav').hidden = false;

    //document.forms.myForm.reset();
})
    function drawMovie(movieData, isAdd) {
        if (!isAdd) {
            document.querySelector('.row').innerHTML = '';
        }
        for (const movie of movieData.Search) {
        //console.log(movie);
        document.querySelector('.row').insertAdjacentHTML('afterbegin',`
        <div class="col-4">
            <div class="card">
                <img src="${movie.Poster}" onerror="event.target.src='./0-700x700.jpg'" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Type} ${movie.Year}</p>
                </div>
            </div>
        </div>
    `);
    }
    }
    function pagination(pag) {
        document.querySelector('.pagination').innerHTML = ''; 
        if (pag.curentPage>1) {
            document.querySelector('.pagination').insertAdjacentHTML('beforeend',` <li class="page-item"><a class="page-link" href="#">Previous</a></li>`);
        }
        for (let i = pag.curentPage- pag.sizeLimit; i <= pag.curentPage + pag.sizeLimit; i++) {
            if (i>=1  && i<=pag.totalPages) {
                if (i==pag.curentPage) {
                    document.querySelector('.pagination').insertAdjacentHTML('beforeend',`<li class="page-item"><a class="page-link active" href="#">${i}</a></li>`);
                } else {
                    document.querySelector('.pagination').insertAdjacentHTML('beforeend',`<li class="page-item"><a class="page-link" href="#">${i}</a></li>`);
                }               
            }
        }
        if (pag.totalPages>pag.curentPage) {
            document.querySelector('.pagination').insertAdjacentHTML('beforeend',`  <li class="page-item"><a class="page-link" href="#">Next</a></li>`);
        }
    }
document.querySelector('nav').addEventListener('click', async function(){
    if (event.target.innerText=="Next") {
        cPage++;
    } else if (event.target.innerText=="Previous"){
        cPage--;
    }else{
        cPage = parseInt(event.target.innerText);
    }
    let movieData = await movieApi.getMovieByTitle(title, cPage);
    
    let pag={
        totalPages:tPages,
        curentPage:cPage,
        sizeLimit:sLimit
    }
    console.log(pag);
    pagination(pag);
    drawMovie(movieData, false);
})
