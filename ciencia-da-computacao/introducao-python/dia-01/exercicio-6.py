def type_of_triangle(a, b, c):
    is_triangle = (
        a + b > c and
        a + c > b and
        b + c > a
    )
    if not is_triangle:
        return "não é triangulo"
    elif a == b == c:
        return "equilátero"
    elif a == b or a == c or b == c:
        return "isoceles"
    else:
        return "escaleno"
    
