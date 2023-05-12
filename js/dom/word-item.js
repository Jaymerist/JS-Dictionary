/*
HTML Structure 

<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto definition">
        <div class="fw-bold">WORD HERE</div>
        <p>PARAGRAPH HERE</p>
    </div>
    <button class="m-2 btn btn-primary favourite-word">Add To Favourites</button>
</li>


Note: I'm sure you've read the PDF but there will be no marks given
for using innerHTML. 
*/

const createWordItem = (wordData) => {
    let definition = document.createElement("li")
    definition.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start")
    let definitionDiv = document.createElement("div")
    definitionDiv.classList.add("ms-2", "me-auto", "definition")

    let definitionWord = document.createElement("div")
    definitionWord.classList.add("fw-bold")
    definitionWord.textContent = wordData.word

    let wordMeaning = document.createElement("p")
    wordMeaning.textContent = wordData.meanings.at(0).definitions.at(0).definition

    let favBtn = document.createElement("button")
    favBtn.classList.add("m-2", "btn", "btn-primary", "favourite-word")
    favBtn.textContent = 'Add To Favourites'

    definition.append(definitionDiv)
    definitionDiv.append(definitionWord)
    definitionDiv.append(wordMeaning)
    definition.append(favBtn)

    return definition
}

export {createWordItem}