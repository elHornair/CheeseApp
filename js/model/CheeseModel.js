YUI.add('cheese-model', function (Y) {

    'use strict';

    Y.CheeseModel = Y.Base.create('cheeseModel', Y.Model, [], {
        eatPiece: function () {
            if (this.get('pieces') !== 0) {
                this.set('pieces', this.get('pieces') - 1);
            }
        }
    }, {
        ATTRS: {
            pieces: {
                value: 3
            },
            type: {},
            image: {}
        }
    });

}, '0.1', {requires: ['model']});