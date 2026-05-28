class Solution {
public:
    struct trieNode {
        int idx;
        // Optimization: Use a compact representation instead of a 208-byte raw pointer array.
        // -1 represents a null/empty path.
        int children[26];

        trieNode(int i) {
            idx = i;
            for(int j = 0; j < 26; j++) {
                children[j] = -1;
            }
        }
    };

    // Storing nodes in a flat vector reduces pointer overhead and avoids frequent 'new' allocations
    vector<trieNode> triePool;

    void insertTrie(int rootId, int wordIdx, const vector<string>& wordsContainer) {
        const string& word = wordsContainer[wordIdx];
        int n = word.size();
        int currId = rootId;

        for(int j = n - 1; j >= 0; j--) {
            int ch_idx = word[j] - 'a';

            if(triePool[currId].children[ch_idx] == -1) {
                // Dynamically allocate a new node ID in our pool
                triePool.push_back(trieNode(wordIdx));
                triePool[currId].children[ch_idx] = triePool.size() - 1;
            }
            currId = triePool[currId].children[ch_idx];
            
            // Check tiebreaker conditions
            int currentBestIdx = triePool[currId].idx;
            if (wordsContainer[currentBestIdx].size() > n) {
                triePool[currId].idx = wordIdx;
            } else if (wordsContainer[currentBestIdx].size() == n) {
                if (wordIdx < currentBestIdx) {
                    triePool[currId].idx = wordIdx;
                }
            }
        }
    }

    int search(int rootId, const string& word) {
        int currId = rootId;
        int result_idx = triePool[currId].idx;
        int n = word.size();

        for(int i = n - 1; i >= 0; i--) {
            int ch_idx = word[i] - 'a';
            if(triePool[currId].children[ch_idx] == -1) {
                return result_idx;
            }
            currId = triePool[currId].children[ch_idx];
            result_idx = triePool[currId].idx;
        }
        return result_idx;
    }

    vector<int> stringIndices(vector<string>& wordsContainer, vector<string>& wordsQuery) {
        triePool.clear();
        
        int m = wordsContainer.size();
        int n = wordsQuery.size();
        vector<int> result(n);

        // Pre-reserve an estimated capacity for the vector pool to reduce reallocation jumps
        triePool.reserve(200005); 
        
        // Push root node
        triePool.push_back(trieNode(0));
        int rootId = 0;

        for(int i = 0 ; i < m; i++) {
            int rootBestIdx = triePool[rootId].idx;
            if(wordsContainer[rootBestIdx].size() > wordsContainer[i].size()) {
                triePool[rootId].idx = i;
            } else if (wordsContainer[rootBestIdx].size() == wordsContainer[i].size()) {
                if (i < rootBestIdx) {
                    triePool[rootId].idx = i;
                }
            }
            insertTrie(rootId, i, wordsContainer);
        }

        for(int i = 0; i < n; i++) {
            result[i] = search(rootId, wordsQuery[i]);
        }

        return result;
    }
};