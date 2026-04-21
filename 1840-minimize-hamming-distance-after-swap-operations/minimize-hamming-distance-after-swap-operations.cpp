class Solution {
public:
    vector<int> parent;
    vector<int> rank;

    int find(int x) {
        if (x == parent[x])
            return x;
        return parent[x] = find(parent[x]);
    }

    void Union(int x, int y) {
        int px = find(x);
        int py = find(y);
        if (px == py)
            return;
        if (rank[px] > rank[py]) {
            parent[py] = px;
        } else if (rank[px] < rank[py]) {
            parent[px] = py;
        } else {
            parent[px] = py;
            rank[py]++;
        }
    }

    int minimumHammingDistance(vector<int>& source, vector<int>& target, vector<vector<int>>& allowedSwaps) {
        int n = source.size();
        parent.resize(n);
        rank.resize(n, 0);

        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }

        // 1. Group indices that can be swapped
        for (auto& swap : allowedSwaps) {
            Union(swap[0], swap[1]);
        }

        // 2. Group values of 'source' by their component root
        // Map: Root -> {Value -> Frequency}
        unordered_map<int, unordered_map<int, int>> componentInventory;
        for (int i = 0; i < n; i++) {
            int root = find(i);
            componentInventory[root][source[i]]++;
        }

        int hammingDistance = 0;

        // 3. For each index, check if target[i] exists in its component's inventory
        for (int i = 0; i < n; i++) {
            int root = find(i);
            int targetVal = target[i];

            if (componentInventory[root][targetVal] > 0) {
                // We found a match in the allowed pool!
                componentInventory[root][targetVal]--;
            } else {
                // No match possible for this position
                hammingDistance++;
            }
        }

        return hammingDistance;
    }
};