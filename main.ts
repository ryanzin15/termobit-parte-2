let Temperatura = 0
input.onButtonPressed(Button.A, function () {
    Temperatura = input.temperature()
    basic.showString("" + Temperatura + "c")
})
