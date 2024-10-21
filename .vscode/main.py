from tkinter import *
from tkinter import StringVar
from tkinter import Label
from tkinter import Tk
from tkinter import Entry
from tkinter import Button
ANCHO = 540
ALTO = 540
POSX = 400
POSY = 400
width = ANCHO
height = ALTO
anchoalto = str(ANCHO) + "x" + str(ALTO)
posicionx = "+" + str(POSX)
posiciony = "+" + str(POSY)
colorVentana = "pink"
colorFondo = "pink"
colorLetra = "black"
ventana = Tk()
config = "-fullscreen " + anchoalto + " " + posicionx + " " + posiciony + " " + colorVentana
ventana.config(bg=colorVentana)
ventana.geometry(anchoalto + posicionx + posiciony)
ventana.title("alumnos")
frame = Frame()
frame.config(width=ANCHO, height=ALTO)
frame.config(bg=colorVentana)
frame.pack()
id = IntVar()
nombre = StringVar()
apellido = StringVar()
promedio = StringVar()
etiqueteid = Label(frame, text="id: ").place(x=50, y=50)
cajaid = Entry(frame, textvariable=id).place(x=130, y=50)
etiquetaNombre = Label(frame, text="nombre: ").place(x=50, y=90)
cajanombre = Entry(frame, textvariable=nombre).place(x=130, y=90)
etiquetaapellido = Label(frame, text="apellido: ").place(x=50, y=130)
cajaapellido = Entry(frame, textvariable=apellido).place(x=130, y=130)
etiquetapromedio = Label(frame, text="promedio: ").place(x=50, y=170)
cajapromedio = Entry(frame, textvariable=promedio).place(x=130, y=170)
text = Text(frame)
text.place(x=50, y=240, width=430, height=200)
botonAñadir = Button(frame, text="añadir").place(x=100, y=500)
botonBorrar = Button(frame, text="Borrar").place(x=200, y=500)
botonModificar = Button(frame, text="Modificar").place(x=300, y=500)
botonConsultar = Button(frame, text="Consultar").place(x=420, y=500)
ventana.mainloop()