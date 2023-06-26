import Adafruit_DHT
import time
 
DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4

humidity, temp = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
temperature = temp * 9/5.0 + 32
print("Temp={0:0.1f}F Humidity={1:0.1f}%".format(temperature, humidity))