// link this file in your html!
import 'bootstrap/dist/css/bootstrap.css';
import {getWord} from './api/dictionary.js'
import {createWordItem} from './dom/word-item.js'


let favouriteWords = document.querySelector('.favourite-words')
let wordSearchForm = document.querySelector('#dictionary-search')
let searchedWordsList = document.querySelector('.recently-search-words')

wordSearchForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    addWord()
    wordSearchForm.reset()
})

//await object from getWord using async await
const addWord = async() =>{
    let wordSearch = document.querySelector('input[name=word]').value
    try{
        let wordObject = createWordItem(await getWord(wordSearch))
        searchedWordsList.append(wordObject)
    }
    catch
    {
        alert('word searched does not exist.')
    }    
}

searchedWordsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('favourite-word')) {
      const favBtn = event.target
      const favWord = favBtn.parentElement
      favouriteWords.append(favWord)
      favBtn.remove()
    }
  })
