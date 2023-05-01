const techList = (array, nome) => {
    if (array.length === 0) return 'Vazio!'

    const sortedArray = array.sort();
    const technologyList = [];

    for (let index = 0; index < sortedArray.length; index += 1) {
        const object = {
            tech: sortedArray[index],
            name: nome
        }
        technologyList.push(object);
    }
    return technologyList;
};

module.exports = techList;