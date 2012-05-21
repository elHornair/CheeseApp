/*global YUI */
YUI.add('cheese-list-view', function (Y) {

    'use strict';

    Y.CheeseListView = Y.Base.create('cheeseListView', Y.View, [], {

        _template: '<p>There are ({pieces} pieces remaining)</p><ul>{itemList}</ul>',
        _itemTemplate: '<li>Delicious <a href="/cheese/{type}">{type}</a> ({pieces} pieces remaining)</li>',

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

}, '0.1', {requires: ['model', 'cheese-list']});