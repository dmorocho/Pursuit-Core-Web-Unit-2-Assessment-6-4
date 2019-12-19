document.addEventListener("DOMContentLoaded",()=>{
let title = document.querySelector('#title')
let year = document.querySelector('#year')
let description = document.querySelector('#description')
let ul = document.querySelector('#reviews')
let select = document.querySelector('select')
let form =  document.querySelector('form')
// let Movies = `https://ghibliapi.herokuapp.com/films`

//get data 
const getMovies = async (callback,url)  =>{
    form.style.display = "none"
    try{
        let res = await axios.get(url)
        let data = res.data
 
        callback(data)
    } catch(err){
        console.log(err)
    }
       
 }

const printMovies = (movies) =>{  
movies.forEach(movie => {
   let option = document.createElement('option')
    option.innerText = movie.title
    option.value = movie.id
    select.appendChild(option)
});
}

getMovies(printMovies,'https://ghibliapi.herokuapp.com/films')

select.addEventListener('change', (event) => {
    ul.innerHTML = ""
   
    getMovies(printAbout,`https://ghibliapi.herokuapp.com/films/${event.target.value}`)
    
})

const printAbout = (movie) =>{
    form.style.display = "block"
    title.innerText = movie.title
    year.innerText = movie.release_date
    description.innerText = movie.description
}

form.addEventListener('submit',(event) =>{
    event.preventDefault()
    let li = document.createElement('li')
    li.innerText = `${title.innerText}: ${userInput.value}`
    ul.appendChild(li)
    userInput.value =""

})

})