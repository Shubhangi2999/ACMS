import pickle
import json
import numpy as np

__city = None
__data_columns = None
__model = None

def predict_program(city,store,own_rent,rating,total_sqft,employees,Dpmo):
    try:
        loc_index = __data_columns.index(city.lower())
    except:
        loc_index = -1

    x = np.zeros(len(X.columns))
    x[0] = store
    x[1] = own_rent
    x[2] = rating
    x[3] = total_sqft
    x[4] = employees
    x[5] = Dpmo
    if loc_index >= 0:
        x[loc_index] = 1
        
    return round(__model.predict([x])[0],2)


def load_saved_artifacts():
    print("loading saved artifacts...start")
    global  __data_columns
    global __city

    with open("./artifacts/ev_columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __city = __data_columns[7:]  # first 8 columns are "store", "own_rent", "rating", "total_sqft", "employees", "programs", "programs_val", "dpmo"


    global __model
    if __model is None:
        with open('./artifacts/ev_program_prediction.pickle', 'rb') as f:
            __model = pickle.load(f)
    print("loading saved artifacts...done")

def get_location_names():
    return __city

def get_data_columns():
    return __data_columns

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_location_names())
    print(predict_program('Dwarka',3, 1,3, 300, 60,7))
    print(predict_program('Noida',1, 1,3, 3900, 60,7))
   

    
