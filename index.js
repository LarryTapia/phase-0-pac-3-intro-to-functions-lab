function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    const spy = "hello";
    console.log(spy.toUpperCase());
}

function logWhisper(string){
    const spy = "HELLO";
    console.log(spy.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    // if(string === string.toLowerCase()){
    //     return "I can't hear you!";
    // }else if (string === string.toUpperCase()){
    //     return "YES INDEED!";
    // }else if (string === `Let\'s have dinner together!`){
    //     return "I would love to!";
    // }

    switch (string){
        case string.toLowerCase():
            return "I can't hear you!";
            break;
        case string.toUpperCase():
            return "YES INDEED!";
            break;
        case `Let\'s have dinner together!`:
            return "I would love to!";
             break;
    }
}

console.log(sayHiToHeadphonedRoommate("helloooo"));
console.log(sayHiToHeadphonedRoommate("HELLOOOOO"));
console.log(sayHiToHeadphonedRoommate(`Let\'s have dinner together!`));
//Should not work because its neither all upper case, lower case, or Let\'s have dinner together!.
console.log(sayHiToHeadphonedRoommate("Hello"));
