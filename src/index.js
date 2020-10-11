
// You should implement your task here.

module.exports = function towelSort (matrix = []) {


    matrix.forEach((item, index) => {
        if (index % 2) {
            console.log(item.reverse());
        }
    }) 

    return [].concat(...matrix)
}
