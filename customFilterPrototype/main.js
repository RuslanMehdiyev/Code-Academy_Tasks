const arr = [3, 12, 34, 4, 1, 0, 5];

Array.prototype.CustomFilter = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

arr.CustomFilter((e, index, array) => {
  if (e > 10) {
    console.log(e,index,array);
  }
});
