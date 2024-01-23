def even_numbers(n):
    even = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            even += 1
    return even

print(even_numbers(10))