Number.prototype.add = function (number) {
  if (number === undefined) return this;
  return number === NaN ? NaN : this + +number;
};

Number.prototype.substract = function (number) {
  if (number === undefined) return this;
  return number === NaN ? NaN : this - +number;
};

Number.prototype.divide = function (number) {
  if (number === undefined) return this;
  return number === NaN ? NaN : this / +number;
};
Number.prototype.multiply = function (number) {
  if (number === undefined) return this;
  return number === NaN ? NaN : this * +number;
};
const res = (5).add(2).substract(3).divide(4).multiply(10);
console.log(res);
