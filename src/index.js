//for each movie, create an image and add it to the nav element

fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(movies => {
    //console.log(movies)
    movies.forEach(movie => {
        const image = document.createElement("img")
        image.src = movie.image;
        document.querySelector("#movie-list").append(image)
        console.log(image)
    })
})