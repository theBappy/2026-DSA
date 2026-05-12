class Solution {
public:
    bool doAble(vector<vector<int>>& tasks, int mid){
        for(auto &task: tasks){
            int actualEneryNeeds = task[0];
            int minEnergyNeeds = task[1];

            if(minEnergyNeeds > mid){
                return false;
            }
            mid -= actualEneryNeeds;
        }
        return true;
    }
    int minimumEffort(vector<vector<int>>& tasks) {
        int n = tasks.size();
        int left = 0;
        int right = 1e9;
        int result = INT_MAX;

        auto lambda = [](auto &task1, auto &task2){
            int diff1 = task1[1]-task1[0];
            int diff2 = task2[1]-task2[0];

            return diff1 > diff2;
        };

        sort(begin(tasks), end(tasks), lambda);

        while(left <= right){
            int mid = left + (right - left)/2;
            if(doAble(tasks, mid)){
                result = mid;
                right = mid-1;
            }else{
                left = mid+1;
            }
        }
        return result;
    }
};