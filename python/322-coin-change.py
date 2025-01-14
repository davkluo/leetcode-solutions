from typing import List

def coin_change(coins: List[int], amount: int) -> int:
    """
    Given a list of coin denominations and a target amount, return the minimum
    number of coins needed to make up that amount. If it is not possible,
    returns -1.

    e.g. coin_change([1, 2, 5], 11) -> 3
    """

    num_coins = [0] # for each index i, number of coins needed for i

    for i in range(1, amount + 1):
        min_coins = float("inf")
        for c in coins:
            if i - c >= 0 and num_coins[i - c] != -1:
                min_coins = min(num_coins[i - c] + 1, min_coins)

        num_coins.append(min_coins if min_coins != float("inf") else -1)

    return num_coins[amount]

if __name__ == "__main__":
    assert coin_change([1, 2, 5], 11) == 3
    assert coin_change([2], 3) == -1
    assert coin_change([1], 0) == 0

    print("Passed")