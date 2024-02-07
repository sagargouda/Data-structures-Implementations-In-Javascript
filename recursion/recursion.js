// Linear traversal of array

function printArray(a, size) {
  if (size == 0) {
    return;
  }
  console.log(a);
  printArray(a + 1, size - 1);
}

printArray(6, 6);
