class Solution:
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        l = len(encodedText)
        columns = l // rows
        originalText = []

        for col in range(columns):
            for j in range(col, l, columns + 1):
                originalText.append(encodedText[j])

        while originalText and originalText[-1] == " ":
            originalText.pop()

        return "".join(originalText)
