def on_received_number(receivedNumber):
    pause(200)
    signalStrength = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    basic.show_number(signalStrength)
radio.on_received_number(on_received_number)

signalStrength = 0
radio.set_group(1)

def on_forever():
    radio.send_number(3)
    basic.show_number(signalStrength)
basic.forever(on_forever)
