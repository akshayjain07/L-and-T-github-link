import random
import csv
import openpyxl

# Define ranges for data
it_min, it_max = 1, 5
productivity_min, productivity_max = 30, 80
noise_range = (-0.5, 0.5)  # Range for random noise

# Function to generate productivity based on IT with noise
def get_productivity(it):
  base_productivity = (it - it_min) * (productivity_max - productivity_min) / (it_max - it_min)
  noise = random.uniform(*noise_range)
  return base_productivity + noise

# Generate data
data = []
for _ in range(1000):
  it = random.randint(it_min, it_max)
  productivity = get_productivity(it)
  # Add small random noise to other columns (optional)
  error_1 = random.uniform(*noise_range)
  error_2 = random.uniform(*noise_range)
  data.append((it, productivity, error_1, error_2))

# Export data to CSV
with open("it_productivity.csv", "w", newline="") as f:
  writer = csv.writer(f)
  writer.writerow(["IT", "Productivity", "Error_1", "Error_2"])
  writer.writerows(data)

# Export data to Excel
workbook = openpyxl.Workbook()
sheet = workbook.active
sheet.append(["IT", "Productivity", "Error_1", "Error_2"])
for row in data:
  sheet.append(row)

workbook.save("it_productivity.xlsx")

print("Data generated and saved to it_productivity.csv and it_productivity.xlsx")
