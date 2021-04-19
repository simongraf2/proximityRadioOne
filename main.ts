let signalStrength = 0
radio.setGroup(1)
let thisTime = control.millis()
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    signalStrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
basic.forever(function on_forever() {
    let thisTime: number;
    let lastSignalStrength: number;
    
    radio.sendNumber(3)
    basic.showNumber(signalStrength)
    if (control.millis() - thisTime > 1000) {
        if (lastSignalStrength > signalStrength) {
            //  wrong way --> turn
            basic.showString("w")
            
        } else {
            //  right way --> keep Direction
            basic.showString("r")
            
        }
        
        thisTime = control.millis()
        lastSignalStrength = signalStrength
    }
    
    pause(100)
})
