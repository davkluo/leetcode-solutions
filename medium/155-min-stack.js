var MinStack = function() {
  this.min = Infinity;
  this.items = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.items.push([val, this.min]);
  this.min = Math.min(this.min, val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const [_, prevMin] = this.items.pop();
  this.min = prevMin;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.items.at(-1)[0];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/