enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    IdleLeft,
    IdleRight,
    JumpingLeft,
    JumpingRight,
    CrouchLeft,
    CrouchRight,
    Flying,
    Walking,
    Jumping
}
namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flier = SpriteKind.create()
}
function initializeAnimations () {
    initializeHeroAnimations()
    initializeCoinAnimation()
}
function giveIntroduction () {
    game.setDialogFrame(img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
`)
    showInstruction("Move with the left and right buttons.")
    showInstruction("Jump with the up or A button.")
}
function initializeCoinAnimation () {
    coinAnimation = animation.createAnimation(ActionKind.Idle, 200)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f a a a a f f . . . . 
. . . . f a a a a a a f . . . . 
. . . f a a a 2 2 a a a f . . . 
. . . f a a a 2 2 a a a f . . . 
. . . f a a a 2 2 a a a f . . . 
. . . f a a a 2 2 a a a f . . . 
. . . . f a a a a a a f . . . . 
. . . . f f a a a a f f . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f f a f a a a f . . . . . 
. . . f a f a a a a a f . . . . 
. . f a f a a a 2 a a f . . . . 
. . f a f a a a 2 2 a a f . . . 
. . f a f a a a 2 2 a a f . . . 
. . f a f a a a 2 a a f . . . . 
. . . f a f a a a a a f . . . . 
. . . . f a f a a a f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f f a f a f f . . . . . 
. . . f f a f a a a f . . . . . 
. . . f a f a a a a f f . . . . 
. . . f a f a a 2 a a f . . . . 
. . . f a f a a 2 a a f . . . . 
. . . f a f a a a a f f . . . . 
. . . f f a f a a a f . . . . . 
. . . . f f a f a f f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f a f a f f . . . . . 
. . . . . f a f a a f . . . . . 
. . . . . f a f a a f . . . . . 
. . . . . f a f a a f . . . . . 
. . . . . f a f a a f . . . . . 
. . . . . f a f a f f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f f a f a f . . . . . 
. . . . . f a a f a f . . . . . 
. . . . . f a a f a f . . . . . 
. . . . . f a a f a f . . . . . 
. . . . . f a a f a f . . . . . 
. . . . . f f a f a f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f f a f a f f . . . . 
. . . . . f a a a f a f f . . . 
. . . . f f a a a a f a f . . . 
. . . . f a a 2 a a f a f . . . 
. . . . f a a 2 a a f a f . . . 
. . . . f f a a a a f a f . . . 
. . . . . f a a a f a f f . . . 
. . . . . f f a f a f f . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f a a a f a f f . . . 
. . . . f a a a a a f a f . . . 
. . . . f a a 2 a a a f a f . . 
. . . f a a 2 2 a a a f a f . . 
. . . f a a 2 2 a a a f a f . . 
. . . . f a a 2 a a a f a f . . 
. . . . f a a a a a f a f . . . 
. . . . . f a a a f a f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
}
function attemptJump () {
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = 0
        hero.vy = -150
    }
}
function animateIdle () {
    mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 100)
    animation.attachAnimation(hero, mainIdleLeft)
    mainIdleLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 f . . 
. f 5 5 5 5 5 5 5 5 5 5 6 f . . 
. f 4 8 8 8 8 8 8 8 8 4 b f . . 
. f 3 3 8 8 8 8 8 8 3 3 3 f . . 
. f 3 f f f b b f f f 3 3 f . . 
. . f 4 4 4 4 4 4 4 4 4 b f . . 
. . . f 4 4 b f f 4 4 b f . . . 
. . . f 4 4 b f f 4 4 b f . . . 
. . . . f f f . . f f f . . . . 
`)
    mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 100)
    animation.attachAnimation(hero, mainIdleRight)
    mainIdleRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 6 5 5 5 5 5 5 5 5 5 5 5 f . 
. f 6 5 5 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f b 4 8 8 8 8 8 8 8 8 4 f . 
. . f 3 3 3 8 8 8 8 8 8 3 3 f . 
. . f 3 3 f f f f f f f f 3 f . 
. . f b 4 4 4 4 4 4 4 4 4 f . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . . f f f . . f f f . . . . 
`)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(hero.isHittingTile(CollisionDirection.Bottom))) {
        hero.vy += 80
    }
})
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100)
    animation.attachAnimation(hero, mainRunLeft)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f 6 6 6 6 6 6 6 f . . . . . 
. f 6 6 6 6 6 6 6 6 6 f . . . . 
. f 5 5 5 5 6 6 6 6 6 f . . . . 
. f 5 5 5 5 5 6 6 6 6 f . . . . 
. f 5 5 5 5 5 5 6 6 6 f . . . . 
. f 5 5 5 5 5 5 5 6 6 f . . . . 
. f 5 5 5 5 5 5 5 5 6 f . . . . 
. . f 8 8 8 4 4 8 8 b f . . . . 
. . f 8 8 3 3 3 8 8 b f . . . . 
. . f b f f 3 3 f f f f . . . . 
. . f 4 4 4 4 4 4 4 b f . . . . 
. . . f 4 4 4 4 b f f . . . . . 
. . . f 4 4 4 4 b f . . . . . . 
. . . . f f f f f . . . . . . . 
`)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f 6 6 6 6 6 6 6 f . . . . . 
. f 6 6 6 6 6 6 6 6 6 f . . . . 
. f 5 5 5 5 6 6 6 6 6 f . . . . 
. f 5 5 5 5 6 6 6 6 6 f . . . . 
. f 5 5 5 5 5 6 6 6 6 f . . . . 
. f 5 5 5 5 5 5 5 6 6 f . . . . 
. f 5 5 5 5 5 5 5 5 6 f . . . . 
. . f 8 8 8 8 4 4 8 b f . . . . 
. . f 8 8 8 8 3 3 8 b f . . . . 
. . f b f f 3 3 3 f f f f . . . 
. . f 4 4 4 4 4 4 4 4 b f f . . 
. . . f 4 4 b f f 4 4 4 f f . . 
. . . . f f f . f f f f f . . . 
`)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f 6 6 6 6 6 6 6 f . . . . . 
. f 6 6 6 6 6 6 6 6 6 f . . . . 
. f 5 5 5 5 6 6 6 6 6 f . . . . 
. f 5 5 5 5 6 6 6 6 6 f . . . . 
. f 5 5 5 5 5 5 6 6 6 f . . . . 
. f 5 5 5 5 5 5 5 6 6 f . . . . 
. f 5 5 5 5 5 5 5 5 6 f . . . . 
. . f 8 8 8 4 4 8 8 b f . . . . 
. . f 8 8 3 3 3 8 8 b f . . . . 
. . f b f f 3 3 f f f f . . . . 
. . f 4 4 4 4 4 4 4 b f . . . . 
. . . f 4 4 4 4 b f f . . . . . 
. . . f 4 4 4 4 b f . . . . . . 
. . . . f f f f f . . . . . . . 
`)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f 6 6 6 6 6 6 6 f . . . . . 
. f 6 6 6 6 6 6 6 6 6 f . . . . 
. f 5 5 5 5 6 6 6 6 6 f . . . . 
. f 5 5 5 5 5 6 6 6 6 f . . . . 
. f 5 5 5 5 5 5 6 6 6 f . . . . 
. f 5 5 5 5 5 5 5 6 6 f . . . . 
. f 5 5 5 5 5 5 5 5 6 f . . . . 
. . f 8 4 4 8 8 8 8 b f . . . . 
. f 3 3 3 b 8 8 8 8 b f . . . . 
f f f 3 3 f f f f f f f . . . . 
f f f 4 4 4 4 4 4 4 b f . . . . 
. f 4 4 b f 4 4 b f f . . . . . 
. f f f f . f f f . . . . . . . 
`)
    mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100)
    animation.attachAnimation(hero, mainRunRight)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f 6 6 6 6 6 6 6 f . . 
. . . . f 6 6 6 6 6 6 6 6 6 f . 
. . . . f 6 6 6 6 6 5 5 5 5 f . 
. . . . f 6 6 6 6 5 5 5 5 5 f . 
. . . . f 6 6 6 5 5 5 5 5 5 f . 
. . . . f 6 6 5 5 5 5 5 5 5 f . 
. . . . f 6 5 5 5 5 5 5 5 5 f . 
. . . . f b 8 8 4 4 8 8 8 f . . 
. . . . f b 8 8 3 3 3 8 8 f . . 
. . . . f f f f 3 3 f f b f . . 
. . . . f b 4 4 4 4 4 4 4 f . . 
. . . . . f f b 4 4 4 4 f . . . 
. . . . . . f b 4 4 4 4 f . . . 
. . . . . . . f f f f f . . . . 
`)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f 6 6 6 6 6 6 6 f . . 
. . . . f 6 6 6 6 6 6 6 6 6 f . 
. . . . f 6 6 6 6 6 5 5 5 5 f . 
. . . . f 6 6 6 6 5 5 5 5 5 f . 
. . . . f 6 6 6 5 5 5 5 5 5 f . 
. . . . f 6 6 5 5 5 5 5 5 5 f . 
. . . . f 6 5 5 5 5 5 5 5 5 f . 
. . . . f b 8 4 4 8 8 8 8 f . . 
. . . . f b 8 3 3 8 8 8 8 f . . 
. . . f f f f 3 3 3 f f b f . . 
. . f f b 4 4 4 4 4 4 4 4 f . . 
. . f f 4 4 4 f f b 4 4 f . . . 
. . . f f f f . . f f f . . . . 
`)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f 6 6 6 6 6 6 6 f . . 
. . . . f 6 6 6 6 6 6 6 6 6 f . 
. . . . f 6 6 6 6 6 5 5 5 5 f . 
. . . . f 6 6 6 6 5 5 5 5 5 f . 
. . . . f 6 6 6 5 5 5 5 5 5 f . 
. . . . f 6 6 5 5 5 5 5 5 5 f . 
. . . . f 6 5 5 5 5 5 5 5 5 f . 
. . . . f b 8 8 4 4 8 8 8 f . . 
. . . . f b 8 8 3 3 3 8 8 f . . 
. . . . f f f f 3 3 f f b f . . 
. . . . f b 4 4 4 4 4 4 4 f . . 
. . . . . f f b 4 4 4 4 f . . . 
. . . . . . f b 4 4 4 4 f . . . 
. . . . . . . f f f f f . . . . 
`)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f 6 6 6 6 6 6 6 f . . 
. . . . f 6 6 6 6 6 6 6 6 6 f . 
. . . . f 6 6 6 6 6 5 5 5 5 f . 
. . . . f 6 6 6 6 5 5 5 5 5 f . 
. . . . f 6 6 6 5 5 5 5 5 5 f . 
. . . . f 6 6 5 5 5 5 5 5 5 f . 
. . . . f 6 5 5 5 5 5 5 5 5 f . 
. . . . f b 8 8 8 8 4 4 8 f . . 
. . . . f b 8 8 8 8 b 3 3 3 f . 
. . . . f f f f f f f 3 3 f f f 
. . . . f b 4 4 4 4 4 4 4 f f f 
. . . . . f f b 4 4 f b 4 4 f . 
. . . . . . . f f f . f f f . . 
`)
}
// Uncommented tiles are unused
function initializeScene () {
    scene.setBackgroundImage(img`
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
    // player spawn point
    scene.setTile(1, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // bumper spawn point
    scene.setTile(2, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(4, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // coin spawn point
    scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(6, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // rock
    scene.setTile(7, img`
f f f f f f f f f f f f f f f f 
f f a a a a a a a f a a a a f f 
f a a c a a a a a f a a a a a f 
f a c a a a a a a f a a a a a f 
f a a a a a a a a f a a a a a f 
f f f f f f f f f f f f f f f f 
f a a a a f a a a a a a a a a f 
f a a a a f a a a a c c a a a f 
f a a a a f a a a c c a a a a f 
f a a a a f a a a a a a a a a f 
f f f f f f f f f f f f f f f f 
f a a a a a a a a f a a a a a f 
f a a a c a a a a f a a a a a f 
f a a c a a a a a f a a a a a f 
f f a a a a a a a f a a a a f f 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(3, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(8, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(9, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(10, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(11, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(12, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(13, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // goal / flag spawn point
    scene.setTile(14, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // ground1
    scene.setTile(15, img`
c c c c a a c c c c c a a c c c 
c c c c a a a c c c c a a c c c 
c c c a a c a a c c c a c c c c 
c c c c a a c c a a a c c c c c 
a c c c c a a c c a a c c c a a 
a a a a c c a c c c a a c a a c 
c c c a a a a a c c c c a a c c 
c c c c c c c a c c c a a a a c 
a c c c c c a a a c a a c c a a 
a a c c c a a c a a c c c c c c 
c a a c c a c c c a c c c c c c 
c c a a a a c c c c a c c c c c 
c c a a a c c c c c a a a c c c 
c a a c c a a c c c c a a a c c 
a a c c c c a a c c c a c a a a 
a c c c c c c a c c c a c c c c 
`, true)
}
function animateJumps () {
    // Because there isn't currently an easy way to say
    // "play this animation a single time and stop at the
    // end", this just adds a bunch of the same frame at
    // the end to accomplish the same behavior
    mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 100)
    animation.attachAnimation(hero, mainJumpLeft)
    mainJumpLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 5 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 f . . 
. f 5 5 5 5 5 5 5 5 5 5 6 f . . 
. f 4 8 8 8 8 8 8 8 8 4 b f . . 
. f 3 3 8 8 8 8 8 8 3 3 3 f . . 
. f 3 f f f b b f f f 3 3 f . . 
. . f 4 4 4 4 4 4 4 4 4 b f . . 
. . . f 4 4 b f f 4 4 b f . . . 
. . . f 4 4 b f f 4 4 b f . . . 
. . . . f f f . . f f f . . . . 
`)
    mainJumpLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 f . . 
. f 5 5 5 5 5 5 5 5 5 5 6 f . . 
. f 4 8 8 8 8 8 8 8 8 4 b f . . 
. f 3 3 8 8 8 8 8 8 3 3 3 f . . 
. f 3 f f f b b f f f 3 3 f . . 
. . f 4 4 4 4 4 4 4 4 4 b f . . 
. . . f 4 4 b f f 4 4 b f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    for (let index = 0; index < 30; index++) {
        mainJumpLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 6 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 6 f . 
. f 5 5 5 5 5 5 5 5 5 5 6 f . . 
. f 5 5 5 5 5 5 5 5 5 5 6 f f . 
. 3 4 b 8 8 8 8 8 8 8 8 b 4 3 . 
. 3 4 8 8 8 8 8 8 8 8 8 8 4 3 . 
. f f f f f b b f f f f f f f . 
. . f 4 4 4 4 4 4 4 4 4 b f . . 
. . . f 4 4 b f f 4 4 b f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
    mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 100)
    animation.attachAnimation(hero, mainJumpRight)
    mainJumpRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 6 6 6 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 6 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f b 4 8 8 8 8 8 8 8 8 4 f . 
. . f d d d 8 8 8 8 8 8 d d f . 
. . f d d f f f b b f f f d f . 
. . f b 4 4 4 4 4 4 4 4 4 f . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . . f f f . . f f f . . . . 
`)
    mainJumpRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 6 6 6 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 6 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f b 4 8 8 8 8 8 8 8 8 4 f . 
. . f 3 3 3 8 8 8 8 8 8 3 3 f . 
. . f 3 3 f f f b b f f f 3 f . 
. . f b 4 4 4 4 4 4 4 4 4 f . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    for (let index = 0; index < 30; index++) {
        mainJumpRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 6 6 6 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 6 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. f f 6 5 5 5 5 5 5 5 5 5 5 f . 
. 3 4 b 8 8 8 8 8 8 8 8 b 4 3 . 
. 3 4 8 8 8 8 8 8 8 8 8 8 4 3 . 
. f f f f f f f b b f f f f f . 
. . f b 4 4 4 4 4 4 4 4 4 f . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
}
// decides whether to change to next level or end the
// game
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    currentLevel += 1
    if (currentLevel < levelMaps.length) {
        game.splash("Next level unlocked!")
        initializeLevel(currentLevel)
    } else {
        game.over(true, effects.confetti)
    }
})
function clearGame () {
    for (let value4 of sprites.allOfKind(SpriteKind.Bumper)) {
        value4.destroy()
    }
    for (let value5 of sprites.allOfKind(SpriteKind.Coin)) {
        value5.destroy()
    }
    for (let value6 of sprites.allOfKind(SpriteKind.Goal)) {
        value6.destroy()
    }
    for (let value7 of sprites.allOfKind(SpriteKind.Flier)) {
        value7.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.disintegrate, 250)
        otherSprite.vy = -50
    } else {
        info.changeLifeBy(-1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function createEnemies () {
    // enemy that moves back and forth
    for (let value of scene.getTilesByType(2)) {
        bumper = sprites.create(img`
. . . 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 1 1 1 1 1 2 2 . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . 2 1 2 2 1 2 2 1 2 . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . 2 1 1 1 2 1 1 1 2 . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . 2 2 1 1 1 1 1 2 2 . . . . . 
. . . 2 1 2 1 2 1 2 . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Bumper)
        value.place(bumper)
        bumper.ay = gravity
        if (Math.percentChance(50)) {
            bumper.vx = Math.randomRange(30, 60)
        } else {
            bumper.vx = Math.randomRange(-60, -30)
        }
    }
}
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
    music.baDing.play()
    info.changeScoreBy(1)
}
function initializeHeroAnimations () {
    animateRun()
    animateIdle()
    animateJumps()
}
function createPlayer (player2: Sprite) {
    player2.ay = 0
    player2.ay = 200
    scene.cameraFollowSprite(player2)
    controller.moveSprite(player2, 100, 0)
    player2.z = 5
    info.setLife(3)
    info.setScore(0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250)
    otherSprite.y += -3
    info.changeScoreBy(3)
    music.baDing.play()
})
function initializeLevel (level: number) {
    clearGame()
    scene.setTileMap(levelMaps[level])
    scene.placeOnRandomTile(hero, 1)
    createEnemies()
    spawnGoals()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function spawnGoals () {
    scene.placeOnRandomTile(sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f 2 2 2 2 f f . . . 
. . . . . . f 2 3 3 2 2 2 f . . 
. . . . . . f 2 3 2 2 2 2 2 f . 
. . . . . . f 3 2 2 2 2 2 f . . 
. . . . . . f 2 2 2 2 f f . . . 
. . . . . . f b d f f . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f d d f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f f . . . 
`, SpriteKind.Goal), 14)
    for (let value3 of scene.getTilesByType(5)) {
        coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f a a a a f f . . . . 
. . . . f a a a a a a f . . . . 
. . . f a a a 2 2 a a a f . . . 
. . . f a a a 2 2 a a a f . . . 
. . . f a a a 2 2 a a a f . . . 
. . . f a a a 2 2 a a a f . . . 
. . . . f a a a a a a f . . . . 
. . . . f f a a a a f f . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Coin)
        value3.place(coin)
        animation.attachAnimation(coin, coinAnimation)
        animation.setAction(coin, ActionKind.Idle)
    }
}
let canDoubleJump = false
let heroFacingLeft = false
let coin: Sprite = null
let bumper: Sprite = null
let mainJumpRight: animation.Animation = null
let mainJumpLeft: animation.Animation = null
let mainRunRight: animation.Animation = null
let mainRunLeft: animation.Animation = null
let mainIdleRight: animation.Animation = null
let mainIdleLeft: animation.Animation = null
let coinAnimation: animation.Animation = null
let currentLevel = 0
let levelMaps: Image[] = []
let gravity = 0
let hero: Sprite = null
hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 6 6 6 6 6 6 6 6 6 6 f . . 
. f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
. f 6 6 6 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 5 5 5 5 5 5 5 5 5 5 f . 
. f 6 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f 6 5 5 5 5 5 5 5 5 5 5 f . 
. . f b 4 8 8 8 8 8 8 8 8 4 f . 
. . f 3 3 3 8 8 8 8 8 8 3 3 f . 
. . f 3 3 f f f b b f f f 3 f . 
. . f b 4 4 4 4 4 4 4 4 4 f . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . f b 4 4 f f b 4 4 f . . . 
. . . . f f f . . f f f . . . . 
`, SpriteKind.Player)
// how long to pause between each contact with a
// single enemy
let invincibilityPeriod = 600
let pixelsToMeters = 30
gravity = 9.81 * pixelsToMeters
levelMaps = [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 1 . . . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . 5 . 7 . . . . . . . . . . . . . . . . . 7 
. . . . 7 . . . 7 . 2 . . 7 . . . 2 7 . 2 . . 2 . 7 . e . . . 7 
f f f f 7 f f f 7 f f f f 7 f f f f 7 f f f f f f 7 f f f f f 7 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 7 5 7 . . . . . . . . . . 
. . . . . . . 7 7 . 7 . . . . . . 7 . 7 5 7 . . . . . . . . . . 
. . . . . . 7 7 7 . 7 . . . . 7 . 7 . 7 5 7 . . . . . . . . . . 
7 . . . . 7 7 7 7 . 7 . . 7 . 7 5 7 5 7 5 7 . . . 5 5 5 5 5 5 5 
7 1 . . . . . . 2 . 7 . . 7 . 2 . . . 2 5 7 . . . . . . . . e . 
7 f f f f f f f f f 7 f f 7 f f f f f f f 7 f f f f f f f f f f 
`, img`
. . . . . . . . . . . . . . . . . . . 3 . . . . . . . . 3 3 3 3 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . 7 3 5 5 5 . . . . . . . . . . . . . . 5 5 5 
. . . . . 7 . . 7 . 7 . 5 5 5 . . . . . . . . . . . . . . 5 5 5 
. 1 . 7 . 7 . 2 2 . 7 . 5 5 5 . . . . . . . . . e . . . . 5 5 5 
f f f 7 f 7 f f f f 7 f f f f f f f f f f f f f f f f f f f f f 
`, img`
. . . . . . . . . . . 7 . . . 3 . . . 3 . . 3 . 3 . . . . . . . 
. . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . 7 . . . . . 5 . . . . 5 . . . 5 . . . . . 
. . . . . 7 . 7 . . . . . . . 2 . . 2 . . 2 . . . 2 . . 2 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . . 7 . . 5 . . 5 . 5 . . 5 . 5 . . 5 . 5 . . . 5 . . . 5 . . 
. 1 7 7 e . . 2 . 2 . . . 2 . . . . . 2 . . . 2 . . . 2 . . . 7 
f f f 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 
`, img`
. 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 . . . . . 
. . . . . 5 . 5 . . . . . 5 5 . . 7 7 7 7 . 7 . . . . . . . . . 
. . . . . . . . . 5 5 5 . . . 5 7 5 5 5 5 . 7 . . . . . . . . . 
. 1 . 7 2 2 2 2 2 2 7 2 2 2 2 2 7 2 2 2 2 2 7 2 . 2 . 2 . e . . 
f f f 7 f f f f f f 7 f f f f f 7 f f f f f 7 f f f f f f f f f 
`, img`
. 3 3 . . . . . . . . . 2 . . . . . . . 3 3 . . . . . . . . . . 
. . . . . . . . . . . . 5 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . 5 7 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 5 5 . 7 7 . . . . 2 2 . . 5 5 5 . . . . . . . 
. . . . . 5 2 5 . 7 7 . . 5 5 . . 7 7 7 7 . . . . . . . . . . 7 
7 . . . 2 7 . 7 . 5 5 5 . . . 5 7 . . . . . . . . . . . . . . 7 
7 1 . 7 . 7 5 7 2 . 7 2 . 2 . 7 7 . 2 . . 2 . . 2 . . . . e . 7 
7 f f 7 f 7 f 7 f f 7 f f f f 7 7 f f f f f f f f f f f f f f 7 
`]
initializeAnimations()
initializeScene()
createPlayer(hero)
initializeLevel(currentLevel)
giveIntroduction()
// set up hero animations
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else if (hero.vx > 0) {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
    	
    } else if (hero.vy < 20 && !(hero.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.JumpingLeft)
        } else {
            animation.setAction(hero, ActionKind.JumpingRight)
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.RunningLeft)
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.RunningRight)
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.IdleLeft)
        } else {
            animation.setAction(hero, ActionKind.IdleRight)
        }
    }
})
// bumper movement
game.onUpdate(function () {
    for (let value8 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value8.isHittingTile(CollisionDirection.Left)) {
            value8.vx = Math.randomRange(30, 60)
        } else if (value8.isHittingTile(CollisionDirection.Right)) {
            value8.vx = Math.randomRange(-60, -30)
        }
    }
})
// Flier movement
game.onUpdate(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Flier)) {
        if (Math.abs(value9.x - hero.x) < 60) {
            if (value9.x - hero.x < -5) {
                value9.vx = 25
            } else if (value9.x - hero.x > 5) {
                value9.vx = -25
            }
            if (value9.y - hero.y < -5) {
                value9.vy = 25
            } else if (value9.y - hero.y > 5) {
                value9.vy = -25
            }
            animation.setAction(value9, ActionKind.Flying)
        } else {
            value9.vy = -20
            value9.vx = 0
            animation.setAction(value9, ActionKind.Idle)
        }
    }
})
// Reset double jump when standing on wall
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
})
