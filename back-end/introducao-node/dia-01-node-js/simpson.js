const fs = require('fs').promises;

async function readSimpsons() {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsObj = JSON.parse(simpsons);
    
    simpsonsObj.forEach(({ id, name }) => console.log(`${id} - ${name}`));

  } catch (err) {
    console.error(`Não foi possível ler o arquivo! Erro: ${err}`);
  }
}

async function findSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find(simpson => simpson.id === id);

  if (!chosenSimpson) throw new Error('id não encontrado');

  return chosenSimpson;
}

async function removeSimpsonById() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const filteredSimpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
}

async function createNewSimpsonFile() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const filteredSimpsons = simpsons.filter((simpson) => Number(simpson.id) >= 1 && Number(simpson.id) <=4);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredSimpsons));
}

async function addNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const nelson = {
    id: '8',
    name: 'Nelson Muntz',
  };

  const newArray = [...simpsons, nelson];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const indexNelson = simpsons.findIndex(simpson => simpson.id === '8');

  simpsons[indexNelson] = {
    id: '8',
    name: 'Maggie Simpson',
  };

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
}

async function main() {
  replaceNelson();
}

main();