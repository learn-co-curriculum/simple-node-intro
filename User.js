class User{
  constructor(name){
    this.name = name;
  }
  greeting(){
    console.log(`Hello, I'm ${this.name}`)
  }
}

module.exports = User;