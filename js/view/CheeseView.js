YUI.add('cheese-view', function (Y) {

    'use strict';

    Y.CheeseView = Y.Base.create('cheeseView', Y.View, [], {

        _template: '<h2>{type}</h2><img src="/img/{image}" alt="{type} image" class="thumbnail maxi"><p>There are <b>{pieces} piece(s)</b> of delicious {type} remaining.</p><button class="btn btn-large btn-primary eat">Eat a Piece!</button>',

        events: {
            '.eat': {click: 'eatPiece'}
        },

        initializer: function () {
            this.get('model').after('change', this.render, this);
        },

        render: function () {

            var container = this.get('container'),
                html = Y.Lang.sub(this._template, this.get('model').toJSON());

            // TODO: this call somehow throws an error, when the view is not rendered for the first time
            container.setHTML(html);

            return this;
        },

        eatPiece: function (e) {
            this.get('model').eatPiece(e);
        }

    });

}, '0.1', {requires: ['model', 'cheese-model']});