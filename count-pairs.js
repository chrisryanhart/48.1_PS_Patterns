// add whatever parameters you deem necessary
function countPairs(arr,target) {
    // find num of pairs that sums to the target

    arr.sort((a,b) => a -b);

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let pairCount = 0;

    while(leftIdx < rightIdx){
        let sum = arr[leftIdx] + arr[rightIdx];

        if(sum === target) {
            leftIdx ++;
            rightIdx --;
            pairCount ++;
        }else if(sum > target){
            rightIdx --;
        }else{
            leftIdx ++;
        }
    }

    return pairCount;
}

module.exports = countPairs;