const angular = require('angular');
global.jQuery = require('jquery');
require('angular-animate');
require('angular-aria');
require('angular-touch');
require('bootstrap');
require('bootstrap-material-design');
require('angular-bootstrap-npm');


var app = angular.module('portfolio', ['ui.bootstrap']);

app.controller('galleryCtrl', ['$scope', function($scope) {

  $scope.portfolio = [
    {
      "name": "name1",
      "image": "image1",
      "thumb": "thumb1",
      "desc": "desc1"
    },
    {
      "name": "name2",
      "image": "image2",
      "thumb": "thumb2",
      "desc": "desc2"
    },
    {
      "name": "name3",
      "image": "image3",
      "thumb": "thumb3",
      "desc": "desc3"
    },
    {
      "name": "name4",
      "image": "image4",
      "thumb": "thumb4",
      "desc": "desc4"
    },
    {
      "name": "name5",
      "image": "image5",
      "thumb": "thumb5",
      "desc": "desc5"
    },
    {
      "name": "name6",
      "image": "image6",
      "thumb": "thumb6",
      "desc": "desc6"
    },
    {
      "name": "name7",
      "image": "image7",
      "thumb": "thumb7",
      "desc": "desc7"
    },
    {
      "name": "name8",
      "image": "image8",
      "thumb": "thumb8",
      "desc": "desc8"
    },
    {
      "name": "name9",
      "image": "image9",
      "thumb": "thumb9",
      "desc": "desc9"
    },
    {
      "name": "name10",
      "image": "image10",
      "thumb": "thumb10",
      "desc": "desc10"
    },
    {
      "name": "name11",
      "image": "image11",
      "thumb": "thumb11",
      "desc": "desc11"
    },
    {
      "name": "name12",
      "image": "image12",
      "thumb": "thumb12",
      "desc": "desc12"
    },
    {
      "name": "name13",
      "image": "image13",
      "thumb": "thumb13",
      "desc": "desc13"
    },
    {
      "name": "name14",
      "image": "image14",
      "thumb": "thumb14",
      "desc": "desc14"
    },
    {
      "name": "name15",
      "image": "image15",
      "thumb": "thumb15",
      "desc": "desc15"
    }
  ]

}]);