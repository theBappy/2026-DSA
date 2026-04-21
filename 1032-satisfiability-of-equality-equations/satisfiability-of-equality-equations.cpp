class Solution {
public:
    vector<int> parent;
    vector<int> rank;
    int find(int i) {
        if (parent[i] != i) {
            parent[i] = find(parent[i]);
        }
        return parent[i];
    }
    void Union(int x, int y) {
        int parent_x = find(x);
        int parent_y = find(y);
        if (parent_x != parent_y) {
            if (rank[parent_x] > rank[parent_y]) {
                parent[parent_y] = parent_x;
            } else if (rank[parent_x] < rank[parent_y]) {
                parent[parent_x] = parent_y;
            } else {
                parent[parent_x] = parent_y;
                rank[parent_y]++;
            }
        }
    }
    bool equationsPossible(vector<string>& equations) {
        parent.resize(26);
        rank.resize(26);
        for (int i = 0; i < 26; i++) {
            parent[i] = i;
            rank[i] = 1;
        }
        for (string &s : equations) {
            if (s[1] == '=') {
                Union(s[0] - 'a', s[3] - 'a');
            }
        }
        for (string &s : equations) {
            if (s[1] == '!') {
                if (find(s[0] - 'a') == find(s[3] - 'a'))
                    return false;
            }
        }
        return true;
    }
};