// fetch from the dictionary api here!

const DATA_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const getWord = async(word) =>{
    let wordObjects = []
    const response = await fetch(`${DATA_URL}${word}`, {mehtod: "GET"})
    const data = await response.json()
    data.map((definition)=>{
        wordObjects.push(definition)
    })
    return (wordObjects.at(0))
  }

  export {getWord}
  