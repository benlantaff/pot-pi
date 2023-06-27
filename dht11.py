import Adafruit_DHT
import time
 
DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

humidity, temp = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
temperature = temp * 9/5.0 + 32
print("Temp={0:0.1f}F Humidity={1:0.1f}%".format(temperature, humidity))

field_names = ['temp', 'humidity']

# Dictionary that we want to add as a new row
dict = {'temp': temperature, 'humidity': humidity}

# Open CSV file in append mode
# Create a file object for this file
with open('data.csv', 'a') as f_object:

    dictwriter_object = DictWriter(f_object, fieldnames=field_names)
    dictwriter_object.writerow(dict)
    f_object.close()