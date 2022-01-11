angular.module('tutorialCtrlModule', [])
    //scope es un servicio con $, lleva el controlador a la vista, se refiere al modelo,
    .controller("TutorialCtrl", ["$scope", "Calculations", function ($scope, Calculations) {
        $scope.tutorialObject = {};
        $scope.tutorialObject.name = "Elizabeth";
        $scope.tutorialObject.lastname = "Rangel";
        $scope.tutorialObject.title = "MainPage";
        $scope.tutorialObject.subtitle = "subtitle";
        $scope.tutorialObject.bindOutput = 2

        $scope.timeTwo = function () {
            //$scope.tutorialObject.bindOutput *= 2;
            $scope.tutorialObject.bindOutput = Calculations.timeTwo($scope.tutorialObject.bindOutput);

        }
        Calculations.pitagorasTeorema()
    }])
    .directive("erWelcomeMessage", function () {
        return {
            //A: atributo, E: elemento, M: comentario, C: Class
            restrict: "AE",
            template: "<div>How u doin'?</div>"
        }
    })

    //crear servicio
    .factory("Calculations", function () {
        var calculations = {};
        calculations.timeTwo = function (a) {
            return a * 2;
        };
        calculations.pitagorasTeorema = function (a, b) {
            return (a * a) + (b * b);
        }

        return calculations;
    })
    ;

