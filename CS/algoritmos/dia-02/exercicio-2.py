def even_numbers(n):
    if n == 0:
        return
    elif n % 2 == 0:
        return 1 + even_numbers(n - 1)
    else:
        return even_numbers(n - 1)
    