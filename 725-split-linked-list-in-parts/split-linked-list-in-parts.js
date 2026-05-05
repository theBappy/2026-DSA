var splitListToParts = function (head, k) {
    let curr = head
    let L = 0
    while (curr) {
        L++;
        curr = curr.next
    }
    const minContain = Math.floor(L / k)
    let remainder = L % k

    const result = new Array(k).fill(null)
    curr = head
    let prev = null

    for (let i = 0; curr !== null && i < k; i++) {
        result[i] = curr
        for (let count = 1; count <= minContain + (remainder > 0 ? 1 : 0); count++) {
            prev = curr
            curr = curr.next
        }
        if (prev !== null) {
            prev.next = null
        }
        remainder--
    }
    return result
};