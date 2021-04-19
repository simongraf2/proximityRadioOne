radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    pause(200)
    let signalStrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(signalStrength)
})
let signalStrength = 0
radio.setGroup(1)
basic.forever(function on_forever() {
    radio.sendNumber(3)
    basic.showNumber(signalStrength)
})
