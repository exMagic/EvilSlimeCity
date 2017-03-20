var initState = {

	preload: function(){

		var loadingLabel = game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		game.load.audio('music', 'assets/sound/music.mp3'); // http://opengameart.org/content/rise-of-spirit
		bgSounds = new BGSounds(game);
		
		game.load.image('menu-background', 'assets/img/menu-background.png'); // http://opengameart.org/content/industrial-parallax-background
	
		game.load.spritesheet('monster1', 'assets/img/monster1.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
		game.load.spritesheet('monster2', 'assets/img/monster2.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
	


	},

	init: function () {
		// playing around with scaling on mobile
		if (!game.device.desktop){
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    		this.game.scale.pageAlignHorizontally = true;
    		this.game.scale.pageAlignVertically = true;
		}
	},

	
	create: function() {
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		game.state.start('menu');
	}

};