edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    PlayMusic()
})
input.onButtonPressed(Button.A, function () {
    music.setVolume(0)
    edubitMotors.brakeMotor(MotorChannel.M2)
})
function PlayMusic () {
    edubitMotors.runMotor(MotorChannel.M2, MotorDirection.Forward, 255)
    music.setVolume(255)
    music.setTempo(120)
    // "Jingle Bells" part 1
    music.playTone(330, music.beat(BeatFraction.Half))
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(150)
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(150)
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(400)
        // "Jingle Bells" part 2
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        // Pause before repeating
        basic.pause(200)
    }
    edubitMotors.brakeMotor(MotorChannel.M2)
    basic.pause(5000)
}
edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 255)
