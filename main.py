signalStrength = 0
radio.set_group(1)
thisTime = control.millis()

def on_received_number(receivedNumber):
    global signalStrength
    signalStrength = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
radio.on_received_number(on_received_number)

def on_forever():
    global signalStrength
    radio.send_number(3)
    basic.show_number(signalStrength)
    if control.millis() - thisTime > 1000:
        if lastSignalStrength > signalStrength:
            # wrong way --> turn
            basic.show_string("w")
            pass
        else:
            # right way --> keep Direction
            basic.show_string("r")
            pass
        thisTime = control.millis() 
        lastSignalStrength = signalStrength
    pause(100)

basic.forever(on_forever)

