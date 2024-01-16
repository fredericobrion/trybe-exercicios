def calculate_fuel(liters, fuel):
    if fuel == 'A':
        price = (1.90 * 0.95) if liters > 20 else (1.90 * 0.97)
    if fuel == 'G':
        price = (2.50 * 0.94) if liters > 20 else (1.90 * 0.96)
    return liters * price

print(calculate_fuel(5, 'A'))
print(calculate_fuel(25, 'A'))
print(calculate_fuel(5, 'G'))
print(calculate_fuel(25, 'G'))
