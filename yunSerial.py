import serial
import datetime

#polaczenie z portem
ser = serial.Serial('COM5')
print(ser.name+"\n----")
ser.flushInput()

#usuniecie starych pomiarow
file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\T.txt', 'w')
file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\C.txt', 'w')
file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\W.txt', 'w')

#zmienna wskazujaca na to jaki pomiar jest wykonywany:
#i == 0 dla temperatury, i == 1 dla cisnienia, i == 2 dla wilgotnosci
i = 0

while True:
        #odczytywanie z portu i dekodowanie do postaci float z 2 miejscami po przecinku
        line = ser.readline()
        decoded_line = float(line[0:len(line) - 1].decode("utf-8"))
        print (decoded_line)

        #zapisywanie danych do plikow z biezacymi pomiarami
        if i == 0:
               file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\T.txt', 'a')
        elif i == 1:
                file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\C.txt', 'a')
        elif i == 2:
               file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\W.txt', 'a')
        file.write(str(decoded_line)+'\n')
        file.close()

        #zapisywanie danych do plikow z wszystkimi pomiarami
        if i == 0:
                file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\T_all.txt', 'a')
                i = 1
        elif i == 1:
                file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\C_all.txt', 'a')
                i = 2
        elif i == 2:
                # zapisanie daty ostatniego pomiaru
                last = datetime.datetime.now()
                file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\date.txt', 'a')
                file.write(str(last.strftime("%Y-%m-%d %H:%M:%S")) + '\n')
                file.close()

                file = open('D:\\XAMPP\\htdocs\stacja_pogodowa\\W_all.txt', 'a')
                i = 0
                print('----')

        file.write(str(decoded_line)+'\n')
        file.close()



