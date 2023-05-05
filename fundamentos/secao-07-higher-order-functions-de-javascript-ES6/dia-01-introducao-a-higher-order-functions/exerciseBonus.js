const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  return Math.floor(Math.random() * (dragon.strength - 15)) + 15;
};

// console.log(dragonDamage());

// 2 Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));
    return maxDmg > minDmg ? maxDmg : minDmg;
};

// 3 Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageTurn = () => {
    const minDmg = mage.intelligence;
    const maxDmg = Math.floor(Math.random() * mage.intelligence * 2);
    const mageDmg = maxDmg > minDmg ? maxDmg : minDmg;

    if (mage.mana >= 15) {
        return { damageDealt: mageDmg, manaSpent: 15 }
    }
    return { damageDealt: 'Não possui mana suficiente', manaSpent: 0 }
};

// * PARTE 2
// 1 - Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.

// 2 - Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.

// 3 - Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.

const gameActions = {
    warriorTurn: (warriorDamage) => {
        const warriorDmg = warriorDamage();
        dragon.healthPoints -= warriorDmg;
        warrior.damage = warriorDmg;
    },
    mageTurn: (mageTurn) => {
        const mageDmg = mageTurn();
        dragon.healthPoints -= mageDmg.damageDealt;
        mage.damage = mageDmg.damageDealt;
        mage.mana -= mageDmg.manaSpent;
    },
    dragonTurn: (dragonDamage) => {
        const dragonDmg = dragonDamage();
        warrior.healthPoints -= dragonDmg;
        mage.healthPoints -= dragonDmg;
        dragon.damage = dragonDmg;
    },
    turnResults: () => battleMembers,
  };

  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageTurn);
  gameActions.dragonTurn(dragonDamage);
  console.log(gameActions.turnResults());