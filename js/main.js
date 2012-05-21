/*global YUI */
YUI({
    modules: {
        'cheese-model': {
            fullpath: "js/model/CheeseModel.js"
        },
        'cheese-view': {
            fullpath: "js/view/CheeseView.js"
        },
        'cheese-list': {
            fullpath: "js/model/CheeseList.js"
        },
        'cheese-list-view': {
            fullpath: "js/view/CheeseListView.js"
        }
    }
}).use('app-base', 'app-transitions', 'cheese-model', 'cheese-view', 'cheese-list', 'cheese-list-view', function (Y) {

    'use strict';

    var app,
        myCheeseList;

    myCheeseList = new Y.CheeseList();
    myCheeseList.add([
        {type: 'Gruyere'},
        {type: 'Emmentaler'},
        {type: 'Jesus'}
    ]);

    app = new Y.App({
        transitions: true,
        viewContainer: '#content',
        views: {
            cheeseList: {
                type: 'CheeseListView'
            },
            cheese: {
                type: 'CheeseView',
                parent: 'cheeseList'
            }
        },
        routes: [{
            path: '/cheese',
            callback: function () {
                this.showView('cheeseList', {
                    model: myCheeseList
                });
                Y.one('#subheading').set('text', 'Mmmmmmh, cheese');
            }
        }, {
            path: '/cheese/:id',
            callback: function (request) {
                var cheeseModel = myCheeseList.getByType(request.params.id);

                if (!Y.Lang.isUndefined(cheeseModel)) {
                    this.showView('cheese', {
                        model: cheeseModel
                    });
                    Y.one('#subheading').set('text', cheeseModel.get('type'));
                } else {
                    this.fire('error', {
                        type : 'cheese not found',
                        error: "There was no cheese with type " + request.params.id + " found"
                    });
                }
            }
        }]
    });

    app.render();
    //app.navigate('/cheese');

});
