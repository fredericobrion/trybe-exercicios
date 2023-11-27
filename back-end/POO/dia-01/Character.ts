abstract class Character {
  abstract talk(): void;

  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  talk() {
    console.log('Hello!');
  }

  specialMove(): void {
    console.log('Haduken!');
  }
}

class LongRangeCharacter extends Character {
  talk() {
    console.log('Hi!');
  }

  specialMove(): void {
    console.log('Kamehamehaaaa!');
  }
}