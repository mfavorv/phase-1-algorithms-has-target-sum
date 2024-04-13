function hasTargetSum(array, target) {
  // Write your algorithm here
  let results = [];

  array.forEach((num , index)=> {
  
    for(i = index + 1; i < array.length; i++ ){
    let sum = num + array[i];
    results.push(sum);

    }
  });

 for(result of results){
  if(result === target){
    return true;
  }
} 
{  return false };

 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Check if any two numbers in the array add up to the target number.
  If there are two numbers that do so, return true, if not return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
