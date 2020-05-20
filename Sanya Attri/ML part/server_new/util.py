import pickle
import json
import numpy as np

__locations = None
__data_columns = None
__model = None

def predict_program(location,rating,employees,total_sqft,Dpmo):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = rating
    x[1] = total_sqft
    x[2] = employees
    x[3] = Dpmo
    if loc_index >= 0:
        x[loc_index] = 1

    return round(__model.predict([x])[0],2)


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global  __data_columns
    global __locations

    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[5:]  # first 5 columns are "rating  ", "total_sqft", "employees ", "programs_val", Dpmo

    global __model
    if __model is None:
        with open('./artifacts/program_prediction.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")

def get_location_names():
    return __locations

def get_data_columns():
    return __data_columns

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_location_names())
    print(predict_program('1st Phase JP Nagar',1000, 3, 3, 33))
    print(predict_program('1st Phase JP Nagar', 1000, 2, 2, 45))
    print(predict_program('Kalhalli', 1000, 2, 2, 33)) # other location
    print(predict_program('Ejipura', 1000, 2, 2, 55))  # other location