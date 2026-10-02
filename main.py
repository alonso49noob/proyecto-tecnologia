def on_button_pressed_a():
    led.plot(randint(0, 4), randint(0, 4))
    basic.pause(500)
    basic.clear_screen()
    while 1 == 1:
        basic.show_number(4 - 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
basic.pause(1000)
basic.clear_screen()

def on_forever():
    pass
basic.forever(on_forever)
