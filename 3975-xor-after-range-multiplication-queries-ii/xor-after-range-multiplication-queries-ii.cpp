class Solution {
public:
    int M = 1e9+7;
    //Binary Exponentiation for Fermat's Little Theorem - > Pow(v ,M-2)
    long long fermatPower(long long a, long long b) {
        if(b == 0)
            return 1;

        long long half   = fermatPower(a, b/2);
        long long result = (half * half) % M;

        if(b % 2 == 1) {
            result = (result * a) % M;
        }

        return result;
    }

    int xorAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size(); 
        int bucketSize = ceil(sqrt(n));

        unordered_map<int, vector<vector<int>>> smallKMap;

        for(auto &query : queries) {
            int L = query[0];
            int R = query[1];
            int K = query[2];
            int V = query[3];

            if(K >= bucketSize) {
                for(int i = L; i<= R; i+=K) {
                    nums[i] = (1LL * nums[i] * V) % M;
                }
            } else { //K < bucketSize
                smallKMap[K].push_back(query);
            }
        }

        for(auto& [K, allQueries] : smallKMap) {
            vector<long long> diff(n, 1);

            for(auto& query : allQueries) {
                int L = query[0];
                int R = query[1];
                int V = query[3];

                diff[L] = (diff[L] * V) % M;

                int steps = (R - L)/K;
                int next  = L + (steps+1)*K;

                if(next < n)
                    diff[next] = (diff[next] * fermatPower(V, M-2)) % M;
            }

            //Cumulative product
            for(int i = 0; i < n; i++) {
                if(i-K >= 0)
                    diff[i] = (diff[i] * diff[i-K]) % M;
            }

            //Apply diff to nums
            for(int i = 0; i < n; i++) {
                nums[i] = (1LL * nums[i] * diff[i]) % M;
            }
        }

        int result = 0;
        for(int &num : nums) {
            result = (result ^ num);
        }

        return result;
    }
};
