#include <Wire.h>
#include <SPI.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

#define BME_SCK 13
#define BME_MISO 12
#define BME_MOSI 11
#define BME_CS 10

#define SEALEVELPRESSURE_HPA (1013.25)

Adafruit_BME280 bme;

void setup() {
    Serial.begin(9600);
    while(!Serial);
    unsigned status;
    status = bme.begin(0x76); // bme280 znajduje sie pod adresem 0x76 (domyslna wartosc 0x77)
    delay(5000); // pierwszy pomiar po 5s
}


void loop() { 
    printValues();
    delay(180000); // odstep pomiedzy pomiarami
}


void printValues() {
    //odczytywanie danych oraz wysylanie ich poprzez serial
    Serial.println(bme.readTemperature());
    Serial.println(bme.readPressure() / 100.0F);
    Serial.println(bme.readHumidity());
}
