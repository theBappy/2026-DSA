class NumArray {
    constructor(nums) {
        this.nums = nums.slice();
        this.n = nums.length;
        this.blockSize = Math.ceil(Math.sqrt(this.n));
        this.blocks = new Array(this.blockSize).fill(0);

        // building the blocks array
        for (let i = 0; i < this.n; i++) {
            let blockIndex = Math.floor(i / this.blockSize);
            this.blocks[blockIndex] += nums[i];
        }
    }

    update(index, val) {
        let blockIndex = Math.floor(index / this.blockSize);
        this.blocks[blockIndex] -= this.nums[index];
        this.blocks[blockIndex] += val;
        this.nums[index] = val;
    }

    sumRange(left, right) {
        let sum = 0;

        let startBlock = Math.floor(left / this.blockSize);
        let endBlock = Math.floor(right / this.blockSize);

        // L and R in same block
        if (startBlock === endBlock) {
            for (let i = left; i <= right; i++) {
                sum += this.nums[i];
            }
            return sum;
        }

        // left partial sum -> left to end of startBlock
        let endIndexOfStartBlock = ((startBlock + 1) * this.blockSize) - 1;
        for (let i = left; i <= endIndexOfStartBlock; i++) {
            sum += this.nums[i];
        }

        // middle full blocks
        for (let b = startBlock + 1; b <= endBlock - 1; b++) {
            sum += this.blocks[b];
        }

        // right partial sum
        let startIndexOfEndBlock = endBlock * this.blockSize;
        for (let i = startIndexOfEndBlock; i <= right; i++) {
            sum += this.nums[i];
        }

        return sum;
    }
}