class Solution:
    def distinctSubseqII(self, s: str) -> int:
        MOD = 1000000007
        
        dp = 1
        last = [0] * 26
        
        for ch in s:
            index = ord(ch) - ord('a')
            
            old_dp = dp
            
            dp = (2 * dp - last[index] + MOD) % MOD
            
            last[index] = old_dp
        
        return (dp - 1 + MOD) % MOD