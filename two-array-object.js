// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let resultObj = {};

    let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;

    for(let i=0; i<maxLength; i++){
        if(arr1[i]===undefined){
            return resultObj;
        }else if(arr2[i]===undefined){
            resultObj[arr1[i]] = null;
        }else{
            resultObj[arr1[i]] = arr2[i];
        }
    }
    return resultObj;
}

module.exports = twoArrayObject;