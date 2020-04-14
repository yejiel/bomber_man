class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
    this.data = null;
  }

  init(data) {
    this.data = data;
  }
  preload() {
    this.load.image('bg', '/bomberMan/assets/images/ground_bg.png');
    this.load.image('statsPanel', '/bomberMan/assets/images/statsPanel.png');
    this.load.image('box', '/bomberMan/assets/images/box.png');
    this.load.image('metal', '/bomberMan/assets/images/metal.png');
    this.load.image('promptWindow', '/bomberMan/assets/images/promptWindow.png');
    this.load.image('btn_simple', '/bomberMan/assets/images/menu_items/simpleBtn.png');
    this.load.tilemapTiledJSON('map', '/bomberMan/assets/map/map.json');

    this.load.spritesheet('player1', '/bomberMan/assets/spritesheets/player1.png', {
      frameWidth: 62,
      frameHeight: 62
    });

    this.load.spritesheet('player_options', '/bomberMan/assets/spritesheets/player_options.png', {
      frameWidth: 64,
      frameHeight: 64
    });

    this.load.spritesheet('player2', '/bomberMan/assets/spritesheets/player2.png', {
      frameWidth: 62,
      frameHeight: 62
    });

    this.load.spritesheet('player3', '/bomberMan/assets/spritesheets/player3.png', {
      frameWidth: 62,
      frameHeight: 62
    });

    this.load.spritesheet('player4', '/bomberMan/assets/spritesheets/player4.png', {
      frameWidth: 62,
      frameHeight: 62
    });

    this.load.spritesheet('death', '/bomberMan/assets/spritesheets/death.png', {
      frameWidth: 64,
      frameHeight: 64
    });

    this.load.spritesheet('bomb1', '/bomberMan/assets/spritesheets/bomb1.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('bomb2', '/bomberMan/assets/spritesheets/bomb2.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('bomb3', '/bomberMan/assets/spritesheets/bomb3.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('bomb4', '/bomberMan/assets/spritesheets/bomb4.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('explosion', '/bomberMan/assets/spritesheets/explosion_1.png', {
      frameWidth: 256,
      frameHeight: 256
    });
    this.load.spritesheet('explosion2', '/bomberMan/assets/spritesheets/explosion_4.png', {
      frameWidth: 256,
      frameHeight: 256
    });
    this.load.spritesheet('power_ups', '/bomberMan/assets/spritesheets/powerUps.png', {
      frameWidth: 32,
      frameHeight: 32
    });
  }
  create() {
    this.scene.start('menu', this.data);

    this.anims.create({
      key: 'player1_walk',
      frames: this.anims.generateFrameNumbers('player1'),
      frameRate: 5,
      repeat: 1
    });

    this.anims.create({
      key: 'player2_walk',
      frames: this.anims.generateFrameNumbers('player2'),
      frameRate: 5,
      repeat: 1
    });

    this.anims.create({
      key: 'player3_walk',
      frames: this.anims.generateFrameNumbers('player3'),
      frameRate: 5,
      repeat: 1
    });

    this.anims.create({
      key: 'player4_walk',
      frames: this.anims.generateFrameNumbers('player4'),
      frameRate: 5,
      repeat: 1
    });

    this.anims.create({
      key: 'bomb1_anim',
      frames: this.anims.generateFrameNumbers('bomb1'),
      frameRate: 6,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'bomb2_anim',
      frames: this.anims.generateFrameNumbers('bomb2'),
      frameRate: 6,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'bomb3_anim',
      frames: this.anims.generateFrameNumbers('bomb3'),
      frameRate: 6,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'bomb4_anim',
      frames: this.anims.generateFrameNumbers('bomb4'),
      frameRate: 6,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'bomb_detonated_anim',
      frames: this.anims.generateFrameNumbers('bomb1', { start: 12, end: 13 }),
      frameRate: 10,
      repeat: -1,
      hideOnComplete: false
    });

    this.anims.create({
      key: 'explosion_anim_p1',
      frames: this.anims.generateFrameNumbers('explosion', { start: 1, end: 5 }),
      frameRate: 60,
      repeat: 0,
      hideOnComplete: false
    });

    this.anims.create({
      key: 'explosion_anim_p2',
      frames: this.anims.generateFrameNumbers('explosion', { start: 6 }),
      frameRate: 60,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'middle_explosion_small',
      frames: this.anims.generateFrameNumbers('explosion2', { end: 24 }),
      frameRate: 60,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'middle_explosion_big',
      frames: this.anims.generateFrameNumbers('explosion2', { start: 25 }),
      frameRate: 60,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'bomb_powerup_anim',
      frames: this.anims.generateFrameNumbers('power_ups', { start: 6, end: 11 }),
      frameRate: 10,
      repeat: -1,
      hideOnComplete: true
    });
    this.anims.create({
      key: 'fire_powerup_anim',
      frames: this.anims.generateFrameNumbers('power_ups', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
      hideOnComplete: true
    });
    this.anims.create({
      key: 'kick_powerup_anim',
      frames: this.anims.generateFrameNumbers('power_ups', { start: 24, end: 29 }),
      frameRate: 10,
      repeat: -1,
      hideOnComplete: true
    });
    this.anims.create({
      key: 'detonate_powerup_anim',
      frames: this.anims.generateFrameNumbers('power_ups', { start: 12, end: 17 }),
      frameRate: 10,
      repeat: -1,
      hideOnComplete: true
    });
    this.anims.create({
      key: 'speed_powerup_anim',
      frames: this.anims.generateFrameNumbers('power_ups', { start: 18, end: 23 }),
      frameRate: 10,
      repeat: -1,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'death_anim',
      frames: this.anims.generateFrameNumbers('death'),
      frameRate: 24,
      repeat: 0,
      hideOnComplete: false
    });
  }
}
