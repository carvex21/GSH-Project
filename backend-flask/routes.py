from flask import jsonify,Flask
from flask import request

appFlask = Flask(__name__)
@appFlask.route('/layernumber')
def home():
	layer_ids = {
		"Line": 1, 
		"Multipoint": 2, 
		"Polygon": 3, 
		"Rectangle": 4,
		"Marker": 2
	}
	layer = request.args['layer']
	final = {"layernumber": layer_ids[layer]}
	return jsonify(final)
if __name__ == "__main__":
	appFlask.run(debug=True)