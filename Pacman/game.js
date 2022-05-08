'use strict';
if (!Date.now)
    Date.now = function () { return new Date().getTime(); };
(function () {
    'use strict';
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () { callback(lastTime = nextTime); },
                nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

function Game(id, params) {
    var _ = this;
    var settings = {
        width: 960,
        height: 640
    };
    Object.assign(_, settings, params);
    var $canvas = document.getElementById(id);
    $canvas.width = _.width;
    $canvas.height = _.height;
    var _context = $canvas.getContext('2d');
    var _stages = [];
    var _events = {};
    var _index = 0,
        _hander;
    var Item = function (params) {
        this._params = params || {};
        this._id = 0;
        this._stage = null;
        this._settings = {
            x: 0,
            y: 0,
            width: 20,
            height: 20,
            type: 0,
            color: '#F00',
            status: 1,
            orientation: 0,
            speed: 0,
            location: null,
            coord: null,
            path: [],
            vector: null,
            frames: 1,
            times: 0,
            timeout: 0,
            control: {},
            update: function () { },
            draw: function () { }
        };
        Object.assign(this, this._settings, this._params);
    };
    Item.prototype.bind = function (eventType, callback) {
        if (!_events[eventType]) {
            _events[eventType] = {};
            $canvas.addEventListener(eventType, function (e) {
                var position = _.getPosition(e);
                _stages[_index].items.forEach(function (item) {
                    if (Math.abs(position.x - item.x) < item.width / 2 && Math.abs(position.y - item.y) < item.height / 2) {
                        var key = 's' + _index + 'i' + item._id;
                        if (_events[eventType][key]) {
                            _events[eventType][key](e);
                        }
                    }
                });
                e.preventDefault();
            });
        }
        _events[eventType]['s' + this._stage.index + 'i' + this._id] = callback.bind(this);
    };

    var Map = function (params) {
        this._params = params || {};
        this._id = 0;
        this._stage = null;
        this._settings = {
            x: 0,
            y: 0,
            size: 20,
            data: [],
            x_length: 0,
            y_length: 0,
            frames: 1,
            times: 0,
            cache: false,
            update: function () { },
            draw: function () { },
        };
        Object.assign(this, this._settings, this._params);
    };

    Map.prototype.get = function (x, y) {
        if (this.data[y] && typeof this.data[y][x] != 'undefined') {
            return this.data[y][x];
        }
        return -1;
    };

    Map.prototype.set = function (x, y, value) {
        if (this.data[y]) {
            this.data[y][x] = value;
        }
    };

    Map.prototype.coord2position = function (cx, cy) {
        return {
            x: this.x + cx * this.size + this.size / 2,
            y: this.y + cy * this.size + this.size / 2
        };
    };

    Map.prototype.position2coord = function (x, y) {
        var fx = Math.abs(x - this.x) % this.size - this.size / 2;
        var fy = Math.abs(y - this.y) % this.size - this.size / 2;
        return {
            x: Math.floor((x - this.x) / this.size),
            y: Math.floor((y - this.y) / this.size),
            offset: Math.sqrt(fx * fx + fy * fy)
        };
    };

    Map.prototype.finder = function (params) {
        var defaults = {
            map: null,
            start: {},
            end: {},
            type: 'path'
        };
        var options = Object.assign({}, defaults, params);
        if (options.map[options.start.y][options.start.x] || options.map[options.end.y][options.end.x]) {
            return [];
        }
        var finded = false;
        var result = [];
        var y_length = options.map.length;
        var x_length = options.map[0].length;
        var steps = Array(y_length).fill(0).map(() => Array(x_length).fill(0));
        var _getValue = function (x, y) {
            if (options.map[y] && typeof options.map[y][x] != 'undefined') {
                return options.map[y][x];
            }
            return -1;
        };
        var _next = function (to) {
            var value = _getValue(to.x, to.y);
            if (value < 1) {
                if (value == -1) {
                    to.x = (to.x + x_length) % x_length;
                    to.y = (to.y + y_length) % y_length;
                    to.change = 1;
                }
                if (!steps[to.y][to.x]) {
                    result.push(to);
                }
            }
        };
        var _render = function (list) {//找线路
            var new_list = [];
            var next = function (from, to) {
                var value = _getValue(to.x, to.y);
                if (value < 1) {	//当前点是否可以走
                    if (value == -1) {
                        to.x = (to.x + x_length) % x_length;
                        to.y = (to.y + y_length) % y_length;
                        to.change = 1;
                    }
                    if (to.x == options.end.x && to.y == options.end.y) {
                        steps[to.y][to.x] = from;
                        finded = true;
                    } else if (!steps[to.y][to.x]) {
                        steps[to.y][to.x] = from;
                        new_list.push(to);
                    }
                }
            };
            list.forEach(function (current) {
                next(current, { y: current.y + 1, x: current.x });
                next(current, { y: current.y, x: current.x + 1 });
                next(current, { y: current.y - 1, x: current.x });
                next(current, { y: current.y, x: current.x - 1 });
            });
            if (!finded && new_list.length) {
                _render(new_list);
            }
        };
        _render([options.start]);
        if (finded) {
            var current = options.end;
            if (options.type == 'path') {
                while (current.x != options.start.x || current.y != options.start.y) {
                    result.unshift(current);
                    current = steps[current.y][current.x];
                }
            } else if (options.type == 'next') {
                _next({ x: current.x + 1, y: current.y });
                _next({ x: current.x, y: current.y + 1 });
                _next({ x: current.x - 1, y: current.y });
                _next({ x: current.x, y: current.y - 1 });
            }
        }
        return result;
    };

    var Stage = function (params) {
        this._params = params || {};
        this._settings = {
            index: 0,
            status: 0,
            maps: [],
            audio: [],
            images: [],
            items: [],
            timeout: 0,
            update: function () { }
        };
        Object.assign(this, this._settings, this._params);
    };

    Stage.prototype.createItem = function (options) {
        var item = new Item(options);

        if (item.location) {
            Object.assign(item, item.location.coord2position(item.coord.x, item.coord.y));
        }

        item._stage = this;
        item._id = this.items.length;
        this.items.push(item);
        return item;
    };

    Stage.prototype.resetItems = function () {
        this.status = 1;
        this.items.forEach(function (item, index) {
            Object.assign(item, item._settings, item._params);
            if (item.location) {
                Object.assign(item, item.location.coord2position(item.coord.x, item.coord.y));
            }
        });
    };

    Stage.prototype.getItemsByType = function (type) {
        return this.items.filter(function (item) {
            return item.type == type;
        });
    };

    Stage.prototype.createMap = function (options) {
        var map = new Map(options);

        map.data = JSON.parse(JSON.stringify(map._params.data));
        map.y_length = map.data.length;
        map.x_length = map.data[0].length;
        map.imageData = null;

        map._stage = this;
        map._id = this.maps.length;
        this.maps.push(map);
        return map;
    };

    Stage.prototype.resetMaps = function () {
        this.status = 1;
        this.maps.forEach(function (map) {
            Object.assign(map, map._settings, map._params);
            map.data = JSON.parse(JSON.stringify(map._params.data));
            map.y_length = map.data.length;
            map.x_length = map.data[0].length;
            map.imageData = null;
        });
    };

    Stage.prototype.reset = function () {
        Object.assign(this, this._settings, this._params);
        this.resetItems();
        this.resetMaps();
    };

    Stage.prototype.bind = function (eventType, callback) {
        if (!_events[eventType]) {
            _events[eventType] = {};
            window.addEventListener(eventType, function (e) {
                var key = 's' + _index;
                if (_events[eventType][key]) {
                    _events[eventType][key](e);
                }
                e.preventDefault();
            });
        }
        _events[eventType]['s' + this.index] = callback.bind(this);
    };

    this.start = function () {
        var f = 0;
        var fn = function () {
            var stage = _stages[_index];
            _context.clearRect(0, 0, _.width, _.height);
            _context.fillStyle = '#000000';
            _context.fillRect(0, 0, _.width, _.height);
            f++;
            if (stage.timeout) {
                stage.timeout--;
            }
            if (stage.update() != false) {
                stage.maps.forEach(function (map) {
                    if (!(f % map.frames)) {
                        map.times = f / map.frames;
                    }
                    if (map.cache) {
                        if (!map.imageData) {
                            _context.save();
                            map.draw(_context);
                            map.imageData = _context.getImageData(0, 0, _.width, _.height);
                            _context.restore();
                        } else {
                            _context.putImageData(map.imageData, 0, 0);
                        }
                    } else {
                        map.update();
                        map.draw(_context);
                    }
                });
                stage.items.forEach(function (item) {
                    if (!(f % item.frames)) {
                        item.times = f / item.frames;
                    }
                    if (stage.status == 1 && item.status != 2) {
                        if (item.location) {
                            item.coord = item.location.position2coord(item.x, item.y);
                        }
                        if (item.timeout) {
                            item.timeout--;
                        }
                        item.update();
                    }
                    item.draw(_context);
                });
            }
            _hander = requestAnimationFrame(fn);
        };
        _hander = requestAnimationFrame(fn);
    };

    this.stop = function () {
        _hander && cancelAnimationFrame(_hander);
    };

    this.getPosition = function (e) {
        var box = $canvas.getBoundingClientRect();
        return {
            x: e.clientX - box.left * (_.width / box.width),
            y: e.clientY - box.top * (_.height / box.height)
        };
    }

    this.createStage = function (options) {
        var stage = new Stage(options);
        stage.index = _stages.length;
        _stages.push(stage);
        return stage;
    };

    this.setStage = function (index) {
        _stages[_index].status = 0;
        _index = index;
        _stages[_index].status = 1;
        _stages[_index].reset();
        return _stages[_index];
    };

    this.nextStage = function () {
        if (_index < _stages.length - 1) {
            return this.setStage(++_index);
        } else {
            throw new Error('unfound new stage.');
        }
    };

    this.getStages = function () {
        return _stages;
    };

    this.init = function () {
        _index = 0;
        this.start();
    };
}
