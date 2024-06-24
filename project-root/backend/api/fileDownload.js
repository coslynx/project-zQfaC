import pandas as pd
import os

def download_csv_file(input_file_path, output_file_path, delimiter):
    try:
        input_data = pd.read_csv(input_file_path)
        input_data.to_csv(output_file_path, sep=delimiter, index=False)
        return True
    except Exception as e:
        print(f"Error in downloading CSV file: {e}")
        return False