riotApp.directive("leftSummoner", function(){
    return {
        restrict: 'EA',
        scope: {
            data :'@'
        },
        templateUrl: 'app/leftSummoner/leftSummonerView.html',
        link: function(scope){
            scope.info = angular.fromJson(scope.data);
        }
    }
})