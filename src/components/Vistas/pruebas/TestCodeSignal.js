class TestCodegSignal {
  constructor() {
    this.containerValue = [];
  }

  /**
   * Adds the specified value to the container
   *
   * @param {number} value
   */
  add(value) {
    console.log(this.containerValue);
    this.containerValue.push(value);
    // TODO: implement this method
    console.log(this.containerValue);
  }

  /**
   * Attempts to delete one item of the specified value from the container
   *
   * @param {number} value
   * @return {boolean} true, if the value has been deleted, or
   *                   false, otherwise.
   */
  delete(value) {
    let esta = false;
    for (let i = 0; i < this.containerValue.length; i++) {
      if (this.containerValue[i] === value) {
        esta = true;
      }
      if (esta) {
        this.containerValue[i] = this.containerValue[i + 1];
      }
    }
    if (esta) {
      this.containerValue.pop();
      return true;
    } else {
      return false;
    }
  }

  /**
   * Finds the container's median integer value, which is
   * the middle integer when the all integers are sorted in order.
   * If the sorted array has an even length,
   * the leftmost integer between the two middle
   * integers should be considered as the median.
   *
   * @return {number} the median if the array is not empty, or
   * @throws {Error} a runtime exception, otherwise.
   */
  getMedian() {
    // TODO: implement this method
    return this.containerValue[Math.round(this.containerValue.length / 2) - 1];
  }
  getData() {
    return this.containerValue;
  }
}

export default TestCodegSignal;
