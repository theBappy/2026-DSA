class Solution {
public:
    vector<int> parent, rank;
    int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]);
    }

    void unite(int i, int j) {
        int root_i = find(i), root_j = find(j);
        if (root_i != root_j) {
            if (rank[root_i] < rank[root_j]) parent[root_i] = root_j;
            else if (rank[root_i] > rank[root_j]) parent[root_j] = root_i;
            else { parent[root_i] = root_j; rank[root_j]++; }
        }
    }

    bool hasValidPath(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        for (int i = 0; i < m * n; ++i) {
            parent.push_back(i);
            rank.push_back(0);
        }

        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                int curr = r * n + c;
                if (c + 1 < n && (grid[r][c]==1||grid[r][c]==4||grid[r][c]==6) && 
                   (grid[r][c+1]==1||grid[r][c+1]==3||grid[r][c+1]==5))
                    unite(curr, curr + 1);
                if (r + 1 < m && (grid[r][c]==2||grid[r][c]==3||grid[r][c]==4) && 
                   (grid[r+1][c]==2||grid[r+1][c]==5||grid[r+1][c]==6))
                    unite(curr, curr + n);
            }
        }
        return find(0) == find(m * n - 1);
    }
};