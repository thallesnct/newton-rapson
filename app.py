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
  
  # All roots
  all_roots = list()
  for point in points:
    if point == 0:
      all_roots.append([ "0", str(functions.calc_function(function, 1e-4)) ])
    else:
      all_roots.append([ str(point), str(functions.calc_function(function, point)) ])


  return jsonify({ 'roots': list(roots), 'allResults': all_roots })