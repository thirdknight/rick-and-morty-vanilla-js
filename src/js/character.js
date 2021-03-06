export default class Character {
  constructor({ name, image, gender, species, status }) {
    this.name = name
    this.image = image
    this.gender = gender
    this.species = species
    this.status = status
    this.$characterImageContainer = document.querySelector('#character-image-container')
    this.$characterNameContainer = document.querySelector('#character-name-container')
    this.$characterDescriptionContainer = document.querySelector('#character-description-container')
    this.$characterNamePlacceholderContainer = document.querySelector('#character-name-placeholder')
    this.render()
  }
  buildImage() {
    return(
      `
        <img class="character-image" src=${this.image} alt=${this.name}>
      `
    )
  }
  buildName() {
    return(
      `
      <div class="character-name">
        <h2>${this.name}</h2>  
      </div>
      `
    )
  }
  buildDescription() {
    // console.log($characterDescriptionContainer)
    return(
      `
      <div class="character-labels">
        <h3 class="character-label">Gender: ${this.gender}</h3>
        <h3 class="character-label"> Species: ${this.species}</h3>
        <h3 class="character-label">Stauts: ${this.status}</h3>
      </div>
      `
    )
  }
  buildNamePlaceholder() {
    return(
      `
        ${this.name}
      `
    )
  }
  render() {
     this.$characterImageContainer.innerHTML = this.buildImage()
     this.$characterNameContainer.innerHTML = this.buildName()
     this.$characterDescriptionContainer.innerHTML = this.buildDescription()
     this.$characterNamePlacceholderContainer.innerHTML = this.buildNamePlaceholder()
  }
}