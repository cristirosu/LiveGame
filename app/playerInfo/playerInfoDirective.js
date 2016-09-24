riotApp.directive("playerInfo", function(){
    return {
        restrict: 'EA',
        scope: {
            tes :'@'
        },
        templateUrl: 'app/playerInfo/playerInfo.html',
        link: function(scope){
            console.log("123");
            console.log(scope.test);
            scope.info = 3;
        }
    }
})