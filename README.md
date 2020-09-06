# Weather Station
## 1. Autorzy
----
Rafał Rychwalski & Karol Skowronek

## 2. O projekcie
----
Projekt przedstawia mobilną stację pogodową opartą na mikrokontrolerze Arduino Yún oraz czujniku temperatury, ciśnienia i wilgotności. Stacja przesyła dane do lokalnie postawionej strony internetowej i wizualizuje owe dane w postaci wykresów.

## 3. Wykorzystane komponenty
----
- Arduino Yún
- Czujnik temperatury, ciśnienia i wilgotności BME/BMP 280
- Kabel USB <-> MicroUSB
- Przewody połączeniowe męsko-żeńskie
## 4. Opis wykorzystanych części
----
* Arduino Yún
![GitHub Arduino](/Images/arduino.PNG)
![GitHub Arduino](/Images/arduino_spec.PNG)

* BME/ BMP280

![GitHub Arduino](/Images/bme.PNG)
## Specyfikacja
- Napięcie zasilania: 1,8 - 5 V DC
- Interfejs: I2C (up to 3,4 MHz), SPI (up to 10 MHz)
- Pomiar ciśnienia: od 300 do1100 hPa
- Pomiar temperatury: od -40 do 85 °C
- Wilgotność: 0-100%
- Dokładność: ±1 hPa; ±1°C; ±3%
- Rozdzielczość: 0.18Pa; 0.01°C; 0.008%
- Interfejs: I2C oraz SPI
- Adresy I2C: SDO LOW 0x76, SDO HIGH 0x77
## 5. Funkcjonalności
----
- Automatyczny pomiar temperatury co 3 minuty
- Automatyczny pomiar ciśnienia co 3 minuty
- Automatyczny pomiar wilgotności co 3 minuty
- Wizualizacja pomiarów w postaci wykresów na lokalnie postawionej stronie internetowej
- Dane na wykresach z ostatniej godziny od wykonania ostatniego pomiaru
- Pełna archiwizacja danych
- Archiwizacja danych odbywa się w plikach .txt
- Dane są czyszczone co włączenie skryptu
- Pełny wgląd do danych jest na podstronie z listą pomiarów
## 6. Schemat montażowy Arduino
----
![GitHub Arduino](/Images/scheme.PNG)
## 7. Zrzuty ekranu
----
![GitHub Arduino](/Images/web1.PNG)
![GitHub Arduino](/Images/web2.PNG)
![GitHub Arduino](/Images/web3.PNG)
![GitHub Arduino](/Images/web4.PNG)
## 8. Wykorzystane technologie
----
* [HTML](https://devdocs.io/html/) 
* [CSS](https://devdocs.io/css/)
* [PHP](https://www.php.net/docs.php) 
* [JavaScript](https://devdocs.io/javascript/t) 
* [Python 3](https://docs.python.org/3/)
* [Serwer Apache](https://httpd.apache.org/)
## 9. O co można rozbudować projekt
----
Propozycje rozbudowy projektu:
- Wykupić domenę internetową
- Dołączyć wiatromierz
- Dołączyć wyświetlacz LCD 2x16
## 10. Kody źródłowe
----
* [BME280](https://github.com/adafruit/Adafruit_BME280_Library)
* [WYKRESY](https://developers.google.com/chart/interactive/docs/gallery/linechart)
