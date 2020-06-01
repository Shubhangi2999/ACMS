from flask import Flask, request, jsonify
import utill
import random

app = Flask(__name__)

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': utill.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_program', methods=['GET', 'POST'])
def predict_program():
    total_sqft = float(request.form['total_sqft'])
    city = request.form['city']
    rating = random.randint(0, 5)          #int(request.form['rating'])
    employees = int(request.form['employees'])
    Dpmo = random.randint(0, 100)          #int(request.form['Dpmo'])
    store = float(request.form['store'])
    own_rent = float(request.form['own_rent'])

    response = jsonify({
        'predicted_program ': utill.predict_program(city,store,own_rent,rating,total_sqft,employees,Dpmo)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Program Prediction...")
    utill.load_saved_artifacts()
    app.run()