import pandas as pd

def process_data(input_file1, input_file2, output_file, delimiter):
    try:
        data1 = pd.read_csv(input_file1)
        data2 = pd.read_csv(input_file2)
        
        # Data processing logic here
        
        output_data.to_csv(output_file, sep=delimiter, index=False)
        
        return True, "Data processing successful."
    
    except Exception as e:
        return False, f"An error occurred: {str(e)}"