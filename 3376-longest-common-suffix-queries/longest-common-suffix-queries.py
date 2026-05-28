class Solution:
    def stringIndices(self, wordsContainer: List[str], wordsQuery: List[str]) -> List[int]:
        # Memory pool approach using parallel lists to avoid heavy object overhead
        # trie_idx stores the 'best' word index for each node
        trie_idx = []
        # trie_children stores a 26-element list of integers for each node
        trie_children = []
        
        def create_node(best_word_idx: int) -> int:
            trie_idx.append(best_word_idx)
            trie_children.append([-1] * 26)
            return len(trie_idx) - 1

        # Find the global fallback best index for the root node
        root_best_idx = 0
        for i in range(1, len(wordsContainer)):
            if len(wordsContainer[i]) < len(wordsContainer[root_best_idx]):
                root_best_idx = i
            elif len(wordsContainer[i]) == len(wordsContainer[root_best_idx]):
                if i < root_best_idx:
                    root_best_idx = i
                    
        # Initialize the root node at pool position 0
        create_node(root_best_idx)
        
        # Build the Trie
        for i, word in enumerate(wordsContainer):
            curr_node = 0
            word_len = len(word)
            
            # Traverse backwards for suffix matching
            for ch in reversed(word):
                ch_idx = ord(ch) - 97 # ord('a') is 97
                
                if trie_children[curr_node][ch_idx] == -1:
                    next_node = create_node(i)
                    trie_children[curr_node][ch_idx] = next_node
                    
                curr_node = trie_children[curr_node][ch_idx]
                
                # Tie-breaking logic update for the internal node
                best_idx_so_far = trie_idx[curr_node]
                if len(wordsContainer[best_idx_so_far]) > word_len:
                    trie_idx[curr_node] = i
                elif len(wordsContainer[best_idx_so_far]) == word_len:
                    if i < best_idx_so_far:
                        trie_idx[curr_node] = i

        # Process queries
        result = []
        for query in wordsQuery:
            curr_node = 0
            best_ans = trie_idx[0]
            
            for ch in reversed(query):
                ch_idx = ord(ch) - 97
                if trie_children[curr_node][ch_idx] == -1:
                    break
                curr_node = trie_children[curr_node][ch_idx]
                best_ans = trie_idx[curr_node]
                
            result.append(best_ans)
            
        return result
            