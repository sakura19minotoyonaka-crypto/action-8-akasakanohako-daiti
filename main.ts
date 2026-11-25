namespace SpriteKind {
    export const 新しい敵 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`チェスト_開いてない`, function (sprite, location) {
    stage += 1
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    music.setVolume(128)
    init_stage(stage)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ドア`, function (sprite, location) {
    stage = 0
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    music.setVolume(128)
    init_stage(stage)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`きのこタイル1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(1)
    music.setVolume(129)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    damage()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`いぬたぬき_アニメーション_右`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    damage()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ダイヤモンド`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    music.setVolume(128)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`レバー_左`, function (sprite, location) {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    music.setVolume(126)
    tiles.setTileAt(tiles.getTileLocation(22, 12), assets.tile`レバー_右`)
    k = 7
    for (let index = 0; index < 12; index++) {
        tiles.setTileAt(tiles.getTileLocation(k, 13), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(k, 13), false)
        k += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`アイテムブロック3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    get_item(7, 10)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`いぬたぬき_アニメーション_左`,
    200,
    true
    )
})
function get_item (column: number, row: number) {
    mySprite2 = sprites.create(assets.image`きのこ`, SpriteKind.Player)
    mySprite2.vy = -100
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(column, row))
    mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
    info.changeLifeBy(1)
    music.setVolume(129)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
}
function init_stage (stage: number) {
    if (stage == 0) {
        tiles.setCurrentTilemap(tilemap`レベル_1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`背景`)
    } else if (stage == 1) {
        tiles.setCurrentTilemap(tilemap`レベル_2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`背景`)
    } else if (stage == 2) {
        tiles.setCurrentTilemap(tilemap`レベル_3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`背景`)
    } else if (stage == 3) {
        tiles.setCurrentTilemap(tilemap`レベル_4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
        scene.setBackgroundColor(15)
        scene.setBackgroundImage(assets.image`akasaka`)
    } else if (stage == 4) {
        j = 6
        tiles.setCurrentTilemap(tilemap`レベル_5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`背景`)
    } else if (stage == 5) {
        scene.cameraFollowSprite(mySprite)
        tiles.setCurrentTilemap(tilemap`レベル_6`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
        scene.setBackgroundColor(6)
        scene.setBackgroundImage(assets.image`背景`)
    } else if (stage == 6) {
        tiles.setCurrentTilemap(tilemap`レベル_7`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
        scene.setBackgroundColor(10)
        scene.setBackgroundImage(assets.image`nohako`)
        sprites.destroy(mySprite3)
        mySprite3 = sprites.create(assets.image`TNT`, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(15, 10))
        mySprite3.ay = 500
        scene.cameraFollowSprite(mySprite)
        boss_not = 0
    } else if (stage == 7) {
        tiles.setCurrentTilemap(tilemap`レベル_8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 9))
        scene.setBackgroundColor(0)
        scene.setBackgroundImage(assets.image`nohako`)
    } else if (stage == 100) {
        tiles.setCurrentTilemap(tilemap`レベル_7`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
        scene.setBackgroundImage(assets.image`タイトル画像`)
    } else if (stage == 8) {
        tiles.setCurrentTilemap(tilemap`レベル_8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 9))
        scene.setBackgroundColor(10)
        scene.setBackgroundImage(assets.image`akasaka`)
        mySprite4 = sprites.create(assets.image`シルバーフィッシュ_生きてる_右`, SpriteKind.新しい敵)
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(7, 10))
        ememimu = 0
    }
    if (stage < 100) {
        scroller.scrollBackgroundWithSpeed(-30, 0)
    }
}
function damage () {
    if (game.runtime() - dama > 1000) {
        dama = game.runtime()
        info.changeLifeBy(-1)
        mySprite.startEffect(effects.spray)
        mySprite.vy = -150
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        music.setVolume(128)
        music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
        controller.moveSprite(mySprite, 0, 0)
        pause(1000)
        controller.moveSprite(mySprite, 100, 0)
        scene.cameraFollowSprite(mySprite)
        effects.clearParticles(mySprite)
        init_stage(stage)
    }
}
let myEnemy: Sprite = null
let i = 0
let dama = 0
let ememimu = 0
let mySprite4: Sprite = null
let boss_not = 0
let mySprite3: Sprite = null
let j = 0
let mySprite2: Sprite = null
let k = 0
let mySprite: Sprite = null
let stage = 0
info.setScore(0)
info.setLife(3)
stage = 6
mySprite = sprites.create(assets.image`いぬたぬき_右`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
init_stage(stage)
music.setVolume(108)
music.play(music.createSong(assets.song`BGM1`), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`バネ`)) {
        mySprite.vy = -350
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`ボタン_押されてない`)) {
        music.setVolume(124)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        tiles.setTileAt(tiles.getTileLocation(6, 12), assets.tile`ボタン_押された`)
        i = 7
        for (let index = 0; index < 10; index++) {
            tiles.setTileAt(tiles.getTileLocation(i, 13), assets.tile`ブロック0`)
            tiles.setWallAt(tiles.getTileLocation(i, 13), true)
            i += 1
        }
    }
})
game.onUpdate(function () {
    if (stage == 6) {
        if (mySprite3.tilemapLocation().row >= 15) {
            stage += 1
            init_stage(stage)
            game.setGameOverMessage(true, "GAME kuria")
            music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
            music.setVolume(128)
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`アイテムブロック1`)) {
        tiles.setTileAt(tiles.getTileLocation(4, 10), assets.tile`アイテムブロック2`)
        get_item(4, 10)
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`アイテムブロック4`) && mySprite.vy < 0) {
        tiles.setTileAt(tiles.getTileLocation(17, 10), assets.tile`アイテムブロック2`)
        tiles.setWallAt(tiles.getTileLocation(17, 10), true)
        get_item(17, 10)
    }
})
forever(function () {
    if (mySprite.tilemapLocation().row >= 15) {
        damage()
    }
})
forever(function () {
    if (stage == 4) {
        tiles.setTileAt(tiles.getTileLocation(j, 13), assets.tile`ブロック1`)
        tiles.setWallAt(tiles.getTileLocation(j, 13), true)
        tiles.setTileAt(tiles.getTileLocation(j + 1, 13), assets.tile`ブロック1`)
        tiles.setWallAt(tiles.getTileLocation(j + 1, 13), true)
    }
    pause(500)
    if (stage == 4) {
        tiles.setTileAt(tiles.getTileLocation(j, 13), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(j, 13), false)
        j += 1
        if (j == 15) {
            j = 6
        }
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`トゲ1`)) {
        damage()
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`トゲ0`)) {
        damage()
    }
})
forever(function () {
    if (stage == 4) {
        scene.centerCameraAt(mySprite.x, Math.constrain(mySprite.y, 160, 1000))
    }
})
game.onUpdateInterval(500, function () {
    if (stage == 7) {
        if (ememimu == 0) {
            ememimu = 1
            mySprite4.vx = -100
        } else {
            ememimu = 0
            mySprite4.vx = 100
        }
    }
})
game.onUpdateInterval(500, function () {
    if (stage == 6) {
        if (boss_not == 0) {
            boss_not = 1
            mySprite3.vx = -100
        } else {
            boss_not = 0
            mySprite3.vx = 100
        }
    }
})
game.onUpdateInterval(500, function () {
    if (stage == 6) {
        myEnemy = sprites.createProjectileFromSprite(assets.image`発射体`, mySprite3, randint(-50, 0), randint(-50, 0))
    }
})
