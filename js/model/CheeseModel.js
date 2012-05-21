/*global YUI */
YUI.add('cheese-model', function (Y) {

    'use strict';

    Y.CheeseModel = Y.Base.create('cheeseModel', Y.Model, [], {

        allGone: function () {
            return this.get('pieces') === 0;
        },

        eatPiece: function () {
            if (this.allGone()) {
                this.fire('error', {
                    type : 'eat',
                    error: "Oh snap! There isn't any cheese left."
                });
            } else {
                this.set('pieces', this.get('pieces') - 1);
            }
        }
    }, {
        ATTRS: {
            pieces: {
                value: 3
            },
            type: {}
        }
    });

}, '0.1', {requires: ['model']});