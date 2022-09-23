input.onButtonPressed(Button.A, function () {
    Intensidad += 100
    if (Intensidad > 1000) {
        Intensidad = 1000
    }
})
input.onButtonPressed(Button.B, function () {
    Intensidad += -100
    if (Intensidad < 0) {
        Intensidad = 0
    }
})
let Intensidad = 0
Intensidad = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Intensidad)
})
