def reverse_bits(n: int) -> int:
    """
    Given an unsigned 32-bit integer, returns the integer that results from
    reversing the bits of the original number. Note that leading zeroes in the
    32-bit representation should be included in the reversal.

    e.g. reverse_bits(43261596) -> 964176192
    """

    reversed_n = 0

    for i in range(32):
        reversed_n <<= 1
        reversed_n |= (n & 1)
        n >>= 1

    return reversed_n

if __name__ == "__main__":
    assert reverse_bits(43261596) == 964176192
    assert reverse_bits(4294967293) == 3221225471

    print("Passed")