from cProfile import label
from tkinter import *
import os
from unicodedata import name
from PIL import ImageTk, Image

# Main Screen
master = Tk()
master.title('George')

# Functions
def finish_reg():
    name = temp_name.get()
    city = temp_city.get()
    country = temp_country.get()
    password = temp_password.get()
    
    all_accounts = os.listdir()
    
    if name == "" or city == "" or country == "" or password == "":
        notif.config(fg="red", text="Všetky polia povinné!")
        return
    
    for name_check in all_accounts:
        if name == name_check:
            notif.config(fg="red", text="Účet už existuje!")
            return
        else:
            new_file = open(name,"w")
            new_file.write(name+'\n')
            new_file.write(password+'\n')
            new_file.write(city+'\n')
            new_file.write(country+'\n')
            new_file.write('0')
            new_file.close()
            notif.config(fg="green", text="Účet bol vytvorený.")
    
def register():
    # Variables
    global temp_name
    global temp_city
    global temp_country
    global temp_password
    global notif
    
    temp_name = StringVar()
    temp_city = StringVar()
    temp_country = StringVar()
    temp_password = StringVar()
    
    
    # Register Screen
    register_screen = Toplevel(master)
    register_screen.title('Register')
    
    # Labels    
    Label(register_screen, text="Prosím zadajte informácie pre registráciu.", font=("Calibri", 12)).grid(row=0,sticky=N,pady=10)
    Label(register_screen, text="Meno", font=("Calibri", 12)).grid(row=1,sticky=W)
    Label(register_screen, text="Mesto", font=("Calibri", 12)).grid(row=2,sticky=W)
    Label(register_screen, text="Krajina", font=("Calibri", 12)).grid(row=3,sticky=W)
    Label(register_screen, text="Heslo", font=("Calibri", 12)).grid(row=4,sticky=W)
    notif = Label(register_screen, font=("Calibri", 12))
    notif.grid(row=6, sticky=N, pady=10)
    
    # Entries
    Entry(register_screen,textvariable=temp_name).grid(row=1, column=0)
    Entry(register_screen,textvariable=temp_city).grid(row=2, column=0)
    Entry(register_screen,textvariable=temp_country).grid(row=3, column=0)
    Entry(register_screen,textvariable=temp_password,show="*").grid(row=4, column=0)
    
    # Buttons
    Button(register_screen, text="Registrovať", command=finish_reg, font=('Calibri', 12)).grid(row=5,sticky=N,pady=10)

def login_session():
        all_accounts = os.listdir()
        login_name = temp_login_name.get()
        login_password = temp_login_password.get()
        
        for name in all_accounts:
            if name == login_name:
                file = open(name, "r")
                file_data = file.read()
                file_data = file_data.split('\n')
                password = file_data[1]
                
                # Account Dashboard
                if login_password == password:
                    login_screen.destroy()
                    account_dashboard = Toplevel(master)
                    account_dashboard.title('Dashboard')
                    
                    # Labels
                    Label(account_dashboard, text="Osobný účet", font=("Calibri", 12)).grid(row=0, sticky=N, padx=10)
                    Label(account_dashboard, text="Vitaj " + name, font=("Calibri", 12)).grid(row=1, sticky=N, pady=5)
                    
                    # Buttons
                    Button(account_dashboard, text="Inoformácie", font=("Calibri", 12), width=30, command=personal_details).grid(row=2, sticky=N, padx=10)
                    Button(account_dashboard, text="Vložiť", font=("Calibri", 12), width=30, command=deposit).grid(row=3, sticky=N, padx=10)
                    Button(account_dashboard, text="Vybrať", font=("Calibri", 12), width=30, command=withdraw).grid(row=4, sticky=N, padx=10)
                    Button(account_dashboard, text="Nová platba", font=("Calibri", 12), width=30, command=send).grid(row=5, sticky=N, padx=10)
                    Label(account_dashboard).grid(row=5, sticky=N, pady=10)
                    return
                else:
                    login_notif.config(fg="red", text="Heslo neplatné!")
                    return
        login_notif.config(fg="red", text="Účet neplatný!")
        
def deposit():
    print("deposit")

def withdraw():
    print("withdraw")
    
def personal_details():
    # Variables
    file = open(login_name, 'r')
    file_data = file.read()
    user_details = file_data.split('\n')
    details_name = user_details[0]
    details_city = user_details[2]
    details_country = user_details[3]
    details_balance = user_details[4]
    
    # Personal details screen
    personal_details_screen = Toplevel(master)
    personal_details_screen.title("Účet " + name)
    
    # Labels
    Label(personal_details_screen, text="Osobný účet", font=("Calibri", 12)).grid(row=0, sticky=N, padx=10)
    Label(personal_details_screen, text="Meno: " + details_name, font=("Calibri", 12)).grid(row=1, sticky=W, padx=10)
    Label(personal_details_screen, text="Mesto: " + details_city, font=("Calibri", 12)).grid(row=2, sticky=W, padx=10)
    Label(personal_details_screen, text="Krajina: " + details_country, font=("Calibri", 12)).grid(row=3, sticky=W, padx=10)
    Label(personal_details_screen, text="Zostatok na účte: €" + details_balance, font=("Calibri", 12)).grid(row=4, sticky=W, padx=10)
    
def send():
    print("send")
        
def login():
    # Variables
    global temp_login_name
    global temp_login_password
    global login_notif
    global login_screen
    temp_login_name = StringVar()
    temp_login_password = StringVar()
    
    # Login Screen
    login_screen = Toplevel(master)
    login_screen.title('Log in')
    
    # Labels
    Label(login_screen, text="Prihlásenie", font=('Calibri', 12)).grid(row=0, sticky=N, pady=10)
    Label(login_screen, text="Meno", font=('Calibri', 12)).grid(row=1, sticky=W)
    Label(login_screen, text="Heslo", font=('Calibri', 12)).grid(row=2, sticky=W)
    login_notif = Label(login_screen, font=('Calibri', 12))
    login_notif.grid(row=4, sticky=N)
    
    # Entry
    Entry(login_screen, textvariable=temp_login_name).grid(row=1, column=1, padx=5)
    Entry(login_screen, textvariable=temp_login_password, show="*").grid(row=2, column=1, padx=5)
    
    # Button
    Button(login_screen, text="Prihlásenie", command=login_session, width=15, font=('Calibri', 12)).grid(row=3, sticky=N, pady=5, padx=5)

# Image Import
img = Image.open('george.png')
img = img.resize((150,150))
img = ImageTk.PhotoImage(img)

# Labels
Label(master, text="SLSP", font=("Calibri",14)).grid(row=0, sticky=N, pady=10)
Label(master, text="George", font=("Calibri",14)).grid(row=1, sticky=N, pady=10)
Label(master, image=img).grid(row=2,sticky=N,pady=15)

# Buttons
Button(master, text="Registrovať", font=("Calibri", 12), width=20, command=register).grid(row=3,sticky=N)
Button(master, text="Prihlásiť", font=("Calibri", 12), width=20, command=login).grid(row=4,sticky=N,pady=10)

master.mainloop()