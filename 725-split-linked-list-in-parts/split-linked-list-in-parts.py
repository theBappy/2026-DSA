class Solution:
    def splitListToParts(
        self, head: Optional[ListNode], k: int
    ) -> List[Optional[ListNode]]:
        curr, L = head, 0
        while curr:
            L += 1
            curr = curr.next

        minContain = L // k
        remainderNodes = L % k

        result = [None] * k
        curr = head
        prev = None

        for i in range(k):
            result[i] = curr
            for count in range(1, minContain + (1 if remainderNodes > 0 else 0) + 1):
                prev = curr
                if curr:
                    curr = curr.next
            if prev:
                prev.next = None
            remainderNodes -= 1
        return result
