YUI.add('home-view', function (Y) {

    'use strict';

    Y.HomeView = Y.Base.create('homeView', Y.View, [], {

        render: function () {
            var html =
                '<h2>About</h2>' +
                '<strong>About this</strong>' +
                '<ul>' +
                '<li>This is a small demo application to showcase the <a href="#">YUI 3 App Framework</a></li>' +
                '<li>It was created for the <a href="#">SwissJeese</a> Meetup on June 2. in Bern</li>' +
                '<li>The sources can be found on <a href="#">Github</a></li>' +
                '<li>The according slides can be found on <a href="#">Slideshare</a></li>' +
                '</ul>' +
                '<strong>About me</strong>' +
                '<img src="/img/me.jpg" alt="me image" class="thumbnail maxi homepic">' +
                '<ul>' +
                '<li>Alain Horner</li>' +
                '<li>Software developer at <a href="#">L//p</a></li>' +
                '<li>Twitter: <a href="#">@elHornair</a></li>' +
                '<li>Github: <a href="#">elHornair</a></li>' +
                '</ul>';

            this.get('container').setHTML(html);
            return this;
        }

    });

}, '0.1', {requires: ['view']});