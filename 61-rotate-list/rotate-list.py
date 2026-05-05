class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
            return head

        length = 1
        tail = head
        while tail.next:
            tail = tail.next
            length += 1

        k = k % length
        if k == 0:
            return head

        tail.next = head

        steps = length - k
        newTail = head
        for i in range(1, steps):
            newTail = newTail.next

        newHead = newTail.next
        newTail.next = None

        return newHead
