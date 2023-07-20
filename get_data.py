import requests
import json
from datetime import date

today_date = date.today()
end_date = str(today_date.year) + '-' + str(today_date.month) + '-' + str(today_date.day - 1)
print("Data until", end_date)
url = "https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=2023-03-30&endDate=" + end_date
r = requests.get(url)

if r.status_code == 200:
    data = r.json()  # Convert the response text to JSON

    with open("data/season_data.json", "w") as file:
        json.dump(data, file)  # Save the JSON data to a file
        print("Response saved to season_data.json")
else:
    print("Request failed with status code:", r.status_code)
