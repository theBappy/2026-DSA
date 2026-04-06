/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    const st = new Set()
    for (const obs of obstacles) {
        const key = `${obs[0]}_${obs[1]}`
        st.add(key)
    }
    let x = 0
    let y = 0
    let maxD = 0
    let dir = [0, 1]
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -2) {
            dir = [-dir[1], dir[0]]
        } else if (commands[i] === -1) {
            dir = [dir[1], -dir[0]]
        } else {
            for (let step = 0; step < commands[i]; step++) {
                const newX = x + dir[0]
                const newY = y + dir[1]
                const newKey = `${newX}_${newY}`
                if (st.has(newKey)) {
                    break
                }
                x = newX
                y = newY
            }

        }
        maxD = Math.max(maxD, x * x + y * y)
    }
    return maxD
};