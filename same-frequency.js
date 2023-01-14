// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {

    let str1 = String(int1);
    let str2 = String(int2);

    if(str1.length !== str2.length) return false;

    let str1CharFreq = {};
    let str2CharFreq = {};

    for(let char of str1){
        if(str1CharFreq[char]){
            str1CharFreq[char] ++;
        }else{
            str1CharFreq[char] = 1;
        }

    }
    for(let char of str2){
        if(str2CharFreq[char]){
            str2CharFreq[char] ++;
        }else{
            str2CharFreq[char] = 1;
        }
    }

    for(const [key,value] of Object.entries(str1CharFreq)){
        if(str2CharFreq[key] !== value) return false;
    }

    for(const [key,value] of Object.entries(str2CharFreq)){
        if(str1CharFreq[key] !== value) return false;
    }

    return true;

}

module.exports = sameFrequency;