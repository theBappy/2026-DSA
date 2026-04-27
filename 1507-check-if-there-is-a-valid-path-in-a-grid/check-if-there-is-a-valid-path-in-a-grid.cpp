class Solution {
public:
    bool hasValidPath(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();

        vector<vector<vector<int>>> dirs = {{},
                                            {{0, -1}, {0, 1}},
                                            {{-1, 0}, {1, 0}},
                                            {{0, -1}, {1, 0}},
                                            {{0, 1}, {1, 0}},
                                            {{0, -1}, {-1, 0}},
                                            {{0, 1}, {-1, 0}}};

        queue<pair<int, int>> q;
        vector<vector<bool>> visited(m, vector<bool>(n, false));

        q.push({0, 0});
        visited[0][0] = true;

        while (!q.empty()) {
            auto [r, c] = q.front();
            q.pop();

            if (r == m - 1 && c == n - 1)
                return true;

            for (auto& dir : dirs[grid[r][c]]) {
                int nr = r + dir[0];
                int nc = c + dir[1];

                if (nr < 0 || nc < 0 || nr >= m || nc >= n || visited[nr][nc])
                    continue;

                for (auto& reverse_path : dirs[grid[nr][nc]]) {
                    if (nr + reverse_path[0] == r &&
                        nc + reverse_path[1] == c) {
                        visited[nr][nc] = true;
                        q.push({nr, nc});
                    }
                }
            }
        }

        return false;
    }
};