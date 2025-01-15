from typing import List

def word_break(s: str, wordDict: List[str]) -> bool:
    """
    Given a string and a list of words, returns True if the string can be made
    up of words from the list. Words may be used multiple times.

    e.g. word_break("leetcode", ["leet", "code"]) -> True
    """

    wordSet = set(wordDict)
    # Each index, i, of can_segment represents whether or not the
    # original string with its left-i letters has a valid segmentation.
    # The 0th index being initialized to True represents the base case
    # of an empty string.
    can_segment = [True] + [False] * len(s)

    for i in range(len(s)):
        substr = s[:i+1]
        can_substr_segment = False
        for w in wordSet:
            if len(w) <= len(substr) and substr[-len(w):] == w:
                # i+1 is the index in can_segment corresponding to the i-th letter
                # recall that can_segment[1] refers to 1 letter remaining => when i == 0
                can_substr_segment = can_segment[i+1-len(w)]
                if can_substr_segment:
                    break
        can_segment[i+1] = can_substr_segment

    return can_segment[-1]

if __name__ == "__main__":
    assert word_break("leetcode", ["leet", "code"]) == True
    assert word_break("applepenapple", ["apple", "pen"]) == True
    assert word_break("catsandog", ["cats", "dog", "sand", "and", "cat"]) == False

    print("Passed")