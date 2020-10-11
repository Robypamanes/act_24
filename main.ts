input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . # # . .
            . # . # .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . # # # .
            . # . . #
            `)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # # # .
            . # . # .
            `)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, 0)
        basic.pause(100)
        led.unplot(X, 0)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let blinking_surprised_face = 0; blinking_surprised_face <= 15; blinking_surprised_face++) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    }
})
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
}
