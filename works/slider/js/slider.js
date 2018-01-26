// jshint esversion: 6

(function() {
	class Slider {
		constructor($node, data) {
			this.$node = $node;
			this.data = data;
			this.currentIndex = 0;
			this.buildHTML(this.data, this.$node);
			this.bindEvents();
			this.$tabLinks = this.$node.find('.button');
			this.widthImage = null;
			// this.widthImage = 330;
			this.timeoutPlay = null;
			this.timeout = null;

			this.play();
		}


		bindEvents() {
			let _this = this;

			this.$node.on("click", ".button", (function(event) {
				clearInterval(this.timeoutPlay);
				clearTimeout(this.timeout);

				this.currentIndex = this.$tabLinks.index(event.target);
				this.go(this.currentIndex);

				this.timeout = setTimeout((function() {
					this.play();
					console.log('play again', this.timeout);
				}).bind(this), 5000);

			}).bind(this));
		}


		play() {
			this.go(this.currentIndex);

			this.timeoutPlay = setInterval((function() {
				this.next();
			}).bind(this), 2000);
		}


		buildHTML(data, node) {
			const structure = `
			<div class="slider__control"></div>
			<div class="slider__content">
				<div class="slider__wrapper"></div>
			</div>
			`;

			$(structure).appendTo(node);

			data.forEach(file => {
				file = file.split('.');
				let fileName = file[0];
				let fileExtension = file[1];

				const button = $('<a>').attr({
					href: '#'
				}).addClass('button');

				const image = $('<img>').attr({
					src: `img/${fileName}.${fileExtension}`
				}).addClass('image');

				node.find('.slider__control').append(button);
				node.find('.slider__wrapper').append(image);

			});

			let $image = node.find('.image').eq(0);

			$image.on('load', (function() {
				this.widthImage = $image.width();
			}).bind(this));

		}


		highlightsActive(index) {
			this.$tabLinks.eq(index).addClass('button_active').siblings().removeClass('button_active');
		}


		go(index) {
			this.highlightsActive(index);

			this.$node.find('.slider__wrapper').stop().animate({
				left: index * -this.widthImage + 'px'
			}, 1000);
		}


		next() {
			this.currentIndex++;

			if (this.currentIndex >= this.data.length) {
				this.currentIndex = 0;
			}

			this.go(this.currentIndex);
		}


	}


	window.Slider = Slider;


}());