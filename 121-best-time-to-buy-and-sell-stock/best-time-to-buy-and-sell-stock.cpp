class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        int profit = 0, min_price = prices[0];
        for (int i = 0; i < n; i++) {
            if (prices[i] > min_price) {
                profit = max(profit, prices[i] - min_price);
            } else {
                min_price = prices[i];
            }
        }
        return profit;
    }
};