class Solution:
    def survivedRobotsHealths(
        self, positions: List[int], healths: List[int], directions: str
    ) -> List[int]:
        n = len(positions)
        indices = list(range(n))

        indices.sort(key=lambda i: positions[i])

        st = []

        for currentIndex in indices:
            if directions[currentIndex] == "R":
                st.append(currentIndex)
            else:
                while st and healths[currentIndex] > 0:
                    topIndex = st.pop()
                    if healths[topIndex] > healths[currentIndex]:
                        healths[topIndex] -= 1
                        healths[currentIndex] = 0
                        st.append(topIndex)
                    elif healths[topIndex] < healths[currentIndex]:
                        healths[currentIndex] -= 1
                        healths[topIndex] = 0
                    else:
                        healths[currentIndex] = 0
                        healths[topIndex] = 0
        result = [health for health in healths if health > 0]
        return result
