YUI.add('cheese-view', function (Y) {

    'use strict';

    Y.CheeseView = Y.Base.create('cheeseView', Y.View, [], {

        events: {
            '.eat': {click: function (e) {
                this.get('model').eatPiece();
            }}
        },

        initializer: function () {
            this.get('model').after('change', this.render, this);
        },

        render: function () {
            var template = Y.one('#template_cheese').getContent(),
                html = Y.Lang.sub(template, this.get('model').toJSON());
            this.get('container').setHTML(html);
        }

    });

}, '0.1', {requires: ['view', 'cheese-model']});