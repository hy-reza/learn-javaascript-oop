class Creature {
  #maker = "God"
  constructor(creatureName){
    this.life = true;
    this.maker = this.#maker;
    this.creatureName = creatureName
    this.activity = this.#activity()
  }

  #activity(){
    return `Eat Sleep Pray to ${this.#maker} repeat`
  }
}


class Human extends Creature{
  constructor(name, gender, age, creatureName){
    super(creatureName),
    this.name = name
    this.gender = gender
    this.age = age
  }
}

const handy = new Human('Handy', 'male', 21, 'Human')
console.info(handy)