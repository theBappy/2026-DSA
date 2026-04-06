class Solution:
    def robotSim(self, commands: list[int], obstacles: list[list[int]]) -> int:
        # Using a set of tuples is much faster than strings
        st = {tuple(obs) for obs in obstacles}
        
        x, y = 0, 0
        maxD = 0
        dx, dy = 0, 1 # Starting North
        
        for cmd in commands:
            if cmd == -2: # Left 90 degrees
                dx, dy = -dy, dx
            elif cmd == -1: # Right 90 degrees
                dx, dy = dy, -dx
            else:
                for _ in range(cmd):
                    # Check if next step is an obstacle
                    if (x + dx, y + dy) in st:
                        break
                    x += dx
                    y += dy
                
                # Update max distance after the move command is finished
                # (x*x + y*y) is the squared distance
                maxD = max(maxD, x*x + y*y)
                
        return maxD