YUI.add('home-view', function (Y) {

    'use strict';

    Y.HomeView = Y.Base.create('homeView', Y.View, [], {

        render: function () {
            var html = Y.one('#template_home').getContent();
            this.get('container').setHTML(html);
        }

    });

}, '0.1', {requires: ['view']});