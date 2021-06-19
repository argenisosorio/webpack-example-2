export default class Person {
  constructor (name) {
    this.name = name
  }
  welcome () {
    alert(`Hi! i am ${this.name}`)
  }
}