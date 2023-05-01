const hydrate = (string) => {
    const splitedString = string.split(' ');
    let glassesOfWater = 0;

    for (let index = 0; index < splitedString.length; index += 1) {
        const parsedSplitString = parseInt(splitedString[index]);

        if (parsedSplitString) {
            glassesOfWater += parsedSplitString;
        }
    }

    if (glassesOfWater === 1) return `${glassesOfWater} copo de água`;
    
    return `${glassesOfWater} copos de água`;
};

module.exports = hydrate;