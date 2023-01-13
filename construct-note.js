// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if(msg.length === 0) return true;
    if(letters.length === 0) return false;

    let msgMap = new Map();
    let charMap = new Map();

    for(let i=0; i<msg.length; i++){
        if(msgMap.has(msg[i])){
            const val = msgMap.get(msg[i]) + 1;
            msgMap.set(msg[i], val)
        }else{
            msgMap.set(msg[i], 1);
        }
    }

    for(let i=0; i<letters.length; i++){
        // could subtract the letter from the msg map
        if(charMap.has(letters[i])){
            const val = charMap.get(letters[i]) + 1;
            charMap.set(letters[i], val)

        }else{
            charMap.set(letters[i], 1);
        }
    }

    // if(msgMap.size > charMap.size) return false;

    for(const [key,val] of msgMap.entries()){
        if(!charMap.has(key)) return false;

        if(charMap.get(key) < msgMap.get(key)) return false;
    }

    return true;

}


module.exports = constructNote;