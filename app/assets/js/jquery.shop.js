$(function() {
    var doc = $(document),
        win = $(window);
    win.scroll(function() {
        var scrolltop = win.scrollTop();
        if (scrolltop >= 203) {
            $('.menu.haveFixed').addClass('fixed');
            $('.page').addClass('fixed');
        }
        if (scrolltop < 203) {
            $('.menu.haveFixed').removeClass('fixed');
            $('.page').removeClass('fixed');
        }
    });
    if (win.scrollTop() >= 203) {
        $('.menu.haveFixed').addClass('fixed');
        $('.page').addClass('fixed');
    }
    if (win.scrollTop() < 203) {
        $('.menu.haveFixed').removeClass('fixed');
        $('.page').removeClass('fixed');
    }
    $(document).on('click', '.badge.clipboard', function() {
        var temp = $("<input>"),
            code = $(this).attr('code');
        $('.cacheClp').addClass('open');
        $('.cacheClp > p').text('Code du badge ' + code + ' copié');
        setTimeout(function() {
            $('.cacheClp').removeClass('open');
        }, 2000);
        $("body").append(temp);
        temp.val(code).select();
        document.execCommand("copy");
        temp.remove();
    });
    $(document).on('click', '.mobis.selection > .rareid', function() {
        var tthis = $(this);
        if (tthis.hasClass('slc')) {
            tthis.removeClass('slc');
        } else {
            tthis.addClass('slc');
        }
    });

    function jetonsMoins(jetons) {
        var jetonsss = $('span.citycash').text().replace(' Diamants', ''),
            jetonss = jetonsss - jetons;
        $('span.citycash').text(jetonss);
    }
    $(document).on('submit', 'form[name="vip"]', function() {
        var tthis = $(this),
            rare = $('.mobis.selection > .rareid.slc'),
            offer = $('> select.cate[name="offer"]', tthis).val(),
            token = $('> input[name="token"]', tthis).val(),
            submit = $('> input.submvip', tthis),
            submitVal = submit.val(),
            errorBloc = $('.error.vipform'),
            rares = [];
        rare.each(function(index) {
            var id = rare.eq(index).attr('id');
            rares.push(id);
        });
        errorBloc.text('').fadeOut(0);
        submit.val('Chargement...').attr("disabled", true);
        $.post(tthis.attr('action'), {
            rare: rares,
            offer: offer,
            token: token
        }, function(data) {
            submit.val(submitVal).attr('disabled', false);
            if (data.type == 'error') {
                errorBloc.text(data.message).fadeIn(0).removeClass('success');
            } else {
                errorBloc.text(data.message).fadeIn(0).addClass('success');
                jetonsMoins(data.prix);
            }
        }, 'json');
        return false;
    });
    $(document).on('submit', 'form[name="sendRoom"]', function() {
        var tthis = $(this),
            roomid = $('> select[name="roomid"]', tthis).val(),
            username = $('> input[name="username"]', tthis).val(),
            token = $('> input[name="token"]', tthis).val(),
            submit = $('> input[name="SendRoom"]', tthis),
            submitVal = submit.val(),
            errorBloc = $('.error');
        errorBloc.text('Chargement...').addClass('success').fadeIn(0);
        submit.val('Chargement...').attr("disabled", true);
        $.post(tthis.attr('action'), {
            username: username,
            roomid: roomid,
            token: token
        }, function(data) {
            submit.val(submitVal).attr('disabled', false);
            if (data.type == 'error') {
                errorBloc.text(data.message).fadeIn(0).removeClass('success');
            } else {
                errorBloc.text(data.message).fadeIn(0).addClass('success');
                jetonsMoins(data.prix);
            }
        }, 'json');
        return false;
    });
    $(document).on('submit', 'form[name="sendCityCash"]', function() {
        var tthis = $(this),
            sold = $('> input[name="sold"]', tthis).val(),
            user = $('> input[name="user"]', tthis).val(),
            token = $('> input[name="token"]', tthis).val(),
            submit = $('> input[name="sendCityCash"]', tthis),
            submitVal = submit.val(),
            errorBloc = $('.error');
        errorBloc.text('Chargement...').addClass('success').fadeIn(0);
        submit.val('Chargement...').attr("disabled", true);
        $.post(tthis.attr('action'), {
            sold: sold,
            user: user,
            token: token
        }, function(data) {
            submit.val(submitVal).attr('disabled', false);
            if (data.type == 'error') {
                errorBloc.text(data.message).fadeIn(0).removeClass('success');
            } else {
                errorBloc.text(data.message).fadeIn(0).addClass('success');
                jetonsMoins(data.prix);
            }
        }, 'json');
        return false;
    });
    $(document).on('click', '.content > .getpack', function() {
        var pack = $(this).attr("id"),
            token = $(this).attr("token"),
            errorBloc = $('.error'),
            submit = $(this),
            submitVal = $(this).text();
        $(this).html('Chargement...');
        $.post(link.action + 'shop_pack.php', {
            pack: pack,
            token: token
        }, function(data) {
            submit.html(submitVal);
            if (data.type == 'error') {
                errorBloc.text(data.message).fadeIn(0).removeClass('success');
            } else {
                errorBloc.text(data.message).fadeIn(0).addClass('success');
            }
        }, 'json');
        return false;
    });
    $(document).on('click', '.badge.selectable', function() {
        var tthis = $(this),
            id = $('> input[name="code"]', tthis).val(),
            name = $('> input[name="name"]', tthis).val(),
            namereduit = $('> input[name="namereduit"]', tthis).val(),
            prix = $('> input[name="prix"]', tthis).val(),
            description = $('> input[name="description"]', tthis).val(),
            stock = $('> input[name="stock"]', tthis).val(),
            img = $('> img', tthis).attr('src');
        $('.badgeImg').attr('src', img);
        $('.badgeName').text(name);
        $('.badgeNameReduit').text(namereduit);
        $('.badgeDescription').text(description);
        $('.badgePrix').text(prix + ' Diamantes');
        $('.badgeCode').text(id);
        $('.badgeStock').text(stock);
        $('.error.badgebuy').text('').fadeOut(0);
    });
    $(document).on('submit', 'form[name="buyBadge"]', function() {
        var tthis = $(this),
            prix = $('.badgePrix').text().replace(' Diamantes', ''),
            code = $('.badgeCode').text(),
            token = $('> input[name="token"]', tthis).val(),
            errorBloc = $('.error.badgebuy'),
            submit = $('> input[type="submit"]', tthis),
            submitVal = submit.val();
        errorBloc.text('').fadeOut(0);
        submit.val('Chargement...').attr("disabled", true);
        $.post(link.action + tthis.attr('action'), {
            prix: prix,
            code: code,
            token: token
        }, function(data) {
            submit.val(submitVal).attr('disabled', false);
            if (data.type == 'error') {
                errorBloc.text(data.message).fadeIn(0).removeClass('success');
            } else {
                errorBloc.text(data.message).fadeIn(0).addClass('success');
                jetonsMoins(data.prix);
                $('.badge[badgeid="' + code + '"]').remove();
            }
        }, 'json');
        return false;
    });
    $(document).on('click', '.numberLoto', function() {
        var tthis = $(this),
            countnl = $('.numberLoto.slc').length;
        if (tthis.hasClass('slc')) {
            tthis.removeClass('slc');
        } else {
            if (countnl == 10) {
                return false;
            } else {
                tthis.addClass('slc');
            }
        }
    });
    $(document).on('click', '.lotosuper', function() {
        var tthis = $(this),
            tiragetype = tthis.attr('tirageType'),
            token = $('input[name="token"]').val(),
            nbchoisi = [],
            errBloc = $('.error.lotau');
        $(".numberLoto.slc").each(function() {
            var abcdd = $(this).attr('nbid');
            nbchoisi.push(abcdd);
        });
        $('.resuloto').html('');
        $('button[type="submit"].lotosuper').attr('disabled', true);
        errBloc.text('');
        $.post(link.action + 'shop_loto.php', {
            token: token,
            tiragetype: tiragetype,
            nbchoisi: nbchoisi
        }, function(data) {
            $('button[type="submit"].lotosuper').removeAttr('disabled');
            if (data.nb0 !== null && data.nb0 != "") {
                var html = "<div class='bnnbr'>" + data.nb0 + "</div>",
                    html = html + "<div class='bnnbr'>" + data.nb1 + "</div>",
                    html = html + "<div class='bnnbr'>" + data.nb2 + "</div>",
                    html = html + "<div class='bnnbr'>" + data.nb3 + "</div>";
                $('.resuloto').html(html);
            }
            if (data.type == 'error') {
                errBloc.html(data.message).fadeIn(0).removeClass('success');
            } else {
                errBloc.html(data.message).fadeIn(0).addClass('success');
            }
        }, 'json');
        return false;
    });
    $('form[name=createBadge] > select').change(function() {
        var form = $('form[name=createBadge]');
        background = $('> select[name=background]', form).val(), headDirection = $('> select[name=headDirection]', form).val(), previewLook = $('> img.preview', form).attr("src").split("&fond=")[0];
        $('> img.preview', form).attr("src", previewLook + "&fond=" + background + "&direction=" + headDirection);
    });
    $(document).on('submit', 'form[name=createBadge]', function() {
        var tthis = $(this),
            token = $('> input[name="token"]', tthis).val(),
            background = $('> select[name=background]', tthis).val(),
            headDirection = $('> select[name=headDirection]', tthis).val(),
            title = $('> input[name=badgeTitle]', tthis).val(),
            description = $('> input[name=badgeDesc]', tthis).val(),
            look = $('> img.preview', tthis).attr("src").split("=")[1].replace("&fond", ""),
            submit = $('> input[type="submit"]', tthis),
            errorBloc = $('.error'),
            submitVal = submit.val();
        submit.val('Chargement...').attr("disabled", true);
        $.post(link.action + tthis.attr('action'), {
            token: token,
            description: description,
            fond: background,
            titre: title,
            direction: headDirection,
            look: look
        }, function(data) {
            submit.val(submitVal).attr('disabled', false);
            if (data.type == 'error') {
                errorBloc.text(data.message).fadeIn(0).removeClass('success');
            } else {
                errorBloc.text(data.message).fadeIn(0).addClass('success');
                jetonsMoins(data.prix);
            }
        }, 'json');
        return false;
    });
    $('form[name=sendBadgePerso] > .badge_selector > button > img').click(function() {
        $('img.slc').removeClass('slc');
        $(this).addClass('slc');
    });
    $(document).on('submit', 'form[name=sendBadgePerso]', function() {
        var tthis = $(this),
            token = $('> input[name="token"]', tthis).val(),
            username = $('> input[name="username"]', tthis).val(),
            selectedBadge = $('.badge_selector > button > img.slc').attr('code');
        submit = $('> input[type="submit"]', tthis), errorBloc = $('.error.ntm'), submitVal = submit.val();
        submit.val('Chargement...').attr("disabled", true);
        
        $.post(link.action + tthis.attr('action'), {
            token: token,
            username: username,
            badge: selectedBadge
        }, function(data) {
            submit.val(submitVal).attr('disabled', false);
            if (data.type == 'error') {
                errorBloc.text(data.message).fadeIn(0).removeClass('success');
            } else {
                errorBloc.text(data.message).fadeIn(0).addClass('success');
            }
        }, 'json');
        return false;
    });
});