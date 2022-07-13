
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix) {
    matrix.reduce((gradeSumm, value, index) => {
      (index === 0 || index % 2 === 0) ? value : value.reverse();
      return gradeSumm + value;
    }, []);
    return matrix.flat();
  } else {
    return [];
  }
};
