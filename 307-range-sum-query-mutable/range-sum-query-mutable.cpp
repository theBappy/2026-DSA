class NumArray {
public:
    vector<int> nums;
    vector<int> blocks;
    int n;
    int blockSize;
    NumArray(vector<int>& nums) {
        this->nums = nums;
        n = nums.size();
        blockSize = ceil(sqrt(n));
        blocks.resize(blockSize, 0);

        // building the blocks array
        for (int i = 0; i < n; i++) {
            int blockIndex = i / blockSize;
            blocks[blockIndex] += nums[i];
        }
    }

    void update(int index, int val) {
        int blockIndex = index / blockSize;
        blocks[blockIndex] -= nums[index];
        blocks[blockIndex] += val;
        nums[index] = val;
    }

    int sumRange(int left, int right) {
        int sum = 0;

        int startBlock = left / blockSize;
        int endBlock = right / blockSize;
        // L and R in same block
        if (startBlock == endBlock) {
            for (int i = left; i <= right; i++) {
                sum += nums[i];
            }
            return sum;
        }
        // L and R in difference block

        // left partial sum -> left to end of startBlock
        int endIndexOfStartBlock = ((startBlock + 1) * blockSize) - 1;
        for (int i = left; i <= endIndexOfStartBlock; i++) {
            sum += nums[i];
        }

        // middle full blocks
        for (int b = startBlock + 1; b <= endBlock - 1; b++) {
            sum += blocks[b];
        }

        // right partial sum
        int startIndexOfEndBlock = endBlock * blockSize;
        for (int i = startIndexOfEndBlock; i <= right; i++) {
            sum += nums[i];
        }
        return sum;
    }
};
