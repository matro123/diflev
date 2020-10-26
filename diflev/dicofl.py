from tkinter import *

def dico(usrinput) :
    dictionnaire_fr_to_flev = {
        "bonjour" : "bonelo"
    }
    for mot, traduction in dictionnaire_fr_to_flev.items():
        if mot == usrinput:
            return(traduction)
        else:
            return "mot introuvable"


#tkinter
window = Tk()
window.title("Le dictionnaire Flavienien")
window.geometry("500x300")
window.minsize(500, 300)

container = Frame(window)
subcontainer = Frame(container)
titre = Label(container, text = "Veuillez choisir la langue de départ :", font = "Roboto").pack()
option_fr = Button(subcontainer, text="Français", font = "Roboto").pack()
option_flev = Button(subcontainer, text="Flavienien/Evrestien", font = "Roboto").pack()

container.pack(expand=YES)
subcontainer.pack(expand=YES)

motfr = input("Veuillez entrer un mot à traduire")
print (dico(motfr))