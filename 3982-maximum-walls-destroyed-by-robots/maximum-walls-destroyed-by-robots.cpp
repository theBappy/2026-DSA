class Solution {
public:
    int maxWalls(vector<int>& robots, vector<int>& dist, vector<int>& walls) {
        int n = robots.size();
        vector<pair<int,int>> detail;
        for(int i = 0; i < n; i++){
            detail.push_back({robots[i], dist[i]});
        }
        sort(detail.begin(), detail.end());
        sort(walls.begin(), walls.end());

        auto CntWalls = [&](int left, int right){
            if(left > right) return 0;
            auto it1 = lower_bound(walls.begin(), walls.end(), left);
            auto it2 = upper_bound(walls.begin(), walls.end(), right);
            return (int)distance(it1, it2);
        };

        int resWalls = 0;
        for(int i = 0; i < n; i++){
            if(binary_search(walls.begin(), walls.end(), detail[i].first)){
                resWalls++;
            }
        }

        vector<vector<int>> dp(n, vector<int>(2, 0));
        dp[0][0] = CntWalls(detail[0].first - detail[0].second, detail[0].first - 1);
        dp[0][1] = 0;

        for(int i = 1; i < n; i++){
            int prevpos = detail[i-1].first;
            int currpos = detail[i].first;

            int Gapwalls = CntWalls(prevpos + 1, currpos - 1);
            int leftRange = CntWalls(max(prevpos + 1, currpos - detail[i].second), currpos - 1);
            int rightRange = CntWalls(prevpos + 1, min(currpos - 1, prevpos + detail[i-1].second));

            int extraWall;
            if(prevpos + detail[i-1].second >= currpos - detail[i].second){
                extraWall = Gapwalls;
            } else {
                extraWall = leftRange + rightRange;
            }

            dp[i][0] = max(dp[i-1][0] + leftRange, dp[i-1][1] + extraWall);
            dp[i][1] = max(dp[i-1][0], dp[i-1][1] + rightRange);
        }

        int lastRight = CntWalls(detail[n-1].first + 1,
                                detail[n-1].first + detail[n-1].second);

        return resWalls + max(dp[n-1][0], dp[n-1][1] + lastRight);
    }
};