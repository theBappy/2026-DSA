class Solution {
public:
    bool containsCycle(vector<vector<char>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        vector<int> parent(m * n);
        vector<int> rank(m * n, 0);

        // initialize parent array
        iota(parent.begin(), parent.end(), 0);

        // lambda for path compression
        auto find = [&](auto& self, int i) -> int {
            if (parent[i] == i)
                return i;
            return parent[i] = self(self, parent[i]);
        };

        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                // checking right and down
                int neighbors[2][2] = {{r, c + 1}, {r + 1, c}};
                for (auto& neighbor : neighbors) {
                    int nr = neighbor[0], nc = neighbor[1];

                    if (nr < m && nc < n && grid[r][c] == grid[nr][nc]) {
                        int u = r * n + c;
                        int v = nr * n + nc;

                        int rootU = find(find, u);
                        int rootV = find(find, v);

                        if (rootU == rootV)
                            return true;

                        // union by rank
                        if (rank[rootU] > rank[rootV])
                            parent[rootV] = rootU;
                        else if (rank[rootU] < rank[rootV])
                            parent[rootU] = rootV;
                        else {
                            parent[rootU] = rootV;
                            rank[rootV]++;
                        }
                    }
                }
            }
        }
        return false;
    }
};