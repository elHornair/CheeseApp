YUI.add('cheese-list-view', function (Y) {

    'use strict';

    Y.CheeseListView = Y.Base.create('cheeseListView', Y.View, [], {

        render: function () {
            var container = this.get('container'),
                renderedItems = '',
                templateList = Y.one('#template_list').getContent(),
                templateListItem = Y.one('#template_list_item').getContent();

            this.get('model').each(function (item) {
                renderedItems += Y.Lang.sub(templateListItem, item.toJSON());
            }, this);

            container.setHTML(Y.Lang.sub(templateList, {
                pieces: this.get('model').getTotalPieces(),
                itemList: renderedItems
            }));
        }

    });

}, '0.1', {requires: ['view', 'cheese-list']});