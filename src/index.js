//for each movie, create an image and add it to the nav element

fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(movies => {
    //console.log(movies)
    movies.forEach(movie => {
        const image = document.createElement("img")
        image.src = movie.image;
       
        //console.log(image)

        image.addEventListener("click", () => {
            document.querySelector("#detail-image").src = movie.image;
            document.querySelector("#title").textContent = movie.title;
            document.querySelector("#year-released").textContent = movie.release_year;
            document.querySelector("#description").textContent = movie.description;
            document.querySelector("#watched").textContent = movie.watched;
            document.querySelector("#amount").textContent = movie.blood_amount
            
            

        })
        
        document.querySelector("#movie-list").append(image)

    })

    document.querySelector("#detail-image").src = movies[0].image;
    document.querySelector("#title").textContent = movies[0].title;
    document.querySelector("#year-released").textContent = movies[0].release_year;
    document.querySelector("#description").textContent = movies[0].description;



})


// when page loads, first movie should appear