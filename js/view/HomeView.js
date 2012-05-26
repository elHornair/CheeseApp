YUI.add('home-view', function (Y) {

    'use strict';

    Y.HomeView = Y.Base.create('homeView', Y.View, [], {

        render: function () {
            var html =
                '<h2>About</h2>' +
                '<h3>About this</h3>' +
                '<ul>' +
                '<li>This is a small demo application to showcase the <a href="http://yuilibrary.com/yui/docs/app/">YUI 3 App Framework</a></li>' +
                '<li>It was created for the <a href="http://techup.ch/646/swissjeese-2012">SwissJeese</a> Meetup on June 2. in Bern</li>' +
                '<li>The sources can be found on <a href="https://github.com/elHornair/CheeseApp">Github</a></li>' +
                '<li>The according slides can be found on <a href="#">Slideshare</a></li>' +
                '</ul>' +
                '<img src="/img/me.jpg" alt="me image" class="thumbnail maxi homepic">' +
                '<h3>About me</h3>' +
                '<ul class="about_me">' +
                '<li>Alain Horner</li>' +
                '<li class="liip">Web developer at <a href="#">Liip</a></li>' +
                '<li class="twitter">Twitter: <a href="https://twitter.com/#!/elHornair">@elHornair</a></li>' +
                '<li class="github">Github: <a href="https://github.com/elHornair">elHornair</a></li>' +
                '</ul>';

            this.get('container').setHTML(html);
            return this;
        }

    });

}, '0.1', {requires: ['view']});