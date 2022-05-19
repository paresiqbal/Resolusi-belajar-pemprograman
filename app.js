const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    console.log(err);
  }
});

function getMovies(keyword) {
  return fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=fad6153&s=" + keyword
  )
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// Event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMoviesDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMoviesDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fad6153" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetails(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-4 my-5">
            <div class="card" style="width: 18rem">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
                data-bs-target="#movie-detail-modal" data-imdbid="${m.imdbID}">See Detail</a>
              </div>
            </div>
            </div>`;
}

function showMovieDetails(m) {
  console.log(m);
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title}${m.Year}</h4></li>
                  <li class="list-group-item"><strong>${m.Director}</strong></li>
                  <li class="list-group-item"><strong>${m.Actors}</strong><</li>
                  <li class="list-group-item"><strong>${m.Writer}</strong><</li>
                  <li class="list-group-item"><strong>${m.Plot}</strong><</li>
                </ul>
              </div>
            </div>
          </div>`;
}
