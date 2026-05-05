var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head

    //calculate length and find the current tail
    let lastNode = head
    let n = 1
    while (lastNode.next) {
        lastNode = lastNode.next
        n++
    }

    //connect tail to head make it circular
    lastNode.next = head

    //find the new tail
    //the new tail is at (n-(k % n)-1) steps from current head
    k = k % n
    let stepsToNewTail = n - k - 1
    let newTail = head
    for (let i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next
    }

    //break the circle
    let newHead = newTail.next
    newTail.next = null


    return newHead
};