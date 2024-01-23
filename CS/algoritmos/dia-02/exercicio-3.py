def biggest_number(numbers):
    if len(numbers) == 1:
        return numbers[0]
    elif numbers[0] > biggest_number(numbers[1:]):
        return numbers[0]
    else:
        return biggest_number(numbers[1:])
    