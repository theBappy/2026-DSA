class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        int n = arr.size();
        int max_element = -1;
        for (int i = n - 1; i >= 0; i--) {
            int current_val = arr[i];
            arr[i] = max_element;
            max_element = max(max_element, current_val);
        }
        return arr;
    }
};