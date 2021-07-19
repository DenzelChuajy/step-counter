input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    let stop = 0
    basic.showNumber(stop)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
let elapsed = 0
let start = 0
let steps = 0
steps = 0
