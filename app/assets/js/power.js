function returnimg(){var divs=document.getElementsByClassName('lazy');for(var i=0;i<divs.length;i++){var div=$(divs[i]);if(div.prop("tagName")=="IFRAME"){var src="app/social/lazy.php";}else{var src="app/assets/img/lazy.png";}

div.attr("data-src",div.attr('src'));div.attr("src",src);}}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-121886852-1','auto');ga('send','pageview');(function(root,ns,factory){"use strict";if(typeof(module)!=='undefined'&&module.exports){module.exports=factory(ns,root);}else if(typeof(define)==='function'&&define.amd){define("detect-zoom",function(){return factory(ns,root);});}else{root[ns]=factory(ns,root);}}(window,'detectZoom',function(){var devicePixelRatio=function(){return window.devicePixelRatio||1;};var fallback=function(){return{zoom:1,devicePxPerCssPx:1};};var ie8=function(){var zoom=Math.round((screen.deviceXDPI/screen.logicalXDPI)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var ie10=function(){var zoom=Math.round((document.documentElement.offsetHeight/window.innerHeight)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var chrome=function(){var zoom=Math.round(((window.outerWidth)/window.innerWidth)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};}

var safari=function(){var zoom=Math.round(((document.documentElement.clientWidth)/window.innerWidth)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};}

var webkitMobile=function(){var deviceWidth=(Math.abs(window.orientation)==90)?screen.height:screen.width;var zoom=deviceWidth/window.innerWidth;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var webkit=function(){var important=function(str){return str.replace(/;/g," !important;");};var div=document.createElement('div');div.innerHTML="1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";div.setAttribute('style',important('font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;'));var container=document.createElement('div');container.setAttribute('style',important('width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;'));container.appendChild(div);document.body.appendChild(container);var zoom=1000/div.clientHeight;zoom=Math.round(zoom*100)/100;document.body.removeChild(container);return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var firefox4=function(){var zoom=mediaQueryBinarySearch('min--moz-device-pixel-ratio','',0,10,20,0.0001);zoom=Math.round(zoom*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom};};var firefox18=function(){return{zoom:firefox4().zoom,devicePxPerCssPx:devicePixelRatio()};};var opera11=function(){var zoom=window.top.outerWidth/window.top.innerWidth;zoom=Math.round(zoom*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var mediaQueryBinarySearch=function(property,unit,a,b,maxIter,epsilon){var matchMedia;var head,style,div;if(window.matchMedia){matchMedia=window.matchMedia;}else{head=document.getElementsByTagName('head')[0];style=document.createElement('style');head.appendChild(style);div=document.createElement('div');div.className='mediaQueryBinarySearch';div.style.display='none';document.body.appendChild(div);matchMedia=function(query){style.sheet.insertRule('@media '+query+'{.mediaQueryBinarySearch '+'{text-decoration: underline} }',0);var matched=getComputedStyle(div,null).textDecoration=='underline';style.sheet.deleteRule(0);return{matches:matched};};}

var ratio=binarySearch(a,b,maxIter);if(div){head.removeChild(style);document.body.removeChild(div);}

return ratio;function binarySearch(a,b,maxIter){var mid=(a+b)/2;if(maxIter<=0||b-a<epsilon){return mid;}

var query="("+property+":"+mid+unit+")";if(matchMedia(query).matches){return binarySearch(mid,b,maxIter-1);}else{return binarySearch(a,mid,maxIter-1);}}};var detectFunction=(function(){var func=fallback;if(!isNaN(screen.logicalXDPI)&&!isNaN(screen.systemXDPI)){func=ie8;}

else if(window.navigator.msMaxTouchPoints){func=ie10;}

else if(!!window.chrome&&!(!!window.opera||navigator.userAgent.indexOf(' Opera')>=0)){func=chrome;}

else if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0){func=safari;}

else if('orientation'in window&&'webkitRequestAnimationFrame'in window){func=webkitMobile;}

else if('webkitRequestAnimationFrame'in window){func=webkit;}

else if(navigator.userAgent.indexOf('Opera')>=0){func=opera11;}

else if(window.devicePixelRatio){func=firefox18;}

else if(firefox4().zoom>0.001){func=firefox4;}

return func;}());var zoom=detectFunction().zoom,device=detectFunction().devicePxPerCssPx;return({zoom:function(){return zoom;},device:function(){return device;}});}));var loader=$("#loader"),appContent=$("#appcontent"),html=$("html");webZoom();function webZoom(){html.css({"zoom":"1","-ms-zoom:":"1","-webkit-zoom":"1"});if(window.location.pathname!=="/register"){if(detectZoom.device()>=1.20&&detectZoom.zoom()>=1&&detectZoom.zoom()<=1.1){html.css({"zoom":"0.8","-ms-zoom:":"0.8","-webkit-zoom":"0.8"});$("#largeade").css({"zoom":"1.25","-ms-zoom:":"1.25","-webkit-zoom":"1.25"});$("#littleads").css({"zoom":"1.25","-ms-zoom:":"1.25","-webkit-zoom":"1.25"});}else if(detectZoom.zoom()==0.9){html.css({"zoom":"1.12","-ms-zoom:":"1.12","-webkit-zoom":"1.12"});}else if(detectZoom.zoom()==1.25){html.css({"zoom":"0.8","-ms-zoom:":"0.8","-webkit-zoom":"0.8"});}}}

var index56=$("#index56").html();var h25=$("#h25").html();var siteConnected=true;if(typeof index56==='undefined'){siteConnected=true;}else if(typeof h25==='undefined'){siteConnected=false;}

function setCurrentPage(url,title,param){hotelManager.css({visibility:"hidden"});var path=window.location.pathname;if((path=="/hotel"||path.substring(0,7)=="/hotel/")&&param!=true){document.title="Dabbo.ME: Hotel";EntrerHotel();ga('send','pageview','app/load/Client.php');}else{document.title="Dabbo.ME";loader.css({display:"block"});appContent.load(url+" #appcontent",function(responseTxt,statusTxt){var z=$(responseTxt).find("#index56").html();if(typeof z!=='undefined'&&siteConnected){location.reload();}

if(statusTxt==="success"){document.title=title;html.css({"overflow":"auto"});returnimg();if(title==null){document.title="Dabbo.ME";}

ga('send','pageview',url);7

explore.grid();if(path==="/home"||path==="/index"){indexSliderPageStart();}

else if(path==="/register"){var RegisterAnimPend=0;$("#reg32").animate({top:"-450px"},15000);setInterval(function(){if(RegisterAnimPend==0){$("#reg32").animate({top:"0px"},15000);}else{$("#reg32").animate({top:"-450px"},15000);}

RegisterAnimPend=1-RegisterAnimPend;},15000);}else if(path==="/boutique/citycash"){dedipass();PorteMonnaie();}else{closePorteMonnaie();}

loader.fadeOut(100);$('html, body').animate({scrollTop:0},250);webZoom();displayGoogleAds();lazyload();lazyload();lazyload();lazyload();}else{window.location.href="/introuvable";}});}}

$('body').on('click','a',function(e){var t=$(this).attr('href'),r=$(this).attr('room');if(t=="hotel"){EntrerHotel();return false;}else if(typeof r!=typeof undefined&&r!=false){EntrerHotel(r);return false;}else{if(t!="bye"){e.preventDefault();}

if($(this).attr('target')=="blank"){window.open(t,'_blank');}else{var e=$(this).attr('place');history.pushState(e,null,t);setCurrentPage(t,e);}}});window.addEventListener('popstate',function(e){html.css({overflow:'auto'});setCurrentPage(document.location,e.state);});function lazyload(){var t=window.scrollY,h=window.innerHeight;var divs=document.getElementsByClassName('lazy');for(var i=0;i<divs.length;i++){var div=$(divs[i]),x=div.offset().top,z=div.attr('src');if(x<(h+t+50)){if(z=="app/assets/img/lazy.png"||z=="app/social/lazy.php"){div.attr('src',div.data('src')).fadeOut(0).removeClass('lazy').removeAttr('data-src').fadeIn(1000);}}}}

window.onscroll=lazyload;function MenuScroll(){var c=$('.menu');if($(window).scrollTop()>98){$("#head24x").css({left:"30px"});$(".head24x").css({width:"105px"});c.css({"position":"fixed","z-index":"9999999"});$("#menu_logo").show().css({left:"0px"});}

else{$("#head24x").css({left:"0px"});$(".head24x").css({width:"85px"});$("#menu_logo").hide().css({left:"-150px"});c.css({"position":"relative","z-index":"99"});}}

$(window).scroll(MenuScroll);MenuScroll();function NewsSignale(){var n=$('#articlesignale');if($(window).scrollTop()>0){n.css({"bottom":"18px","right":"calc(15% - 70px)"});}else{n.css({"bottom":"calc(100% - 295px)","right":"calc(15% - 70px)"});}}

$(window).scroll(NewsSignale);NewsSignale();var thebody=$('body');$(document).ready(function(){var x,y,top,left,down;thebody.on('mousedown','#stories',function(e){e.preventDefault();down=true;x=e.pageX;y=e.pageY;top=$(this).scrollTop();left=$(this).scrollLeft();});thebody.mousemove(function(e){if(down){var newX=e.pageX;$("#stories").scrollLeft(left-newX+x);}});thebody.mouseup(function(e){down=false;});});function NewsLeft(){var a=$("#articlesui"),right=parseInt(a.css("right"))-420;if(right>-420){a.animate({right:right},200);}}

function NewsRight(){var a=$("#articlesui"),right=parseInt(a.css("right"))+420;if(right<2200){a.animate({right:right},200);}}



function closePorteMonnaie(){$("#b65").animate({top:'-100px'},0);}



CargarDiv = function (objetivo, url)

{$(document).ready(function() {$(objetivo).load(url+"?" + (new Date()).getTime());});}

setInterval('CargarDiv("#reload-noti", "/app/load/noti.php")', 2000);



function MouvConnexion() {

    var x = $("#FormConnexion"),

        logic = true,

        i = 0;

    for (i = 0; i < 8; i++) {

        if (logic) {

            x.animate({right: '15px'}, 70);

            logic = false;

        } else {

            x.animate({right: '-15px'}, 70);

            logic = true;

        }

    }

    x.animate({right: '0px'}, 70);

}



function AnimateConnexion() {

    $("#identifiant").css({background:'rgb(242,91,99)'}, 100);

    $("#password").css({background:'rgb(242,91,99)'}, 100);

    MouvConnexion();

}



function AnimateCaptchaIndex() {

    $("#captcha").css({border: '3px solid rgb(242,91,99)', width: "94px", height: '64px'}, 100);

    $("#password").removeAttr('style');

    $("#identifiant").removeAttr('style');

    MouvConnexion();

}





function indexErrorLog(text){var x=$("#indexerrorlog");x.append('<div id="nin47"><div id="nin48"></div> '+text+' </div>');setTimeout(function(){$("#nin47").remove();},3500);}

$(document).ready(function(){$('body').on('submit','#FormConnexion',function(){var identifiant=$('#identifiant').val(),captcha=$('#captcha').val(),password=$('#password').val(),random=Math.floor(Math.random()*(1-100000+1))+100000,data={identifiant:identifiant,password:password,method:'ajax',captcha:captcha},z=$("#nin24");if(identifiant==''||password==''){indexErrorLog("Veuillez mettre vos identifiants.");}else{z.html('<div id="nin25"></div><button class="nin32xx" type="submit">Chargement...</button>');$.ajax({url:$(this).attr('action'),type:$(this).attr('method'),data:data,dataType:'json',success:function(json){if(json.reponse=='ok'){if(json.change){$("#indexDisable").show();}else{window.location.href="home";}}else if(json.reponse=='erreur'){z.html('<div id="nin25"></div><button class="nin32xx" type="submit">Se connecter</button>');indexErrorLog("Pseudo ou mot de passe invalide.");}

else if(json.reponse=='bannis'){location.href="ban/"+json.id;}

else if(json.reponse=='captcha'){indexErrorLog("Le captcha est incorrect.");$('#loadcaptchaa > img').attr('src','app/captcha/captchacolor.php?'+random);z.html('<div id="nin25"></div><button class="nin32xx" type="submit">Se connecter</button>');$("#indexcaptcha").css({display:'block'});}else if('staff'){$("#secu1").css({visibility:"visible"});$("#secuload").load("app/load/GoogleSecurity.php?pseudo="+json.pseudo,function(responseTxt,statusTxt,xhr){if(statusTxt=="success"){$("#secu3").text(json.pseudo+" ton compte est bloqué©");}});}

ga('send','event','Connexion','app/actions/Connection.php');}});}

return false;});});



$(document).ready(function () {

    $('body').on('keyup', '#identifiant', function () {



        var user = $(this).val(),

            x = $('#indexusername > x');

        if (user == '') {

            x.html("HEY");

        } else {

            x.html(user);

        }

    });

});





function loadlook() {

    var xmlhttp;

    var n = document.getElementById('identifiant').value;

    if(n == '') {

        document.getElementById("indexfigure").innerHTML = "<img id='nin18' src='/app/assets/img/index/hey.png'>";

        return;

    }

    if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari

        xmlhttp = new XMLHttpRequest();

    } else { // code for IE6, IE5

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }

    xmlhttp.onreadystatechange = function() {

        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("indexfigure").innerHTML = xmlhttp.responseText;

        }

    }

    xmlhttp.open("POST", "/avatar-generator", true);

    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlhttp.send("q=" + n);

}





function SetLook(look, url, gender, num) {

    var figure = url + look,

        s = $('#setlook > img');

    s.fadeOut(0);

    s.attr('src', figure+'&action=sit&gesture=sml&direction=4&head_direction=3&size=l&img_format=png');

    s.fadeIn(500);

    $('#figurejs').html('<input id="figure_id"  value="' + num + '"></input>');

    $('#genderjs').html('<input id="gender"  value="' + gender + '"></input>');

    $('#lookjs').html('<input id="look"  value="' + look + '"></input>');

}



function RegisterNext() {

    $("#choisistonlook").fadeIn(500);

}



function CloseRegisterNext() {

    $("#choisistonlook").css({'display': 'none'});

}



function MouvInscription() {

    var i = $("#FormInscription");

    i.animate({right: '15px'}, 70);

    i.animate({right: '-15px'}, 70);

    i.animate({right: '15px'}, 70);

    i.animate({right: '-15px'}, 70);

    i.animate({right: '15px'}, 70);

    i.animate({right: '-15px'}, 70);

    i.animate({right: '15px'}, 70);

    i.animate({right: '0px'}, 70);

}



function ResetInscription() {

    $("#username").css({border: '0'}, 100);

    $("#mail").css({border: '0'}, 100);

    $("#passwords").css({border: '0'}, 100);

    $("#repassword").css({border: '0'}, 100);

    $("#captcha").css({border: '0'}, 100);

}



function AnimateInscription() {

    ResetInscription();

    $("#choisistonlook").fadeOut(100);

    $("#username").css({border: '3px solid rgb(242,91,99)'}, 100);

    $("#mail").css({border: '3px solid rgb(242,91,99)'}, 100);

    $("#passwords").css({border: '3px solid rgb(242,91,99)'}, 100);

    $("#repassword").css({border: '3px solid rgb(242,91,99)'}, 100);

    $("#captcha").css({border: '3px solid rgb(242,91,99)'}, 100);

    MouvInscription();

}



function AnimatePassword() {

    ResetInscription();

    $("#choisistonlook").fadeOut(100);

    $("#passwords").css({border: '3px solid rgb(242,91,99)'}, 100);

    $("#repassword").css({border: '3px solid rgb(242,91,99)'}, 100);

    MouvInscription();

}



function AnimateMail() {

    ResetInscription();

    $("#choisistonlook").fadeOut(100);

    $("#mail").css({border: '3px solid rgb(242,91,99)'}, 100);

    MouvInscription();

}



function AnimatePseudo() {

    ResetInscription();

    $("#choisistonlook").fadeOut(100);

    $("#username").css({border: '3px solid rgb(242,91,99)'}, 100);

    MouvInscription();

}



function AnimateCaptcha() {

    ResetInscription();

    $("#choisistonlook").fadeOut(100);

    $("#captcha").css({border: '3px solid rgb(242,91,99)'}, 100);

    MouvInscription();

}



function JeSuisPret() {

    $("#lookchoisis2").html('');

    $("#lookchoisis").html('<button onclick="LookChoisis()" style="width:100%;" type="submit" id="registerpret">Je suis prêt</button>');

}



function validateEmail(email) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);

}



$(document).ready(function () {

    var $form = $('#FormInscription');

    $('body').on('submit', '#FormInscription', function () {

        var random = Math.floor(Math.random() * (1 - 100000 + 1)) + 100000,

            pseudo = $('#username').val(),

            mail = $('#mail').val(),

            password = $('#passwords').val(),

            repassword = $('#repassword').val(),

            captcha = $('#captcha').val(),

            figure = $('#figure_id').val(),

            look = $('#look').val(),

            gender = $('#gender').val(),

            data = {

                pseudo: pseudo,

                mail: mail,

                password: password,

                repassword: repassword,

                captcha: captcha,

                figure: figure,

                look: look,

                gender: gender

                   };

        if (pseudo == '' || pseudo.length < 4 || pseudo.length > 25) {

            JeSuisPret();

            AnimatePseudo();

        } else if (mail == '') {

            JeSuisPret();

            AnimateMail();

        }

        else if (password == '' || repassword == '' || password != repassword) {

            JeSuisPret();

            AnimatePassword();

        }

        else if (captcha == '') {

            JeSuisPret();

            AnimateCaptcha();

        }

        else if (validateEmail(mail)) {

            var k = $("#registerpret");

            k.html("Chargement...");

            $.ajax({

                url: $(this).attr('action'),

                type: $(this).attr('method'),

                data: data,

                dataType: 'json',

                success: function (json) {

                    if (json.reponse == 'ok') {

                        window.location.href = "/hotel";

                    } else if (json.reponse == 'pseudo') {

                        $("#lookchoisis2").html('');

                        $("#lookchoisis").html('<button onclick="LookChoisis()" style="width:100%;" type="submit" id="registerpret">Je suis prêt</button>');

                        AnimatePseudo();

                        k.html("Je suis prêt");

                        JeSuisPret();

                    } else if (json.reponse == 'email') {

                        AnimateMail();

                        k.html("Je suis prêt");

                        JeSuisPret();

                    } else if (json.reponse == 'captcha') {

                        $('#loadcaptcha > img').attr('src', 'app/captcha/captchacolor.php?figure=' + random);

                        AnimateCaptcha();

                        k.html("Je suis prêt");

                        JeSuisPret();

                    } else if (json.reponse == 'password') {

                        AnimatePassword();

                        k.html("Je suis prêt");

                        JeSuisPret();

                    } else if (json.reponse == 'erreur') {

                        JeSuisPret();

                        k.html("Je suis prêt");

                        AnimateInscription();

                    }

                }

            });



        } else {

            JeSuisPret();

            AnimateMail();

        }



        return false;

    });

});



function MenuScroll(){var c=$('.menu');if($(window).scrollTop()>98){$("#head24x").css({left:"30px"});$(".head24x").css({width:"105px"});c.css({"position":"fixed","z-index":"9999999"});$("#menu_logo").show().css({left:"0px"});}

else{$("#head24x").css({left:"0px"});$(".head24x").css({width:"85px"});$("#menu_logo").hide().css({left:"-150px"});c.css({"position":"relative","z-index":"99"});}}



function LoadPageSupport(url, title) {

    var f = $("#footer31");

    f.html('Chargement...');

    $("#footer23").load(url, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            f.html(title);

        } else {

            window.location.href = baseUrl + "/error";

        }

    });

}



function OpenSupportToPage(url, title) {

    LoadPageSupport(url, title);

    $("#support").fadeIn(500);

    $("html").css({overflow: "hidden"});

}



function OpenSupport(type, url) {

    var a = $("#footer31"),

        b = $("#footer23");

    if (type == "forum") {

        a.html('Chargement...');

        b.load('app/load/HelpIndex.php', function (responseTxt, statusTxt, xhr) {

            if (statusTxt == "success") {

                a.html('Tu as un problème ?');

                $('#helpmenu').prepend('<div onclick="LoadPageSupport(\'' + url + '\',\'Abus sur le forum\')" id="footer34">Un joueur se comporte mal dans le forum</div>');

            } else {

                window.location.href = baseUrl + "/error";

            }

        });

    } else if (type == "news") {

        a.html('Chargement...');

        b.load('app/load/HelpIndex.php', function (responseTxt, statusTxt, xhr) {

            if (statusTxt == "success") {

                a.html('Tu as un problème ?');

                $('#helpmenu').prepend('<div onclick="LoadPageSupport(\'' + url + '\',\'Abus dans une info\')" id="footer34">Un joueur se comporte mal dans un commentaire</div>');

            } else {

                window.location.href = baseUrl + "/error";

            }

        });

    } else if (type == "user") {

        a.html('Chargement...');

        b.load('app/load/HelpIndex.php', function (responseTxt, statusTxt, xhr) {

            if (statusTxt == "success") {

                a.html('Tu as un problème ?');

                $('#helpmenu').prepend('<div onclick="LoadPageSupport(\'' + url + '\',\'Abus dans le tchat\')" id="footer34">Un joueur se comporte mal dans le tchat</div>');

            } else {

                window.location.href = baseUrl + "/error";

            }

        });

    } else {

        LoadPageSupport('app/load/HelpIndex.php', 'Tu as un problème ?');

    }

    $("#support").fadeIn(500);

    $("html").css({overflow: "hidden"});

}



function helpOpen(){$("#ai1").css({display:"block"});$("#ai1").load("app/load/HelpIndex.php",function(responseTxt,statusTxt){if(statusTxt=="success"){helpPage("index");ga('send','pageview','app/load/HelpIndex.php');}});}

function helpPage(page){$("#ai5").text("Un instante...");$("#helpload").load("app/load/HelpCategory.php?page="+page,function(responseTxt,statusTxt){if(statusTxt=="success"){if(page==="index"){$("#ai5").text("Centre d'aide");$("#ai6").attr("onclick","helpClose()");helpConseils(0);}else if(page==="support"){$("#ai5").text("Service client");$("#ai6").attr("onclick","helpPage('index')");}else if(page==="ticket"){$("#ai5").text("Mes tickets");$("#ai6").attr("onclick","helpPage('index')");}

ga('send','pageview','app/load/HelpCategory.php?page='+page);}});}

function helpTicket(id){$("#ai5").text("Un instante...");$("#ai54").load("app/load/HelpTicket.php?id="+id,function(responseTxt,statusTxt){if(statusTxt=="success"){$("#ai5").text("Mon ticket");var wtf=$('#ai59');wtf.scrollTop(wtf[0].scrollHeight);ga('send','pageview','app/load/HelpTicket.php?id='+id);}});}

function helpTicketReponse(id){$("#ai71").html('<div id="ai72"></div>Un instante...');var content=$("#ai70").val();$.ajax({type:"POST",url:"app/actions/SupportTicketReponse.php",data:{ticketid:id,message:content},dataType:'json',success:function(json){if(json.type=='error'){notify('Petit soucis, veuillez rÃ©-essayer.');}else if(json.type=='success'){helpTicket(id);}

$("#ai71").html('<div id="ai72"></div>RÃ©pondre');ga('send','event','RÃ©ponse au support','app/actions/SupportTicketReponse.php');}});}

function helpConditions(){helpClose();setCurrentPage('conditions',"Dabbo.ME : Conditions d'utilisation",true);history.pushState("Dabbo.ME : Conditions d'utilisation",null,"conditions");}

function helpClose(){$("#support").fadeOut(500); $("html").css({overflow: "auto"});$("#ai1").css({display:"none"}).html("");}

function helpConseils(conseil){$("#ai5").text("Un instante...");if(conseil===0){$("#ai27").css({visibility:"hidden"});}else{$("#ai27").css({visibility:"visible"});}

$("#secionconseils").load("app/load/HelpContent.php?content="+conseil,function(responseTxt,statusTxt){if(statusTxt=="success"){$("#ai5").text("Centro de ayuda");ga('send','pageview','app/load/.php?content='+conseil);}});}







function CloseSupport() {

    $("#support").fadeOut(500);

    $("html").css({overflow: "auto"});

}



function SelectForumSupport(id, pseudo, avatar) {

    $(".footer42").each(function () {

        $(this).css({background: 'transparent'});

    });

    $("#fofo" + id).css({background: 'rgb(127,127,127)'});

    $("#footer39").html(pseudo);

    $("#footer38").css({background: 'url(' + avatar + ')'});

    $("#content2").html(id);



}



function AnimateHelp() {

    var h = $("#footer47");

    h.animate({left: "10px"}, 70);

    h.animate({left: "-10px"}, 70);

    h.animate({left: "10px"}, 70);

    h.animate({left: "-10px"}, 70);

    h.animate({left: "10px"}, 70);

    h.animate({left: "-10px"}, 70);

    h.animate({left: "10px"}, 70);

    h.animate({left: "-10px"}, 70);

    h.animate({left: "10px"}, 70);

    h.animate({left: "0px"}, 70);

}



function SupportNext() {

    var x = $("#footer41"),

        a = $("#footer47"),

        b = $("#footer34"),

        c = $("#footer40");

    if (x.is(':visible')) {

        a.show();

        x.hide();

        b.text("Retour");

        c.text("Choisissez le thème qui convient le mieux à votre demande.");

    } else if (a.is(':visible')) {

        a.hide();

        x.show();

        c.text("Choisissez le joueur pour signaler.");

        b.text("Suivant");

    }

}



function SupportFinal(signalement) {

    var type = $("#type").html(),

        content = $("#content").html(),

        contenu_text = $("#content2").html(),

        xd = $("#footer34");

    xd.text("Chargement...");



    $.ajax({

        type: "POST",

        url: "app/actions/Report.php",

        data: {type: type, content: content, contenu_text: contenu_text, signalement: signalement},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                xd.animate({top: "200px"}, 100);

                $("#footer40").text("");

                xd.text("Envoyé avec succès! Veillez à ne pas abuser de cet outil.");

                $("#footer47").hide(340);

            } else if (json.reponse == 'erreur') {

                AnimateHelp();

            }

        }

    });





}



function balise(nom, argument) {

    if (typeof argument === 'undefined') {

        argument = '';

    }

    switch (nom) {

        case "createLink":

            argument = prompt("Quelle est l'adresse du lien ?", "http://");

            break;

        case "insertImage":

            argument = prompt("Quelle est l'adresse de l'image ?");

            break;

        case "redcolor":

            document.execCommand("foreColor", false, "#ED1C24");

            break;

        case "vertcolor":

            document.execCommand("foreColor", false, "#22B14C");

            break;

        case "bleucolor":

            document.execCommand("foreColor", false, "#4286CA");

            break;

    }

    document.execCommand(nom, false, argument);

    var selection = document.getSelection();

    selection.anchorNode.parentElement.target = 'blank';



}



function Share(social, url) {

    window.open(social + url, "nom_popup", "menubar=no, status=no, scrollbars=no, menubar=no, width=200, height=100");

}





function React(contentid, type, position, classid, page) {



    var data = {contentid: contentid, type: type, page: page},

        a = $("#lecture32");

    $.ajax({

        type: "POST",

        url: "app/actions/ReactionSent.php",

        data: data,

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'new') {

                var nbre = parseInt($("." + classid).html()) + 1;

                $("." + classid).html(nbre);

                a.css({'background-position': position}, 100);

                $("#nbreact").html(parseInt($("#nbreact").html()) + 1);

            }

            else if (json.reponse == 'remove') {

                var nbre = parseInt($("." + classid).html()) - 1;

                $("." + classid).html(nbre);

                $("#nbreact").html(parseInt($("#nbreact").html()) - 1);

                a.css({'background-position': ''}, 100);

            } else if (json.reponse == 'edit') {

                var id = ".react" + json.type;

                var nbre = parseInt($("." + classid).html()) + 1;

                $(id).html(parseInt($(id).html()) - 1);

                $("." + classid).html(nbre);

                a.css({'background-position': position}, 100);

            }

        }

    });

}





function LikeStories(id) {

    x = $(".df" + id);

    s = $(".dx" + id);

    $.ajax({

        type: "POST",

        url: "app/actions/StoriesLike.php",

        data: {id: id},

        dataType: 'json',

        success: function (json) {

            if (json.type == '1') {

                s.html(parseInt(s.html()) + 1);

                x.css({"transform": "scale(1.5)", "top": "26px"});

            } else if (json.type == '2') {

                s.html(parseInt(s.html()) - 1);

                x.css({"transform": "scale(1.0)", "top": "10px"});

            }

        }

    });



}



function FlecheStories() {

    var a = $(".stories");

    if (a.height() == 62) {

        document.cookie = "stories=open";

        $('#profil20').animate({textIndent: 0}, {

            step: function (now, fx) {

                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');

            }, duration: 250

        }, 'linear');

        a.animate({height: "195px"});

    } else {

        document.cookie = "stories=close";

        $('#profil20').animate({textIndent: 180}, {

            step: function (now, fx) {

                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');

            }, duration: 250

        }, 'linear');

        a.animate({height: "62px"});

    }



}



$('body').on('keydown', '.comediteur', function (event) {

    var keyCode = (event.keyCode ? event.keyCode : event.which);

    if (keyCode == 13) {

        return false;

    }

});



function AddCom(user, avatar, newsid, urank, ulink) {

    var a = $("#lecture42"),

        b = $(".articlecomsend"),

        c = $("#commentairesliste");



    a.fadeOut();

    b.html("Chargement...");

    var first = $("#commentairesliste").html(),

        contenu = $('#editeur').html().replace(/<div>/gi, '<br>').replace(/<\/div>/gi, '');

    $.ajax({

        type: "POST",

        url: "app/actions/NewsCommentsAdd.php",

        data: {contenu: contenu, newsid: newsid},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                if (first == "Hey, soyez le premier à commenter!") {

                    c.html("");

                }

                if (urank > 10) {

                    c.prepend($('<div class="com" id="lecture40"><div id="habboforumbulle"style="left:73px;top:35px;"></div><div id="articlescombadge"></div><a href="profile/' + user + '"><div id="articlescomtete" style="top:-34px;left:-15px;background:url(' + avatar +  ');z-index:3;height:150px;"></div></a><div id="lecture41"><div id="articlescomtext"><b>' + user + '</b> : ' + convertmention(contenu) + '</div></div></div> ').fadeIn());

                } else {

                    c.prepend($('<div class="com" id="lecture40"><div id="habboforumbulle"style="left:73px;top:35px;"></div><a href="profile/' + user + '"><div id="articlescomtete" style="top:-34px;left:-15px;background:url(' + avatar +  ');z-index:3;"></div></a><div id="lecture41"><div id="articlescomtext"><b>' + user + '</b> : ' + convertmention(contenu) + '</div></div></div> ').fadeIn());

                }



                b.html("Commenter");

            } else if (json.reponse == 'erreur') {

                a.fadeIn();

                $("#lecture44").html(json.message);

                b.html("Commenter");

            }

        }

    });

}



function convertmention(mention) {

    $str = mention;

    $format_search = [/\@(.*?)\ /ig];

    $format_replace = ['<a href="profile/$1" style="color:rgb(0,162,232);"><b>@$1 </b></a>'];

    for (var i = 0; i < $format_search.length; i++) {

        $str = $str.replace($format_search[i], $format_replace[i]);

    }

    return $str;

}





function DeleteCom(comid) {

    var data = 'id=' + comid;

    $.ajax({

        type: "POST",

        url: "app/actions/NewsCommentsRemove.php",

        data: data,

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                $(".com" + comid).html('<div id="lecture40s">Commentaire supprimé</div>');

            } else if (json.reponse == 'erreur') {

                alert("Erreur: DeleteCom");

            }

        }

    });

}



function OpenADMChat() {

    var a = $('#stream1'),

        b = $('#waitstream');



    $("#usernotif").css({display: "none"});

    a.animate({right: "0px"}, 500);

    a.css({display: "block"});

    b.css({display: "block"});

    $("#getstream").load("app/load/Habbostreamadm.php", function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success")

            b.css({display: "none"});

        if (statusTxt == "error")

            alert("Erreur OpenADMChat " + xhr.status + ": " + xhr.statusText);

    });

}



function CloseADMChat() {

    var a = $('#stream1');

    a.animate({right: "-370px"}, 500);

    setTimeout(function () {

        a.css({display: "none"});

    }, 500);

}



function OpenStream() {

    var a = $('#stream1'),

        b = $('#waitstream');



    $("#usernotif").css({display: "none"});

    a.animate({right: "0px"}, 500);

    a.css({display: "block"});

    b.css({display: "block"});

    $("#getstream").load("app/load/Habbostream.php", function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success")

            b.css({display: "none"});

        if (statusTxt == "error")

            alert("Pequeñas preocupaciones: " + xhr.status + ": " + xhr.statusText);

    });

}



function CloseStream() {

    var a = $('#stream1');

    a.animate({right: "-370px"}, 500);

    setTimeout(function () {

        a.css({display: "none"});

    }, 500);

}



function OpenHelpChat() {

    $('#chatemojishelp').fadeIn(100);

}



function CloseHelpChat() {

    $('#chatemojishelp').fadeOut(100);

}



function HideNotif(id) {

    $(".hidestream" + id).fadeOut();

    $.ajax({

        type: "POST",

        url: "app/actions/StreamRemoveNotification.php",

        data: {id: id},

        success: function (server_response) {

        }

    });

}



function GetChat(userid) {

    var a = $('#waitstream'),

        b = $('#getchat');



    a.css({display: "block"});

    b.css({display: "block"});

    b.load("app/load/HabbostreamTalk.php?userid=" + userid, function (responseTxt, statusTxt, xhr) {

        setInterval( function(){

            $('.chatscroll').load('/app/load/HabbostreamTalkreload.php?userid=' + userid);

           }, 500 );

        if (statusTxt == "success") {

            a.css({display: "none"});

            b.animate({left: "0px"}, 500);

            $('.msgnotif' + userid).css({display: "none"});

            $('#identity' + userid).css({display: "block"});

            $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

        }

    });    

}





function MouvSendChat() {

    var a = $("#editeurchat");

    a.animate({left: '15px'}, 70);

    a.animate({left: '25px'}, 70);

    a.animate({left: '15px'}, 70);

    a.animate({left: '25px'}, 70);

    a.animate({left: '15px'}, 70);

    a.animate({left: '25px'}, 70);

    a.animate({left: '15px'}, 70);

    a.animate({left: '25px'}, 70);

}





function SendMsg(userid, avatar, pseudo, type) {

    var a = $("#run"),

        b = $("#sendchat"),

        d = $("#editeurchat");

    var run = a.html();

    var message = d.text();

    if (message == '') {



    } else if (run == "run") {

        a.html("stop");

        b.html("...");

        $.ajax({

            type: "POST",

            url: "app/actions/StreamSendMessage.php",

            data: {message: message, userid: userid, type: type},

            dataType: 'json',

            success: function (json) {

                if (json.reponse == 'ok') {

                    var vlink = "&direction=2&head_direction=2";

                    $('#chatinlive' + userid).append('<div id="stream26"><a href="profile/' + pseudo + '"><div id="stream27" style="background:url(' + avatar + vlink + ');"></div></a><div id="stream29"></div><div id="stream30"><div id="stream33"></div><div id="motto"><b>' + pseudo + '</b> : ' + message + '</div><div id="stream31">1 s</div></div><div class="chatvue" ></div></div>');

                    $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

                    b.html("Envoyer");

                    d.html("");

                    a.html("run");

                } else if (json.reponse == 'erreur') {

                    b.html("Envoyer");

                    d.css({border: "2px solid #ED1C24", height: "30px"});

                    setTimeout(function () {

                        d.css({border: "0", height: "34px"});

                    }, 700);

                    MouvSendChat();

                    a.html("run");

                }

            }

        });

    }

}



$(document).ready(function () {

    $('body').on('keyup', '#stream36', function () {

        var user = $(this).val();

        var data = 'username=' + user;



        $.ajax({

            type: "GET",

            url: "app/actions/StreamSearchFriend.php",

            data: data,

            success: function (server_response) {

                $("#friendslist").html(server_response).show();

            }

        });



    });

});

$('body').on('keydown', '.editeurchat', function (event) {

    var keyCode = (event.keyCode ? event.keyCode : event.which);

    if (keyCode == 13) {

        var id = $("#chatmyid").html();

        var pseudo = $("#chatmypseudo").html();

        var avatar = $("#chatmyavatar").html();

        var type = $("#chattype").html();

        SendMsg(id, avatar, pseudo, type);

        return false;

    }

});



function CloseChat(userid) {

    $('#getchat').animate({left: "-400px"}, 500);

    $('#identity' + userid).css({display: "none"});

}



function CloseTuto() {

    $("#profil51").fadeOut(500);

}



function ForumPostAdd(threadid, figure, username, pdc, ulink) {

    var x = $("#forum42");

    x.html("Chargement...");

    var message = $('#editeur').html().replace(/<div>/gi, '<br>').replace(/<\/div>/gi, '');

    $.ajax({

        type: "POST",

        url: "app/actions/ForumAddPost.php",

        data: {message: message, threadid: threadid},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                var vlink = "&headonly=0&direction=2&head_direction=2&size=l";

                $("#lecture42").fadeOut();

                x.html("Envoyer un message");

                $('#forumposts').append($('<div  class="gjshd' + json.id + '" id="forum27"><div id="forum28"><div id="forum29" style="background:url(' + pdc + ') center center;"><div id="teamshadow"><div id="teamshadowbox"></div></div><a place="Dabbo.ME : ' + username + '" href="profile/' + username + '"><div id="forum30" style="background:url(' + figure + vlink + ');"></div></a><div id="forum31"><h2>Par ' + username + '</h2></div><div id="forum32"></div><div id="forum33">Juste maintenant</div></div><div id="forum34"><div id="forum54">Vous devez actualiser la page pour voir vos badges</div></div></div><div id="forum37"><p><div class="forummess' + json.id + '"id="motto">' + convertmention(message) + '</div></p><div id="forum38"></div></div><div id="forum61"></div><div onclick="ForumEditMsg(' + json.id + ')" id="forum62">Editer message</div><div onclick="ForumAction(' + json.id + ',\'deletepostid\')"  class="fghjk' + json.id + '" id="forum63">Supprimer</div></div>').fadeIn(500));

                $('#editeur').html("");

            } else if (json.reponse == 'erreur') {

                x.html("Envoyer un message");

                $("#lecture42").fadeIn();

                $("#lecture44").html(json.message);

            }

        }

    });

}



function ForumAction(threadid, type) {

    if (type == 'fijo') {

        $(".forumt4ep").html("...");

    }

    if (type == 'close') {

        $(".forumt4cl").html("...");

    }

    if (type == 'delete') {

        $(".forumt4de").html("...");

    }

    if (type == 'deletepostid') {

        $(".fghjk" + threadid).html("...");

    }

    $.ajax({

        type: "POST",

        url: "app/actions/ForumAction.php",

        data: {threadid: threadid, type: type},

        dataType: 'json',

        success: function (json) {

 if (json.reponse == 'close') {

                if (json.type == 'cadd') {

                    $(".forumt4cl").html("Fermer le sujet");

                } else if (json.type == 'crem') {

                    $(".forumt4cl").html("Sujet ouvert");

                }

            } else if (json.reponse == 'fijo') {

                if (json.type == 'f1') {

                    $(".forumt4ep").html("Ensemble");

                } else if (json.type == 'f2') {

                    $(".forumt4ep").html("Fixe");

                }

            } else if (json.reponse == 'delete') {

                window.location.href = "forum/my-subject";

            } else if (json.reponse == 'deletepostid') {

                $(".gjshd" + threadid).fadeOut();

            }

        }

    });

}



function ForumEditMsg(id) {

    $("html").css({overflow: "hidden"});

    $("#forum64").css({"display": "block"});

    $("#loadeditmsg").load("app/load/ForumEditMessage.php?id=" + id, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            $("#forum65").html("Editer le message");

        }





    });



}



function ForumEditMsgClose() {

    $("html").css({overflow: "auto"});

    $("#forum64").css({"display": "none"});

}



function ForumPostEdit(id) {

    $(".editf24").html("Chargement...");

    var message = $('.messediteur').html().replace(/<div>/gi, '<br>').replace(/<\/div>/gi, '');

    $.ajax({

        type: "POST",

        url: "app/actions/ForumEditPost.php",

        data: {id: id, message: message},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                $(".editf24").html("Envoyer le message");

                $(".dhsjd44").fadeOut();

                $("#forum64").css({"display": "none"});

                $("html").css({overflow: "auto"});

                $(".forummess" + id).html(json.message);

            }

            else if (json.reponse == 'erreur') {

                $(".editf24").html("Envoyer le message");

                $(".dhsjd44").fadeIn();

                $(".xdsSs").html(json.message);

            }

        }

    });

}



function addnewusjet(type, id) {

    $("#indexsubmit").html("Chargement...");

    var titre = $("#topictitl").val();

    var categorie = $("#topiccategory").val();

    var message = $('#editeur').html().replace(/<div>/gi, '<br>').replace(/<\/div>/gi, '');

    $.ajax({

        type: "POST",

        url: "app/actions/ForumActionTopic.php",

        data: {titre: titre, categorie: categorie, message: message, type: type, id: id},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                location.href = "forum/" + json.id;

            }

            else if (json.reponse == 'erreur') {

                $("#lecture42").fadeIn();

                $("#lecture44").html(json.message);

                $("#indexsubmit").html("Publier le sujet");

            }

        }

    });

}



function hsgSQGyhd444(id) {

    $("#rydHSG45s").css({transform: "scale(0.5)"});

    $(".hsQJwn" + id).css({opacity: "0.4"});

    $("#rydHSG45s").show();

    $("#strload").show();

    $("#rydHSG45s").load("app/load/StoriesView.php?userid=" + id, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            $("#strload").fadeOut(500);

            $("#rydHSG45s").css({transform: "scale(1)", transition: "0.3s"});

        }





    });



}



var bar = null;

function fghjk() {

    $("#rydHSG45s").css({transform: "scale(0.0)", transition: "0.2s"});

    $("#rydHSG45s").fadeOut(400);

    var currentIndex = 0,

        time = 0;

    bar.stop();

    bar.width(0);

}



function showPane(index) {

    ePanes.eq(currentIndex).stop(true, true).hide();

    currentIndex = index;

    if (currentIndex < 0) currentIndex = ePanes.length - 1;

    else if (currentIndex >= ePanes.length) currentIndex = 0;

    ePanes.eq(currentIndex).stop(true, true).show();

    nowstor();

    $("#nowstor-" + (currentIndex)).css({transform: "scale(0.8)", transition: "0.3s"});

    $('.storieviewlist li').removeClass('current').eq(currentIndex).addClass('current');



}



function nowstor() {

    $(".nowstor").each(function () {

        $(this).css({transform: 'scale(1)', transition: "0.3s"});

    });

}



function run() {

    if ($("#rydHSG45s").is(':visible')) {

        bar.stop().width("0");

        showPane(currentIndex + 1);

        if (($(".vistoriecontent").length == (currentIndex + 1)) && $(".vistoriecontent").length == 1) {

            bar.animate({'width': "+=320"}, time, fghjk);

        } else {

            bar.animate({'width': "+=320"}, time, run);

        }

    }





}



function StopStory() {

    bar.stop();

}



$('body').on('mouseleave', '#viewstorie', function stredem() {

    if ($("#rydHSG45s").is(':visible')) {

        if ($(".vistoriecontent").length == (currentIndex + 1)) {

            bar.animate({'width': "+=300"}, time, fghjk);

        } else {

            var timme = (300 - bar.width()) * 16;

            bar.animate({'width': "+=300"}, timme, run);

        }

    }

});



function shQH4xs() {

    $("#rydHSG45s").css({transform: "scale(0.5)"});

    $("#rydHSG45s").show();

    $("#strload").show();

    $("#rydHSG45s").load("app/load/StoriesGallery.php", function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            $("#strload").fadeOut(500);

            $("#rydHSG45s").css({transform: "scale(1)", transition: "0.3s"});

        }





    });



}



function resetslectstorie() {

    $(".stories13").each(function () {

        $(this).css({transform: 'scale(1)', transition: "0.3s"});

    });

}



function SelctStorie(img, id, name, date) {

    resetslectstorie();



    if ($("#mypic" + id).css('transform') == 'matrix(1, 0, 0, 1, 0, 0)') {

        $("#mypic" + id).css({transform: "scale(0.8)", transition: "0.3s"});

        $("#stories14").css({display: "block"});

        $("#stories19").html(name + '<p style="font-size:50%;">Tomada hace ' + date + '</p>');

        $("#strid").html(id);

        $("#stories16").css({background: "url(" + img + ")", "background-size": "contain"});

    } else {

        $("#mypic" + id).css({transform: "scale(1)", transition: "0.3s"});

        $("#stories14").css({display: "none"});

    }

}



function animatesendstr() {

    var x = $("#stories17");

    x.animate({right: '-10px'}, 70);

    x.animate({right: '10px'}, 70);

    x.animate({right: '-10px'}, 70);

    x.animate({right: '10px'}, 70);

    x.animate({right: '-10px'}, 70);

    x.animate({right: '10px'}, 70);

    x.animate({right: '-10px'}, 70);

    x.animate({right: '10px'}, 70);

}



function StoriePost() {

    var id = $("#strid").html();

    $("#stories20").html("Envoi en cours");

    $.ajax({

        type: "POST",

        url: "app/actions/StoryCreate.php",

        data: {id: id},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                $("#stories14").css({display: "none"});

                $("#stories20").html("Ajouter à ma story");

                $("#mypic" + id).css({transform: "scale(1)", transition: "0.3s"});

                $("#mypic" + id).append('<div id="stories21"><div id="stories22"></div></div>');

                $("#mypic" + id).attr('onclick', '');

            }

            else if (json.reponse == 'error') {

                $("#stories20").html("Ajouter à ma story");

                animatesendstr();

            }

        }

    });

}



function moreprofil(type, uid) {

    var a = $("#profil87");

    a.css({transform: "scale(0.5)"});

    a.show();

    $("#strload").show();

    a.load("app/load/ProfilViewMore.php?type=" + type + "&uid=" + uid, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            $("#strload").fadeOut(400);

            a.css({transform: "scale(1)", transition: "0.3s"});





        }

    });



}



function closemoreprofil() {

    $("#profil87").css({transform: "scale(0,0)", transition: "0.3s"});

}



function SettingsSimpleAction(id, type) {

    $(".settwait" + id).html(".......");

    $.ajax({

        type: "POST",

        url: "app/actions/SettingsActionBasic.php",

        data: {type: type},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                $(".settwait" + id).html(json.text);

            }

        }

    });

}



function RandomPin() {

    var c = document.getElementsByClassName("pin");

    var t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (var i = 0; i < c.length; i++) {





        if (t.length == 1) {

            c[i].firstChild.nodeValue = t[0]

        } else {

            var spl = Math.round(Math.random() * (t.length - 1))

            c[i].firstChild.nodeValue = t[spl]

            t.splice(spl, 1)

        }





    }

}



function CliquePin(id) {

    if (id == 'x') {

        var pin = $("#currentpin").val();

        pin = pin.substring(0, pin.length - 1);

        $("#currentpin").val(pin);

    } else {

        var add = $('#' + id).html();

        var pin = $("#currentpin").val();

        if (pin.length < 4) {

            $("#currentpin").val(pin + add);

        }

    }

}



function OpenSettingsAvances(page) {

    var a = $(".settingsload");

    a.css({transform: "scale(0.5)", transition: "0.2s"});

    $(".settingsloader").show();

    a.load("app/load/SettingsAvances.php?page=" + page, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            a.show();

            $(".settingsloader").fadeOut(500);

            a.css({transform: "scale(1)", transition: "0.4s"});



            if (page == "pin") {

                setTimeout(function () {

                    RandomPin();

                }, 1000);

            }

        }





    });



}



function CloseSettingsAvances() {

    $(".settingsload").css({transform: "scale(0.0)", transition: "0.2s"}).fadeOut(400);



}



function SelectFriend(type, id) {

    if (type == 'friendsinfo') {

        $("#settings29").html('...<br><x style="font-size:50%;">Chargement...</x>');

        $(".settings24").each(function () {

            if ($(this).attr('onclick') != 'nofriend') {

                $(this).css({background: "rgb(200,200,200)"});

            }

        });

        $("#selectfriends" + id).css({background: 'white'});

    } else if (type == 'deletefriend') {

        var id = $("#friendid").html();

        $("#settings35").html('...');

    } else if (type == 'deleteallfriend') {

        $("#settings36").html('...');

    }

    $.ajax({

        type: "POST",

        url: "app/actions/SettingsFriends.php",

        data: {type: type, id: id},

        dataType: 'json',

        success: function (json) {

            if (type == 'friendsinfo') {

                $("#settings29").html(json.username + '<br><x style="font-size:50%;">' + json.motto + '</x>');

                $("#settings31").html(json.activity_points);

                $("#settings32").html('Última conexiónn ' + json.last_online);

                $("#settings34").css({"background": "url(" + json.figure + ")"});

                $("#settings35").html('Borrar a ' + json.username + ' de mis amigos');

                $("#friendid").html(json.id);

            } else if (type == 'deletefriend') {

                if (json.type == 'error') {

                    $("#settings35").html(json.message);

                } else if (json.type == 'success') {

                    $("#settings35").html(json.message);

                    $("#selectfriends" + id).css({background: 'rgb(254,166,75)', border: '3px solid rgb(254,166,75)'});

                    $("#selectfriends" + id).attr('onclick', 'nofriend');

                }

            }

            else if (type == 'deleteallfriend') {

                if (json.type == 'error') {

                    $("#settings36").html(json.message);

                } else if (json.type == 'success') {

                    $("#settings36").html(json.message);

                    setTimeout(function () {

                        OpenSettingsAvances('friends');

                    }, 600);

                }

            }

        }

    });

}





function SettingsActionPassword() {

    $("#settings43").html('Chargement...');

    var n = $("#newpassword").val();

    var v = $("#verifpassword").val();

    var o = $("#oldpassword").val();

    $.ajax({

        type: "POST",

        url: "app/actions/SettingsActionAdvanced.php",

        data: {n: n, v: v, o: o, type: 'password'},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                $("#settings43").html(json.message);

                $("#settings41").html('Último cambio de contraseña <b>Justo ahora</b>');

            } else if (json.reponse == 'erreur') {

                $("#settings43").html(json.message);

            }

        }

    });

}



function SettingsActionMail(step) {

    if (step == 'one') {

        $(".fghjs1").html('Enví­o en progreso...');

        var mail = $("#email").val();

        $.ajax({

            type: "POST",

            url: "app/actions/SettingsActionAdvanced.php",

            data: {mail: mail, type: 'mail1'},

            dataType: 'json',

            success: function (json) {

                if (json.reponse == 'ok') {

                    $("#settings42").html("Copia el código recibido por correo electrónico");

                    $("#settings45").animate({left: '-100%'});

                    setTimeout(function () {

                        $("#settings45").hide();

                        $("#settings44").fadeIn(300);

                    }, 400);

                } else if (json.reponse == 'erreur') {

                    $(".fghjs1").html(json.message);

                }

            }

        });

    }

    if (step == 'two') {

        $(".fghjs2").html('Chargement...');

        var code = $("#code").val();

        $.ajax({

            type: "POST",

            url: "app/actions/SettingsActionAdvanced.php",

            data: {code: code, type: 'mail2'},

            dataType: 'json',

            success: function (json) {

                if (json.reponse == 'ok') {

                    $(".fghjs2").html(json.message);

                    $(".nmail").hide();

                    OpenSettingsAvances('mail');

                } else if (json.reponse == 'erreur') {

                    $("#settings41").html("Tu dirección de correo electrónico ha sido confirmada");

                    $(".fghjs2").html(json.message);

                }

            }

        });



    }



}



function SettingsActionPin(step, del) {

    if (del == 'supp') {

        var action = $('.sjUtrois');

        var pin = 'supp';

    } else {

        var action = $('.sjUqua');

        var pin = $("#currentpin").val();

    }

    var password = $("#password").val();

    if (step == 'one') {

        var action = $("#settings43");

        var oldpin = $("#oldpin").val();

    }

    else if (step == 'two') {

        if (del == 'supp') {

            var action = $('.LsjU');

        } else {

            var action = $(".WsjU");

        }



        var oldpin = $("#oldpin").val();

    }

    $(action).html('Chargement...');

    $.ajax({

        type: "POST",

        url: "app/actions/SettingsActionAdvanced.php",

        data: {del: del, pin: pin, password: password, oldpin: oldpin, type: 'pin' + step},

        dataType: 'json',

        success: function (json) {

            if (step == 'one') {

                if (json.reponse == 'ok') {

                    $(".npin").hide();

                    $("#settings43").html('Actualizado');

                    setTimeout(function () {

                        OpenSettingsAvances('pin');

                    }, 600);

                } else if (json.reponse == 'erreur') {

                    $("#settings43").html(json.message);

                }

            }

            else if (step == 'two') {

                if (json.reponse == 'ok') {

                    $(action).html('Actualizado');

                    setTimeout(function () {

                        OpenSettingsAvances('pin');

                    }, 600);

                } else if (json.reponse == 'erreur') {

                    $(action).html(json.message);

                }

            }

        }

    });

}



function LockPin() {

    $('#pin6').fadeOut(250);

    setTimeout(function () {

        $("#pin7").slideDown(500);

        RandomPin();

    }, 250);

}



function MouvPinResult() {

    var p = $("#pin9");

    p.animate({left: '-10px'}, 70);

    p.animate({left: '10px'}, 70);

    p.animate({left: '-10px'}, 70);

    p.animate({left: '10px'}, 70);

    p.animate({left: '-10px'}, 70);

    p.animate({left: '10px'}, 70);

    p.animate({left: '-10px'}, 70);

    p.animate({left: '10px'}, 70);

    p.animate({left: '0px'}, 70);

}



function MouvPinTentative() {

    var p = $("#pin4");

    p.animate({top: '-30px'}, 70);

    p.animate({top: '0px'}, 70);

    p.animate({top: '-20px'}, 70);

    p.animate({top: '0px'}, 70);

    p.animate({top: '-10px'}, 70);

    p.animate({top: '0px'}, 70);



}



function PostSecureTrue() {

    $("#pin2").animate({left: '55%'}, 150);

    $("#pin2").animate({left: '-200%'}, 400);

    $("#pin1").fadeOut(500);

    setTimeout(function () {

        window.location.href = "home";

    }, 500);

}



function PostSecurePin() {

    var pin = $("#currentpin").val();

    $.ajax({

        type: "POST",

        url: "app/actions/PinCode.php",

        data: {pin: pin, t: '1'},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {



                PostSecureTrue();

            } else if (json.reponse == 'erreur') {

                MouvPinTentative();

                $("#pinmsg u").html(parseInt($("#pinmsg u").html()) - 1);

            } else if (json.reponse == 'erreur2') {

                MouvPinTentative();

                $("#pinmsg u").html(parseInt($("#pinmsg u").html()) - 1);

            } else if (json.reponse == 'erreur3') {

                MouvPinResult();

                window.location.href = "bye";

            }

        }

    });

}



function LostPin(step) {

    if (step == 'one') {

        $("#pin11").show();

    } else if (step == 'close') {

        $("#pin11").hide();

    } else if (step == 'two') {

        $("#pin11").hide();

        $("#pin10").html("Chargement...");

        $.ajax({

            type: "POST",

            url: "app/actions/PinCode.php",

            data: {t: 2},

            dataType: 'json',

            success: function (json) {

                if (json.reponse == 'ok') {

                    $("#pin10").html("Correo electrónico enviado");



                } else if (json.reponse == 'erreur') {



                }

            }

        });

    }



}





function BoutiqueLoaderStart() {

    $shop = $('#b42');

    $('#b41').show();

    $('#b43').hide();

    $($shop).css({top: '40%', left: 'calc(50% - 32px)'}).show();





}



function BoutiqueLoaderEnd(nom) {

    $shop = $('#b42');

    $('#b41').fadeOut(500);

    if (nom != 'x') {

        $('#b43').html(nom);

        $('#b43').show();

    }

    if (nom == 'x') {

        $shop.hide();

    }

    $('#boutiqueload').show();

    $($shop).css({top: '75px', left: '15%'});

    $($shop).css({'transform': 'scale(1.0)', transition: '0.4s'});

}



function PorteMonnaie() {

    var x = $("#b65");

    x.animate({top: '10px'}, 0);





}



function AnimateMonnaie(monnaie, chiffre) {

    var target = chiffre;

    var number = $('#' + monnaie).text();

    var interval = setInterval(function () {

        $('#' + monnaie).text(number);

        if (chiffre < number) {

            if (number <= target) {

                clearInterval(interval);

                $('.b' + monnaie).clearQueue();

                $('.b' + monnaie).animate({top: '1px'}, 200);

            } else {

                number--;

                number--;

                $('.b' + monnaie).animate({top: '-4px'}, 200);

                $('.b' + monnaie).animate({top: '4px'}, 200);

            }

        } else {

            if (number >= target) {

                clearInterval(interval);

                $('.b' + monnaie).clearQueue();

                $('.b' + monnaie).animate({top: '1px'}, 200);

            } else {

                number++;

                $('.b' + monnaie).animate({top: '-4px'}, 200);

                $('.b' + monnaie).animate({top: '4px'}, 200);

            }

        }



    }, 0);





}



var titleactuel = null;



function BoutiquePage(nom, url) {

    titleactuel = document.title;



    document.title = nom;

    html.css({overflow: 'hidden'});



    BoutiqueLoaderStart();



    $("#boutiqueload").load(url, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {



            BoutiqueLoaderEnd(nom);

            if (nom != 'x') {

                PorteMonnaie();

            }

        } else {

            alert('error, vuelve a cargar la página')

        }

    });



}



function BoutiquePageClose() {

    document.title = titleactuel;

    html.css({overflow: 'auto'});

    $('#b41').hide();

    $('#b42').hide();

    $('#b43').hide();

    $('#boutiqueload').hide();



    $("#b65").animate({top: '-100px'}, 0);



}



function BoutiqueVIPClose() {

    $('#b69').fadeOut(500);

}



function BoutiqueVIPOpen() {

    $('#b69').fadeIn(250);

}



function AnimatePortfeuil() {

    var div = $("#b65");

    $(div).css({background: 'red'});

    setTimeout(function () {

        $(div).css({background: 'rgba(0,0,0,0.8)'});

    }, 300);

    setTimeout(function () {

        $(div).css({background: 'rgb(237,28,36)'});

    }, 600);

    setTimeout(function () {

        $(div).css({background: 'rgba(0,0,0,0.8)'});

    }, 900);

    setTimeout(function () {

        $(div).css({background: 'rgb(237,28,36)'});

    }, 1200);

    setTimeout(function () {

        $(div).css({background: 'rgba(0,0,0,0.8)'});

    }, 1500);

}



function BoutiqueAchatBadge(id) {

    $('#b62').css({opacity: '0.4'});

    $.ajax({

        type: "POST",

        url: "app/actions/ShopBuyObject.php",

        data: {type: 'badges', id: id},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'monnaie') {

                AnimatePortfeuil();

                $('#b62').css({opacity: '1'});

            } else if (json.reponse == 'unite') {

                $('#b62').css({opacity: '1'});

                $("#b62").css({background: 'rgb(237,28,36)'});

                $('#b62').text("Agotado");

            } else if (json.reponse == 'possede') {

                $('#b62').css({opacity: '1'});

                $("#b62").css({background: 'rgb(237,28,36)'});

                $('#b62').text(json.msg);

            } else if (json.reponse == 'ok') {

                $("#badgeHYrest").html($("#badgeHYrest").html() - 1);

                AnimateMonnaie('duckets', json.jetons);

                AnimateMonnaie('diamants', json.diamants);



                var x = $("#b67").position();

                var position = x.left - 100;

                $('#b67').css({filter: 'drop-shadow(2px 1px 0 #fff) drop-shadow(-2px 1px 0 #fff) drop-shadow(0 -2px 0 #fff)'});

                $(".buybdg").each(function () {

                    $(this).css({filter: 'drop-shadow(2px 1px 0 #fff) drop-shadow(-2px 1px 0 #fff) drop-shadow(0 -2px 0 #fff)'});

                    $(this).animate({left: position - $(this).attr('pos'), top: -$(window).height() / 2.5 - 50}, 1000);

                });

                $(".buybdg").each(function () {

                    $(this).fadeOut(200);

                });

                setTimeout(function () {

                    $('#b67').css({filter: ''});

                }, 1150);

                $("#b62").html('Placas compradas "Actualiza"').attr("onclick", "");

                $('#b62').css({opacity: '1'});



            }

        }

    });

}



function OpenMyBadgeBackground() {

    $("#b179x").show();

    $("img").each(function () {

        $(this).attr('src', $(this).data('src'));

    });



}



function CloseMyBadgeBackground() {

    $("#b179x").hide();



}



function MyBadgeBackground(num) {

    $("#b187").css({background: "url(app/assets/img/badge-perso/" + num + ".png)"});

    $("#mybfond").attr('value', num)



}



function MyBadgeBackground(num) {

    $("#b187").css({background: "url(app/assets/img/badge-perso/" + num + ".png)"});

    $("#mybfond").attr('value', num)



}



function CloseMyBadgeDirection() {

    $("#b179u").hide();



}



function OpenMyBadgeDirection() {

    $("#b179u").show();



}



function MyBadgeDirection(num, img) {

    $("#b187img").attr('src', img);

    $("#mybdirection").attr('value', num)



}



function BuyMyBadge() {

    $(".ghj4112").text("Chargement...");

    var description = $("#mybdescription").val(),

        titre = $("#mybtitre").val(),

        fond = $("#mybfond").attr('value'),

        look = $("#b187img").attr('src'),

        direction = $("#mybdirection").attr('value'),

        token = $("#mybtoken").val();

    $.ajax({

        type: "POST",

        url: "app/actions/BuyMyBadge.php",

        data: {description: description, titre: titre, fond: fond, look: look, direction: direction, token: token},

        dataType: 'json',

        success: function (json) {

            if (json.type == 'error') {

                $(".ghj4112").text("Acheter mon badge");

                $("#b179h").css({visibility: "visible"});



                $("#b179h").html(json.message);

                setTimeout(function () {

                    $('#b179h').css({visibility: "hidden"});

                    $("#b179h").html("");

                }, 2500);

            } else if (json.type == 'success') {

                $(".ghj4112").text("Acheter mon badge");

                $("#b179h").css({visibility: "visible"});



                $("#b179h").html(json.message);

                setTimeout(function () {

                    $('#b179h').css({visibility: "hidden"});

                    BoutiquePage('Mon inventaire', 'app/load/BoutiquePage.php?page=inventaire&type=badges');

                    AnimateMonnaie('duckets', json.prix);

                }, 3500);

            }

        }

    });





}



function BoutiqueAchatVip() {

    $('#b62').css({opacity: '0.4'});

    $.ajax({

        type: "POST",

        url: "app/actions/ShopBuyObject.php",

        data: {type: 'vip'},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'monnaie') {

                AnimatePortfeuil();

                $('#b62').css({opacity: '1'});

            } else if (json.reponse == 'erreur') {

                $('#b62').css({opacity: '1'});

                alert(json.msg);

            } else if (json.reponse == 'unite') {

                $('#b62').css({opacity: '1'});

                $("#b62").css({background: 'rgb(237,28,36)'});

                $('#b62').text("Agotado");

            } else if (json.reponse == 'possede') {

                $('#b62').css({opacity: '1'});

                $("#b62").css({background: 'rgb(237,28,36)'});

                $('#b62').text(json.msg);

            } else if (json.reponse == 'ok') {

                $("#badgeHYrest").html($("#badgeHYrest").html() - 1);

                AnimateMonnaie('duckets', json.jetons);

                AnimateMonnaie('diamants', json.diamants);

                $('#b62').css({opacity: '1'});

                $("#btxtvip").text(json.date);

                $(".hsnx47").html(json.date);



                var x = $("#b67").position();

                var position = x.left - 100;

                $('#b67').css({filter: 'drop-shadow(2px 1px 0 #fff) drop-shadow(-2px 1px 0 #fff) drop-shadow(0 -2px 0 #fff)'});

                $(".buybdg").each(function () {

                    $(this).css({filter: 'drop-shadow(2px 1px 0 #fff) drop-shadow(-2px 1px 0 #fff) drop-shadow(0 -2px 0 #fff)'});

                    $(this).animate({left: position - $(this).attr('pos'), top: -$(window).height() / 2.5 - 50}, 1000);

                });

                $(".buybdg").each(function () {

                    $(this).fadeOut(200);

                });

                setTimeout(function () {

                    $('#b67').css({filter: ''});

                }, 1150);

                $("#b62").html('Vip Comprado "Actualiza"').attr("onclick", "");

                $('#b62').css({opacity: '1'});



            }

        }

    });

}



function BoutiqueAchatVips() {

    $('#b62').css({opacity: '0.4'});

    $.ajax({

        type: "POST",

        url: "app/actions/ShopBuyObject.php",

        data: {type: 'rank'},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'monnaie') {

                AnimatePortfeuil();

                $('#b62').css({opacity: '1'});

            } else if (json.reponse == 'erreur') {

                $('#b62').css({opacity: '1'});

                alert(json.msg);

            } else if (json.reponse == 'unite') {

                $('#b62').css({opacity: '1'});

                $("#b62").css({background: 'rgb(237,28,36)'});

                $('#b62').text("Agotado");

            } else if (json.reponse == 'possede') {

                $('#b62').css({opacity: '1'});

                $("#b62").css({background: 'rgb(237,28,36)'});

                $('#b62').text(json.msg);

            } else if (json.reponse == 'ok') {

                $("#badgeHYrest").html($("#badgeHYrest").html() - 1);

                AnimateMonnaie('duckets', json.jetons);

                AnimateMonnaie('diamants', json.diamants);

                $('#b62').css({opacity: '1'});

                $("#btxtvip").text(json.date);

                $(".hsnx47").html(json.date);



                var x = $("#b67").position();

                var position = x.left - 100;

                $('#b67').css({filter: 'drop-shadow(2px 1px 0 #fff) drop-shadow(-2px 1px 0 #fff) drop-shadow(0 -2px 0 #fff)'});

                $(".buybdg").each(function () {

                    $(this).css({filter: 'drop-shadow(2px 1px 0 #fff) drop-shadow(-2px 1px 0 #fff) drop-shadow(0 -2px 0 #fff)'});

                    $(this).animate({left: position - $(this).attr('pos'), top: -$(window).height() / 2.5 - 50}, 1000);

                });

                $(".buybdg").each(function () {

                    $(this).fadeOut(200);

                });

                setTimeout(function () {

                    $('#b67').css({filter: ''});

                }, 1150);

                $("#b62").html('Vip Comprado').attr("onclick", "");

                $('#b62').css({opacity: '1'});



            }

        }

    });

}



$(document).ready(function(){

                         

      var consulta;

             

      //hacemos focus

      $("#username").focus();

                                                 

      //comprobamos si se pulsa una tecla

      $("#username").keyup(function(e){

             //obtenemos el texto introducido en el campo

             consulta = $("#username").val();

                                      

             //hace la bÃºsqueda

             $("#resultado").delay(1000).queue(function(n) {      

                                           

                 

                                           

                        $.ajax({

                              type: "POST",

                              url: "deprived/funciones/checkuser.php",

                              data: "b="+consulta,

                              dataType: "html",

                              success: function(data){                                                      

                                    $("#resultado").html(data);

                                    n();

                              }

                  });

                                           

             });

                                

      });

                          

});



$(document).ready(function(){

                         

      var consulta;

             

      //hacemos focus

      $("#mail").focus();

                                                 

      //comprobamos si se pulsa una tecla

      $("#mail").keyup(function(e){

             //obtenemos el texto introducido en el campo

             consulta = $("#mail").val();

                                      

             //hace la búsqueda

             $("#resultados").delay(1000).queue(function(n) {      

                                           

                 

                                           

                        $.ajax({

                              type: "POST",

                              url: "deprived/funciones/checkemail.php",

                              data: "b="+consulta,

                              dataType: "html",

                              success: function(data){                                                      

                                    $("#resultados").html(data);

                                    n();

                              }

                  });

                                           

             });

                                

      });

                          

});



function BoutiqueAchatLoto() {

    $('#b62').css({opacity: '0.4'});

    var pos = $("#b83").val();

    var div = $("#b62");

    $.ajax({

        type: "POST",

        url: "app/actions/ShopBuyObject.php",

        data: {type: 'loto', chiffre: pos},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'monnaie') {

                AnimatePortfeuil();

                $('#b62').css({opacity: '1'});

            } else if (json.reponse == 'ok') {

                AnimateMonnaie('duckets', json.jetons);

                AnimateMonnaie('diamants', json.diamants);

                $('#b62').css({opacity: '1'});

                div.text('Participation valida').attr("onclick", "");

            } else if (json.reponse == 'erreur') {

                div.css({background: 'red', opacity: '1'});

                setTimeout(function () {

                    div.css({background: 'rgb(48,177,24)'});

                }, 1150);

            }

        }

    });

}





function BoutiqueInventaireObjet(type, id) {

    BoutiqueLoaderStart();

    $.ajax({

        type: "POST",

        url: "app/actions/ManageInventory.php",

        data: {type: type, id: id},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                $("#b108 > img").attr('src', json.image);

                $("#b110").text(json.nom);

                $("#b106").fadeIn(500);

                $("#b62").attr("onclick", "BoutiqueInventaireDelete('" + type + "','" + id + "')");

                BoutiqueLoaderEnd('Mi inventario');

            } else if (json.reponse == 'erreur') {

                if (type == 'badges') {

                    $(".bsnz" + id).fadeOut(400);

                } else {

                    $(".ysnz" + id).fadeOut(400);

                }

                BoutiqueLoaderEnd('Mon inventaire');

            }

        }

    });



}



function BoutiqueInventaireClose() {

    $("#b106").fadeOut(500);

}



function BoutiqueInventaireDelete(type, id) {

    $('#b62').css({opacity: '0.4'});

    $.ajax({

        type: "POST",

        url: "app/actions/ManageInventory.php",

        data: {type: type + "delete", id: id},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                BoutiqueInventaireClose();

                $('#b62').css({opacity: '1'});

                if (type == 'badges') {

                    $(".bsnz" + id).fadeOut(400);

                } else if (type == 'mobis') {

                    $(".ysnz" + id).fadeOut(400);

                }

            }

        }

    });





}



function BoutiqueInventairePage(page) {

    loader.css({display: "block"});

    $(".b102").each(function () {

        $(this).removeAttr('style');

    });



    $("#b103").load("app/load/InventoryCategory.php?page=" + page, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            loader.fadeOut(400);

            $("#hgs" + page).css({background: 'rgba(255,255,255,0.3)'});

        }

    });





}



$(document).ready(function () {

    $('body').on('keyup', '#b101', function () {

        $(".b102").each(function () {

            $(this).removeAttr('style');

        });

        $("#hgsmobis").css({background: 'rgba(255,255,255,0.3)'});

        var search = $(this).val();

        var data = 'search=' + search;

        if (search.length > 0) {

            $.ajax({

                type: "GET",

                url: "app/load/InventoryCategory.php?page=recherche",

                data: data,

                success: function (server_response) {

                    $("#b103").html(server_response).show();

                }

            });

        } else {

            $.ajax({

                type: "GET",

                url: "app/load/InventoryCategory.php?page=recherche&get=vide",

                data: data,

                success: function (server_response) {

                    $("#b103").html(server_response).show();

                }

            });

        }

    });

});





function BoutiqueRareOpen(valeur, mobis, img) {

    titleactuel = document.title;

    document.title = mobis;

    var nom = "x";

    var valeur = JSON.parse(valeur);

    var jours = JSON.parse($("#JrXYzr").html());

    BoutiqueLoaderStart();

    jQuery.ajax({

        type: "GET",

        url: "app/assets/js/chart.js",

        dataType: "script",

        cache: true,

        success: function () {

            $("#boutiqueload").load("app/load/BoutiquePage.php?page=rare", function (responseTxt, statusTxt, xhr) {

                if (statusTxt == "success") {

                    $("#b147").html(mobis);

                    $('#b148 > img').attr('src', img);

                    var ctx = document.getElementById("RareEvolution");



                    var myChart = new Chart(ctx, {



                        type: 'line',

                        data: {

                            labels: jours,

                            datasets: [{

                                label: 'Valeur en rares classiques',

                                data: valeur,

                                backgroundColor: [

                                    'transparent'

                                ],

                                pointBackgroundColor: [

                                    'red'

                                ],

                                pointBorderColor: [

                                    'rgb(127,127,127)',

                                    'rgb(127,127,127)',

                                    'rgb(127,127,127)',

                                    'rgb(127,127,127)',

                                    'rgb(127,127,127)',

                                    'rgb(127,127,127)'

                                ],

                                borderColor: [

                                    'rgb(111,156,240)'

                                ],

                                borderWidth: 7

                            }]

                        },

                        options: {

                            legend: {

                                display: false,

                            },

                            scales: {

                                xAxes: [{

                                    display: false

                                }],

                                yAxes: [{

                                    display: false

                                }],

                            },

                            tooltips: {

                                backgroundColor: '#FFF',

                                titleFontColor: 'black',

                                displayColors: false

                            },





                        }

                    });

                    BoutiqueLoaderEnd(nom);

                    if (nom != 'x') {

                        PorteMonnaie();

                    }

                } else {

                    alert('error, vuelve a cargar la página')

                }

            });





        }

    });





}



function BoutiqueBuyCoffre(id) {

    $('#b62').css({opacity: '0.4'});

    $.ajax({

        type: "POST",

        url: "app/actions/ShopBuyChest.php",

        data: {id: id},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'monnaie') {

                AnimatePortfeuil();

                $('#b62').css({opacity: '1'});

            } else if (json.reponse == 'rupture') {

                $('#b62').css({opacity: '1'});

                $("#b62").css({background: 'rgb(237,28,36)'});

                $('#b62').text("Rupture de stock");

                $("#JSHnsh421").html('0');

            } else if (json.reponse == 'ok') {

                var img = "app/assets/img/pagecoffres.png";

                if (json.carresse != 0) {

                    $("#b172").append('  <div title="' + json.carresse + ' caresses" id="b171"><div id="b164" style="transform:scale(4);top:-1px;background:url(' + img + ') -55px -352px;"></div></div>');

                }

                if (json.winwins != 0) {

                    $("#b172").append('  <div title="' + json.winwins + ' winwins" id="b171"><div id="b164"style="transform:scale(4);top:6px;background:url(' + img + ') -79px -354px;"></div></div>');

                }

                if (json.windiamants != 0) {

                    $("#b172").append('  <div title="' + json.windiamants + ' diamants" id="b171"><div id="b164"style="transform:scale(4);top:6px;background:url(' + img + ') -55px -376px;"></div></div>');

                }

                if (json.respects != 0) {

                    $("#b172").append('  <div title="' + json.respects + ' respects" id="b171"><div id="b164"style="transform:scale(4);top:0px;background:url(' + img + ') -79px -375px;"></div></div>');

                }

                var x = JSON.parse(json.rares);



                if (x != "mobis0") {





                    for (var i = 0; i < x.length; i++) {

                        $("#b172").append('<div id="b171"><img style="transform:scale(3);" src="' + x[i] + '"/></div>');

                    }

                }



                $('#b62').css({opacity: '1'});

                AnimateMonnaie('duckets', json.jetons);

                AnimateMonnaie('diamants', json.diamants);

                BoutiqueAnimateCoffre();



            }

        }

    });

}





function BoutiqueOpenCoffre() {

    $("#b62").hide();

    var div = $("#b168");

    div.animate({'bottom': '-18%'}, 200);

    div.animate({'bottom': '-22%'}, 190);

    div.animate({'bottom': '-18%'}, 180);

    div.animate({'bottom': '-22%'}, 170);

    div.animate({'bottom': '-18%'}, 150);

    div.animate({'bottom': '-22%'}, 140);

    div.animate({'bottom': '-18%'}, 130);

    div.animate({'bottom': '-22%'}, 110);

    div.animate({'bottom': '-18%'}, 100);

    div.animate({'bottom': '-22%'}, 90);

    div.animate({'bottom': '-18%'}, 70);

    div.animate({'bottom': '-22%'}, 70);

    div.animate({'bottom': '-18%'}, 70);

    div.animate({'bottom': '-22%'}, 70);

    div.animate({'bottom': '-18%'}, 70);

    div.animate({'bottom': '-22%'}, 70);

    setTimeout(function () {

        $("#b172").fadeIn(500);

    }, 1900);

}



function BoutiqueAnimateCoffre() {

    $("#b170").css({display: 'none'});

    $("#b168").animate({'bottom': '-20%'}, 400);

    $("#b169").css({

        'background': 'transparent',

        'filter': 'drop-shadow(2px 1px 0 #fff) drop-shadow(-2px 1px 0 #fff) drop-shadow(0 -2px 0 #fff)'

    });

    $("#b62").html('<div id="b63"></div>Ouvrir le coffre').attr('onclick', 'BoutiqueOpenCoffre()');

}



function SearchOpen(type) {

    $("html").css({overflow: "hidden"});

    $("#search1").fadeIn(300);

    $("#search3").focus();

    $("#searchtype").html(type);

}



$('body').on('click', '#closesearch4', function () {

    SearchClose();

});



$(document).ready(function () {

    $('body').on('keyup', '#search3', function () {

        $('.loader').show();

        var search = $(this).val();

        var type = $("#searchtype").html();

        if (search.length > 0) {

            $.ajax({

                type: "POST",

                url: "app/load/SearchEngine.php",

                data: {words: search, search: type},

                success: function (server_response) {

                    $("#searchbloc").html(server_response);

                    $('.loader').hide();

                }

            });

        } else {

            $("#searchbloc").html('');

            $('.loader').hide();

        }

    });

});



function SearchClose() {

    $("html").css({overflow: "auto"});

    $("#search1").fadeOut(300);

    $("#searchbloc").html('');

    $("#search3").val('');

}



$('body').on('click', '#fghj41', function (e) {

    SearchClose()

});



function MdpPerdu() {

    $("#indexl6").css({border: "0"});

    $(".lostmail").css({border: "0"});

    $("#indexl5").html('<div id="b63"></div>Chargement...');

    var random = Math.floor(Math.random() * (1 - 100000 + 1)) + 100000;

    var email = $(".lostmail").val();

    var code = $("#indexl6").val();

    $.ajax({

        type: "POST",

        url: "app/actions/ForgotPassword.php",

        data: {step: 1, email: email, code: code},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {

                $("#indexl2n").animate({left: "-800px"});

                $("#indexl9").animate({left: "30px"});

            }else if (json.reponse == 'mail') {

                $("#indexl4").css({border:'3px solid rgb(242,91,99)'}, 100);

                $("#indexl5").html('<div id="b63"></div>Enviar');

            }else if (json.reponse == 'captcha') {

                $("#indexl6").css({border:'3px solid rgb(242,91,99)'}, 100);

                $("#indexl5").html('<div id="b63"></div>Enviar');

            }

        }

    });

}





function MdpPerdu() {

    $("#indexl6").css({border: "0"});

    $(".lostmail").css({border: "0"});

    $("#indexl5").html('<div id="b63"></div>Chargement...');

    var random = Math.floor(Math.random() * (1 - 100000 + 1)) + 100000;

    var email = $(".lostmail").val();

    var code = $("#indexl6").val();

    $.ajax({

        type: "POST",

        url: "app/actions/ForgotPassword.php",

        data: {step: 1, email: email, code: code},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'temps') {

                $("#indexl5").html('<div id="b63"></div>Espera 1 hora, para volver a intentar.');

            } else if (json.reponse == 'captcha') {

                $("#indexl5").html('<div id="b63"></div>Enviar');

                $("#indexl6").css({border: "3px solid rgb(237,28,36)"});

            } else if (json.reponse == 'mail') {

                $("#indexl5").html('<div id="b63"></div>Enviar');

                $(".lostmail").css({border: "3px solid rgb(237,28,36)"});

            } else if (json.reponse == 'ok') {

                $("#indexl2n").animate({left: "-800px"});

                $("#indexl9").animate({left: "30px"});

            }

        }

    });

}





function MdpPerduEnd() {

    $(".cd15").html('<div id="b63"></div>Chargement...');

    $(".cdcode").css({border: ""});

    $(".cdmdp").css({border: ""});

    $(".cdmdp2").css({border: ""});

    var code = $(".cdcode").val();

    var mdp = $(".cdmdp").val();

    var mdp2 = $(".cdmdp2").val();

    $.ajax({

        type: "POST",

        url: "app/actions/ForgotPassword.php",

        data: {step: 2, mdp: mdp, mdpconfirm: mdp2, clee: code},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'code') {

                $(".cdcode").css({border: "3px solid rgb(237,28,36)"});

                $(".cd15").html('<div id="b63"></div>Terminar');

            } else if (json.reponse == 'error') {

                $(".cdmdp").css({border: "3px solid rgb(237,28,36)"});

                $(".cdmdp2").css({border: "3px solid rgb(237,28,36)"});

                $(".cd15").html('<div id="b63"></div>Terminar');

            } else if (json.reponse == 'ok') {

                $(".cd15").html('<div id="b63"></div>Muy bien! Conectarme');

                $("#indexl1").fadeOut(1000);

            }

        }

    });



}



function OpenMdpPerdu() {

    $("#indexl1").fadeIn(300);

}



function CloseMdpPerdu() {

    $("#indexl1").fadeOut(300);

}





function FansitesDemande() {

    $("#indexl5").html('<div id="b63"></div>Chargement...');

    var random = Math.floor(Math.random() * (1 - 100000 + 1)) + 100000;

    var image = $(".sfdbanniere").val();

    var title = $(".sfdnom").val();

    var url = $(".sfdurl").val();

    var presentation = $(".sfddescription").val();

    var code = $(".sfdcaptch").val();

    $.ajax({

        type: "POST",

        url: "app/actions/FansitePartnership.php",

        data: {image: image, title: title, url: url, presentation: presentation, code: code},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'captcha') {

                $("#f39").html(json.message);

                $("#indexl8").attr('src', 'app/captcha/captchacolor.php?figure=' + random);

                $("#indexl5").html('<div id="b63"></div>Suivant');

            }

            if (json.reponse == 'erreur') {

                $("#f39").html(json.message);

                $("#indexl5").html('<div id="b63"></div>Suivant');

            }

            if (json.reponse == 'ok') {

                $("#f39").html(json.message);

                $("#indexl2n").html('<div id="indexl3">Demande de promotion envoyÃ©e, elle sera affichÃ©e dans cette liste si validation.</div>');

                setTimeout(function () {

                    CloseFansite();

                }, 2000);

            }

        }

    });

}





function CloseFansite() {

    $("#f37").fadeOut(500);



}



function OpenFansite() {

    $("#f37").fadeIn(500);



}



function FansitesArticles() {

    $("#indexsubmit").html("Chargement...");

    var titre = $("#arttitre").val();

    var image = $("#artimage").val();

    var url = $("#arturl").val();

    var body = $("#editeur").html();

    var body = $('#editeur').html().replace(/<div>/gi, '<br>').replace(/<\/div>/gi, '');

    $.ajax({

        type: "POST",

        url: "app/actions/FansiteNewsAdd.php",

        data: {titre: titre, image: image, url: url, body: body},

        dataType: 'json',

        success: function (json) {

            if (json.reponse == 'ok') {



                $("#lecture42").fadeOut();

                $("#lecture44").html(json.message);

                $("#indexsubmit").html("SuccÃ¨s!");

            }

            else if (json.reponse == 'erreur') {

                $("#lecture42").fadeIn();

                $("#lecture44").html(json.message);
                $("#indexsubmit").html("Ajouter mon sujet");

            }

        }

    });



}





function SupportStart() {

    $("#indexsubmit").text("Un instante...");

    var sujetTitle = $("#ai35").val();

    var category = $("#ai36").val();

    var priority = $("#ai36").val();

    var details = $("#editeur").html();



    $.ajax({

        type: "POST",

        url: "app/actions/SupportStartTicket.php",

        data: {sujetTitle: sujetTitle, category: category, priority: priority, details: details},

        dataType: 'json',

        success: function (json) {

            if (json.type == 'success') {

                OpenStream();

                CloseSupport();

            }

            else if (sujetTitle == '') {

                $("#indexsubmit").text("Envoyer ma demande d'aide");

                $("#supporterreur").fadeIn(300);

                $("#supporterreur").text("Veuillez remplir les champs vides.");

            }



            else if (json.type == 'error') {

                $("#indexsubmit").text("Envoyer ma demande d'aide");

                $("#supporterreur").fadeIn(300);

                $("#supporterreur").text(json.message);

            }

            

        }

    });





}



function SupportChatADM(id) {

    $('#waitstream').css({display: "block"});



    $('#getchat').css({display: "block"});

    $("#getchat").load("app/load/HabbostreamTalkADM.php?type=support&userid=" + id, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            $('#waitstream').css({display: "none"});

            $('#getchat').animate({left: "0px"}, 500);

            $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

        }





    });

}



function ChatADM() {

    $('#waitstream').css({display: "block"});



    $('#getchat').css({display: "block"});

    $("#getchat").load("app/load/HabbostreamTalkADM.php?type=adm", function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            $('#waitstream').css({display: "none"});

            $('#getchat').animate({left: "0px"}, 500);

            $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

        }





    });

}



function SupportChat(id) {

    $('#waitstream').css({display: "block"});



    $('#getchat').css({display: "block"});

    $("#getchat").load("app/load/HabbostreamTalk.php?type=support&userid=" + id, function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "success") {

            $('#waitstream').css({display: "none"});

            $('#getchat').animate({left: "0px"}, 500);

            $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

        }





    });

}



function SupportSendMsg(ticketid, avatar, pseudo) {

    var run = $("#run").html();

    if (run == "run") {

        $("#run").html("stop");

        $("#sendchat").html("...");

        var message = $("#editeurchat").html();

        $.ajax({

            type: "POST",

            url: "app/actions/SupportSendMessage.php",

            data: {message: message, ticketid: ticketid},

            dataType: 'json',

            success: function (json) {

                if (json.type == 'success') {

                    var vlink = "&headonly=0&direction=2&head_direction=2&action=&gesture=&size=m";

                    $('#chatinlive' + ticketid).append('<div id="stream26"><a href="profile/' + pseudo + '"><div id="stream27" style="background:url(' + avatar + vlink + ');"></div></a><div id="stream29"></div><div id="stream30"><div id="stream33"></div><div id="motto"><b>' + pseudo + '</b> : ' + message + '</div><div id="stream31">1 s</div></div><div class="chatvue" ></div></div>');

                    $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

                    $("#sendchat").html("Envoyer");

                    $("#editeurchat").html("");

                    $("#run").html("run");

                    $("#stream46").text("Message envoyé avec succès.");

                    $("#stream46").css({"visibility": "visible"});



                } else if (json.type == 'error') {

                    $("#sendchat").html("Enviar");

                    $("#editeurchat").css({border: "2px solid #ED1C24", height: "30px"});

                    setTimeout(function () {

                        $("#editeurchat").css({border: "0", height: "34px"});

                    }, 700);

                    MouvSendChat();

                    $("#run").html("run");

                }

            }

        });

    }

}





function SupportSendMsgADM(ticketid, avatar, pseudo) {

    var run = $("#run").html();

    if (run == "run") {

        $("#run").html("stop");

        $("#sendchat").html("...");

        var message = $("#editeurchat").html();

        $.ajax({

            type: "POST",

            url: "app/actions/SupportSendMessageADM.php",

            data: {message: message, ticketid: ticketid},

            dataType: 'json',

            success: function (json) {

                if (json.type == 'success') {

                    var vlink = "&headonly=0&direction=2&head_direction=2&action=&gesture=&size=m";

                    $('#chatinlive' + ticketid).append('<div id="stream26"><a href="profile/' + pseudo + '"><div id="stream27" style="background:url(' + avatar + vlink + ');"></div></a><div id="stream29"></div><div id="stream30"><div id="stream33"></div><div id="motto"><b>' + pseudo + '</b> : ' + message + '</div><div id="stream31">1 s</div></div><div class="chatvue" ></div></div>');

                    $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

                    $("#sendchat").html("Envoyer");

                    $("#editeurchat").html("");

                    $("#run").html("run");

                    $("#stream46").text("Message envoyé avec succès.");

                    $("#stream46").css({"visibility": "visible"});



                } else if (json.type == 'error') {

                    $("#sendchat").html("Enviar");

                    $("#editeurchat").css({border: "2px solid #ED1C24", height: "30px"});

                    setTimeout(function () {

                        $("#editeurchat").css({border: "0", height: "34px"});

                    }, 700);

                    MouvSendChat();

                    $("#run").html("run");

                }

            }

        });

    }

}



var loadHotel=true,pageUrl=null,pageTitle=null,hotelManager=$("#HotelManager"),hotelOpened=false,contented=true,hotelScroll=0;function EntrerHotel(room,affiche){$("#mnc1x").show();if(!affiche){hotelOpened=true;hotelManager.css({visibility:"visible"});$("html").animate({scrollTop:0},0);pageUrl=window.location.pathname;pageTitle=document.title;hotelScroll=document.documentElement.scrollTop;document.title="Dabbo.ME : Hotel";$("html").css({"overflow":"hidden"});}

if(loadHotel){loadHotel=false;var hotelink=null,hoteltitle=null;if(room=="reconnect"){hotelink="app/load/Client.php?r="+room;hoteltitle="hotel";}else if(room=="erreur"){hotelink="app/load/Client.php?e="+room;hoteltitle="hotel";}else if(room!=null){hotelink="app/load/Client.php?room="+room;hoteltitle="hotel/"+room;}else{hotelink="app/load/Client.php";hoteltitle="hotel";}

if(!affiche){history.pushState("Dabbo.ME : Hotel",null,hoteltitle);}

$("#hotelpanel").remove();hotelManager.append('<iframe id="hotelframe" src="'+hotelink+'"></iframe><div id="listalerte"></div><div onclick="FermerHotel();" id="hotel2"></div><div onclick="HotelFullScreen()" id="hotel1"></div><div onclick="OpenStream()" id="hotel3"></div><div onclick="shQH4xs()" id="hotel4"></div>');}

else if(loadHotel==false&&room!=null){history.pushState("Dabbo.ME : Hotel",null,"hotel/"+room);goToRoom(room);}else{history.pushState("Dabbo.ME : Hotel",null,"hotel");}}

function goToRoom(id){loader.show();$.ajax({type:"POST",url:"app/actions/ReturnApartment.php",data:{id:id},dataType:'json',success:function(json){if(json.reponse=='erreur'){loader.hide();notify("Impossible de rejoindre l'appartement !");}else if(json.reponse=='ok'){setTimeout(function(){loader.hide();},2000);}

ga('send','event','Redirection vers un appaprtement','app/actions/ReturnApartment.php');}});}

function FermerHotel(){hotelOpened=false;document.title=pageTitle;$("html").animate({scrollTop:hotelScroll},0);var str=pageUrl;var res=str.substring(0,6);if(res=="/hotel"){pageUrl="/home"}

history.pushState(pageTitle,null,pageUrl);if(contented){setCurrentPage(pageUrl,pageTitle,true);contented=false;}

hotelManager.css({visibility:"hidden"});$("html").css({"overflow":"auto"});closePorteMonnaie();$("#b270").animate({left:"-480px"},250);}



function HotelFullScreen(elem) {

    elem = elem || document.documentElement;

    if (!document.fullscreenElement && !document.mozFullScreenElement &&

        !document.webkitFullscreenElement && !document.msFullscreenElement) {

        if (elem.requestFullscreen) {

            elem.requestFullscreen();

        } else if (elem.msRequestFullscreen) {

            elem.msRequestFullscreen();

        } else if (elem.mozRequestFullScreen) {

            elem.mozRequestFullScreen();

        } else if (elem.webkitRequestFullscreen) {

            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

        }

    } else {

        if (document.exitFullscreen) {

            document.exitFullscreen();

        } else if (document.msExitFullscreen) {

            document.msExitFullscreen();

        } else if (document.mozCancelFullScreen) {

            document.mozCancelFullScreen();

        } else if (document.webkitExitFullscreen) {

            document.webkitExitFullscreen();

        }

    }

}

function PostSecurity() {

    $("#secu11").text("Chargement...");

    var Username = $(".Username").val(),

        CodeSecour = $(".CodeSecour").val(),

        Email = $(".Email").val(),

        Password = $(".Password").val(),

        Captcha = $(".Captcha").val(),

        random = Math.floor(Math.random() * (1 - 100000 + 1)) + 100000;



    $.ajax({

        type: 'POST',

        url: 'app/load/GoogleSecurity.php?check&pseudo=' + Username,

        data: {Username: Username, CodeSecour: CodeSecour, Email: Email, Password: Password, Captcha: Captcha},

        success: function (data) {

            $('#secuload').html(data);

            $('#secu10 img').attr('src', 'app/captcha/captchacolor.php?figure=' + random);



        }

    });



}



function PostSecurity2() {

    $("#secu14").text("Chargement...");

    var secret = $(".secret").val(),

        Code = $(".Code").val();



    $.ajax({

        type: 'POST',

        url: 'app/load/GoogleSecurity.php?valid',

        data: {secret: secret, Code: Code},

        success: function (data) {

            if (data == "connexion") {

                window.location = "home";



            } else {

                $('#secuload').html(data);

            }

        }

    });



}





function executeSampleSearch(){closeSampleSearch();$("#h46").val('');$("#h46").blur();if(sampleSearcheuser!=null){history.pushState(sampleSearcheuser,null,"/home/"+sampleSearcheuser);setCurrentPage("/home/"+sampleSearcheuser,sampleSearcheuser);sampleSearcheuser=null;}}

$('body').on('keydown','#h46',function(event){var keyCode=(event.keyCode?event.keyCode:event.which);if(keyCode==13){executeSampleSearch();}});$('body').on('focusout','#h46',function(event){closeSampleSearch();});function closeSampleSearch(){$("#h46").animate({width:"100px","padding":"12px 50px 12px 13px"},150);$("#h49").fadeOut(500);$("#h48").fadeOut(500);$("#h48").text('');$("#h50").hide();}

var sampleSearcheuser=null;$(document).ready(function(){$('body').on('keyup','#h46',function(){var user=$(this).val();if(user.length===0){$("#h48").text('');}

if(user.length>0){$.ajax({type:"POST",url:"app/actions/SearchPlayer.php",data:{username:user},dataType:'json',success:function(json){if(json.username===null){$("#h50").show();}else{$("#h50").hide();}

sampleSearcheuser=json.username;$("#h48").text(json.username);$("#h45 img").attr('src',json.figure);ga('send','event','Recherche d\'un utilisateur','app/actions/SearchPlayer.php');}});}});});function displayGoogleAds(){jQuery.ajax({type:"GET",url:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",dataType:"script",success:function(){$('ins').each(function(){(adsbygoogle=window.adsbygoogle||[]).push({});});}});}

$('.play > video').attr('src','app/assets/img/habbo.mp4');window.onload=function(){onLoad();};function onLoad(){loader.hide();$("#footer60").hide();setTimeout(function(){$("#h45k").remove();},7000);indexSliderPageStart();explore.grid();var RegisterAnimPend=0;$("#reg32").animate({top:"-450px"},15000);setInterval(function(){if(RegisterAnimPend==0){$("#reg32").animate({top:"0px"},15000);}else{$("#reg32").animate({top:"-450px"},15000);}

RegisterAnimPend=1-RegisterAnimPend;},15000);if(window.location.pathname==="/boutique/citycash"){dedipass();PorteMonnaie();}}

var currentIndexPage=0;function resetIndexSliderPage(){$("#indsxsP-0").attr("class","nin42");$("#indsxsP-1").attr("class","nin42");$("#indsxsP-2").attr("class","nin42");}

function indexSliderPage(page){var x=100*page;currentIndexPage=page;$("#nin35").animate({left:"-"+x+"%"},500);resetIndexSliderPage();$("#indsxsP-"+page).attr("class","nin41");}

var IndexSlider;function indexSliderPageStart(){clearInterval(IndexSlider);function indexSliderInterval(){resetIndexSliderPage();var x=100*currentIndexPage;$("#indsxsP-"+currentIndexPage).attr("class","nin41");$("#nin35").animate({left:"-"+x+"%"},500);if(currentIndexPage>1){currentIndexPage=0;}else{currentIndexPage++;}}

IndexSlider=setInterval(indexSliderInterval,3500);}

var explore={gridItem:function(e){g=document.getElementsByClassName("grid")[0];h=parseInt(window.getComputedStyle(g).getPropertyValue('grid-auto-rows'));r=parseInt(window.getComputedStyle(g).getPropertyValue('grid-row-gap'));s=Math.ceil((e.querySelector('.nin54').getBoundingClientRect().height+r)/(h+r));e.style.gridRowEnd="span "+s;},grid:function(){var e=document.getElementsByClassName("item");for(var x=0;x<e.length;x++){this.gridItem(e[x]);}}}

var eventMethod;function dedipass(){var elements=document.querySelectorAll('[data-dedipass]:not([data-dedipass-auto-initialized])');var length=elements.length;for(var idx=0;idx<length;++idx){var element=elements[idx];if(element.id===''){element.id='dedipass-'+idx;}

if(typeof element.dataset.dedipassCustom!==undefined)custom=element.dataset.dedipassCustom;if(typeof element.dataset.dedipassCountry!==undefined)langselected=element.dataset.dedipassCountry;element.innerHTML='<iframe src="//api.dedipass.com/pay-2/#'+element.dataset.dedipass+'&'+custom+'&'+langselected+'" id="'+element.id+'-iframe'+'" style="width:100%;border:0 solid transparent;"></iframe>';eventMethod=window.addEventListener?"addEventListener":"attachEvent";var eventer=window[eventMethod];var messageEvent=eventMethod==="attachEvent"?"onmessage":"message";eventer(messageEvent,function(e){if(e.data<5000){var elem=document.getElementById(element.id+'-iframe');if(elem!==null){elem.style.height=e.data+'px';eventMethod=null;eventer=null;messageEvent=null;}}},false);if(element.dataset.dedipass===''){setTimeout(function(){_autoInit();},1000);}

else{element.setAttribute('data-dedipass-auto-initialized','initialized');}}};function disableAccount(){$("#settings53").text('Un instante...');$.ajax({type:"POST",url:"app/actions/DisableAccount.php",dataType:'json',success:function(json){if(json.reponse==="erreur"){notify(json.message);}else if(json.reponse==="ok"){window.location="bye";}

$("#settings53").text('DÃ©sactiver mon compte');ga('send','event','DÃ©sactivation du compte','app/actions/DisableAccount.php');}});}

var radioStarted=false;function radio(){var radio=document.getElementById("radio");if(!radioStarted){$("#footer57").css({background:"url(app/assets/img/pagetemplate.png?2u2u) -54px -269px"});radioStarted=true;radio.play();}else{$("#footer57").css({background:"url(app/assets/img/pagetemplate.png?2u2u) -108px -269px"});radio.pause();radioStarted=false;}}

setTimeout(function(){loader.hide();},0);





function CloseCookie(){

    var d = new Date();

    d.setTime(d.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));

    var expires = "expires="+ d.toUTCString();

    document.cookie = "cookie=ok;" + expires + ";path=/";

    $("#cookie1").animate({bottom:"-100px"});

}



function displayGoogleAds() {

    jQuery.ajax({

        type: "GET",

        url: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",

        dataType: "script",

        cache: true,

        success: function() {

            $('ins').each(function() {

                (adsbygoogle = window.adsbygoogle || []).push({});

            });

        }

    });

}



if ($("#playerOnline").text() === "true") {

    var radioStarted = false;



    setTimeout(function () {

        $("#radio12").fadeOut(400);

        $("#radio2").css({filter: "none"});

        $("#radio3").css({filter: "none"});

    }, 1000);





    function radioPlay() {

        if (!radioStarted) {

            radioStarted = true;

        }

        var radio = document.getElementById("radio");

        radio.play();

    }

    

    function radioPause() {

        if (!radioStarted) {

            radioStarted = false;

        }

        var radio = document.getElementById("radio");

        radio.pause();

    }



   

}





$('.play > video').attr('src', 'app/assets/img/habbo.mp4');
