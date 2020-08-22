export default class Player {
  constructor(name, heroes = []) {
    this.name = name;
    this.heroes = heroes;
    this.hero = null;
  }
}
