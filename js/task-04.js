const CounterPlugin = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector);
    this._bindEvents();
    this.counterValue();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.value = refs.container.querySelector('#value')
   
    return refs;
};

CounterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log('🚀 - this._refs.incrementBtn.addEventListener - this', this);
        this.increment();
        this.counterValue();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        console.log('🚀 - this._refs.decrementBtn.addEventListener - this', this);
        this.decrement();
        this.counterValue();
    });
}

CounterPlugin.prototype.counterValue = function () {
    this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

const counter = new CounterPlugin({ rootSelector: '#counter', step: 1, initialValue: 0 });
console.log('🚀 - counter', counter);
