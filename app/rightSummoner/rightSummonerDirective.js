riotApp.directive("rightSummoner", function () {
    return {
        restrict: 'EA',
        scope: {
            data: '@'
        },
        templateUrl: 'app/rightSummoner/rightSummonerView.html',
        link: function (scope) {
            scope.info = angular.fromJson(scope.data);
        }
    }
})