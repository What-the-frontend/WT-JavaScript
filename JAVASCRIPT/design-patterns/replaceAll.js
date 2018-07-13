//input is string arguments
function replaceAll(input, substr, newSubstr) {
  return input.split(substr).join(newSubstr);
}

// input.split(substr) will return Array.
// and Array.prototype.join() method makes all elemetns join with newSubstr.
// so this function do replaceAll's job.