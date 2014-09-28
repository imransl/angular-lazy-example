/*global define*/

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (app) {
        app.controller('MainCtrl', MainCtrl);

        function MainCtrl() {
            var vm = this;

            vm.pageTitle = 'Angular Lazyload App';
            vm.authenticated = true;
        }
    });

}());
