var minimumTotalDistance = function (robot, factory) {
    const solve = (ri, fi, positions, t) => {
        if (ri >= robot.length) {
            return 0;
        }
        if (fi >= positions.length) {
            return 1e12; // large number to represent impossible case
        }
        if (t[ri][fi] !== -1) {
            return t[ri][fi];
        }

        // Option 1: assign current robot to current factory position
        const take_current_factory = Math.abs(robot[ri] - positions[fi]) + solve(ri + 1, fi + 1, positions, t);

        // Option 2: skip current factory position
        const skip = solve(ri, fi + 1, positions, t);

        // Memoize and return
        return (t[ri][fi] = Math.min(take_current_factory, skip));
    };

    // Step 1: sort robots and factories by position
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    // Step 2: expand factory positions according to their limits
    const positions = [];
    for (let i = 0; i < factory.length; i++) {
        const [pos, limit] = factory[i];
        for (let j = 0; j < limit; j++) {
            positions.push(pos);
        }
    }

    // Step 3: initialize memoization table
    const m = robot.length;
    const n = positions.length;
    const t = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));

    // Step 4: recursion with memoization
    return solve(0, 0, positions, t);
};