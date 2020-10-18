/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

var level1Missions = [
    {
        id: 1,
        mission: "Para começar, vamos mudar as coisas no seu dia a dia para desencorajar a vontade de comer fast food. Desinstale os aplicativos que você usa para comprar comidas ultraprocessadas.",
        checkboxText: "Desinstalado!",
        coins: 5
    },
    {
        id: 2,
        mission: "Vamos começar com passos pequenos, né? Faça uma refeição saudável e volte aqui para marcar seu progresso.",
        checkboxText: "Feito!",
        coins: 5
    }
]

var level1BonusMissions = [
    {
        id: 1,
        mission: "As missões bônus tem um nível de dificuldade um pouco maior que as missões do seu nível mas são opcionais, portanto não se assuste! Para concluir essa daqui, fique uma semana inteira comendo sempre saudável em uma das refeições do dia. Caso você conclua, irá ganhar moedas bônus!",
        checkboxText: "Eu consegui!",
        coins: 30
    }
]

var level2Missions = [
    {
        id: 1,
        mission: "sdfjkhsdhfgsdkfhsdfks dasdasdasdassfgdfhdt erwerfsdfsdf",
        checkboxText: "Desinstalado!",
        coins: 10
    },
    {
        id: 2,
        mission: "5555555555555555555 5555555555555555555555555 5555555555555555",
        checkboxText: "Feito!",
        coins: 10
    }
]

var level2BonusMissions = [
    {
        id: 1,
        mission: "ai meu deus do ceu que js feio que eu to fazendo mas tudo bem o importante é que funciona né kkkkkkkkk",
        checkboxText: "Eu consegui!",
        coins: 35
    }
]

var level1Text = "Era uma vez um mexilhão feio, que era tão feio, mas tão feio ahsdfajs ajshkd ahj ahkjs dhaahsjkdahksjdas hjashjd ash ahjksd ahjkdhjaks hjadh ashdjk ajshdka hjksdahjk sdhjaksdhjk asdhjkasdh jkashdj kahsd asklfdajsd ajsd ahjskd jhaksdhj kasdh asjdh asdhkj asdh asdkhj asdhjasdhjka shdkjashjd ashkda khjsd hjasdhjka skjd asjhdahsj dashjd asbnda sndb aksbdasjhahsjd"
var level2Text = "Que todo mundo morreu, fim."

var allMissions = [level1Missions, level2Missions]
var allBonusMissions = [level1BonusMissions, level2BonusMissions]
var allLevelTexts = [level1Text, level2Text]

var coins = 0
var missionCount = 0
var currentLevel = 0
var hunger = 100
var hygiene = 100
goToNextLevel()

var hungerInterval = setInterval(function () {
    if (hunger > 0) {
        hunger -= 2
        $("#hunger-bar").css('width', hunger + "%")
    }
}, 10000)

var hygieneInterval = setInterval(function () {
    if (hygiene > 0) {
        hygiene -= 1
        $("#hygiene-bar").css('width', hygiene + "%")
    }
}, 9000)

function initiateLevel(level, missions, bonusMissions) {
    missionCount = missions.length
    $("#level").text("Nível " + level)
    $("#missions").empty()
    $("#next-level").empty()

    for (mission of missions) {
        $("#missions").append(""
        + "<div class=\"col-lg-3\" id='mission" + mission.id +"'>"
        + "<div class=\"panel panel-default\">"
        + "    <div class=\"panel-heading\" style=\"color:#FFFFFF; background-color:#1060D8; border-color:#1060D8\">"
        + "Missão " + mission.id
        + "                    <div class=\"pull-right\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>&nbsp;" + mission.coins + "</div>"
        + "    </div>"
        + "    <div class=\"panel-body\">"
        + "        <p>" + mission.mission + "</p>"
        + "    </div>"
        + "    <div class=\"panel-footer\">"
        + "<input type=\"checkbox\" onchange=\"completeMission(this)\" mission-coins='" + mission.coins + "'>&nbsp;&nbsp;"
        + mission.checkboxText
        + "    </div>"
        + "</div>"
        + "</div>")
    }

    for (mission of bonusMissions) {
        $("#missions").append(""
        + "<div class=\"col-lg-3\" id='bonus" + mission.id +"'>"
        + "            <div class=\"panel panel-yellow\">"
        + "                <div class=\"panel-heading\">"
        + "                    Missão Bônus"
        + "                    <div class=\"pull-right\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>&nbsp;" + mission.coins + "</div>"
        + "                </div>"
        + "                <div class=\"panel-body\">"
        + "                    <p>" + mission.mission + "</p>"
        + "                </div>"
        + "                <div class=\"panel-footer\">"
        + "<input type=\"checkbox\" onchange=\"completeBonusMission(this)\" mission-coins='" + mission.coins + "'>&nbsp;&nbsp;"
        + mission.checkboxText
        + "                </div>"
        + "            </div>"
        + "        </div>")
    }
}

function completeMission(checkbox) {
    $(checkbox).attr("disabled", true)
    missionCount--

    coins += parseInt($(checkbox).attr("mission-coins"))
    $("#coins").html("Sua carteira: " + coins + " moedas")

    if (missionCount == 0) {
        $("#next-level").append(""
        + "<div class=\"col-lg-12 col-lg-push-7\">"
        + "      <button onClick=\"goToNextLevel()\">Próximo nível</button>"
        + "</div>")
    }
}

function completeBonusMission(checkbox) {
    $(checkbox).attr("disabled", true)
    coins += parseInt($(checkbox).attr("mission-coins"))
    $("#coins").html("Sua carteira: " + coins + " moedas")
}

function goToNextLevel() {
    if (currentLevel != 0) {
        $("#history").html(allLevelTexts[currentLevel - 1])
        $("#history").append("<br><br> Você ganhou 10 moedas por ter concluído esse nível!")
        $("#exampleModal").modal('show')
        coins += 10
        $("#coins").html("Sua carteira: " + coins + " moedas")
    }

    currentLevel += 1
    if (currentLevel == 3) {
        $("#next-level").empty()
    } else {
        initiateLevel(currentLevel, allMissions[currentLevel - 1], allBonusMissions[currentLevel - 1])
    }
}

function buyPizza() {
    if (coins < 25) {
        $("#notEnoughMoneyModal").modal('show')
        return
    }

    coins -= 25
    $("#coins").html("Sua carteira: " + coins + " moedas")

    hunger += 30
    $("#hunger-bar").css('width', hunger + "%")
}

function buyApple() {
    if (coins < 10) {
        $("#notEnoughMoneyModal").modal('show')
        return
    }

    coins -= 10
    $("#coins").html("Sua carteira: " + coins + " moedas")

    hunger += 15
    $("#hunger-bar").css('width', hunger + "%")
}

function buySoap() {
    if (coins < 5) {
        $("#notEnoughMoneyModal").modal('show')
        return
    }

    coins -= 5
    $("#coins").html("Sua carteira: " + coins + " moedas")

    hygiene += 10
    $("#hygiene-bar").css('width', hygiene + "%")
}
