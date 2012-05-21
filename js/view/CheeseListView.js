YUI.add('cheese-list-view', function (Y) {

    'use strict';

    Y.CheeseListView = Y.Base.create('cheeseListView', Y.View, [], {

        _template: '<h2>Mmmmmmh, cheese</h2><p>There are <strong>{pieces} pieces</strong> remaining in total</p><ul class="cheeselist">{itemList}</ul>',
        _itemTemplate: '<li><a href="/cheese/{type}" class="thumbnail mini imgwrapper"><img src="/img/{image}" alt="{type} image"></a><span>Delicious <a href="/cheese/{type}">{type}</a> ({pieces} piece(s) remaining)</span></li>',

        render: function () {
            var container = this.get('container'),
                html,
                renderedItems = '';

            this.get('model').each(function (item) {
                renderedItems += Y.Lang.sub(this._itemTemplate, item.toJSON());
            }, this);

            html = Y.Lang.sub(this._template, {
                pieces: this.get('model').getTotalPieces(),
                itemList: renderedItems
            });

            container.setHTML(html);
            return this;
        }

    });

}, '0.1', {requires: ['view', 'cheese-list']});