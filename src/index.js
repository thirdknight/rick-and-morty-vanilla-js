import API from './js/api.js'
import Character from './js/character.js'
import './index.scss'
const api = new API()
let currentCaracter = 4
const $loadNext = document.querySelector('#load-next')

$loadNext.addEventListener('click', async () => {
  const characterData = await api.getCharacter(++currentCaracter)
  new Character(characterData)
})

async function initApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId)
  console.log(characterData)
  new Character(characterData)
}

initApp(currentCaracter)