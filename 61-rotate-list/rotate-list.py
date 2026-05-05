class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0:
                return head
        
        # 1. Compute length and find the actual tail
        last_node = head
        length = 1
        while last_node.next:
            last_node = last_node.next
            length += 1
        
        # 2. Close the loop
        last_node.next = head
        
        # 3. Find the split point
        # k can be larger than length, so use modulo
        k = k % length
        steps_to_new_tail = length - k - 1
        
        new_tail = head
        for _ in range(steps_to_new_tail):
            new_tail = new_tail.next
            
        # 4. Break the circle
        new_head = new_tail.next
        new_tail.next = None
        
        return new_head

