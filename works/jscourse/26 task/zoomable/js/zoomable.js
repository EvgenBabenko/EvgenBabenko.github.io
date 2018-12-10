// jshint esversion: 6

$(function() {
  class MakeZoomable {
    constructor(node) {
      this.$node = $(node);

      this.isActiveImage = false;

      this.bindEvents();
    }


    insertImage(name) {
      let buildHTML = `
          <div class="zoomable">
            <div class="zoomable__wrapper">
              
              <div class="ff">
                <img class='zoomable__zoomed' src='img/large/${name}' />
                <span class='zoomable__close'>&#x2716</span>
              </div>
            </div>
          </div>
        `;

      this.$node.append(buildHTML);

      let $zoomed = this.$node.find('.zoomable__zoomed');

      $zoomed.off('load');
      $zoomed.one('load', () => {
        this.widthImage = $zoomed.width();
        this.heightImage = $zoomed.height();

        this.resizeImage();

      });



    }


    bindEvents() {
      this.$node.on('click', 'img', (e) => {
        if (this.isActiveImage) return;
        

        this.isActiveImage = true;

        let $imageSrc = $(e.target).attr('src');
        let imageName = $imageSrc.split('img/small/')[1];

        this.insertImage(imageName);
      });


      this.$node.on('click', '.zoomable__close', () => {
        this.removeImage();
      });


      $(window).keyup((e) => {
        let KEY_ESC = 'Escape';
        if (e.key === KEY_ESC) {
          this.removeImage();
        }
      });


      $(window).on('resize', () => this.resizeImage());

    }

    removeImage() {
      this.$node.find('.zoomable').remove();

      this.isActiveImage = false;
    }


    resizeImage() {
      console.log('widthImage', this.widthImage, 'heightImage', this.heightImage);
      const imageDimensionRatio = 1;

      let widthViewport = $(window).width() * imageDimensionRatio;
      let heightViewport = $(window).height() * imageDimensionRatio;
      console.log('widthViewport', widthViewport, 'heightViewport', heightViewport);


      let minOfViewport = Math.min(widthViewport, heightViewport);

      let $zoomed = this.$node.find('.zoomable__zoomed');
      let $wrapper = this.$node.find('.zoomable__wrapper');

      let imageRatioLandscape = this.widthImage / this.heightImage;
      let imageRatioPortrait = this.heightImage / this.widthImage;

      let currentImageRatio = Math.min(imageRatioLandscape, imageRatioPortrait);
      console.log(imageRatioLandscape, imageRatioPortrait, currentImageRatio);



      if (this.widthImage >= this.heightImage) {
        $zoomed.css({
          width: minOfViewport / currentImageRatio,
          height: minOfViewport,
        });
        $wrapper.css({
          width: minOfViewport / currentImageRatio,
          height: minOfViewport,
        });
      } else {
        $zoomed.css({
          width: minOfViewport * currentImageRatio,
          height: minOfViewport,
        });
        $wrapper.css({
          width: minOfViewport * currentImageRatio,
          height: minOfViewport,
        });
      }



      // $zoomed.off('load');
      // $zoomed.one('load', () => {
      //   let widthImage = $zoomed.width();
      //   let heightImage = $zoomed.height();
      //   console.log(widthImage, heightImage);
      //   // cb(widthImage, heightImage);

      //   console.log($wrapper);

      //   $wrapper.css({
      //     top: $(window).height() / 2 - heightImage / 2,
      //     left: $(window).width() / 2 - widthImage / 2
      //   });
      // });



      // if (this.getOrientation($(window)) === this.getOrientation(MakeZoomable.activeImage)) {
      //   console.log(this.getViewportSize().width * 2, this.getViewportSize().height * 2, height * MakeZoomable.activeImage.width() / MakeZoomable.activeImage.height(), height);
      //   zoomed.css({
      //     width: 'auto',
      //     height: '100%'
      //   });

      //   zoomed.parent().css({
      //     width: height * MakeZoomable.activeImage.width() / MakeZoomable.activeImage.height(),
      //     height: height,
      //     top: this.getViewportSize().height - height / 2 + 'px',
      //     left: this.getViewportSize().width - height * MakeZoomable.activeImage.width() / MakeZoomable.activeImage.height() / 2 + 'px'
      //   });
      // } else {
      //   zoomed.css({
      //     width: '100%',
      //     height: 'auto'
      //   });

      //   zoomed.parent().css({
      //     width: width,
      //     height: width * MakeZoomable.activeImage.height() / MakeZoomable.activeImage.width(),
      //     top: this.getViewportSize().height - width * MakeZoomable.activeImage.height() / MakeZoomable.activeImage.width() / 2 + 'px',
      //     left: this.getViewportSize().width - width / 2 + 'px'
      //   });
      // }

    }


    getOrientation(node) {
      if (node.width() / node.height() > 1) {
        return 'landscape';
      } else {
        return 'portrait';
      }
    }


    getViewportSize() {
      let widthViewport = $(window).width() / 2;
      let heightViewport = $(window).height() / 2;

      return {
        width: widthViewport,
        height: heightViewport
      };
    }

  }


  window.MakeZoomable = MakeZoomable;

}());