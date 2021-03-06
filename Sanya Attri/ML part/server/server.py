from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_program', methods=['GET', 'POST'])
def predict_program():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    rating = int(request.form['bhk'])
    employees = int(request.form['bath'])

    response = jsonify({
        'predicted_program ': util.predict_program(location,rating,employees,total_sqft)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()