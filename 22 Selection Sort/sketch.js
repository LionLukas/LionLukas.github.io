// Selection Sorting
// Lukas Scrobe
// Nov/3/2023
// Implementation of the selection sort algorithm

// Globals
let values = [];
const NUM_VALUES = 100;

function setup() {
  noCanvas();
  populateArray();
  //sort(values);
  print(values);
  //selectionSort();
  sort(values);
  print(values);
}

function populateArray(){
  for(let i = 0; i< NUM_VALUES; i++){
    values.push(floor(random(1000)));
  }
}

/*
function selectionSort(){
  for(let index = 0; index < values.length - 1; index++){
    let minimum = values[index];
    let minimumLoc = index;
    for(let searchIndex = index+1; searchIndex < values.length; searchIndex++){
      let cur = values[searchIndex];
      if (cur < minimum){
        minimum = cur;
        minimumLoc = searchIndex;
      }
      let temp = values[index];
      values[index] = values[minimumLoc];
      values[minimumLoc] = temp;
    }
  }
} */