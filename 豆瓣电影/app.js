(function (window,document){
    'use strict'; //以下是严格模式下注入方式
    var app = angular.module('app',['ngRoute','app.movieList','app.movieDetail']);
    app.config(['$routeProvider',function ($routeProvider){
        $routeProvider.when('/subject/:movieId',{
            controller:'detailController',
            templateUrl:'movie/movie-detail.html'
        }).when('/:type',{
            templateUrl:'movie/movie-list.html',
            controller:'listController'
        }).otherwise({
            redirectTo:'/in_theaters'
        })
    }]);
    app.constant('URLConfig',{
        appUrl:'https://api.douban.com/v2/movie/',
        count:30
    });
    //app.controller('listController',function (){
    //
    //});
    app.directive('selectLink',function (){
        var item = [];
        return function (scope,element,attr){
            item.push(element);
            console.log(element);
            element.bind('click',function (){
                item.forEach(function (item){
                    item.removeClass("active");
                });
                element.addClass('active')
            });
            console.log(arguments);
        }
    })
})(window,document);