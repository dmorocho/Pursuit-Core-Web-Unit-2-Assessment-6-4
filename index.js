document.addEventListener("DOMContentLoaded",()=>{
let title = document.querySelector('title')
let year = document.querySelector('year')
let description = document.querySelector('description')
let ul = document.querySelector('reviews')
let select = document.querySelector('select')
// let Movies = `https://ghibliapi.herokuapp.com/films`

const getMovies = async (callback,url)  =>{
    try{
        let res = await axios.get(url)
        let data = res.data
        debugger
        callback(data)
    } catch(err){
        console.log(err)
    }
       
 }
 

const printMovies = (movies) =>{
    
movies.forEach(movie => {
   let option = document.createElement('option')
    option.innerText = movie.title
    select.appendChild(option)

    
});
}

getMovies(printMovies,'https://ghibliapi.herokuapp.com/films')

})