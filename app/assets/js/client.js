var i = $("#flash8").html();

function pub() {

    setTimeout(function () {

        $("#flash8").html(i);

        i--;

        if (i == -1) {

            $("#flash7").animate({top: "-300px"}, 500).html("");

            return;

        }

        else {

            pub();

        }

    }, 1000)

}



pub();

var alerte = 0;

function newAlert(img,description,header,titre,pseudo,figure,bouton,action){

    alerte = alerte + 1;

    $("#listalerte").append('<div class="hotelalerte' + alerte + '" id="hotel13">\n' +

        '                <div class="alertebody' + alerte + '" id="hotel14">\n' +

        '                    <div id="hotel15">\n' +

        '                        <div id="hotel16"></div>\n' +

        '                    </div>\n' +

        '                    <div id="hotel17">\n' +

        '                        '+titre+'\n' +

        '                    </div>\n' +

        '                    <div id="hotel18">\n' +

        '                        '+pseudo+'\n' +

        '                    </div>\n' +

        '                    <div id="hotel19">\n' +

        '                        <img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure='+figure+'&headonly=1&head_direction=4"/>\n' +

        '                    </div>\n' +

        '                    <div class="alerteimg' + alerte + '" id="hotel20">\n' +

        '                        <img src="'+img+'"/>\n' +

        '                    </div>\n' +

        '                    <div id="hotel21">' + header +

        '                    </div>' +

        '                    <div id="hotel22">' + description +

        '                    </div><div class="end"></div>' +

        '                    <div id="hotel23">\n' +

        '                        <div onclick=\'closeAlert("' + alerte + '")\' id="hotel24">\n' +

        '                            Fermer\n' +

        '                        </div>\n' +

        '                        <div onclick=\'alertEvent("'+action+'");closeAlert("' + alerte + '")\' id="hotel25">\n' +

        '                            '+bouton+'\n' +

        '                        </div>\n' +

        '                    </div>\n' +

        '\n' +

        '                </div>\n' +

        '            </div>');



    $(".hotelalerte" + alerte).fadeIn(500);

    $(".alerteimg" + alerte).animate({left:"0px"},800);

    $(".alertebody" + alerte).animate({"margin-left":"-295px"},500);

    return true;

}

function alertEvent(action){

        if (action.match(/^event:/)) {

            action = action.replace("event:navigator/goto/", "");

            goToRoom(action);

        }

        else {

            window.open(action);

        }

}

function closeAlert(alerte){

    var x = $(".hotelalerte" + alerte);

    x.animate({left:"-700px"});

    setTimeout(function(){  x.fadeOut(500).remove(); }, 1500);

}

function goToRoom(id){

    $.ajax({

        type: "POST",

        url: "../actions/ReturnApartment.php",

        data: {id: id},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'erreur') {

                alert("Petite érreur, veuillez ré-essayer.");

            }

        }

    });

}

$(function() {

    isFlashInstalled || (document.getElementById("habbo-client-error").style.display = "grid", document.getElementById("flash-wrapper").style.display = "none"), "undefined" == typeof jQuery;

});

var clientLinks;

var swfobject = function() {

    var D = "undefined",

        r = "object",

        T = "Shockwave Flash",

        Z = "ShockwaveFlash.ShockwaveFlash",

        q = "application/x-shockwave-flash",

        S = "SWFObjectExprInst",

        x = "onreadystatechange",

        Q = window,

        h = document,

        t = navigator,

        V = false,

        X = [],

        o = [],

        P = [],

        K = [],

        I, p, E, B, L = false,

        a = false,

        m, G, j = true,

        l = false,

        O = function() {

            var ad = typeof h.getElementById != D && typeof h.getElementsByTagName != D && typeof h.createElement != D,

                ak = t.userAgent.toLowerCase(),

                ab = t.platform.toLowerCase(),

                ah = ab ? /win/.test(ab) : /win/.test(ak),

                af = ab ? /mac/.test(ab) : /mac/.test(ak),

                ai = /webkit/.test(ak) ? parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,

                aa = t.appName === "Microsoft Internet Explorer",

                aj = [0, 0, 0],

                ae = null;

            if (typeof t.plugins != D && typeof t.plugins[T] == r) {

                ae = t.plugins[T].description;

                if (ae && (typeof t.mimeTypes != D && t.mimeTypes[q] && t.mimeTypes[q].enabledPlugin)) {

                    V = true;

                    aa = false;

                    ae = ae.replace(/^.*\s+(\S+\s+\S+$)/, "$1");

                    aj[0] = n(ae.replace(/^(.*)\..*$/, "$1"));

                    aj[1] = n(ae.replace(/^.*\.(.*)\s.*$/, "$1"));

                    aj[2] = /[a-zA-Z]/.test(ae) ? n(ae.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0

                }

            } else {

                if (typeof Q.ActiveXObject != D) {

                    try {

                        var ag = new ActiveXObject(Z);

                        if (ag) {

                            ae = ag.GetVariable("$version");

                            if (ae) {

                                aa = true;

                                ae = ae.split(" ")[1].split(",");

                                aj = [n(ae[0]), n(ae[1]), n(ae[2])]

                            }

                        }

                    } catch (ac) {}

                }

            }

            return {

                w3: ad,

                pv: aj,

                wk: ai,

                ie: aa,

                win: ah,

                mac: af

            }

        }(),

        i = function() {

            if (!O.w3) {

                return

            }

            if ((typeof h.readyState != D && (h.readyState === "complete" || h.readyState === "interactive")) || (typeof h.readyState == D && (h.getElementsByTagName("body")[0] || h.body))) {

                f()

            }

            if (!L) {

                if (typeof h.addEventListener != D) {

                    h.addEventListener("DOMContentLoaded", f, false)

                }

                if (O.ie) {

                    h.attachEvent(x, function aa() {

                        if (h.readyState == "complete") {

                            h.detachEvent(x, aa);

                            f()

                        }

                    });

                    if (Q == top) {

                        (function ac() {

                            if (L) {

                                return

                            }

                            try {

                                h.documentElement.doScroll("left")

                            } catch (ad) {

                                setTimeout(ac, 0);

                                return

                            }

                            f()

                        }())

                    }

                }

                if (O.wk) {

                    (function ab() {

                        if (L) {

                            return

                        }

                        if (!/loaded|complete/.test(h.readyState)) {

                            setTimeout(ab, 0);

                            return

                        }

                        f()

                    }())

                }

            }

        }();



    function f() {

        if (L || !document.getElementsByTagName("body")[0]) {

            return

        }

        try {

            var ac, ad = C("span");

            ad.style.display = "none";

            ac = h.getElementsByTagName("body")[0].appendChild(ad);

            ac.parentNode.removeChild(ac);

            ac = null;

            ad = null

        } catch (ae) {

            return

        }

        L = true;

        var aa = X.length;

        for (var ab = 0; ab < aa; ab++) {

            X[ab]()

        }

    }



    function M(aa) {

        if (L) {

            aa()

        } else {

            X[X.length] = aa

        }

    }



    function s(ab) {

        if (typeof Q.addEventListener != D) {

            Q.addEventListener("load", ab, false)

        } else {

            if (typeof h.addEventListener != D) {

                h.addEventListener("load", ab, false)

            } else {

                if (typeof Q.attachEvent != D) {

                    g(Q, "onload", ab)

                } else {

                    if (typeof Q.onload == "function") {

                        var aa = Q.onload;

                        Q.onload = function() {

                            aa();

                            ab()

                        }

                    } else {

                        Q.onload = ab

                    }

                }

            }

        }

    }



    function Y() {

        var aa = h.getElementsByTagName("body")[0];

        var ae = C(r);

        ae.setAttribute("style", "visibility: hidden;");

        ae.setAttribute("type", q);

        var ad = aa.appendChild(ae);

        if (ad) {

            var ac = 0;

            (function ab() {

                if (typeof ad.GetVariable != D) {

                    try {

                        var ag = ad.GetVariable("$version");

                        if (ag) {

                            ag = ag.split(" ")[1].split(",");

                            O.pv = [n(ag[0]), n(ag[1]), n(ag[2])]

                        }

                    } catch (af) {

                        O.pv = [8, 0, 0]

                    }

                } else {

                    if (ac < 10) {

                        ac++;

                        setTimeout(ab, 10);

                        return

                    }

                }

                aa.removeChild(ae);

                ad = null;

                H()

            }())

        } else {

            H()

        }

    }



    function H() {

        var aj = o.length;

        if (aj > 0) {

            for (var ai = 0; ai < aj; ai++) {

                var ab = o[ai].id;

                var ae = o[ai].callbackFn;

                var ad = {

                    success: false,

                    id: ab

                };

                if (O.pv[0] > 0) {

                    var ah = c(ab);

                    if (ah) {

                        if (F(o[ai].swfVersion) && !(O.wk && O.wk < 312)) {

                            w(ab, true);

                            if (ae) {

                                ad.success = true;

                                ad.ref = z(ab);

                                ad.id = ab;

                                ae(ad)

                            }

                        } else {

                            if (o[ai].expressInstall && A()) {

                                var al = {};

                                al.data = o[ai].expressInstall;

                                al.width = ah.getAttribute("width") || "0";

                                al.height = ah.getAttribute("height") || "0";

                                if (ah.getAttribute("class")) {

                                    al.styleclass = ah.getAttribute("class")

                                }

                                if (ah.getAttribute("align")) {

                                    al.align = ah.getAttribute("align")

                                }

                                var ak = {};

                                var aa = ah.getElementsByTagName("param");

                                var af = aa.length;

                                for (var ag = 0; ag < af; ag++) {

                                    if (aa[ag].getAttribute("name").toLowerCase() != "movie") {

                                        ak[aa[ag].getAttribute("name")] = aa[ag].getAttribute("value")

                                    }

                                }

                                R(al, ak, ab, ae)

                            } else {

                                b(ah);

                                if (ae) {

                                    ae(ad)

                                }

                            }

                        }

                    }

                } else {

                    w(ab, true);

                    if (ae) {

                        var ac = z(ab);

                        if (ac && typeof ac.SetVariable != D) {

                            ad.success = true;

                            ad.ref = ac;

                            ad.id = ac.id

                        }

                        ae(ad)

                    }

                }

            }

        }

    }

    X[0] = function() {

        if (V) {

            Y()

        } else {

            H()

        }

    };



    function z(ac) {

        var aa = null,

            ab = c(ac);

        if (ab && ab.nodeName.toUpperCase() === "OBJECT") {

            if (typeof ab.SetVariable !== D) {

                aa = ab

            } else {

                aa = ab.getElementsByTagName(r)[0] || ab

            }

        }

        return aa

    }



    function A() {

        return !a && F("6.0.65") && (O.win || O.mac) && !(O.wk && O.wk < 312)

    }



    function R(ad, ae, aa, ac) {

        var ah = c(aa);

        aa = W(aa);

        a = true;

        E = ac || null;

        B = {

            success: false,

            id: aa

        };

        if (ah) {

            if (ah.nodeName.toUpperCase() == "OBJECT") {

                I = J(ah);

                p = null

            } else {

                I = ah;

                p = aa

            }

            ad.id = S;

            if (typeof ad.width == D || (!/%$/.test(ad.width) && n(ad.width) < 310)) {

                ad.width = "310"

            }

            if (typeof ad.height == D || (!/%$/.test(ad.height) && n(ad.height) < 137)) {

                ad.height = "137"

            }

            var ag = O.ie ? "ActiveX" : "PlugIn",

                af = "MMredirectURL=" + encodeURIComponent(Q.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + ag + "&MMdoctitle=" + encodeURIComponent(h.title.slice(0, 47) + " - Flash Player Installation");

            if (typeof ae.flashvars != D) {

                ae.flashvars += "&" + af

            } else {

                ae.flashvars = af

            }

            if (O.ie && ah.readyState != 4) {

                var ab = C("div");

                aa += "SWFObjectNew";

                ab.setAttribute("id", aa);

                ah.parentNode.insertBefore(ab, ah);

                ah.style.display = "none";

                y(ah)

            }

            u(ad, ae, aa)

        }

    }



    function b(ab) {

        if (O.ie && ab.readyState != 4) {

            ab.style.display = "none";

            var aa = C("div");

            ab.parentNode.insertBefore(aa, ab);

            aa.parentNode.replaceChild(J(ab), aa);

            y(ab)

        } else {

            ab.parentNode.replaceChild(J(ab), ab)

        }

    }



    function J(af) {

        var ae = C("div");

        if (O.win && O.ie) {

            ae.innerHTML = af.innerHTML

        } else {

            var ab = af.getElementsByTagName(r)[0];

            if (ab) {

                var ag = ab.childNodes;

                if (ag) {

                    var aa = ag.length;

                    for (var ad = 0; ad < aa; ad++) {

                        if (!(ag[ad].nodeType == 1 && ag[ad].nodeName == "PARAM") && !(ag[ad].nodeType == 8)) {

                            ae.appendChild(ag[ad].cloneNode(true))

                        }

                    }

                }

            }

        }

        return ae

    }



    function k(aa, ab) {

        var ac = C("div");

        ac.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + aa + "'>" + ab + "</object>";

        return ac.firstChild

    }



    function u(ai, ag, ab) {

        var aa, ad = c(ab);

        ab = W(ab);

        if (O.wk && O.wk < 312) {

            return aa

        }

        if (ad) {

            var ac = (O.ie) ? C("div") : C(r),

                af, ah, ae;

            if (typeof ai.id == D) {

                ai.id = ab

            }

            for (ae in ag) {

                if (ag.hasOwnProperty(ae) && ae.toLowerCase() !== "movie") {

                    e(ac, ae, ag[ae])

                }

            }

            if (O.ie) {

                ac = k(ai.data, ac.innerHTML)

            }

            for (af in ai) {

                if (ai.hasOwnProperty(af)) {

                    ah = af.toLowerCase();

                    if (ah === "styleclass") {

                        ac.setAttribute("class", ai[af])

                    } else {

                        if (ah !== "classid" && ah !== "data") {

                            ac.setAttribute(af, ai[af])

                        }

                    }

                }

            }

            if (O.ie) {

                P[P.length] = ai.id

            } else {

                ac.setAttribute("type", q);

                ac.setAttribute("data", ai.data)

            }

            ad.parentNode.replaceChild(ac, ad);

            aa = ac

        }

        return aa

    }



    function e(ac, aa, ab) {

        var ad = C("param");

        ad.setAttribute("name", aa);

        ad.setAttribute("value", ab);

        ac.appendChild(ad)

    }



    function y(ac) {

        var ab = c(ac);

        if (ab && ab.nodeName.toUpperCase() == "OBJECT") {

            if (O.ie) {

                ab.style.display = "none";

                (function aa() {

                    if (ab.readyState == 4) {

                        for (var ad in ab) {

                            if (typeof ab[ad] == "function") {

                                ab[ad] = null

                            }

                        }

                        ab.parentNode.removeChild(ab)

                    } else {

                        setTimeout(aa, 10)

                    }

                }())

            } else {

                ab.parentNode.removeChild(ab)

            }

        }

    }



    function U(aa) {

        return (aa && aa.nodeType && aa.nodeType === 1)

    }



    function W(aa) {

        return (U(aa)) ? aa.id : aa

    }



    function c(ac) {

        if (U(ac)) {

            return ac

        }

        var aa = null;

        try {

            aa = h.getElementById(ac)

        } catch (ab) {}

        return aa

    }



    function C(aa) {

        return h.createElement(aa)

    }



    function n(aa) {

        return parseInt(aa, 10)

    }



    function g(ac, aa, ab) {

        ac.attachEvent(aa, ab);

        K[K.length] = [ac, aa, ab]

    }



    function F(ac) {

        ac += "";

        var ab = O.pv,

            aa = ac.split(".");

        aa[0] = n(aa[0]);

        aa[1] = n(aa[1]) || 0;

        aa[2] = n(aa[2]) || 0;

        return (ab[0] > aa[0] || (ab[0] == aa[0] && ab[1] > aa[1]) || (ab[0] == aa[0] && ab[1] == aa[1] && ab[2] >= aa[2])) ? true : false

    }



    function v(af, ab, ag, ae) {

        var ad = h.getElementsByTagName("head")[0];

        if (!ad) {

            return
        }

        var aa = (typeof ag == "string") ? ag : "screen";

        if (ae) {

            m = null;

            G = null

        }

        if (!m || G != aa) {

            var ac = C("style");

            ac.setAttribute("type", "text/css");

            ac.setAttribute("media", aa);

            m = ad.appendChild(ac);

            if (O.ie && typeof h.styleSheets != D && h.styleSheets.length > 0) {

                m = h.styleSheets[h.styleSheets.length - 1]

            }

            G = aa

        }

        if (m) {

            if (typeof m.addRule != D) {

                m.addRule(af, ab)

            } else {

                if (typeof h.createTextNode != D) {

                    m.appendChild(h.createTextNode(af + " {" + ab + "}"))

                }

            }

        }

    }



    function w(ad, aa) {

        if (!j) {

            return

        }

        var ab = aa ? "visible" : "hidden",

            ac = c(ad);

        if (L && ac) {

            ac.style.visibility = ab

        } else {

            if (typeof ad === "string") {

                v("#" + ad, "visibility:" + ab)

            }

        }

    }



    function N(ab) {

        var ac = /[\\\"<>\.;]/;

        var aa = ac.exec(ab) != null;

        return aa && typeof encodeURIComponent != D ? encodeURIComponent(ab) : ab

    }

    var d = function() {

        if (O.ie) {

            window.attachEvent("onunload", function() {

                var af = K.length;

                for (var ae = 0; ae < af; ae++) {

                    K[ae][0].detachEvent(K[ae][1], K[ae][2])

                }

                var ac = P.length;

                for (var ad = 0; ad < ac; ad++) {

                    y(P[ad])

                }

                for (var ab in O) {

                    O[ab] = null

                }

                O = null;

                for (var aa in swfobject) {

                    swfobject[aa] = null

                }

                swfobject = null

            })

        }

    }();

    return {

        registerObject: function(ae, aa, ad, ac) {

            if (O.w3 && ae && aa) {

                var ab = {};

                ab.id = ae;

                ab.swfVersion = aa;

                ab.expressInstall = ad;

                ab.callbackFn = ac;

                o[o.length] = ab;

                w(ae, false)

            } else {

                if (ac) {

                    ac({

                        success: false,

                        id: ae

                    })

                }

            }

        },

        getObjectById: function(aa) {

            if (O.w3) {

                return z(aa)

            }

        },

        embedSWF: function(af, al, ai, ak, ab, ae, ad, ah, aj, ag) {

            var ac = W(al),

                aa = {

                    success: false,

                    id: ac

                };

            if (O.w3 && !(O.wk && O.wk < 312) && af && al && ai && ak && ab) {

                w(ac, false);

                M(function() {

                    ai += "";

                    ak += "";

                    var an = {};

                    if (aj && typeof aj === r) {

                        for (var aq in aj) {

                            an[aq] = aj[aq]

                        }

                    }

                    an.data = af;

                    an.width = ai;

                    an.height = ak;

                    var ar = {};

                    if (ah && typeof ah === r) {

                        for (var ao in ah) {

                            ar[ao] = ah[ao]

                        }

                    }

                    if (ad && typeof ad === r) {

                        for (var am in ad) {

                            if (ad.hasOwnProperty(am)) {

                                var ap = (l) ? encodeURIComponent(am) : am,

                                    at = (l) ? encodeURIComponent(ad[am]) : ad[am];

                                if (typeof ar.flashvars != D) {

                                    ar.flashvars += "&" + ap + "=" + at

                                } else {

                                    ar.flashvars = ap + "=" + at

                                }

                            }

                        }

                    }

                    if (F(ab)) {

                        var au = u(an, ar, al);

                        if (an.id == ac) {

                            w(ac, true)

                        }

                        aa.success = true;

                        aa.ref = au;

                        aa.id = au.id

                    } else {

                        if (ae && A()) {

                            an.data = ae;

                            R(an, ar, al, ag);

                            return

                        } else {

                            w(ac, true)

                        }

                    }

                    if (ag) {

                        ag(aa)

                    }

                })

            } else {

                if (ag) {

                    ag(aa)

                }

            }

        },

        switchOffAutoHideShow: function() {

            j = false

        },

        enableUriEncoding: function(aa) {

            l = (typeof aa === D) ? true : aa

        },

        ua: O,

        getFlashPlayerVersion: function() {

            return {

                major: O.pv[0],

                minor: O.pv[1],

                release: O.pv[2]

            }

        },

        hasFlashPlayerVersion: F,

        createSWF: function(ac, ab, aa) {

            if (O.w3) {

                return u(ac, ab, aa)

            } else {

                return undefined

            }

        },

        showExpressInstall: function(ac, ad, aa, ab) {

            if (O.w3 && A()) {

                R(ac, ad, aa, ab)

            }

        },

        removeSWF: function(aa) {

            if (O.w3) {

                y(aa)

            }

        },

        createCSS: function(ad, ac, ab, aa) {

            if (O.w3) {

                v(ad, ac, ab, aa)

            }

        },

        addDomLoadEvent: M,

        addLoadEvent: s,

        getQueryParamValue: function(ad) {

            var ac = h.location.search || h.location.hash;

            if (ac) {

                if (/\?/.test(ac)) {

                    ac = ac.split("?")[1]

                }

                if (ad == null) {

                    return N(ac)

                }

                var ab = ac.split("&");

                for (var aa = 0; aa < ab.length; aa++) {

                    if (ab[aa].substring(0, ab[aa].indexOf("=")) == ad) {

                        return N(ab[aa].substring((ab[aa].indexOf("=") + 1)))

                    }

                }

            }

            return ""

        },

        expressInstallCallback: function() {

            if (a) {

                var aa = c(S);

                if (aa && I) {

                    aa.parentNode.replaceChild(I, aa);

                    if (p) {

                        w(p, true);

                        if (O.ie) {

                            I.style.display = "block"

                        }

                    }

                    if (E) {

                        E(B)

                    }

                }

                a = false

            }

        },

        version: "2.3"

    }

}();

var FlashDetect = new function() {

    var self = this;

    self.installed = false;

    self.raw = "";

    self.major = -1;

    self.minor = -1;

    self.revision = -1;

    self.revisionStr = "";

    var activeXDetectRules = [{

        "name": "ShockwaveFlash.ShockwaveFlash.7",

        "version": function(obj) {

            return getActiveXVersion(obj);

        }

    }, {

        "name": "ShockwaveFlash.ShockwaveFlash.6",

        "version": function(obj) {

            var version = "6,0,21";

            try {

                obj.AllowScriptAccess = "always";

                version = getActiveXVersion(obj);

            } catch (err) {}

            return version;

        }

    }, {

        "name": "ShockwaveFlash.ShockwaveFlash",

        "version": function(obj) {

            return getActiveXVersion(obj);

        }

    }];

    var getActiveXVersion = function(activeXObj) {

        var version = -1;

        try {

            version = activeXObj.GetVariable("$version");

        } catch (err) {}

        return version;

    };

    var getActiveXObject = function(name) {

        var obj = -1;

        try {

            obj = new ActiveXObject(name);

        } catch (err) {

            obj = {

                activeXError: true

            };

        }

        return obj;

    };

    var parseActiveXVersion = function(str) {

        var versionArray = str.split(",");

        return {

            "raw": str,

            "major": parseInt(versionArray[0].split(" ")[1], 10),

            "minor": parseInt(versionArray[1], 10),

            "revision": parseInt(versionArray[2], 10),

            "revisionStr": versionArray[2]

        };

    };

    var parseStandardVersion = function(str) {

        var descParts = str.split(/ +/);

        var majorMinor = descParts[2].split(/\./);

        var revisionStr = descParts[3];

        return {

            "raw": str,

            "major": parseInt(majorMinor[0], 10),

            "minor": parseInt(majorMinor[1], 10),

            "revisionStr": revisionStr,

            "revision": parseRevisionStrToInt(revisionStr)

        };

    };

    var parseRevisionStrToInt = function(str) {

        return parseInt(str.replace(/[a-zA-Z]/g, ""), 10) || self.revision;

    };

    self.majorAtLeast = function(version) {

        return self.major >= version;

    };

    self.minorAtLeast = function(version) {

        return self.minor >= version;

    };

    self.revisionAtLeast = function(version) {

        return self.revision >= version;

    };

    self.versionAtLeast = function(major) {

        var properties = [self.major, self.minor, self.revision];

        var len = Math.min(properties.length, arguments.length);

        for (i = 0; i < len; i++) {

            if (properties[i] >= arguments[i]) {

                if (i + 1 < len && properties[i] == arguments[i]) {

                    continue;

                } else {

                    return true;

                }

            } else {

                return false;

            }

        }

    };

    self.FlashDetect = function() {

        if (navigator.plugins && navigator.plugins.length > 0) {

            var type = 'application/x-shockwave-flash';

            var mimeTypes = navigator.mimeTypes;

            if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description) {

                var version = mimeTypes[type].enabledPlugin.description;

                var versionObj = parseStandardVersion(version);

                self.raw = versionObj.raw;

                self.major = versionObj.major;

                self.minor = versionObj.minor;

                self.revisionStr = versionObj.revisionStr;

                self.revision = versionObj.revision;

                self.installed = true;

            }

        } else if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) {

            var version = -1;

            for (var i = 0; i < activeXDetectRules.length && version == -1; i++) {

                var obj = getActiveXObject(activeXDetectRules[i].name);

                if (!obj.activeXError) {

                    self.installed = true;

                    version = activeXDetectRules[i].version(obj);

                    if (version != -1) {

                        var versionObj = parseActiveXVersion(version);

                        self.raw = versionObj.raw;

                        self.major = versionObj.major;

                        self.minor = versionObj.minor;

                        self.revision = versionObj.revision;

                        self.revisionStr = versionObj.revisionStr;

                    }

                }

            }

        }

    }();

};

FlashDetect.JS_RELEASE = "1.0.4";

var isFlashInstalled = (function() {

    var b = new function() {

        var n = this;

        n.c = !1;

        var a = "ShockwaveFlash.ShockwaveFlash",

            r = [{

                name: a + ".7",

                version: function(n) {

                    return e(n)

                }

            }, {

                name: a + ".6",

                version: function(n) {

                    var a = "6,0,21";

                    try {

                        n.AllowScriptAccess = "always", a = e(n)

                    } catch (r) {}

                    return a

                }

            }, {

                name: a,

                version: function(n) {

                    return e(n)

                }

            }],

            e = function(n) {

                var a = -1;

                try {

                    a = n.GetVariable("$version")

                } catch (r) {}

                return a

            },

            i = function(n) {

                var a = -1;

                try {

                    a = new ActiveXObject(n)

                } catch (r) {

                    a = {

                        activeXError: !0

                    }

                }

                return a

            };

        n.b = function() {

            if (navigator.plugins && navigator.plugins.length > 0) {

                var a = "application/x-shockwave-flash",

                    e = navigator.mimeTypes;

                e && e[a] && e[a].enabledPlugin && e[a].enabledPlugin.description && (n.c = !0)

            } else if (-1 == navigator.appVersion.indexOf("Mac") && window.execScript)

                for (var t = -1, c = 0; c < r.length && -1 == t; c++) {

                    var o = i(r[c].name);

                    o.activeXError || (n.c = !0)

                }

        }()

    };

    return b.c;

})();



function initializeExternalInterfaces() {

    "use strict";

    window.HabboFlashClient.init(document.getElementById("flash-container"))

}! function() {

    "use strict";

    var n = "*";

    window.MainApp = {

        postMessage: function(e) {

            window.parent.postMessage(e, n)

        }

    }

}(),

    function() {

        "use strict";

        var n = !1;

        window.FlashExternalInterface = {}, window.FlashExternalInterface.closeHabblet = function(n) {

            window.MainApp.postMessage({

                call: "close-habblet",

                target: n

            })

        }, window.FlashExternalInterface.disconnect = function() {

            window.MainApp.postMessage({

                call: "disconnect"

            })

        }, window.FlashExternalInterface.heartBeat = function() {

            window.HabboFlashClient.started = !0, window.MainApp.postMessage({

                call: "heartbeat"

            })

        }, window.FlashExternalInterface.legacyTrack = function(n, e, a) {

            window.HabboFlashClient.started = !0, window.HabboTracking.track(n, e, a)

        }, window.FlashExternalInterface.loadConversionTrackingFrame = function() {

            var n = window.flashvars.unique_habbo_id;

            $("#conversion-tracking").attr("src", "/client/" + n + "/conversion-tracking")

        }, window.FlashExternalInterface.logCrash = function(n) {

            window.HabboFlashClient.started = !0, window.MainApp.postMessage({

                call: "disconnect"

            }), window.HabboWebApi.logCrash(n, function(n) {

                n && window.FlashExternalInterface.track("log", "fatal", "Can't log login crash: " + n)

            })

        }, window.FlashExternalInterface.logDebug = function(n) {

            window.FlashExternalInterface.track("log", "debug", n)

        }, window.FlashExternalInterface.logError = function(n) {

            window.HabboFlashClient.started = !0, window.HabboWebApi.logError(n, function(n) {

                n && window.FlashExternalInterface.track("log", "error", "Can't log login error: " + n)

            })

        }, window.FlashExternalInterface.logWarn = function(n) {

            window.FlashExternalInterface.track("log", "warn", n)

        }, window.FlashExternalInterface.logLoginStep = function(e, a) {

            window.FlashExternalInterface.track("clientload", e, a), window.HabboFlashClient.started = !0, n || "client.init.core.running" !== e || (n = !0, window.MainApp.postMessage({

                call: "hotel-ready"

            })), window.HabboWebApi.logLoginStep(e, a, function(n) {

                n && window.FlashExternalInterface.track("log", "error", "Can't log login step: " + n)

            })

        }, window.FlashExternalInterface.logout = function() {

            window.MainApp.postMessage({

                call: "logout"

            })

        }, window.FlashExternalInterface.openExternalPage = function(n) {

            window.MainApp.postMessage({

                call: "open-external",

                target: n

            })

        }, window.FlashExternalInterface.openHabblet = function(n, e) {

            window.HabboTracking.track("openhablet", "habletid", n);

            var a = window.HabboPageTransformer.transformHabblet(n, e);

            if (a.match(/^alert/))

            {

                var params = (a.replace(/^alert\?/, "")).split("&");

                var param;

                var final_arguments = {};

                for (var i = 0; i < params.length; i++)

                {

                    param = (params[i].replace(/\r\n|\n\r|\r|\n/g, "<br>")).split("=");

                    param[1] = param[1].replace(/;amp;/g, "&").replace(/;equal;/g, "=").replace(/;slash;/g, "/");

                    final_arguments[param[0]] = param[1];

                }

                var img = "https://swf.dabbo.me/c_images/notifications/" + final_arguments.type + ".png";

                newAlert(img,final_arguments.description,final_arguments.header,final_arguments.title,final_arguments.username,final_arguments.figure,final_arguments.button_text,final_arguments.button_event);



            }

            else

                window.FlashExternalInterface.openPage(a)

        }, window.FlashExternalInterface.openWebHabblet = function(n, e) {

            window.HabboTracking.track("openwebhablet", n, e);

            var a = window.HabboPageTransformer.transformHabblet(n, e);

            window.FlashExternalInterface.openPage(a)

        }, window.FlashExternalInterface.openPage = function(n) {

            n = window.HabboPageTransformer.translate(n), window.HabboTracking.track("openpage", "", n), window.MainApp.postMessage({

                call: "open-page",

                target: n

            })

        }, window.FlashExternalInterface.track = function(n, e, a) {

            window.HabboFlashClient.started = !0, window.HabboTracking.track(n, e, a)

        }, window.FlashExternalInterface.updateFigure = function(n) {

            window.MainApp.postMessage({

                call: "update-figure",

                target: n

            })

        }, window.FlashExternalInterface.updateName = function(n) {

            window.MainApp.postMessage({

                call: "update-name",

                target: n

            })

        }, window.FlashExternalInterface.openMinimail = function(n) {

            window.HabboTracking.track("minimail", "open", n), window.MainApp.postMessage({

                call: "open-page",

                target: "/"

            })

        }, window.FlashExternalInterface.openNews = function() {

            window.HabboTracking.track("news", "open", ""), window.MainApp.postMessage({

                call: "open-page",

                target: "/"

            })

        }, window.FlashExternalInterface.openAvatars = function() {

            window.FlashExternalInterface.openPage("/settings/avatars")

        }, window.FlashExternalInterface.showInterstitial = function() {

            window.MainApp.postMessage({

                call: "show-interstitial"

            })

        }, window.FlashExternalInterface.subscriptionUpdated = function(n) {

            window.MainApp.postMessage({

                call: "update-habbo-club",

                target: n

            })

        }, window.FlashExternalInterface.updateBuildersClub = function(n) {

            window.MainApp.postMessage({

                call: "update-builders-club",

                target: n

            })

        }

    }(),

    function() {

        "use strict";



        function n(n) {

            if (n.data) {

                var t = n.data;

            }

        }



        function e(n) {

            clientLinks.openlink(n)

        }



        function a(n) {

            n.indexOf("r-hh") >= 0 ? clientLinks.openroom(n) : e("navigator/goto/" + n)

        }



        function o(n) {

            window.HabboFlashClient.flashInterface.interstitialCompleted(n)

        }

        window.addEventListener("message", n, !1), window.HabboFlashClient = {

            started: !1,

            init: function(n) {

                window.HabboTracking.track("clientload", "starting", "Initalizing Habbo Client."), window.FlashExternalInterface.logLoginStep("web.view.start"), n || (console.log("City Hôtel prêt à être chargé"), window.FlashExternalInterface.logLoginStep("web.flash_missing")), clientLinks = n, window.HabboFlashClient.flashInterface = n, setTimeout(function() {

                    window.HabboFlashClient.started || window.FlashExternalInterface.logLoginStep("client.init.swf.error")

                }, 3e4)

            }

        }

    }(), window.addEventListener("load", initializeExternalInterfaces, !1),

    function() {

        "use strict";



        function n(n, e) {

            return 0 === n.indexOf(e)

        }

        var e = {

            "credits": "/shop",

            "creditflow": "/shop",

            "news": "/community/category/all/1"

        };

        window.HabboPageTransformer = {

            translate: function(a) {

                for (var o in e)

                    if (e.hasOwnProperty(o) && n(a, o)) return e[o];

                return a

            },

            transformHabblet: function(n, e) {

                return n

            }

        }

    }(),

    function() {

        "use strict";



        function n(n, e) {



        }

        window.HabboShopApi = {}, window.HabboShopApi.checkOffer = function(e) {

            n("/shopapi/checkoffer/", e)

        }

    }(),

    function() {

        "use strict";

        var n = function(n, e, a) {

        };

        window.HabboTracking = {

            track: function(e, a, o) {

                n(e, a, o), "clientload" === e && window.HabboTracking.gaTrack(e, a)

            },

            gaTrack: function(n, e) {

                window._gaq && window._gaq.push(["_trackEvent", n, e])

            }

        }

    }(),

    function() {

        "use strict";



        function n(n, e, a) {



        }

        window.HabboWebApi = {}, window.HabboWebApi.checkName = function(e, a) {

            n("/api/newuser/name/check", {

                name: e

            }, a)

        }, window.HabboWebApi.claimName = function(e, a) {

            n("/api/newuser/name/select", {

                name: e

            }, a)

        }, window.HabboWebApi.saveFigure = function(e, a, o) {

            n("/api/user/look/save", {

                figure: e,

                gender: a

            }, o)

        }, window.HabboWebApi.selectRoom = function(e, a) {

            n("/api/newuser/room/select", {

                roomIndex: e

            }, a)

        }, window.HabboWebApi.logCrash = function(e, a) {

            n("/api/log/crash", {

                message: e

            }, a)

        }, window.HabboWebApi.logError = function(e, a) {

            n("/api/log/error", {

                message: e

            }, a)

        }, window.HabboWebApi.logLoginStep = function(e, a, o) {

            n("/api/log/loginstep", {

                step: e,

                data: a

            }, o)

        }

    }(),

    function() {

        "use strict";

        window.NewUserReception = {}, window.NewUserReception.checkName = function(n) {

            console.log('Checking name: "' + n + '"...'), window.HabboWebApi.checkName(n, function(e, a) {

                return e ? (console.error("Checking name failed!"), void window.HabboFlashClient.flashInterface.newUserReceptionCheckNameFailed(n)) : void window.HabboFlashClient.flashInterface.newUserReceptionCheckNameResponse(n, a.code, a.validationResult || [], a.suggestions)

            })

        }, window.NewUserReception.chooseRoom = function(n) {

            console.log('Choosing room: "' + n + '"...'), window.HabboWebApi.selectRoom(n, function(n) {

                return n ? (console.error("Choosing room failed!"), void window.HabboFlashClient.flashInterface.newUserReceptionChooseRoomFailed()) : void window.HabboFlashClient.flashInterface.newUserReceptionChooseRoomResponse()

            })

        }, window.NewUserReception.claimName = function(n) {

            console.log('Claiming name: "' + n + '"...'), window.HabboWebApi.claimName(n, function(e, a) {

                return e ? (console.error("Claiming name failed!"), void window.HabboFlashClient.flashInterface.newUserReceptionClaimNameFailed(n)) : (window.HabboFlashClient.flashInterface.newUserReceptionClaimNameResponse(a.code, a.validationResult, a.suggestions), void("OK" === a.code && window.MainApp.postMessage({

                    call: "update-name",

                    target: n

                })))

            })

        }, window.NewUserReception.logStep = function(n) {

            window.HabboTracking.track("nux", "log", n)

        }, window.NewUserReception.saveOutfit = function(n, e) {

            console.log('Saving outfit: "' + n + '" - "' + e + '"...'), window.HabboWebApi.saveFigure(n, e, function(n, a) {

                return n ? (console.error("Saving outfit failed!"), void window.HabboFlashClient.flashInterface.newUserReceptionSaveOutfitFailed()) : (window.HabboFlashClient.flashInterface.newUserReceptionSaveOutfitResponse(a.figureString, e, "OK"), void window.MainApp.postMessage({

                    call: "update-figure",

                    target: a.figureString

                }))

            })

        }

    }(),

    function() {

        "use strict";



        function n() {

            window.SSA_CORE.BrandConnect.engage();

            var n = document.getElementById("ssaInterstitialTopBar"),

                e = n.innerHTML;

            n.innerHTML = "";

            var a = document.createElement("div");

            a.className = "ssaInterstitialTopBarInnerContainerLeft";

            var o = document.createElement("div");

            o.className = "ssaInterstitialTopBarInnerContainerRight";

            var t = document.createElement("div");

            t.className = "ssaTopBarCloseButton", t.setAttribute("onClick", 'SSA_CORE.close("ssaBrandConnect")'), t.innerHTML = "";

            var i = document.createElement("span");

            i.className = "ssaTopBarTextSpan", i.innerHTML = e, a.appendChild(t), a.appendChild(i), n.appendChild(o), n.appendChild(a);

            var s = document.getElementById("ssaInterstitialBottomBar"),

                r = document.createElement("div");

            r.className = "ssaBottomBarInnerLeft";

            var l = document.createElement("div");

            l.className = "ssaBottomBarInnerRight", s.appendChild(l), s.appendChild(r)

        }



        function e(n) {

            n && n.length > 0 ? window.HabboFlashClient.flashInterface.supersonicAdsOnCampaignsReady(n.length.toString()) : window.HabboFlashClient.flashInterface.supersonicAdsOnCampaignsReady("0")

        }



        function a() {

            window.HabboFlashClient.flashInterface.supersonicAdsOnCampaignOpen()

        }



        function o() {

            window.HabboFlashClient.flashInterface.supersonicAdsOnCampaignClose()

        }



        function t() {

            window.HabboFlashClient.flashInterface.supersonicAdsOnCampaignCompleted()

        }



        function i() {

            var n = document.createElement("script");

            n.setAttribute("src", s), document.getElementsByTagName("head")[0].appendChild(n)

        }

        var s = "https://a248.e.akamai.net/ssastatic.s3.amazonaws.com/inlineDelivery/delivery.min.gz.js",

            r = window.flashvars || {},

            l = r.supersonic_devmode,

            c = r.supersonic_application_key,

            w = window.ssa_json = {

                applicationKey: c,

                onCampaignsReady: e,

                onCampaignOpen: a,

                onCampaignClose: o,

                onCampaignCompleted: t,

                pagination: !1,

                customCss: r.supersonic_custom_css

            };

        l ? (r.supersonic_demo_campaigns && (w.demoCampaigns = 1), w.applicationUserId = r.supersonic_admin_id || r.account_id) : w.applicationUserId = r.account_id, window.supersonicAdsCamapaignEngage = n, window.supersonicAdsOnCampaignsReady = e, window.supersonicAdsOnCampaignOpen = a, window.supersonicAdsOnCampaignClose = o, window.supersonicAdsOnCampaignCompleted = t, window.supersonicAdsLoadCampaigns = i

    }(),

    function() {

        "use strict";

        window.TargetedWebOffer = {}, window.TargetedWebOffer.checkOffer = function() {

            console.log("Checking for offer..."), window.HabboShopApi.checkOffer(function(n, e) {

                return n ? void window.HabboFlashClient.flashInterface.targetedWebOfferCheckFailed() : void window.HabboFlashClient.flashInterface.targetedWebOfferCheckResponse(e)

            })

        }

    }();