var minimumEffort = function (tasks) {
    let left = 0
    let right = 1e9
    let result = Number.MAX_SAFE_INTEGER

    const doAble = (mid) => {
        for (const task of tasks) {
            const actualEnergyNeeds = task[0];
            const minEnergyNeeds = task[1];

            if (minEnergyNeeds > mid) {
                return false;
            }
            mid -= actualEnergyNeeds;
        }
        return true;
    }

    tasks.sort((task1, task2) => {
        const diff1 = task1[1] - task1[0]
        const diff2 = task2[1] - task2[0]
        return diff2 - diff1
    })

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (doAble(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result
};