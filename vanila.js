import "./styles.css";

//difference of index method
var twoSum = function(nums, target){

  for(let i =0;i<nums.length;i++){
    const diff = target-nums[i];
    const diffIndex = nums.indexOf(diff);
    if(diffIndex !== -1 && diffIndex !==i){
      return [i, diffIndex];
      console.log(i,diffIndex);
    }
  }
}


//binary search Method.


let binaryM = (array, target, start=0,end=array.length-1) =>{
  let midpoint  = ~~(start +(end -start)/2)
    switch(true){
      case 1:
      array[start] === target;
      return
      array[end]
        case 2:
         end - start === 0;
        return false;
    }
}
