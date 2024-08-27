var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {

  $routeProvider

    .when("/", {
      templateUrl: "home_page.html"
    })

    .when("/success_1", {
      templateUrl: "success_1.html"
    })
	.when("/success_2", {
      templateUrl: "success_2.html"
    })
	.when("/success_3", {
      templateUrl: "success_3.html"
    })
	.when("/success_4", {
      templateUrl: "success_4.html"
    })
	.when("/success_5", {
      templateUrl: "success_5.html"
    })
	.when("/success_6", {
      templateUrl: "success_6.html"
    })
	.when("/success_7", {
      templateUrl: "success_7.html"
    })
	.when("/ben_1", {
      templateUrl: "ben_1.html"
    })
	.when("/ben_2", {
      templateUrl: "ben_2.html"
    })
	.when("/ben_3", {
      templateUrl: "ben_3.html"
    })
	.when("/ben_4", {
      templateUrl: "ben_4.html"
    })
	.when("/ben_5", {
      templateUrl: "ben_5.html"
    })
	.when("/ben_6", {
      templateUrl: "ben_6.html"
    })
	.when("/ben_7", {
      templateUrl: "ben_7.html"
    })
	.when("/success_stories", {
      templateUrl: "success_stories.html"
    })
	


});
