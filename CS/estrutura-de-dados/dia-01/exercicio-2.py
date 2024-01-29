def shuffle_cards(cards):
    mid = len(cards) // 2
    
    first = cards[:mid]
    second = cards[mid:]
    
    shuffled = []
    
    for index in range(len(second)):
        shuffled.append(first[index])
        shuffled.append(second[index])
    
    if len(first) > len(second):
        shuffled.append(first[-1])
    
    return shuffled

print(shuffle_cards([1, 4, 4, 7, 6, 6]))
        
        
# test = [1, 2]

# for index in range(len(test)):
#     print(index)