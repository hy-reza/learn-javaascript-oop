class Animal {
  constructor(name){
    this.name = name
    this.life = true
  }

  eat(){
    return 0
  }

  sleep(){
    return 0
  }
}

class Mamal extends Animal {
  constructor(name, legs, habitat){
    super(name)
    this.legs = legs
    this.habitat = habitat
  }
}

class Raptile extends Animal {
  constructor(name, venom, habitat){
    super(name)
    this.venom = venom
    this.habitat = habitat
  }

}


const cobra = new Raptile("Cobra", true, "jungle")
console.info(cobra)
const cow = new Mamal('Cow', 4, 'farm')
console.info(cow)