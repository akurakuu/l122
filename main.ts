input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let player: game.LedSprite = null
let speed = 250
let blockFreq = 5 * randint(1, 2)
player = game.createSprite(2, 3)
let enemy = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    while (true) {
        while (true) {
            if (enemy.get(LedSpriteProperty.Y) < 4) {
                enemy.change(LedSpriteProperty.Y, 1)
            } else {
                enemy.set(LedSpriteProperty.X, randint(0, 4))
                enemy.set(LedSpriteProperty.Y, 0)
            }
            basic.pause(speed * 5)
        }
        basic.pause(blockFreq)
    }
})
basic.forever(function () {
    while (input.isGesture(Gesture.TiltRight)) {
        player.move(1)
        basic.pause(speed)
    }
    while (input.isGesture(Gesture.TiltLeft)) {
        player.move(-1)
        basic.pause(speed)
    }
})
basic.forever(function () {
    if (enemy.isTouching(player)) {
        music.playTone(262, music.beat(BeatFraction.Double))
        game.gameOver()
    }
})
