var twoEditWords = function (queries, dictionary) {
    const res = [];
    for (const query of queries) {
        for (const word of dictionary) {
            let hamming_dist = 0;
            for (let i = 0; i < query.length; i++) {
                if (query[i] !== word[i]) {
                    hamming_dist++;
                }
                if(hamming_dist > 2){
                    break;
                }
            }
            if (hamming_dist <= 2) {
                res.push(query);
                break;
            }
        }
    }
    return res;
};