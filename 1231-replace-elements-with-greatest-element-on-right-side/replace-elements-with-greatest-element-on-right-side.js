var replaceElements = function (arr) {
    let max_element = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        [arr[i], max_element] = [max_element, Math.max(arr[i], max_element)]
    }
    return arr
};