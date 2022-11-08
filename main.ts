radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendNumber(4)
})
radio.setGroup(69)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        radio.sendNumber(3)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        radio.sendNumber(2)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        radio.sendNumber(1)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        radio.sendNumber(0)
    }
})
