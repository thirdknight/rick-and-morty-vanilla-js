import './styles/index.scss'
import API from './js/api'
import Character from './js/character'
const api = new API
let currentCharacter = 4
const $loadNext = document.querySelector('#load-next')

$loadNext.addEventListener('click', async () => {
  const characterData = await api.getCharacter(++currentCharacter)
  new Character(characterData)
})

async function initApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId)
  console.log(characterData)

  new Character(characterData)
}

initApp(currentCharacter)
// rick.render()
// console.log(api.getCharacter(2))