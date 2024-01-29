def count_students(entrys, exits, time):
    counter = 0
    for index in range(len(entrys)):
        if entrys[index] <= time and exits[index] >= time:
            counter += 1
    return counter

print(count_students([1, 2, 3], [3, 2, 7], 4))