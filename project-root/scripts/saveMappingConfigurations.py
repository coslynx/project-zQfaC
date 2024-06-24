import os
import json

def save_mapping_configurations(configurations):
    file_path = os.path.join(os.path.dirname(__file__), 'mapping_configurations.json')
    with open(file_path, 'w') as file:
        json.dump(configurations, file)

def load_mapping_configurations():
    file_path = os.path.join(os.path.dirname(__file__), 'mapping_configurations.json')
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            configurations = json.load(file)
            return configurations
    else:
        return {}