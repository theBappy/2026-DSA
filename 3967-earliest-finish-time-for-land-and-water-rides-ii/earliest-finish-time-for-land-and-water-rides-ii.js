var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    
    const getMinSequentialFinish = (startFirst, durationFirst, startSecond, durationSecond) => {
        // Phase 1: Find the earliest completion time for the first activity
        let earliestFirstFinish = Infinity;
        for (let i = 0; i < startFirst.length; i++) {
            earliestFirstFinish = Math.min(earliestFirstFinish, startFirst[i] + durationFirst[i]);
        }

        // Phase 2: Find the earliest completion time for the second activity
        let earliestSecondFinish = Infinity;
        for (let i = 0; i < startSecond.length; i++) {
            let actualStartTime = Math.max(startSecond[i], earliestFirstFinish);
            earliestSecondFinish = Math.min(earliestSecondFinish, actualStartTime + durationSecond[i]);
        }

        return earliestSecondFinish;
    };

    const landThenWater = getMinSequentialFinish(landStartTime, landDuration, waterStartTime, waterDuration);
    const waterThenLand = getMinSequentialFinish(waterStartTime, waterDuration, landStartTime, landDuration);

    return Math.min(landThenWater, waterThenLand);
};