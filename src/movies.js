// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (movies) => {
    const allDirectors = movies.map((movie)=> movie.director)
    return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectorsNoRepeated = (movies) => {
    const allDirectors = movies.map((movie)=> movie.director)
    const allDirectorsWithoutRepeated = allDirectors.filter((director, index)=>{
      return (allDirectors.indexOf(director) === index)
    })
    return allDirectorsWithoutRepeated
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    const dramaStevenMovies = movies.filter((movie)=>{
      return (movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))
    })
    const numberOfMovies = dramaStevenMovies.reduce((counter, movie)=> {
      return counter+1
      },0)
    return numberOfMovies
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if (movies.length === 0){
        return 0
    }else{
        const allRates = movies.map((movie) =>{
                if (!movie.rate || movie.rate === ''){
                    return 0
                }else{
                    return movie.rate
                }
            })
        const sumRates = allRates.reduce((counter, rate)=> {return counter + rate}, 0)
        return Number((sumRates / movies.length).toFixed(2)) 
    }
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
  const dramaMovies = movies.filter((movie)=> {
      return movie.genre.includes('Drama')
  })
  return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    const listOfMovies = movies.map((movie)=> movie)
    const alphabeticalOrder = listOfMovies.sort((a, b)=>{
      if (a.title > b.title) return 1
      if (a.title <= b.title) return -1
    })
    const cronologicalOrder = alphabeticalOrder.sort((a, b)=>{
      return a.year - b.year
    })
    return cronologicalOrder
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    const newMovies = movies.map((movie)=> movie)
    const alphabeticalOrder = newMovies.sort((a, b)=>{
     if (a.title > b.title) return 1
     if (a.title <= b.title) return -1
    })
    const only20movies = alphabeticalOrder.filter((movie)=>{
      return (alphabeticalOrder.indexOf(movie) < 20)
    })
    const moviesTitles = only20movies.map((movie)=> movie.title)
    return moviesTitles
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (movies) => {
    const copyOfMovies = [...movies]
    const resultMoviesList = copyOfMovies.map((movie)=>{
      let time = movie.duration
      if(movie.duration.includes('min') && movie.duration.includes('h')){
        let hoursToMinutes = (time.slice(0,time.indexOf('h')))*60
        let minutes = time.slice(time.indexOf(' ')+1, time.indexOf('m'))
        let sum = Number(minutes) + Number(hoursToMinutes)
        movie.duration = Number(sum)
        return movie
      }else if(movie.duration.includes('h')){
        let hours = Number((time.slice(0,time.indexOf('h'))))*60
        movie.duration = Number(hours)
        return movie
      }else{
        let min = time.slice(0, time.indexOf('m'))
        movie.duration = Number(min)
        return movie
      }
    })
    return resultMoviesList
  }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (movies) => {
    if (movies.length === 0){
        return null
    }else{
        return `The best year was <YEAR> with an average rate of <RATE>`
    }
}