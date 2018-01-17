// jshint esversion: 6

(function () {

    class Timer {
        constructor(node) {
            this.t = new Date();
            this.t.setHours(0, 0, 0, 0);
            this.s = new Date();
            this.timerID = 0;
            this.timerStatus = false;
            this.laps = [];

            this.root = node;

            this.buildTemplateHTML();
        }

        buildTemplateHTML() {
            this.root.innerHTML = `
                <div class="row">
                    <div class="col-xs-4">
                        <h2 class="stopwatch-current">00:00:00:000</h2>
                    </div>
                    <div class="col-xs-4 stopwatch-controls">
                        <div class="btn-group btn-group-lg">
                            <button class="btn btn-primary">Start</button>
                            <button class="btn btn-info">Lap</button>
                        </div>
                        <button class="btn btn-danger btn-sm">Reset</button>
                    </div>
                </div>
            `;

            this.BTN_START_STOP = this.root.querySelector('.btn-primary');
            this.BTN_START_STOP.addEventListener('click', () => this.pause());

            const BTN_LAP = this.root.querySelector('.btn-info');
            BTN_LAP.addEventListener('click', () => this.drawLap());

            const BTN_RESET = this.root.querySelector('.btn-danger');
            BTN_RESET.addEventListener('click', () => this.reset());

            this.root.addEventListener('mouseover', () => Timer.activeTimer = this);
        }

        start() {
            const FPS = 60;
            let _this = this;
            
            (function go() {
                _this.t = new Date(_this.t.getTime() + (new Date()).getTime() - _this.s.getTime());
                _this.s = new Date();

                _this.updateView(_this.root.querySelector('.stopwatch-current'));

                _this.timerID = setTimeout(go, 1000 / FPS);
            })();
        }

        pause() {
            if (this.timerStatus) {
                this.timerStatus = false;

                clearTimeout(this.timerID);
                this.BTN_START_STOP.textContent = 'Start';
            }
            else {
                this.s = new Date();
                this.timerStatus = true;

                this.start();
                this.BTN_START_STOP.textContent = 'Stop';
            }
        }

        stop() {
            this.timerStatus = false;

            clearTimeout(this.timerID);
        }

        reset() {
            this.t.setHours(0, 0, 0, 0);
            this.BTN_START_STOP.textContent = 'Start';

            this.stop();
            this.removeLaps();
            this.updateView(this.root.querySelector('.stopwatch-current'));
        }

        drawLap() {
            const label = this.createNode('span', { className: 'label label-danger' }, '×');
            const alert = this.createNode('div', { className: 'alert alert-info' }, '00:00:00:000', label);
            const stopwatchLaps = this.createNode('div', { className: 'stopwatch-laps' }, alert);
            
            const wrapper = this.root.querySelector('.col-xs-4');
            wrapper.insertBefore(stopwatchLaps, wrapper.children[1]);

            this.updateView(wrapper.querySelector('.alert-info'));

            this.laps.push(stopwatchLaps);
        }

        removeLaps() {
            this.laps.forEach(lap => lap.remove());
        }

        createNode(tag, props, ...children) {
            let element = document.createElement(tag);

            Object.keys(props).forEach(key => element[key] = props[key]);

            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }

                element.appendChild(child);
            });

            return element;
        }

        control(keyPressed) {
            if (keyPressed === 'KeyS') {
                this.pause();
            } else if (keyPressed === 'KeyL') {
                this.drawLap();
            } else if (keyPressed === 'KeyR') {
                this.reset();
            }
        }

        updateView(node) {
            let h = this.t.getHours().toString().padStart(2, "0"); //features ES8
            let min = this.t.getMinutes().toString().padStart(2, "0"); //features ES8
            let s = this.t.getSeconds().toString().padStart(2, "0"); //features ES8
            let ms = this.t.getMilliseconds().toString().padStart(3, "0"); //features ES8

            node.childNodes[0].textContent  = `${h}:${min}:${s}:${ms}`;
        }
    }

    document.documentElement.addEventListener('keydown', (e) => Timer.activeTimer.control(e.code));

    document.documentElement.addEventListener('click', ({ target }) => {
        if (!target.classList.contains('label-danger')) return;

        target.parentNode.parentNode.remove();
    }, true);

    window.Timer = Timer;
}());