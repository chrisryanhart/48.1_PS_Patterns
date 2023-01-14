// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    if(str2.length < str1.length) return false;

    // all characters have to appear in order from str1

    // loop through 

    let correctSequenceCount = 0;
    let subsequenceChars = str1.length;

    let i=0;
    while(i < str2.length){

        if(str2[i] === str1[correctSequenceCount]){
            correctSequenceCount ++;
        }

        if(correctSequenceCount === subsequenceChars) return true;

        i++;
    }

    return false;

}


module.exports = isSubsequence;