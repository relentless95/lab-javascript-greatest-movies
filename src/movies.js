// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((currentElement) => currentElement.director)
}

// console.log(c)

// function getAllDirectors(moviesArray) {
//     return moviesArray.map((currentElement) => currentElement.director)
//     .filter((director, index, array)=>array.indexOf(director)=== index);
// }

// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie)=>movie.director =="Steven Spielberg" && movie.genre.includes('Drama')).length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
    if (moviesArray.length ==0){
        return 0
    }
    let total = moviesArray.map((movie)=>movie.score).filter((array)=> typeof array === "number").reduce((acc, curr) => acc+ curr, 0)
    // let theLength = moviesArray.filter((array)=>typeof array.score ==="number").length
    return  Math.round((total/moviesArray.length)* 100)/100
  }
  
  console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movies)=>movies.genre.includes("Drama"))
    if (dramaMovies.length === 0){
        return 0
    }
        
    
    let total =  dramaMovies.filter((movies)=> typeof movies.score ==="number").map((item)=>item.score).reduce((acc, cur)=>acc + cur,0)
    let output = Math.round((total/dramaMovies.length)*100)/100

    return output
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {


    let sortedYears = moviesArray.sort((movie1, movie2) => 
        movie1.year - movie2.year ||
        movie1.title.localeCompare(movie2.title),
    
    )
    function copyOfArr(moviesArray) { // using a function to maka a copy of the array
        return moviesArray.slice()
    }
    let copiedArray = copyOfArr(sortedYears)

    return copiedArray

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphabeticallysorted =  moviesArray.sort((a,b)=> a.title.localeCompare(b.title))
    let onlytitle = alphabeticallysorted.map(movObject => movObject.title)
    
      let copyExpression= function(movies){
        if(movies.length > 20){
        return movies.slice(0,20);
      } else {
        return movies.slice();
      }
  
    }
    return copyExpression(onlytitle)
   
  }
  
  console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
