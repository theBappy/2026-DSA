class Solution {
public:
    vector<string> twoEditWords(vector<string>& queries,
                                vector<string>& dictionary) {
        vector<string> res;
        for (string query : queries) {
            for (string word : dictionary) {
                int hamming_dist = 0;
                for (int i = 0; i < query.size(); i++) {
                    if (query[i] != word[i]) {
                        hamming_dist++;
                    }
                    if (hamming_dist > 2) {
                        break;
                    }
                }
                if (hamming_dist <= 2) {
                    res.push_back(query);
                    break;
                }
            }
        }
        return res;
    }
};