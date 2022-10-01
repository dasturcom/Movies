let elList = document.querySelector(".movies-list");
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");

let elMoviesList = movies.map(movie=> {
 
    return {
        title: movie.Title.toString(),
        fullTitle: movie.fulltitle,
        year: movie.movie_year,
        categories: movie.Categories.split(" | "),
        summary: movie.summary,
        imgUrl: movie.ImageURL,
        imdbbld: movie.imdb_id,
        rating: movie.imdb_rating,
        runTime: movie.runtime,
        language: movie.language,
        trailer: movie.ytid
    }

} );



for(i = 0; i < elMoviesList.length; i++ ) {
    if (i < 20) {
        let li = createElement("li", "liItem")
    
        let img = document.createElement("img");
        img.setAttribute("src", `https://picsum.photos/300/200` );
        img.alt = elMoviesList[i].name;
    
        let div = createElement("div", "div")

        let icon = createElement("i", "fa-solid fa-calendar-days")

        let title = createElement("h2", "h2", elMoviesList[i].title);
    
        let fullTitle = createElement("p", "text", elMoviesList[i].fullTitle);
    
        li.appendChild(img);
        li.appendChild(title)
        li.appendChild(div)
        div.appendChild(icon)
        div.appendChild(fullTitle);
    
        elList.appendChild(li);
    };

};

elForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    let inputValue = elInput.value;
    elMoviesList.forEach( movie => {
        let searchResult = [];
        let inputValue = elInput.value
        let searchQuery = new RegExp (inputValue, "gi");
    
    
        if (movie.title.match(searchQuery)) {
            searchResult.push(this.value)
            console.log(searchResult);
            console.log(movie);
        }
    });

    elForm.reset();
    elForm.focus()
    // console.log(inputValue);
})

