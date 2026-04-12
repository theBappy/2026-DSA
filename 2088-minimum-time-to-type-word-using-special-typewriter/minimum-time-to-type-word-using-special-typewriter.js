
var minTimeToType = function(word) {
    let answer = 0;
    let pointer = 'a';

    for (let ch of word) {
        let clockwise = Math.abs(ch.charCodeAt(0) - pointer.charCodeAt(0));
        let counterclockwise = 26 - clockwise;
        answer += Math.min(clockwise, counterclockwise) + 1;
        pointer = ch;
    }

    return answer;
};