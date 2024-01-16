import math

def paint_costs(area):
    liters = area / 3
    cans = liters / 18
    cans = math.ceil(cans)
    price = cans * 80
    return (cans, price)

print(paint_costs(109))
