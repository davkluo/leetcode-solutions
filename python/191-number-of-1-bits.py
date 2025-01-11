def hamming_weight(n: int) -> int:
    """
    Given an integer, returns the number of 1 bits in its binary representation

    e.g. hamming_weight(11) -> 3
    """

    num_set_bits = 0

    while n > 0:
        num_set_bits += n & 1
        n >>= 1

    return num_set_bits

if __name__ == "__main__":
    assert hamming_weight(11) == 3
    assert hamming_weight(128) == 1
    assert hamming_weight(2147483645) == 30

    print("Passed")
