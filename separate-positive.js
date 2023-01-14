// add whatever parameters you deem necessary
function separatePositive(arr) {

    let lastNegIdx = arr.length - 1;

    for(let i = arr.length -1; i >= 0; i--){
        if(arr[i] < 0){
            // swap neg & pos
            let temp = arr[i];
            arr[i] = arr[lastNegIdx];
            arr[lastNegIdx] = temp;
            
            // if idx is less than last negIdx, update
            if(i < lastNegIdx){
                lastNegIdx --;
            }
        }
    }

    return arr;
}

module.exports = separatePositive;