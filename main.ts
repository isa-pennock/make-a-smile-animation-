basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        # # # # #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.EigthNote)
    basic.pause(1000)
})
