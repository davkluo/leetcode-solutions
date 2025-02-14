def numDecodings(s: str) -> int:
    """
    Given a string s containing digits from "0" to "9", returns the number of
    ways to decode it. Decoding is done by mapping each digit to a letter
    (e.g. "1" -> "A", "2" -> "B", ..., "26" -> "Z").

    e.g. numDecodings("12") -> 2
    """
    if s[0] == "0": # No solution if first digit is 0
        return 0

    prev_ways = 1 # Number of ways to decode up to 2 digits ago
    curr_ways = 1 # Number of ways to decode up to 1 digit ago

    for i in range(1, len(s)):
        next_ways = 0
        if s[i] != "0":
            next_ways = curr_ways
        if 10 <= int(s[i-1:i+1]) <= 26:
            next_ways += prev_ways

        prev_ways = curr_ways
        curr_ways = next_ways

    return curr_ways

if __name__ == "__main__":
    assert numDecodings("12") == 2
    assert numDecodings("226") == 3
    assert numDecodings("0") == 0
    assert numDecodings("06") == 0

    print("Passed")