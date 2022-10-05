const If = function (bool) {
    this.chain = [bool];
    return this;
};

If.prototype = {
    then: function (cb) {
        this._then = cb;
        return this;
    },
    elseif: function (bool, cb) {
        this.chain.push([bool, cb]);
        return this;
    },
    else: function (cb) {
        this._else = cb;
        return this;
    },
    do: function () {
        if (this.chain[0]) {
            return this._then();
        } else {
            if (this.chain.length > 1) {
                for (let i = 1; i < this.chain.length; i++) {
                    if (this.chain[i][0]) {
                        return this.chain[i][1]();
                    }
                }
            }
            return this._else();
        }
    }
};

module.exports = If;
