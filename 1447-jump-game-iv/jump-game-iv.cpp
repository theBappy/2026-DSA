class Solution {
public:
    int minJumps(vector<int>& arr) {
        int n = arr.size(); // last index -> n -1

        unordered_map<int, vector<int>> mp; // need to access where arr[i] == arr[j]
        vector<bool> visited(n, false);

        for (int i = 0; i < n; i++) {
            mp[arr[i]].push_back(i); // number->indices
        }

        queue<int> q;
        q.push(0);
        visited[0] = true;

        int steps = 0;
        while (!q.empty()) {
            int size = q.size();
            while (size--) {
                int curr_idx = q.front();
                q.pop();

                int left = curr_idx - 1;
                int right = curr_idx + 1;

                if (curr_idx == n - 1) {
                    return steps; // reach destination
                }

                if (left >= 0 && !visited[left]) {
                    q.push(left);
                    visited[left] = true;
                }
                if (right < n && !visited[right]) {
                    q.push(right);
                    visited[right] = true;
                }

                for (int& idx : mp[arr[curr_idx]]) {
                    if (!visited[idx]) {
                        q.push(idx);
                        visited[idx] = true;
                    }
                }
                // for not duplicate checking of curr number
                // mp(number->indices)
                mp.erase(arr[curr_idx]);
            }
            steps++;
        }
        return -1;
    }
};