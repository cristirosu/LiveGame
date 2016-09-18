var riotApp = angular.module("liveGame", []);

riotApp.controller("mainCtrl", function($scope){
    $scope.test = "Test";

    $scope.testData = {
        gameId: 1517738510,
        gameLength: null,
        gameStarTime: null,
        bannedChampions: [
            {
                championName: "Soraka",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Soraka.png",
                teamId: 100,
                championId: 16
            },
            {
                championName: "Fizz",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Fizz.png",
                teamId: 200,
                championId: 105
            },
            {
                championName: "Illaoi",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Illaoi.png",
                teamId: 100,
                championId: 420
            },
            {
                championName: "Zac",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Zac.png",
                teamId: 200,
                championId: 154
            },
            {
                championName: "Yorick",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Yorick.png",
                teamId: 100,
                championId: 83
            },
            {
                championName: "Nidalee",
                bannedChampionImage: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Nidalee.png",
                teamId: 200,
                championId: 76
            }
        ],
        summoners: [
            {
                summonerName: "F5 LionHeart",
                summonerId: 52324738,
                championName: null,
                teamId: 52324738,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Janna.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerExhaust.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/diamond.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6363.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/1301.png"
                },
                soloqDivison: {
                    divisionName: "Kassadin's Warmongers",
                    divsionRank: "V",
                    tier: "DIAMOND",
                    queue: "RANKED_SOLO_5x5",
                    wins: 254,
                    losses: 229
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
                        name: "Greater Glyph of Magic Resist",
                        count: 6,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.34 magic resist",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Glyph of Ability Power",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.19 ability power",
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
                summonerName: "foreverbog",
                summonerId: 54403198,
                championName: null,
                teamId: 54403198,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Sivir.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerHeal.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/platinum.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6161.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/660.png"
                },
                soloqDivison: {
                    divisionName: "Twisted Fate's Spellswords",
                    divsionRank: "I",
                    tier: "PLATINUM",
                    queue: "RANKED_SOLO_5x5",
                    wins: 843,
                    losses: 877
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
                summonerName: "Poqwei",
                summonerId: 25144363,
                championName: null,
                teamId: 25144363,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Ezreal.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerHeal.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/diamond.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6162.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/775.png"
                },
                soloqDivison: {
                    divisionName: "Skarner's Shadehunters",
                    divsionRank: "V",
                    tier: "DIAMOND",
                    queue: "RANKED_SOLO_5x5",
                    wins: 161,
                    losses: 161
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
                        name: "Greater Glyph of Scaling Magic Resist",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_4_3.png"
                        },
                        description: "+0.16 magic resist per level (+3 at champion level 18)",
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
                summonerName: "Brajlex",
                summonerId: 22278850,
                championName: null,
                teamId: 22278850,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Syndra.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerDot.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/platinum.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6362.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/682.png"
                },
                soloqDivison: {
                    divisionName: "Lulu's Runemasters",
                    divsionRank: "V",
                    tier: "PLATINUM",
                    queue: "RANKED_SOLO_5x5",
                    wins: 192,
                    losses: 224
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
                        name: "Greater Glyph of Scaling Cooldown Reduction",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_2_3.png"
                        },
                        description: "-0.09% cooldowns per level (-1.67% at champion level 18)",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Magic Resist",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_3_3.png"
                        },
                        description: "+0.74 magic resist",
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
                summonerName: "sh0q",
                summonerId: 26663798,
                championName: null,
                teamId: 26663798,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Elise.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerSmite.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/diamond.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6362.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/1296.png"
                },
                soloqDivison: {
                    divisionName: "Sejuani's Berserkers",
                    divsionRank: "V",
                    tier: "DIAMOND",
                    queue: "RANKED_SOLO_5x5",
                    wins: 673,
                    losses: 658
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
                        name: "Greater Glyph of Ability Power",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.19 ability power",
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
                summonerName: "WÃ¶lf",
                summonerId: 24358953,
                championName: null,
                teamId: 24358953,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/RekSai.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerSmite.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/platinum.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6262.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/933.png"
                },
                soloqDivison: {
                    divisionName: "Shen's Tricksters",
                    divsionRank: "I",
                    tier: "PLATINUM",
                    queue: "RANKED_SOLO_5x5",
                    wins: 152,
                    losses: 148
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
                summonerName: "hi im Vie",
                summonerId: 32745730,
                championName: null,
                teamId: 32745730,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Malphite.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerTeleport.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/platinum.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6261.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/529.png"
                },
                soloqDivison: {
                    divisionName: "Anivia's Alliance",
                    divsionRank: "I",
                    tier: "PLATINUM",
                    queue: "RANKED_SOLO_5x5",
                    wins: 50,
                    losses: 43
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
                summonerName: "eRs",
                summonerId: 20377516,
                championName: null,
                teamId: 20377516,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Leblanc.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerDot.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/platinum.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6362.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/576.png"
                },
                soloqDivison: {
                    divisionName: "Karthus's Stalkers",
                    divsionRank: "II",
                    tier: "PLATINUM",
                    queue: "RANKED_SOLO_5x5",
                    wins: 79,
                    losses: 83
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
                        name: "Greater Quintessence of Movement Speed",
                        count: 3,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_3_3.png"
                        },
                        description: "+1.5% movement speed",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    }
                ]
            },
            {
                summonerName: "StefanDupeczka",
                summonerId: 32685893,
                championName: null,
                teamId: 32685893,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Ekko.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerTeleport.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/platinum.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6261.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/1111.png"
                },
                soloqDivison: {
                    divisionName: "Skarner's Warriors",
                    divsionRank: "III",
                    tier: "PLATINUM",
                    queue: "RANKED_SOLO_5x5",
                    wins: 236,
                    losses: 212
                },
                runeInfo: [
                    {
                        name: "Greater Mark of Attack Speed",
                        count: 4,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_3_3.png"
                        },
                        description: "+1.7% attack speed",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Mark of Magic Penetration",
                        count: 5,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/r_1_3.png"
                        },
                        description: "+0.87 magic penetration",
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
                        name: "Greater Glyph of Ability Power",
                        count: 1,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_3.png"
                        },
                        description: "+1.19 ability power",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Seal of Scaling Health",
                        count: 9,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/y_4_3.png"
                        },
                        description: "+1.33 health per level (+24 at champion level 18)",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
                    {
                        name: "Greater Quintessence of Scaling Cooldown Reduction",
                        count: 1,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/bl_2_3.png"
                        },
                        description: "-0.28% cooldowns per level (-5% at champion level 18)",
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
                summonerName: "quintessential",
                summonerId: 36486898,
                championName: null,
                teamId: 36486898,
                imgInfo: {
                    championImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Karma.png",
                    summonerSpell1Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerExhaust.png",
                    summonerSpell2Img: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png",
                    divisionImg: "http://localhost:8080/RESTfulExample/base_icons/diamond.png",
                    masteryImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6363.png",
                    profileImg: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/profileicon/661.png"
                },
                soloqDivison: {
                    divisionName: "Sejuani's Berserkers",
                    divsionRank: "IV",
                    tier: "DIAMOND",
                    queue: "RANKED_SOLO_5x5",
                    wins: 258,
                    losses: 244
                },
                runeInfo: [
                    {
                        name: "Glyph of Mana Regeneration",
                        count: 5,
                        image: {
                            full: "http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/b_3_2.png"
                        },
                        description: "+0.26 mana regen / 5 sec.",
                        stats: {
                            flatPhysicalDamageMod: 0
                        }
                    },
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
                        name: "Greater Glyph of Magic Resist",
                        count: 4,
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
            }
        ]
    }
});