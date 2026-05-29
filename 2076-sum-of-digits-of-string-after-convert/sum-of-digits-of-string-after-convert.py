class Solution:
    def getLucky(self, s: str, k: int) -> int:
        current_digit_sum = 0
        
        # Step 1: Convert characters to numbers and perform the 1st transformation
        for char in s:
            alphabet_position = ord(char) - ord('a') + 1
            # Extract and sum digits of the alphabet position
            while alphabet_position > 0:
                current_digit_sum += alphabet_position % 10
                alphabet_position //= 10
                
        # Step 2: Perform the remaining k - 1 transformations
        k -= 1
        while k > 0:
            next_digit_sum = 0
            while current_digit_sum > 0:
                next_digit_sum += current_digit_sum % 10
                current_digit_sum //= 10
            current_digit_sum = next_digit_sum
            k -= 1
            
        return current_digit_sum