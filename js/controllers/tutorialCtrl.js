angular.module('tutorialCtrlModule', [])

    .controller("TutorialCtrl", ["$scope", function ($scope) {
        $scope.tutorialObject = {};
        $scope.tutorialObject.name = "Elizabeth";
        $scope.tutorialObject.lastname = "Rangel";        
        $scope.tutorialObject.title = "MainPage";
        $scope.tutorialObject.subtitle = "subtitle";
        $scope.tutorialObject.bindOutput = 2

        $scope.timeTwo = function () {
            $scope.tutorialObject.bindOutput *= 2;
        }
    }]);

