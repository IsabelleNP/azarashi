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

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$("#tutorialModal").modal('show')

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
        mission: " Evite as compras rápidas de fastfood. Planeje uma refeição saudável e prepare sua marmita para amanhã. ",
        checkboxText: "Comida pronta!",
        coins: 10
    },
    {
        id: 2,
        mission: "Chegou a hora da bebida! Que tal hoje fazer diferente? Tome bebidas saudáveis durante o dia, como chás, sucos naturais, café descafeinado e água.",
        checkboxText: "Feito!",
        coins: 10
    }
]

var level2BonusMissions = [
    {
        id: 1,
        mission: " Não desanime quando for sair com os amigos, convide eles para comer em um ambiente legal e que traga uma proposta de alimentos saudáveis. Faça uma refeição saudável em grupo.",
        checkboxText: "Feito!",
        coins: 35
    }
]

var level3Missions = [
    {
        id: 1,
        mission: "Hora das compras! Para essa nova etapa é muito importante incorporar alimentos saudáveis à sua lista de compras e evitar guloseimas, alimentos processados e besteiras em geral.",
        checkboxText: "Feito!",
        coins: 15
    },
    {
        id: 2,
        mission: "Mão na massa! Vamos sair das mesmices do dia a dia. A missão de hoje é procurar uma receitar e preparar uma refeição saudável.",
        checkboxText: "Feito!",
        coins: 15
    }
]

var level3BonusMissions = [
    {
        id: 1,
        mission: "Acompanhamento nutricional pode ser o passo crucial para alcançar uma alimentação saudável e equilibrada. Por isso, a missão bônus de hoje é procurar um nutricionista.",
        checkboxText: "Eu consegui!",
        coins: 40
    }
]

var level1Text = "Meus hábitos alimentares sempre chamaram atenção no meu grupo de amigos, mas eu achava normal, e meus amigos também não encaravam como um problema. “Eu sou um guaxinim”, eu pensava, “a gente vive desse tipo de comida mesmo, tá tudo certo”. Meu metabolismo rápido me mantinha em forma mesmo sem que eu tivesse que me esforçar o mínimo pra isso, e minha juventude garantia que eu continuasse me sentindo bem o tempo todo. Mas, não sei se te contaram (pra mim, não contaram), a gente não fica jovem pra sempre. Eu fui cobrado. Vou te contar como."
var level2Text = "As obrigações da vida de um guaxinim não são tão complexas assim. Quer dizer, a gente não tem que trabalhar, produzir e essas baboseiras todas que os humanos fazem, então a gente pode passar mais tempo junto com os outros guaxinins. Cada um tem seu jeito próprio de chamar atenção e fazer amizade, né? Eu não tinha o meu. Até os outros começarem a ver como eu comia e ficarem surpresos com as consequências inexistentes no meu corpo. Inexistentes… Pelo menos era o que eu pensava, né. Eu era o guaxinim descolado por comer lixo ao invés de frutas e essas coisas. Meus problemas de socialização foram resolvidos com o que eu mais gostava na vida: comer. Mas aí depois outros problemas foram criados no lugar."
var level3Text = "No começo, me aproximei de um pessoal que tinha os mesmos hábitos que os meus. Depois, outros guaxinins curiosos viraram meus amigos. Era muito legal chamar atenção assim, sem fazer nada pra isso. Hoje em dia eu mudei, mas continuo chamando a atenção, claro. Sou o guaxinim mais descolado do meu bairro. A gente ia toda madrugada procurar o lixo que a gente chamava de comida, até o dia que eu percebi que tinha alguma coisa de errado comigo."

var allFoodMissions = [level1Missions, level2Missions, level3Missions]
var allFoodBonusMissions = [level1BonusMissions, level2BonusMissions, level3BonusMissions]
var allFoodLevelTexts = [level1Text, level2Text, level3Text]

var level1SocialNetworkMissions = [
    {
        id: 1,
        mission: "Termine o dia de hoje substituindo o hábito de navegar nas redes sociais antes de dormir por um hábito relaxante, como ouvir músicas relaxantes, meditar ou beber chá de ervas.",
        checkboxText: "Sucesso!",
        coins: 5
    },
    {
        id: 2,
        mission: "Criei uma lista de pequenas coisas para fazer no seu tempo livre, assim o seu tempo disponível será mais saudável.",
        checkboxText: "Criado!",
        coins: 7
    }
]

var level1SocialNetworkBonusMissions = [
    {
        id: 1,
        mission: "Desconecte-se e almoce bem. Durante os almoços dessa próxima semana evite seu aparelho eletrônico e deguste seu almoço.",
        checkboxText: "Desconectado!",
        coins: 30
    }
]

var level1SocialNetworkText = "outro texto pra rede social"

var allSocialNetworkMissions = [level1SocialNetworkMissions]
var allSocialNetworkBonusMissions = [level1SocialNetworkBonusMissions]
var allSocialNetworkLevelTexts = [level1SocialNetworkText]

var level1CoffeeMissions = [
    {
        id: 1,
        mission: "Termine o dia de hoje substituindo o hábito de beber café antes de dormir por um bebida mais saldável ou relaxante, como água, suco natural ou chá de ervas.",
        checkboxText: "Sucesso!",
        coins: 5
    },
    {
        id: 2,
        mission: "Comece leve, durante o fim de semana substitua o café por bebidas leves e saudáveis.",
        checkboxText: "Feito!",
        coins: 7
    }
]

var level1CoffeeBonusMissions = [
    {
        id: 1,
        mission: "Monitore a quantidade de café ingerido durante o decorrer do dia e se planeje para nos próximos 3 dias diminuir a quantidade de café da xícara pela metade.",
        checkboxText: "Reduzido!",
        coins: 40
    }
]

var level1CoffeeText = "outro texto pra café"

var allCoffeeMissions = [level1CoffeeMissions]
var allCoffeeBonusMissions = [level1CoffeeBonusMissions]
var allCoffeeLevelTexts = [level1CoffeeText]


var allMissions = [allFoodMissions, allSocialNetworkMissions, allCoffeeMissions]
var allBonusMissions = [allFoodBonusMissions, allSocialNetworkBonusMissions, allCoffeeBonusMissions]
var allLevelTexts = [allFoodLevelTexts, allSocialNetworkLevelTexts, allCoffeeLevelTexts]

var habit = getUrlParameter('habit')

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

    coinsWon = parseInt($(checkbox).attr("mission-coins"))
    coins += coinsWon
    toastr.success("Você ganhou " + coinsWon + " moedas!")

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
    coinsWon = parseInt($(checkbox).attr("mission-coins"))
    coins += coinsWon
    toastr.success("Você ganhou " + coinsWon + " moedas!")
    $("#coins").html("Sua carteira: " + coins + " moedas")
}

function goToNextLevel() {
    if (currentLevel != 0) {
        $("#history").html(allLevelTexts[habit][currentLevel - 1])
        $("#history").append("<br><br> Você ganhou 10 moedas por ter concluído esse nível!")
        $("#exampleModal").modal('show')
        coins += 10
        toastr.success("Você ganhou 10 moedas!")
        $("#coins").html("Sua carteira: " + coins + " moedas")
    }

    currentLevel += 1
    if (currentLevel - 1 == allMissions[habit].length) {
        console.log('fim')
        $("#next-level").empty()
    } else {
        initiateLevel(currentLevel, allMissions[habit][currentLevel - 1], allBonusMissions[habit][currentLevel - 1])
    }
}

function buyPizza() {
    if (coins < 25) {
        $("#notEnoughMoneyModal").modal('show')
        return
    }

    coins -= 25
    toastr.info("Você gastou 25 moedas!")
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
    toastr.info("Você gastou 10 moedas!")
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
    toastr.info("Você gastou 5 moedas!")
    $("#coins").html("Sua carteira: " + coins + " moedas")

    hygiene += 10
    $("#hygiene-bar").css('width', hygiene + "%")
}

var petImagesSource = ["panda_lixo.png", "baleia.png", "bode.png", "Ourico.png", "panda.png"]

document.getElementById("petImage").src = "../resources/pets/" + petImagesSource[habit];
