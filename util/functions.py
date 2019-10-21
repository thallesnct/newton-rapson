import re


def create_function(function):
    # function = function.replace("^", "**")
    char_list = list(function)

    for char in char_list:
        index = char_list.index(char)

        if (len(char_list) > index + 1):
            next_element = char_list[index + 1]

            if re.match(r"[0-9]", char):
                if re.match(r"[a-z]", next_element) or re.match(r"\(", next_element):
                    #  or re.match(r"√", next_element) <- Ignore isso aqui por enquanto
                    # Adiciona o * se necessário
                    char_list.insert(index + 1, '*')
            elif "^" == next_element:
              char_list[index] = f"pow({char_list[index]}"
              char_list[index + 1] = ","
              char_list[index + 2] = f"{char_list[index + 2]})"

    return "".join(char_list)


def calc_derivative(function, value):
  # Por não ter como fazer divisão por 0 com o intuito de simular calculo de limite,
  # a solução foi encontrar um número próximo de 0, como feito abaixo
    h = 1./1000000.
    top = calc_function(function, value + h) - calc_function(function, value)
    bottom = h
    result = top / bottom

    return float("%.8f" % result)

# Funcão não está sendo usada no momento, será usada quando remover o uso da lib (sympy)

def calc_delta(function, x):
  return abs(0 - calc_function(function, x))

def calc_function(function, x):
    return eval(function.replace("x", str(x)))


def calc_newton_rapson(function, value):
  return (value) - (calc_function(function, value) / calc_derivative(function, value))

# Gera os pontos entre -10 e 10 com o intervalo de 0.1
def generate_points(interval):
    points = []
    for number in range(interval[0], interval[1]):
        for decimal in range(number * 10, (number + 1) * 10):
            points.append(decimal/10)
    points.append(float(interval[1]))
    return points

def get_possible_roots(function, points, has_root = None, maybe_has_root = None):
  if has_root is None:
    has_root = list()
  
  if maybe_has_root is None:
    maybe_has_root = list()

  for point in points:
    if (len(points) > points.index(point) + 1):
        next_point = points[points.index(point) + 1]
        interval_multiplication = calc_function(
            function, point) * calc_function(function, next_point)

        if (interval_multiplication <= 0):
            has_root.append((point, next_point))
            continue

        interval_multiplication_derivative = calc_derivative(function, point) * calc_derivative(function, next_point)

        if (interval_multiplication > 0 and interval_multiplication_derivative < 0):
            maybe_has_root.append((point, next_point))
            continue

  return (has_root, maybe_has_root)


def get_root(function, initVal, epsilon = 1e-5):
  guess = initVal
  delta = calc_delta(function, guess)

  while delta > epsilon:
    guess = calc_newton_rapson(function, guess)
    delta = calc_delta(function, guess)
  
  y_axis = calc_function(function, float("%.8f" % guess))
  x_axis = guess

  # Valida se a distância da aproximação está a menos de 0.1 do valor inicial,
  # tendo em mente que o valor passado está em um intervalo de 0.1
  if (initVal - x_axis) > 0.1:
    return None

  return (str("%.8f" % x_axis), str("%.8f" % y_axis))