def climb_stairs(n: int) -> int:
    """
    Given an integer n representing the number of steps in a staircase, returns
    the number of different ways one can reach the top of the staircase
    assuming at each step we can climb one or two steps.

    e.g. climb_stairs(2) -> 2
    """

    two_steps_prior = 0
    one_step_prior = 1 # initial value represents standing at bottom

    for i in range(n):
        num_ways = two_steps_prior + one_step_prior
        two_steps_prior = one_step_prior
        one_step_prior = num_ways

    return one_step_prior

if __name__ == "__main__":
    assert climb_stairs(2) == 2
    assert climb_stairs(3) == 3

    print("Passed")
