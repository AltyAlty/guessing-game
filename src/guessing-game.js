class GuessingGame {
    constructor() {
        // this._greater = false;
        // this._lower = false;

        this._min = 0;
        this._max = 0;
        this._mid = 0;
    };

    setRange(min, max) {
        this._min = min;
        this._max = max;
    };

    guess() {
        // if (this._lower !== true && this._greater !== true) {
        //     this._mid = Math.ceil((this._max + this._min) / 2);
        //     return this._mid;
        // } else if (this._lower === true && this._greater !== true) {
        //     this._mid = Math.ceil((this._max + this._min) / 2);
        //     this._lower = false;
        //     return this._mid;
        // } else if (this._lower !== true && this._greater === true) {
        //     this._mid = Math.ceil((this._max + this._min) / 2);
        //     this._greater = false;
        // };

        this._mid = Math.ceil((this._max + this._min) / 2);

        return this._mid;
    };

    lower() {
        // this._lower = true;
        // this.guess();

        this._max = this._mid;
    };

    greater() {
        // this._greater = true;
        // this.guess();

        this._min = this._mid;
    };
};

module.exports = GuessingGame;