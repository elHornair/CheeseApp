YUI.add('cheese-list', function (Y) {

    'use strict';

    Y.CheeseList = Y.Base.create('cheeseList', Y.ModelList, [], {

        model: Y.CheeseModel,

        getTotalPieces: function () {
            var numSlices = 0;
            this.each(function (item) {
                numSlices += item.get('pieces');
            });
            return numSlices;
        },

        getByType: function (type) {
            var filteredList = this.filter(function (item) {
                return item.get('type') === type;
            });
            if (filteredList.length !== 0) {
                return filteredList[0];
            }
        }

    });

}, '0.1', {requires: ['model-list', 'cheese-model']});