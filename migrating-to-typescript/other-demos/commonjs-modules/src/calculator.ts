
class Calculator {
  operand1;
  operand2;

  constructor(operand1, operand2) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  add() {
    return this.operand1 + this.operand2;
  }
}

module.exports = Calculator;
