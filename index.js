document.addEventListener("DOMContentLoaded",()=>{
let title = document.querySelector('title')
let year = document.querySelector('year')
let description = document.querySelector('description')
let ul = document.querySelector("reviews")
let Movies = `https://ghibliapi.herokuapp.com/films`

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
 getMovies(callback,Movies)
// const printMovies = () =>{
    




// }

})