var maxIceCream = function (costs, coins) {
    const maxCost = Math.max(...costs)

    // count[c] = how many ice creams cost exactly c
    const count = new Array(maxCost + 1).fill(0)
    for (const cost of costs) {
        count[cost]++
    }

    let total = 0
    for (let cost = 1; cost <= maxCost; cost++) {
        if (count[cost] === 0) continue
        if (coins < cost) break

        const canBuy = Math.min(count[cost], Math.floor(coins / cost))
        total += canBuy
        coins -= canBuy * cost
    }
    return total
};