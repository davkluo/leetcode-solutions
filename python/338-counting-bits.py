from typing import List

def count_bits(n: int) -> List[int]:
    """
    Given an integer that is positive or zero, returns an array of integers
    where for each integer from 0 to n inclusive, the corresponding index has
    the number of bits in its binary representation.

    e.g. count_bits(2) -> [0, 1, 1]
    """

    if n == 0:
        return [0]

    num_bits = [0]
    memo_i = 0 # index of memoized results we can use
    memo_stop = 1 # stop index where we need to reset memo index

    for i in range(1, n + 1):
        num_bits.append(1 + num_bits[memo_i])
        memo_i += 1

        if memo_i == memo_stop:
            memo_i = 0
            memo_stop *= 2

    return num_bits

if __name__ == "__main__":
    assert count_bits(2) == [0, 1, 1]
    assert count_bits(5) == [0, 1, 1, 2, 1, 2]

    print("Passed")