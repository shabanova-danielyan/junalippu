import sqlite3
import pandas as pd
import os

database_file = "C:/Users/Liza/Documents/myprograms/junalippu/prisma/db.sqlite"
csv_directory = "C:/Users/Liza/Documents/myprograms/junalippu/prisma"

connection = sqlite3.connect(database_file)

# Function to load CSV files into SQLite
def load_csv_to_sqlite(csv_file, connection, table_name):
    try:
        # Read the CSV file into a DataFrame
        df = pd.read_csv(csv_file)
        
        # Insert the DataFrame into the SQLite database
        df.to_sql(table_name, connection, if_exists='append', index=False)
        
        print(f"Successfully loaded {csv_file} into table '{table_name}'.")
    except Exception as e:
        print(f"Failed to load {csv_file}: {e}")

# Iterate over CSV files in the directory
for csv_file in os.listdir(csv_directory):
    if csv_file.endswith('.csv'):
        file_path = os.path.join(csv_directory, csv_file)
        
        # Use the filename (without extension) as the table name
        table_name = os.path.splitext(csv_file)[0]
        
        # Load the CSV file into the SQLite database
        load_csv_to_sqlite(file_path, connection, table_name)

# Close the database connection
connection.close()
print("All files have been processed.")
