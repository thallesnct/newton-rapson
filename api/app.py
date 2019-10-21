import util.functions as functions
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/newton", methods=['POST'])
def calculate_roots():
    data = request.get_json()

    # Transforma a função recebida em algo interpretável pela linguagem
    function = functions.create_function(data["function"])

    # Gera os pontos entre [-10, 10] separados por intervalos de 0.1
    points = functions.generate_points(data["interval"])

    (has_root, maybe_has_root) = functions.get_possible_roots(function, points)

    # Calcula as raízes
    roots = set()
    for val_from, val_to in set(has_root).union(set(maybe_has_root)):
        derived_from = functions.calc_derivative(function, val_from)
        derived_to = functions.calc_derivative(function, val_to)

        guess = val_from
        if (derived_from > derived_to):
            guess = derived_to

        root = functions.get_root(function, guess)

        if root is not None:
            roots.add(root)

        filtered_roots = {root_ for root_ in roots if float(root_[1]) == 0}

        if len(filtered_roots) > 0:
            roots = filtered_roots

    all_results = list()
    if (len(roots) > 0):
        # Calcula o valor da função para cada ponto no intervalo, que pode ser usado para criação de gráfico
        for point in points:
            if point == 0:
                all_results.append([ "0", str(functions.calc_function(function, 1e-4)) ])
            else:
                all_results.append([ str(point), str(functions.calc_function(function, point)) ])


    return jsonify({ 'roots': list(roots), 'resultsInInterval': all_results })