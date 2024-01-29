def check_health(values):
    result = 0
    counter = 0
    for value in values:
        if value == 0:
            if counter > result:
                result = counter
            counter = 0
        else:
            counter += 1
    if counter > result:
        return counter
    return result

print(check_health([1, 1, 1, 1, 0, 0, 1, 1]))