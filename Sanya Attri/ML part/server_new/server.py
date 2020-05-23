from flask import Flask, request, jsonify
import util
import random

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
    rating = random.randint(0, 5) #int(request.form['rating'])
    employees = int(request.form['employees'])
    Dpmo = random.randint(0, 100) #int(request.form['Dpmo'])

    response = jsonify({
        'predicted_program ': util.predict_program(location,rating,employees,total_sqft,Dpmo)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run()
