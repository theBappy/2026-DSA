class Solution {
private:
    long long getMinSequentialFinish(
        vector<int>& startFirst, vector<int>& durationFirst,
        vector<int>& startSecond, vector<int>& durationSecond
    ) {
        // Phase 1: Find the earliest completion time for the first activity
        long long earliestFirstFinish = LLONG_MAX;
        for (size_t i = 0; i < startFirst.size(); ++i) {
            earliestFirstFinish = min(earliestFirstFinish, (long long)startFirst[i] + durationFirst[i]);
        }

        // Phase 2: Find the earliest completion time for the second activity
        long long earliestSecondFinish = LLONG_MAX;
        for (size_t i = 0; i < startSecond.size(); ++i) {
            long long actualStartTime = max((long long)startSecond[i], earliestFirstFinish);
            earliestSecondFinish = min(earliestSecondFinish, actualStartTime + durationSecond[i]);
        }

        return earliestSecondFinish;
    }

public:
    int earliestFinishTime(
        vector<int>& landStartTime, vector<int>& landDuration,
        vector<int>& waterStartTime, vector<int>& waterDuration
    ) {
        long long landThenWater = getMinSequentialFinish(landStartTime, landDuration, waterStartTime, waterDuration);
        long long waterThenLand = getMinSequentialFinish(waterStartTime, waterDuration, landStartTime, landDuration);
        
        return min(landThenWater, waterThenLand);
    }
};