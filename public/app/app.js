(function(){

    var app = angular.module("compileSample",[]);

    app.controller("mainController", function($scope){
        let vm = this;

        vm.message = "Hello World!!"
        vm.label = "Please click";

        vm.doSomething = function(){
            vm.message = "Clicked!";
        };
        
    });

    app.directive("otcDynamic", function($compile){
        return {
            bindToController: true,
            controllerAs: 'vm',
            template : "<button>{{vm.label}}</button>"
        }
    })

})();