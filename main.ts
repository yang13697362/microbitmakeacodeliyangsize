music.ringTone(262)
basic.showString("Hello!")
basic.pause(100)
basic.showString("Well come to my class ")
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showString("Go to my class")
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.Tortoise)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showString("Well come to my class ")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendValue("What your name teacher", 0)
    basic.pause(100)
    basic.showString("I am  Miss Peng ")
    basic.pause(100)
    basic.showString("What you name")
    basic.pause(100)
    basic.showString(" Tell me please ok")
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . # #
        # # . # #
        # # . # #
        `)
    basic.showString("I'm Li Yang")
    basic.pause(100)
    basic.showIcon(IconNames.Skull)
    basic.showString("Wah this name is good listen")
    basic.pause(100)
    basic.showString("Hello! ")
    basic.pause(100)
    music.ringTone(262)
    basic.showString("We read book together")
    basic.pause(100)
    basic.showString("OK teacher")
    music.ringTone(262)
    basic.showString("See you next time")
    basic.pause(100)
    basic.showString("Bye bye li yang")
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
})
