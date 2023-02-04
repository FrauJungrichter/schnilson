basic.showString("Hallo")
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Whole))
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.setLedColor(0x0000ff)
    motors.motorPower(100)
    basic.showLeds(`
        # . . . #
        # # . . #
        . . # . #
        # # # . #
        # # # . .
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
    basic.setLedColor(0xffff00)
})
