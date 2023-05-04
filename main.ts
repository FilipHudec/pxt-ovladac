radio.setTransmitSerialNumber(true)

basic.forever(function() {
    
    let data = {
        x: Math.floor(input.acceleration(Dimension.X)/8),
        y: Math.floor(input.acceleration(Dimension.Y)/8),
        a: input.buttonIsPressed(Button.A),
        b: input.buttonIsPressed(Button.B),
        l: input.logoIsPressed()
    }   
    let sendData = String.fromCharCode(data.x) + String.fromCharCode(data.y) + (data.a ? 1 : 0) + (data.b ? 1 : 0) + (data.l ? 1 : 0)
    
    console.log(sendData)
    radio.sendString(sendData)
    basic.pause(500)
})