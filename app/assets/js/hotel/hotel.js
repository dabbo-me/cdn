var alerte = 0;

function newAlert(e, n, a, t, o, i, l, s) {
    if (typeof a === "undefined" || typeof a === undefined || a === "undefined") {
        a = "Information importante";
    }
    e = "https://habbocity.me/swfs/c_images/notifications/" + e + ".png";
    return alerte += 1, $("#listalerte").append('<div class="hotelalerte' + alerte + '" id="hotel13">\n                <div class="alertebody' + alerte + '" id="hotel14">\n                    <div id="hotel15">\n                        <div id="hotel16">!</div>\n                    </div>\n                    <div id="hotel17">\n                        ' + t + '\n                    </div>\n                    <div id="hotel18">\n                        ' + o + '\n                    </div>\n                    <div id="hotel19">\n                        <img src="https://api.habbocity.me/avatar_image.php?user=' + o + '&headonly=1&head_direction=4"/>\n                    </div>\n                    <div class="alerteimg' + alerte + '" id="hotel20">\n                        <img src="' + e + '"/>\n                    </div>\n                    <div id="hotel21">' + a + '                    </div>                    <div id="hotel22"><div id="hotel22x">' + n + '                    </div><div id="hotel23">\n                        <div onclick=\'closeAlert("' + alerte + '")\' id="hotel24">\n                            Fermer\n                        </div>\n                        <div onclick=\'alertEvent("' + s + '");closeAlert("' + alerte + '")\' id="hotel25">\n                            ' + l + "\n                        </div>\n                    </div></div>\n\n                </div>\n            </div>"), $(".hotelalerte" + alerte).fadeIn(500), $(".alerteimg" + alerte).animate({
        left: "0px"
    }, 800), $(".alertebody" + alerte).animate({
        "margin-left": "-295px"
    }, 500), !0
}
var eventClickable = true;

function alertEvent(e) {
    if (eventClickable) {
        eventClickable = false;
        e.match(/^event:/) ? flashEvent.openlink(e.replace("event:", "")) : window.open(e)
        setTimeout(function() {
            eventClickable = true;
        }, 1000);
    }
}

function closeAlert(e) {
    var n = $(".hotelalerte" + e);
    n.animate({
        left: "-700px"
    }), setTimeout(function() {
        n.fadeOut(500).remove()
    }, 1500)
}

function setHotelVersion(e) {
    $.ajax({
        type: "POST",
        url: "../actions/HotelVersion.php",
        data: {
            type: e
        },
        dataType: "json",
        success: function(e) {}
    })
}
var isCalendarSlidingLeft = false;
var isCalendarSlidingRight = false;
var currentDay = 0;

function openCalendar() {
    $("#ca20").css({
        opacity: "0.2"
    });
    $(".ca1").show().load("Calendar.php", function(responseTxt, statusTxt) {
        if (statusTxt == "success") {
            $("#ca20").css({
                opacity: "1"
            });
        }
    });
}

function closeCalendar() {
    $(".ca1").hide().html(" ");
}

function setCalendarDay(day) {
    currentDay = day;
    $("#calendar-bloc").animate({
        left: "-=" + 202 * day + "px"
    }, 150);
}

function slideCalendarLeft() {
    if (!isCalendarSlidingLeft) {
        var bloc = $("#calendar-bloc");
        isCalendarSlidingLeft = true;
        if ((bloc.width() + bloc.position().left) > 1200) {
            currentDay = currentDay + 1;
            $(".ca5").text("Jour " + (currentDay + 1));
            bloc.animate({
                left: "-=202px"
            }, 150);
        }
        setTimeout(function() {
            isCalendarSlidingLeft = false;
        }, 150);
    }
}

function slideCalendarRight() {
    if (!isCalendarSlidingRight) {
        var bloc = $("#calendar-bloc");
        isCalendarSlidingRight = true;
        if (bloc.position().left < 0) {
            currentDay = currentDay - 1;
            $(".ca5").text("Jour " + (currentDay + 1));
            bloc.animate({
                left: "+=202px"
            }, 150);
        }
        setTimeout(function() {
            isCalendarSlidingRight = false;
        }, 150);
    }
}
var isOpenedGift = false;

function openCalendarGift(element, day) {
    $(element).find(".ca17").html(" ");
    if (!isOpenedGift) {
        isOpenedGift = true;
        $.ajax({
            type: "POST",
            url: "../actions/CalendarOpenGift.php",
            data: {
                day: day
            },
            dataType: "json",
            success: function(json) {
                if (json.reponse === true) {
                    $(element).attr('onclick', '');
                    setCalendarGift(element, json.type, json.texte, json.code);
                }
                isOpenedGift = false;
            }
        });
    }
};

function setCalendarGift(element, type, value, code) {
    var img;
    if (type === "badge") {
        img = "../../swfs/c_images/album1584/" + code + ".gif";
    } else if (type === "item") {
        img = code;
    } else {
        img = "../assets/img/calendar/lot/" + type + ".png";
    }
    $(element).find(".ca17").html('<div class="ca22"></div><img style="z-index:2;top: 0;position: absolute;" src="' + img + '"/><div class="ca18">' + value + '</div>');
}

function startQuickPoll(question) {
    parent.removeHotelWebView();
    $("#quickpoll").show();
    $("#quickpoll-content").animate({
        top: "0px"
    }, 100);
    $("#qpquestion").text(question);
    $("#qpfalse").text("0");
    $("#qptrue").text("0");
}

function updateQuickPoll(voteTrue, voteFalse) {
    voteTrue = parseInt(voteTrue);
    voteFalse = parseInt(voteFalse);
    var percentage = voteFalse + voteTrue;
    var percentageTrue = (voteTrue * 100) / percentage;
    var percentageFalse = (voteFalse * 100) / percentage;
    $("#qpfalsepercent").css({
        width: percentageFalse + "%"
    });
    $("#qptruepercent").css({
        width: percentageTrue + "%"
    });
    $("#qpfalse").text(voteFalse);
    $("#qptrue").text(voteTrue);
}

function endQuickPoll() {
    parent.resetHotelWebView();
    setTimeout(function() {
        $("#quickpoll").hide();
    }, 100);
    $("#qpfalsepercent").css({
        width: "50%"
    });
    $("#qptruepercent").css({
        width: "50%"
    });
    $("#quickpoll-content").animate({
        top: "-200px"
    }, 100);
}

function voteQuickPoll(vote) {
    writeMessage("/habletComposer?id=quickpoll&type=vote&value=" + vote);
}

function startDiamondsBooster(value) {
    $("#diamondsbooster").show();
    $("#diamondsbooster").animate({
        top: "0px"
    }, 100);
    $("#diamondsbooster-progress").css({
        width: "0%"
    });
    $("#diamondsbooster-value").text("0/14400 points avant de gagner les diamants.");
    $("#diamondsbooster-rewards").text("x" + value);
}

function updateDiamondsBooster(value) {
    var percentage = Math.ceil((value * 100) / 14400);
    $("#diamondsbooster-progress").css({
        width: percentage + "%"
    });
    $("#diamondsbooster-value").text(value + "/14400 points avant de gagner les diamants.");
}

function endDiamondsBooster() {
    setTimeout(function() {
        $("#diamondsbooster").hide();
    }, 100);
    $("#diamondsbooster").animate({
        top: "-200px"
    }, 100);
}
var notifyC = 0;
var numberOfNotif = 0;

function closeAllNotif() {
    numberOfNotif = 0;
    $("#notifcontainer").hide();
    $("#notifcontainer").html('<div  onclick="closeAllNotif()"  id="ntf6">\n' +
        '            Fermer tout\n' +
        '        </div>');
}

function notify(roomId, username, text) {
    $("#notifcontainer").show();
    if (roomId !== null) {
        $("#notifcontainer").prepend('        <div id="notify-' + notifyC + '" class="notifelement">\n' +
            '            <div id="ntf1">\n' +
            '                <div id="ntf2"></div>\n' +
            '                <div id="ntf3">De <u>' + username + '</u></div>\n' +
            '            </div>\n' +
            '            <div id="ntf4">\n' +
            '                ' + escapeHtml(text) + '\n' +
            '            </div>\n' +
            '\n' +
            '            <div onclick="hideNotif(' + notifyC + ');" id="ntf5">\n' +
            '                Fermer' +
            '            </div>\n' +
            '            <div style="right: 85px;" onclick="alertEvent(\'event:navigator/goto/' + roomId + '\');" id="ntf5">\n' +
            '                Rejoindre' +
            '            </div>\n' +
            '        </div>');
    } else {
        $("#notifcontainer").prepend('        <div id="notify-' + notifyC + '" class="notifelement">\n' +
            '            <div id="ntf1">\n' +
            '                <div id="ntf2"></div>\n' +
            '                <div id="ntf3">De <u>' + username + '</u></div>\n' +
            '            </div>\n' +
            '            <div id="ntf4">\n' +
            '                ' + escapeHtml(text) + '\n' +
            '            </div>\n' +
            '\n' +
            '            <div onclick="hideNotif(' + notifyC + ');" id="ntf5">\n' +
            '                Fermer' +
            '            </div>\n' +
            '        </div>');
    }
    var x = $("#notify-" + notifyC);
    x.animate({
        left: "20px"
    }, 300);
    var height = x.height() + 60;
    if (notifyC > 0) {
        $(".notifelement").each(function() {
            if ($(this).attr('id') !== "notify-" + notifyC) {
                $(this).animate({
                    top: "+=" + height + "px"
                }, 250);
            }
        });
    }
    notifyC++;
    numberOfNotif++;
}

function hideNotif(id) {
    var x = $("#notify-" + id);
    var height = x.height() + 60;
    x.remove();
    $(".notifelement").each(function() {
        var txt = $(this).attr('id');
        var numb = txt.match(/\d/g);
        numb = numb.join("");
        if (numb < id) {
            $(this).animate({
                top: "-=" + height + "px"
            }, 250);
        }
    });
    if (numberOfNotif === 1) {
        closeAllNotif();
    } else {
        numberOfNotif--;
    }
}

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}

function upBuildMode(type) {
    var val = 0;
    switch (type) {
        case "rotation":
            if ($("#mb-rotation").val() != "") {
                val = parseInt($("#mb-rotation").val()) + 1;
            } else {
                val = 1;
            }
            if (val < 8) {
                handleBuildMode(val, "rotation");
                $("#mb-rotation").val(val);
            }
            break;
        case "hauteur":
            if ($("#mb-hauteur").val() != "") {
                val = (parseFloat($("#mb-hauteur").val()) + 0.1).toFixed(2);
            } else {
                val = 0.1;
            }
            handleBuildMode(val, "hauteur");
            $("#mb-hauteur").val(val);
            break;
        case "etat":
            if ($("#mb-etat").val() != "") {
                val = parseInt($("#mb-etat").val()) + 1;
            } else {
                val = 1;
            }
            if (val < 8) {
                handleBuildMode(val, "etat");
                $("#mb-etat").val(val);
            }
            break;
    }
}

function downBuildMode(type) {
    var val = 0;
    switch (type) {
        case "rotation":
            if ($("#mb-rotation").val() != "") {
                val = parseInt($("#mb-rotation").val()) - 1;
            } else {
                val = 0;
            }
            if (val >= 0) {
                handleBuildMode(val, "rotation");
                $("#mb-rotation").val(val);
            }
            break;
        case "hauteur":
            if ($("#mb-hauteur").val() != "") {
                val = (parseFloat($("#mb-hauteur").val()) - 0.1).toFixed(2);
            } else {
                val = -0.1;
            }
            handleBuildMode(val, "hauteur");
            $("#mb-hauteur").val(val);
            break;
        case "etat":
            if ($("#mb-etat").val() != "") {
                val = parseInt($("#mb-etat").val()) - 1;
            } else {
                val = 0;
            }
            if (val >= 0) {
                handleBuildMode(val, "etat");
                $("#mb-etat").val(val);
            }
            break;
    }
}
$(document).ready(function() {
    $("#mb-rotation").keyup(function() {
        handleBuildMode($(this).val(), "rotation");
    });
    $("#mb-hauteur").keyup(function() {
        handleBuildMode($(this).val(), "hauteur");
    });
    $("#mb-etat").keyup(function() {
        handleBuildMode($(this).val(), "etat");
    });
});
var floodTime = 0;

function stopBuildMode(type) {
    var timeNow = Math.floor(Date.now() / 1000);
    if (type === "rotation" || type === "hauteur" || type === "etat") {
        if (timeNow > floodTime) {
            switch (type) {
                case "rotation":
                    $("#mb-rotation").val("");
                    break;
                case "hauteur":
                    $("#mb-hauteur").val("");
                    break;
                case "etat":
                    $("#mb-etat").val("");
                    break;
            }
            floodTime = Math.floor(Date.now() / 1000);
            writeMessage("/habletComposer?id=buildmode&type=stop&value=" + type);
        }
    }
}

function handleBuildMode(value, type) {
    var timeNow = Math.floor(Date.now() / 1000);
    value = parseFloat(value);
    if (type === "rotation" || type === "hauteur" || type === "etat") {
        floodTime = Math.floor(Date.now() / 1000);
        writeMessage("/habletComposer?id=buildmode&type=" + type + "&value=" + value);
    }
}
var clientLoaded = false;

function openBienvenue() {
    clientLoaded = true;
    setTimeout(function() {
        $("#club-elem2").show();
        $("#club-elem1").show();
        $("#RaresCenterButton").show();
        $("#bienvenuealert").animate({
            left: "0px"
        });
    }, 5000);
}

function closeBienvenue() {
    $("#bienvenuealert").animate({
        left: "-1000px"
    });
    setTimeout(function() {
        $("#bienvenuealert").html(" ").hide();
    }, 500);
}

function updatePlayers(message) {
    parent.updateCountPlayersView(message.value);
}

function opennCityClub() {
    parent.openCityClub();
}
var isOpenCityClubScreen = true;

function actionOpenCityClubScreen() {
    if (isOpenCityClubScreen) {
        isOpenCityClubScreen = false;
        $("#club-elem2").hide();
    } else {
        isOpenCityClubScreen = true;
        $("#club-elem2").show();
    }
}
var isOpenVendreMarche = false;

function actionVendreMarche() {
    if (!isOpenVendreMarche) {
        isOpenVendreMarche = true;
        $("#vendre-marche").animate({
            width: "160px"
        }, 80);
        $("#vendre-marche-icone").css({
            filter: "none",
            transform: "none"
        });
    } else {
        isOpenVendreMarche = false;
        $("#vendre-marche").animate({
            width: "14px"
        }, 80);
        $("#vendre-marche-icone").css({
            filter: "FlipH",
            transform: "scaleX(-1)"
        });
    }
}

function setVendreMarche(name, id, thumbnail, description) {
    if (typeof description === "undefined") {
        description = "";
    }
    if (thumbnail === 'null') {
        thumbnail = "https://www.habbocity.me/app/assets/img/rooms.png";
    } else {
        thumbnail = "https://swf.habbocity.me/c_images/navigator-thumbnail/" + id + ".png";
    }
    var func = "parent.BoutiquePageMarche('Mes apparts','https://www.habbocity.me/app/load/BoutiquePage.php?page=inventaire&type=apparts','" + id + "','" + thumbnail + "','" + name + "','" + description + "');";
    $("#vendre-marche-click").attr('onclick', func);
}

function showVendreMarche() {
    $("#vendre-marche").show();
}

function hideVendreMarche() {
    $("#vendre-marche").hide();
    $("#vendre-marche").css({
        width: "14px"
    });
    isOpenVendreMarche = false;
}

function calculateRight(val) {
    return window.innerWidth - val;
}

function openRareCenter() {
    $("#RaresCenter").show();
    if (rarePage === "") {
        rareLoadPage("RaresValues.php");
    } else {
        rareLoadPage(rarePage);
    }
}

function closeRareCenter() {
    $("#RaresCenter").hide();
    $("#RaresContent").html(" ");
}

function rareNotify(isSuccess, text) {
    var color = "rgb(43,215,95)";
    if (!isSuccess) {
        color = "rgb(243,101,108)";
    }
    $("#rares-notif-title").css({
        background: color
    });
    $("#rares-notif-button").css({
        background: color
    });
    $("#rares-notif-text").text(text);
    $("#rares-notif").animate({
        left: "0px"
    }, 200);
}
var isRareRequest = false;
var isRareToggle = false;

function rareToggle() {
    if (!isRareToggle) {
        isRareToggle = true;
        $("#RaresCenter").css({
            width: "91px",
            height: "82px"
        });
        $("#RaresCenterReload").hide();
        $("#RaresCennterClose").hide();
    } else {
        isRareToggle = false;
        $("#RaresCenter").css({
            width: "850px",
            height: "605px"
        });
        $("#RaresCenterReload").show();
        $("#RaresCennterClose").show();
    }
}
var rarePage = "";

function rareLoadPage(page) {
    $("#RaresContent").css({
        "overflow-y": "auto"
    });
    $("#RaresLaoder").css({
        visibility: "visible",
        height: "100%",
        top: "0px"
    });
    $("#RaresContent").load("rarescenter/" + page, function(responseTxt, statusTxt) {
        if (statusTxt === "success") {
            rarePage = page;
            $('#RaresContent').animate({
                scrollTop: 0
            }, 'slow');
            $("#RaresLaoder").css({
                visibility: "hidden"
            });
            rareUpdateCurrency();
        }
    });
}

function reloadRarePage() {
    rareLoadPage(rarePage);
    rareUpdateCurrency();
}

function rareRichesse() {
    $("#RaresContent").css({
        "overflow-y": "auto"
    });
    $("#RaresLaoder").css({
        visibility: "visible",
        height: "100%",
        top: "0px"
    });
    jQuery.ajax({
        type: "GET",
        url: "../../app/assets/js/chart.js",
        dataType: "script",
        cache: true,
        success: function() {
            $("#RaresContent").load("rarescenter/Fortune.php", function(responseTxt, statusTxt) {
                if (statusTxt === "success") {
                    $.ajax({
                        type: "POST",
                        url: "../actions/rarescenter/GetGraphicRichest.php",
                        dataType: "json",
                        success: function(json) {
                            rarePage = "Fortune.php";
                            $('#RaresContent').animate({
                                scrollTop: 0
                            }, 'slow');
                            $("#RaresLaoder").css({
                                visibility: "hidden"
                            });
                            console.log(json);
                            var diamants = [];
                            var patrimoine = [];
                            var classiques = [];
                            var labels = [];
                            for (var i = (json.result.length - 1); i >= 0; i--) {
                                diamants.push(JSON.parse(json.result[i]).diamants);
                                patrimoine.push(JSON.parse(json.result[i]).patrimoine);
                                classiques.push(JSON.parse(json.result[i]).classiques);
                                labels.push(JSON.parse(json.result[i]).date);
                            }
                            var data = {
                                labels: labels,
                                datasets: [{
                                    label: "Diamants",
                                    backgroundColor: "rgb(227,240,255)",
                                    borderColor: "rgb(154,220,220)",
                                    borderWidth: 2,
                                    data: diamants,
                                }, {
                                    label: "Classiques",
                                    backgroundColor: "rgb(255,230,213)",
                                    borderColor: "rgb(255,166,106)",
                                    borderWidth: 2,
                                    data: classiques,
                                }, {
                                    label: "Richesse total",
                                    backgroundColor: "rgb(207,245,219)",
                                    borderColor: "rgb(84,222,125)",
                                    borderWidth: 2,
                                    data: patrimoine,
                                }]
                            };
                            var option = {
                                legend: {
                                    display: true,
                                    position: 'top'
                                },
                                responsive: false,
                                scales: {
                                    yAxes: [{
                                        stacked: true,
                                        gridLines: {
                                            display: false,
                                        }
                                    }],
                                    xAxes: [{
                                        gridLines: {
                                            display: false
                                        }
                                    }]
                                }
                            };
                            Chart.Line('FortuneEvolution', {
                                options: option,
                                data: data
                            });
                        }
                    });
                }
            });
        }
    });
}

function itemSpeedSeel(item) {
    if (!isRareRequest) {
        $("#ItemSellButton").css({
            opacity: "0.5"
        });
        isRareRequest = true;
        $.ajax({
            type: "POST",
            url: "../actions/rarescenter/SpeedSellItem.php",
            data: {
                quantity: $("#SpeedSellQuantity").val(),
                item: item
            },
            dataType: "json",
            success: function(json) {
                $("#ItemSellButton").css({
                    opacity: "1"
                });
                if (json.reponse === "error") {
                    rareNotify(false, json.message);
                } else {
                    rareLoadPage("Inventory.php");
                    rareNotify(true, json.message);
                }
                isRareRequest = false;
            }
        });
    }
}

function rareUpdateCurrency() {
    $.ajax({
        type: "POST",
        url: "../actions/rarescenter/UpdateCurrency.php",
        dataType: "json",
        success: function(json) {
            $("#RaresCenterDiamants").text(json.diamants);
            $("#RaresCenterDuckets").text(json.duckets);
            $("#RaresCenterJetons").text(json.jetons);
        }
    });
}

function rareGetReward(sellId) {
    if (!isRareRequest) {
        $("#raresell-" + sellId + " .rar147").css({
            opacity: "0.5"
        });
        isRareRequest = true;
        $.ajax({
            type: "POST",
            url: "../actions/rarescenter/GetSellRewards.php",
            data: {
                sell: sellId
            },
            dataType: "json",
            success: function(json) {
                $("#raresell-" + sellId + " .rar147").css({
                    opacity: "1"
                });
                if (json.reponse === "error") {
                    rareNotify(false, json.message);
                } else {
                    rareLoadPage("MySells.php");
                    rareNotify(true, json.message);
                    rareUpdateCurrency();
                }
                isRareRequest = false;
            }
        });
    }
}

function itemMarketRemove(sellId) {
    if (!isRareRequest) {
        $("#raresell-" + sellId + " .rar147").css({
            opacity: "0.5"
        });
        isRareRequest = true;
        $.ajax({
            type: "POST",
            url: "../actions/rarescenter/MarketRemoveItem.php",
            data: {
                sell: sellId
            },
            dataType: "json",
            success: function(json) {
                $("#raresell-" + sellId + " .rar147").css({
                    opacity: "1"
                });
                if (json.reponse === "error") {
                    rareNotify(false, json.message);
                } else {
                    rareLoadPage("MySells.php");
                    rareNotify(true, json.message);
                }
                isRareRequest = false;
            }
        });
    }
}
var rareBuyItem = 0;

function rareOpenConfirm(itemid) {
    rareBuyItem = itemid;
    $("#RaresBuyConfirm").css({
        visibility: "visible"
    });
    $('#RaresContent').animate({
        scrollTop: 0
    }, 'slow');
}

function rareCloseConfirm() {
    rareBuyItem = 0;
    $("#RaresBuyConfirm").css({
        visibility: "hidden"
    });
}

function marketBuyItem() {
    if (!isRareRequest) {
        $("#RaresBuyConfirmText").text("Chargement...");
        isRareRequest = true;
        $.ajax({
            type: "POST",
            url: "../actions/rarescenter/MarketBuyItem.php",
            data: {
                item: rareBuyItem
            },
            dataType: "json",
            success: function(json) {
                $("#RaresBuyConfirmText").text("Acheter");
                if (json.reponse === "error") {
                    rareNotify(false, json.message)
                } else {
                    reloadRarePage();
                    rareNotify(true, json.message);
                }
                rareUpdateCurrency();
                rareCloseConfirm();
                isRareRequest = false;
            }
        });
    }
}

function itemMarketPlace(item) {
    if (!isRareRequest) {
        $("#ItemMarketPlace").text("Chargement...");
        isRareRequest = true;
        $.ajax({
            type: "POST",
            url: "../actions/rarescenter/MarketPlaceItem.php",
            data: {
                quantity: $("#MarketPlaceQuantity").val(),
                item: item,
                diamants: $("#MarketPlaceDiamants").val(),
                duckets: $("#MarketPlaceDuckets").val()
            },
            dataType: "json",
            success: function(json) {
                $("#ItemMarketPlace").text("Placer l'objet au marché");
                if (json.reponse === "error") {
                    rareNotify(false, json.message);
                } else {
                    rareLoadPage("Inventory.php");
                    rareNotify(true, json.message);
                }
                isRareRequest = false;
            }
        });
    }
}
var speedSellPrice = 0;
$(document).ready(function() {
    $('body').on('keyup', '#RaresValuesSearch', function() {
        var val = encodeURIComponent($(this).val());
        console.log(val);
        if (val.length > 0) {
            $("#RaresLaoder").css({
                visibility: "visible",
                height: "328px",
                top: "221px"
            });
            $("#RaresValues").load("rarescenter/RaresValues.php?rarename=" + val + " #RaresValues", function(responseTxt, statusTxt) {
                if (statusTxt === "success") {
                    rarePage = "RaresValues.php?rarename=" + val;
                    $("#RaresLaoder").css({
                        visibility: "hidden"
                    });
                }
            });
        }
    });
    $('body').on('keyup', '#RaresInventorySearch', function() {
        var val = encodeURIComponent($(this).val());
        if (val.length > 0) {
            $("#RaresLaoder").css({
                visibility: "visible",
                height: "328px",
                top: "221px"
            });
            $("#RaresInventory").load("rarescenter/Inventory.php?rarename=" + val + " #RaresInventory", function(responseTxt, statusTxt) {
                if (statusTxt === "success") {
                    rarePage = "Inventory.php?rarename=" + val;
                    $("#RaresLaoder").css({
                        visibility: "hidden"
                    });
                }
            });
        }
    });
    $('body').on('keyup', '#RaresMarkerSearch', function() {
        var val = encodeURIComponent($(this).val());
        if (val.length > 0) {
            $("#RaresLaoder").css({
                visibility: "visible",
                height: "328px",
                top: "221px"
            });
            $("#RaresMarket").load("rarescenter/Marketplace.php?rarename=" + val + " #RaresMarket", function(responseTxt, statusTxt) {
                if (statusTxt === "success") {
                    rarePage = "Marketplace.php?rarename=" + val;
                    $("#RaresLaoder").css({
                        visibility: "hidden"
                    });
                }
            });
        }
    });
    $('body').on('keyup', '#SpeedSellQuantity', function() {
        var val = encodeURIComponent($(this).val());
        if (val.length == 0) {
            $("#RareSpeedPrice").text(speedSellPrice);
        } else {
            $("#RareSpeedPrice").text(speedSellPrice * parseInt(val));
        }
    });
});

function OpenItemPage(item) {
    $("#InventorySellItem").show();
    $("#RaresContent").css({
        overflow: "hidden"
    });
    $('#RaresContent').animate({
        scrollTop: 0
    }, 'slow');
    $("#RaresLaoder").css({
        visibility: "visible",
        height: "328px",
        top: "221px"
    });
    $("#InventorySellItem").load("rarescenter/ItemSell.php?item=" + item, function(responseTxt, statusTxt) {
        if (statusTxt === "success") {
            speedSellPrice = parseInt($("#RareSpeedPrice").text());
            $("#RaresLaoder").css({
                visibility: "hidden"
            });
        }
    });
}

function closeNotify() {
    $("#rares-notif").animate({
        left: "-350px"
    }, 100);
}
window.onload = function() {
    $("#flash-wrapper").mousedown(function(e) {
        var t = e.clientY;
        var l = e.clientX;
        if (t > 45 && t < 65 && l > calculateRight(70) && l < calculateRight(10)) {
            actionOpenCityClubScreen();
        }
    });
    var buildMouseDown = false;
    var buildSavedX = 0;
    var buildSavedY = 0;
    var buildElement = document.getElementById("buildmode");
    buildElement.onmousedown = function(e) {
        buildMouseDown = true;
        buildSavedX = e.pageX - parseInt(buildElement.style.left);
        buildSavedY = e.pageY - parseInt(buildElement.style.top);
    }
    document.onmousemove = function(e) {
        if (buildMouseDown) {
            buildElement.style.left = (e.pageX - buildSavedX) + "px";
            buildElement.style.top = (e.pageY - buildSavedY) + "px";
        }
    };
    document.onmouseup = function() {
        buildMouseDown = false;
    }
    var rareMouseDown = false;
    var raredSavedX = 0;
    var rareSavedY = 0;
    var rareElement = document.getElementById("RaresCenter");
    rareElement.onmousedown = function(e) {
        rareMouseDown = true;
        raredSavedX = e.pageX - parseInt(rareElement.style.left);
        rareSavedY = e.pageY - parseInt(rareElement.style.top);
    }
    document.onmousemove = function(e) {
        if (rareMouseDown) {
            rareElement.style.left = (e.pageX - raredSavedX) + "px";
            rareElement.style.top = (e.pageY - rareSavedY) + "px";
        }
    };
    document.onmouseup = function() {
        rareMouseDown = false;
    }
    if ('SpeechRecognition' in window) {} else {
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        var finalTranscript = '';
        var recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
        recognition.maxAlternatives = 10;
        recognition.continuous = true;
        recognition.onresult = (event) => {
            var interimTranscript = '';
            for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
                var transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                    setTimeout(function() {
                        activeSend();
                    }, 300);
                } else {
                    desactiveSend();
                    interimTranscript += transcript;
                }
            }
            document.getElementById('text').innerHTML = finalTranscript + ' <i style="color:#ddd;">' + interimTranscript + '</>';
        }
        var isStart = false;
        document.getElementById("active").onclick = function() {
            if (isStart) {
                isStart = false;
                recognition.stop();
                $("#active").css({
                    opacity: "1"
                });
            } else {
                isStart = true;
                recognition.start();
                finalTranscript = finalTranscript += " ";
                $("#active").css({
                    opacity: "0.4"
                });
            }
        }
        document.getElementById("close-vocal").onclick = function() {
            openVocal();
        }
        document.getElementById("closeVocal").onclick = function() {
            clearVocal();
        }
        document.getElementById("send-message").onclick = function() {
            sendMessage();
        }
        document.getElementById("ChatButton").onclick = function() {
            openVocal();
        }
        var clearVocal = function() {
            document.getElementById('text').innerHTML = "";
            finalTranscript = "";
            interimTranscript = "";
            isStart = false;
            recognition.stop();
            $("#active").css({
                opacity: "1"
            });
        }
        var closeVocal = function() {
            isStart = false;
            recognition.stop();
            $("#active").css({
                opacity: "1"
            });
        }
        var sendMessage = function() {
            if (canSend) {
                writeMessageBrut("/habletComposer?id=vocaltalk&message=" + finalTranscript);
                clearVocal();
            }
        }
        var isOpenVocal = false;
        var openVocal = function() {
            if (!isOpenVocal) {
                isOpenVocal = true;
                $("#chat-vocal").css({
                    visibility: "visible"
                });
            } else {
                isOpenVocal = false;
                $("#chat-vocal").css({
                    visibility: "hidden"
                });
                closeVocal();
                clearVocal();
            }
        }
        var canSend = true;
        var activeSend = function() {
            canSend = true;
            $("#send-message").css({
                opacity: "1"
            });
        }
        var desactiveSend = function() {
            canSend = false;
            $("#send-message").css({
                opacity: "0.4"
            });
        }
    }
}