var minimumEffort = function (tasks) {
    // Sort by difference (min - actual) descending
    tasks.sort((task1, task2) => (task2[1] - task2[0]) - (task1[1] - task1[0]))

    let totalNeeded = 0
    let currentSpent = 0

    for (const [actual, minimum] of tasks) {
        totalNeeded = Math.max(totalNeeded, currentSpent + minimum)
        currentSpent += actual
    }
    return totalNeeded
};