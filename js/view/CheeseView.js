YUI.add('cheese-view', function (Y) {

    'use strict';

    Y.CheeseView = Y.Base.create('cheeseView', Y.View, [], {

        events: {
            '.eat': {click: 'eatPiece'}
        },

        initializer: function () {
            this.get('model').after('change', this.render, this);
        },

        render: function () {
            var html = Y.Lang.sub(Y.one('#template_cheese').getContent(), this.get('model').toJSON());
            this.get('container').setHTML(html);
        },

        eatPiece: function (e) {
            this.get('model').eatPiece(e);
        }

    });

}, '0.1', {requires: ['view', 'cheese-model']});