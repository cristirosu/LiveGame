var riotApp = angular.module("liveGame", []);

riotApp.controller("mainCtrl", function ($scope, summonerService) {
    $scope.test = "Test";
    $scope.isErrorResponse = false;
    $scope.errorMessage = "";
    $scope.requestIsProccesing = false;
    $scope.currentModalData = "";

    $scope.searchLiveGameInfo = function () {
        $scope.requestIsProccesing = true;
        summonerService.getLiveGameInfo($scope.summonerName)
            .then(function successCallback(response) {
                    $scope.isErrorResponse = false;
                    console.log(response.data);
                    $scope.liveGameInfo = response.data;
                    $scope.requestIsProccesing = false;
                },
                function errorCallback(response) {
                    console.log(response.status);
                    $scope.errorMessage = "sss";
                    $scope.isErrorResponse = true;
                    if(response.data.errorMessage){
                        $scope.errorMessage = response.data.errorMessage;
                    }
                    else{
                        $scope.errorMessage = "An unknown error has occured";
                    }
                    $scope.requestIsProccesing = false;
                }
            )
    };

    $scope.setModalData = function(summoner){
        $scope.currentModalData = summoner;
    };

    $scope.printWidth = function(){
        $scope.screenWidth = window.innerWidth;
        console.log("sss");
        console.log(screen.width);
    };

    $scope.searchInputKeyEvent = function(event){
        if(event.keyCode === 13){
            $scope.searchLiveGameInfo();
        } else if(event.keyCode === 27) $scope.summonerName = "";
    };


    $scope.blueFilter = function (item) {
        return item.teamId === 100;
    };

    $scope.purpleFilter = function (item) {
        return item.teamId === 200;
    };

    $scope.testData = {
        gameId: 1520736406,
        gameLength: null,
        gameStarTime: null,
        bannedChampions: [
            {
                championName: "Irelia",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Irelia.png",
                teamId: 100,
                championId: 39
            },
            {
                championName: "Yasuo",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Yasuo.png",
                teamId: 200,
                championId: 157
            },
            {
                championName: "Lucian",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Lucian.png",
                teamId: 100,
                championId: 236
            },
            {
                championName: "Zed",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Zed.png",
                teamId: 200,
                championId: 238
            },
            {
                championName: "Hecarim",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Hecarim.png",
                teamId: 100,
                championId: 120
            },
            {
                championName: "Annie",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Annie.png",
                teamId: 200,
                championId: 1
            }
        ],
        summoners: [
            {
                summonerName: "PaÅ„da",
                summonerId: 36283830,
                championName: "Kalista",
                teamId: 100,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Kalista.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerHeal.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/gold.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6161.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/1301.png"
                },
                soloqDivison: {
                    divisionName: "Kassadin's Maulers",
                    divsionRank: "II",
                    tier: "GOLD",
                    queue: "RANKED_SOLO_5x5",
                    wins: 83,
                    losses: 99
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Damage",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.95 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.945
                        }
                    },
                    {
                        name: "Greater Glyph of Armor",
                        count: 1,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_1_3.png"
                        },
                        description: "+0.7 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Magic Resist",
                        count: 8,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Armor",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_1_3.png"
                        },
                        description: "+1 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Attack Speed",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+4.5% attack speed",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "MarkoThePunisher",
                summonerId: 56303130,
                championName: "Thresh",
                teamId: 100,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Thresh.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerExhaust.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/silver.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6263.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/685.png"
                },
                soloqDivison: {
                    divisionName: "Irelia's Villains",
                    divsionRank: "I",
                    tier: "SILVER",
                    queue: "RANKED_SOLO_5x5",
                    wins: 278,
                    losses: 263
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Damage",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.95 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.945
                        }
                    },
                    {
                        name: "Greater Glyph of Armor",
                        count: 2,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_1_3.png"
                        },
                        description: "+0.7 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Magic Resist",
                        count: 7,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Health",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_3_3.png"
                        },
                        description: "+8 health",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Armor",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_1_3.png"
                        },
                        description: "+4.26 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "TheDudÃ©",
                summonerId: 38035513,
                championName: "Syndra",
                teamId: 100,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Syndra.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerBarrier.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/gold.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6362.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/1109.png"
                },
                soloqDivison: {
                    divisionName: "Draven's Maulers",
                    divsionRank: "V",
                    tier: "GOLD",
                    queue: "RANKED_SOLO_5x5",
                    wins: 637,
                    losses: 637
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Ability Power",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_3_3.png"
                        },
                        description: "+0.59 ability power",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Magic Resist",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Ability Power",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_3_3.png"
                        },
                        description: "+0.59 ability power",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Ability Power",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+4.95 ability power",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "GoodAndy",
                summonerId: 40657991,
                championName: "Diana",
                teamId: 100,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Diana.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerSmite.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/silver.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6362.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/1229.png"
                },
                soloqDivison: {
                    divisionName: "Alistar's Scions",
                    divsionRank: "II",
                    tier: "SILVER",
                    queue: "RANKED_SOLO_5x5",
                    wins: 226,
                    losses: 216
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Damage",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.95 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.945
                        }
                    },
                    {
                        name: "Greater Glyph of Magic Resist",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Cooldown Reduction",
                        count: 6,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_1_3.png"
                        },
                        description: "-0.83% cooldowns",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Armor",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_1_3.png"
                        },
                        description: "+1 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Attack Speed",
                        count: 1,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+4.5% attack speed",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Ability Power",
                        count: 2,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+4.95 ability power",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "moe163",
                summonerId: 30437539,
                championName: "Darius",
                teamId: 100,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Darius.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerDot.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/gold.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6261.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/549.png"
                },
                soloqDivison: {
                    divisionName: "Fizz's Oracles",
                    divsionRank: "V",
                    tier: "GOLD",
                    queue: "RANKED_SOLO_5x5",
                    wins: 146,
                    losses: 138
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Damage",
                        count: 8,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.95 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.945
                        }
                    },
                    {
                        name: "Greater Mark of Critical Chance",
                        count: 1,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_3_3.png"
                        },
                        description: "+0.93% critical chance",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Magic Resist",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Armor",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_1_3.png"
                        },
                        description: "+1 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Attack Damage",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_1_3.png"
                        },
                        description: "+2.25 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 2.25
                        }
                    }
                ]
            },
            {
                summonerName: "TeaguEe",
                summonerId: 22227819,
                championName: "Evelynn",
                teamId: 200,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Evelynn.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerSmite.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/provisional.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6162.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/1232.png"
                },
                soloqDivison: {
                    divisionName: "Unranked",
                    divsionRank: null,
                    tier: "Unranked",
                    queue: null,
                    wins: 0,
                    losses: 0
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Speed",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_3_3.png"
                        },
                        description: "+1.7% attack speed",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Attack Speed",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+0.64% attack speed",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Scaling Cooldown Reduction",
                        count: 6,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_2_3.png"
                        },
                        description: "-0.09% cooldowns per level (-1.67% at champion level 18)",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Armor",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_1_3.png"
                        },
                        description: "+1 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Attack Speed",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+4.5% attack speed",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "Polo2801",
                summonerId: 39314018,
                championName: "Tryndamere",
                teamId: 200,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Tryndamere.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerDot.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerHaste.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/provisional.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6162.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/588.png"
                },
                soloqDivison: {
                    divisionName: "Unranked",
                    divsionRank: null,
                    tier: "Unranked",
                    queue: null,
                    wins: 0,
                    losses: 0
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Damage",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.95 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.945
                        }
                    },
                    {
                        name: "Greater Glyph of Magic Resist",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Armor",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_1_3.png"
                        },
                        description: "+1 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Attack Damage",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_1_3.png"
                        },
                        description: "+2.25 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 2.25
                        }
                    }
                ]
            },
            {
                summonerName: "Tom369CZ",
                summonerId: 38374337,
                championName: "Akali",
                teamId: 200,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Akali.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerDot.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/platinum.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6164.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/581.png"
                },
                soloqDivison: {
                    divisionName: "Karma's Archons",
                    divsionRank: "V",
                    tier: "PLATINUM",
                    queue: "RANKED_SOLO_5x5",
                    wins: 41,
                    losses: 58
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Magic Penetration",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.87 magic penetration",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Scaling Magic Resist",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_4_3.png"
                        },
                        description: "+0.16 magic resist per level (+3 at champion level 18)",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Scaling Armor",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_2_3.png"
                        },
                        description: "+0.16 armor per level (+3 at champion level 18)",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Ability Power",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+4.95 ability power",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "Kamil1607",
                summonerId: 37002682,
                championName: "Sejuani",
                teamId: 200,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Sejuani.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerExhaust.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/gold.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6263.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/662.png"
                },
                soloqDivison: {
                    divisionName: "Diana's Stalkers",
                    divsionRank: "I",
                    tier: "GOLD",
                    queue: "RANKED_SOLO_5x5",
                    wins: 123,
                    losses: 102
                },
                runeInfo: [
                    {
                        name: "Mark of Attack Damage",
                        count: 6,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_2.png"
                        },
                        description: "+0.74 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.735
                        }
                    },
                    {
                        name: "Glyph of Health",
                        count: 1,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_2.png"
                        },
                        description: "+2.08 health",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Glyph of Magic Resist",
                        count: 8,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_2.png"
                        },
                        description: "+1.04 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Seal of Health",
                        count: 5,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_3_2.png"
                        },
                        description: "+6.24 health",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Quintessence of Health",
                        count: 2,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_2.png"
                        },
                        description: "+20 health",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Mark of Attack Damage",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.95 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.945
                        }
                    },
                    {
                        name: "Greater Seal of Health",
                        count: 4,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_3_3.png"
                        },
                        description: "+8 health",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Health",
                        count: 1,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+26 health",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "Orlando1993",
                summonerId: 35097320,
                championName: "Ezreal",
                teamId: 200,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Ezreal.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerHeal.png",
                    divisionImg: "http://cristi.red:8080/RESTfulExample/base_icons/gold.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6362.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/654.png"
                },
                soloqDivison: {
                    divisionName: "Gragas's Marksmen",
                    divsionRank: "V",
                    tier: "GOLD",
                    queue: "RANKED_SOLO_5x5",
                    wins: 61,
                    losses: 41
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Damage",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.95 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 0.945
                        }
                    },
                    {
                        name: "Greater Glyph of Magic Resist",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Armor",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_1_3.png"
                        },
                        description: "+1 armor",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Attack Damage",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_1_3.png"
                        },
                        description: "+2.25 attack damage",
                        stats: {
                            flatPhysicalDamageMod: 2.25
                        }
                    }
                ]
            }
        ]
    };

});