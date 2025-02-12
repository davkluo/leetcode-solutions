def longestCommonSubsequence(text1: str, text2: str) -> int:
    """
    Given two strings, return the length of the longest common subsequence.

    e.g. longestCommonSubsequence("abcde", "ace") -> 3
    """

    h, w = len(text1) + 1, len(text2) + 1
    dp = [[0 for _w in range(w)] for _h in range(h)]

    for i in range(1, h):
        for j in range(1, w):
            has_match = 1 if text1[i-1] == text2[j-1] else 0
            dp[i][j] = max(dp[i-1][j-1] + has_match,
                            dp[i-1][j],
                            dp[i][j-1])

    return dp[-1][-1]

if __name__ == "__main__":
    assert longestCommonSubsequence("abcde", "ace") == 3
    assert longestCommonSubsequence("abc", "abc") == 3
    assert longestCommonSubsequence("abc", "def") == 0

    print("Passed")