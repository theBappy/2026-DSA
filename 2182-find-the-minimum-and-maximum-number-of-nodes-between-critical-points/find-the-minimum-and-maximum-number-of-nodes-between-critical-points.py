class Solution:
    def nodesBetweenCriticalPoints(self, head):
        prev = head
        cur = head.next

        idx = 1

        firstCritical = -1
        lastCritical = -1
        minDist = float('inf')

        while cur.next:
            next_node = cur.next

            isMax = cur.val > prev.val and cur.val > next_node.val
            isMin = cur.val < prev.val and cur.val < next_node.val

            if isMax or isMin:
                if lastCritical == -1:
                    firstCritical = idx
                else:
                    minDist = min(minDist, idx - lastCritical)

                lastCritical = idx

            prev = cur
            cur = next_node
            idx += 1

        if firstCritical == -1 or firstCritical == lastCritical:
            return [-1, -1]

        maxDist = lastCritical - firstCritical

        return [minDist, maxDist]