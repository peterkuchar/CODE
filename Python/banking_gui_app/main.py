from cProfile import label
from tkinter import *
import os
from PIL import ImageTk, Image

# Main Screen
master = Tk()
master.title('Banking App')

# Functions
def finish_reg():
    name = temp_name.get()
    city = temp_city.get()
    country = temp_country.get()
    password = temp_password.get()
    
    all_accounts = os.listdir()
    
    if name == "" or city == "" or country == "" or password == "":
        notif.config(fg="red", text="All fields required!")
        return
    
    for name_check in all_accounts:
        if name == name_check:
            notif.config(fg="red", text="Account already exists!")
            return
        else:
            new_file = open(name,"w")
            new_file.write(name+'\n')
            new_file.write(password+'\n')
            new_file.write(city+'\n')
            new_file.write(country+'\n')
            new_file.close()
            notif.config(fg="green", text="Acoount has been created.")
    
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
    Label(register_screen, text="Please enter your details below to register", font=("Calibri", 12)).grid(row=0,sticky=N,pady=10)
    Label(register_screen, text="Name", font=("Calibri", 12)).grid(row=1,sticky=W)
    Label(register_screen, text="City", font=("Calibri", 12)).grid(row=2,sticky=W)
    Label(register_screen, text="Country", font=("Calibri", 12)).grid(row=3,sticky=W)
    Label(register_screen, text="Password", font=("Calibri", 12)).grid(row=4,sticky=W)
    notif = Label(register_screen, font=("Calibri", 12))
    notif.grid(row=6, sticky=N, pady=10)
    
    # Entries
    Entry(register_screen,textvariable=temp_name).grid(row=1, column=0)
    Entry(register_screen,textvariable=temp_city).grid(row=2, column=0)
    Entry(register_screen,textvariable=temp_country).grid(row=3, column=0)
    Entry(register_screen,textvariable=temp_password,show="*").grid(row=4, column=0)
    
    # Buttons
    Button(register_screen, text="Register", command=finish_reg, font=('Calibri', 12)).grid(row=5,sticky=N,pady=10)
    
def login():
    print("This is a login page")

# Image Import
img = Image.open('george.png')
img = img.resize((150,150))
img = ImageTk.PhotoImage(img)

# Labels
Label(master, text="SLSP", font=("Calibri",14)).grid(row=0, sticky=N, pady=10)
Label(master, text="George", font=("Calibri",14)).grid(row=1, sticky=N, pady=10)
Label(master, image=img).grid(row=2,sticky=N,pady=15)

# Buttons
Button(master, text="Register", font=("Calibri", 12), width=20, command=register).grid(row=3,sticky=N)
Button(master, text="Login", font=("Calibri", 12), width=20, command=login).grid(row=4,sticky=N,pady=10)

master.mainloop()