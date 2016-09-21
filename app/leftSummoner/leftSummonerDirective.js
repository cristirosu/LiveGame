riotApp.directive("summoner", function(){
    return {
        restrict: 'EA',
        scope: {
            data :'@'
        },
        templateUrl: 'app/leftSummoner/summonerView.html',
        link: function(scope){
            scope.info = angular.fromJson(scope.data);
        }
    }
})