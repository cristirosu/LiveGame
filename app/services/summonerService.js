riotApp.factory("summonerService", function ($http) {
    var summonerService = {};

    summonerService.sayHello = function () {
        console.log("sayHello");
    };

    summonerService.getLiveGameInfo = function(summonerName){
        return $http({
            method: 'GET',
            url: 'http://212.24.104.208:8080/RESTfulExample/rest/lolapi/currentGameInfo?summonerName=' + summonerName
        });
    };

    return summonerService;
});