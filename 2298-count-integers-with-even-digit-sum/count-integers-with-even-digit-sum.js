var countEven = function (num) {
    let dSum = 0, temp = num
    while (temp > 0) {
        dSum += temp % 10
        temp = Math.floor(temp / 10)
    }
    return (dSum % 2 === 0) ? Math.floor(num / 2) : Math.floor((num - 1) / 2)
};