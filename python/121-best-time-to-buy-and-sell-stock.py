from typing import List

def max_profit(prices: List[int]) -> int:
    """
    Given an array of prices for a stock on different days, returns the maximum
    profit from one buy and sell transaction. The stock must be bought on an
    earlier date than it is sold. Returns 0 if no profit can be made.

    e.g. max_profit([7, 1, 5, 3, 6, 4]) -> 5
    """

    max_gain = 0
    min_purchase_price = prices[0]

    for price in prices:
        max_gain = max(price - min_purchase_price, max_gain)
        min_purchase_price = min(price, min_purchase_price)

    return max_gain

if __name__ == "__main__":
    assert max_profit([7, 1, 5, 3, 6, 4]) == 5
    assert max_profit([7,6,4,3,1]) == 0

    print("Passed")