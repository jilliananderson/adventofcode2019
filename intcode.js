const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,6,27,2,27,13,31,1,10,31,35,1,10,35,39,2,39,6,43,1,43,5,47,2,10,47,51,1,5,51,55,1,55,13,59,1,59,9,63,2,9,63,67,1,6,67,71,1,71,13,75,1,75,10,79,1,5,79,83,1,10,83,87,1,5,87,91,1,91,9,95,2,13,95,99,1,5,99,103,2,103,9,107,1,5,107,111,2,111,9,115,1,115,6,119,2,13,119,123,1,123,5,127,1,127,9,131,1,131,10,135,1,13,135,139,2,9,139,143,1,5,143,147,1,13,147,151,1,151,2,155,1,10,155,0,99,2,14,0,0]

const opcode1 = (a, b) => {
  return a + b;
}

const opcode2 = (a, b) => {
  return a * b;
}

const modifyArr = arr => {
  // replace position 1 with the value 12 and replace position 2 with the value 2
  arr.splice(1, 1, 12);
  arr.splice(2, 1, 2);
  return arr;
}

const intcode = initialArr => {
  let arr = modifyArr(initialArr);
  for (let i = 0; i <= arr.length; i += 4) {
    if (arr[i] === 99) {
      break;
    }
    else if (arr[i] === 1) {
      let added = opcode1(arr[arr[i + 1]], arr[arr[i + 2]]);
      arr.splice(arr[i + 3], 1, added);
    } else if (arr[i] === 2) {
      let multiplied = opcode2(arr[arr[i + 1]], arr[arr[i + 2]]);
      arr.splice(arr[i + 3], 1, multiplied); 
    }
  }

  return arr;
}

console.log(intcode(input));
