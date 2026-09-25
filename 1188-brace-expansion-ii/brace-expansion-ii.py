class Solution:
    def braceExpansionII(self, expression: str) -> list[str]:
        def parseExpr(i):
            res = set()
            while i < len(expression):
                term, i = parseTerm(i)
                res |= term
                if i < len(expression) and expression[i] == ',':
                    i += 1
                else:
                    break
            return res, i

        def parseTerm(i):
            res = {""}
            while i < len(expression) and expression[i] != '}' and expression[i] != ',':
                factor, i = parseFactor(i)
                res = {a + b for a in res for b in factor}
            return res, i

        def parseFactor(i):
            if expression[i] == '{':
                i += 1 
                res, i = parseExpr(i)
                i += 1  
                return res, i
            else:
                j = i
                while j < len(expression) and expression[j].isalpha():
                    j += 1
                word = expression[i:j]
                return {word}, j

        ans, _ = parseExpr(0)
        return sorted(list(ans))