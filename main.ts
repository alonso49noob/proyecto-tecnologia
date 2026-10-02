input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.plot(randint(0, 4), randint(0, 4))
    basic.pause(500)
    basic.clearScreen()
    while ((1 as any) == (1 as any)) {
        basic.showNumber(4 - 1)
    }
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.clearScreen()
basic.forever(function on_forever() {
    
})
