$(function(){
    $('#btnZh').click(function(){
        $.i18n.setLocale('zh');
        location.reload();
    });
    $('#btnTw').click(function(){
        $.i18n.setLocale('zh-tw');
        location.reload();
    });
    $('#btnEn').click(function(){
        $.i18n.setLocale('en');
        location.reload();
    });

    $.i18n.load(['../lang/language.js', '../lang/language2.js'], function(success){
        //$.i18n.load('../lang/language.js', function(success){
        if (success){
            $('#btnOk').text($.i18n.prop('#btnOk'));
            $('#j_username').attr('placeholder', $.i18n.prop('#j_username'));
            $('#j_password').prop('placeholder', $.i18n.prop('#j_password'));
            $('#j_code').prop('placeholder', $.i18n.prop('#j_code'));
            $('#supportMsg').text($.i18n.prop('#supportMsg'));
            $('label[k-resid]').each(function(i, item){
                //下面两种方法都支持
                $(item).text($.i18n.prop(item));
                //$(item).text($.i18n.prop($(item).attr('k-resid')));
            });
            alert($.i18n.prop('test', '测试'));

            //占位符演示
            $('#whoami').text($.i18n.prop('whoami', '黄晓明', '18'));
            $('#whoami2').text($.i18n.prop('whoami', $.i18n.prop('monkey'), '16'));

            //中文资源演示
            $('#zhres').text($.i18n.prop($('#zhres').text(), '默认文本'));
        }

        $('#btnOk').click(function(){
            var username = $('#j_username').val();
            var password = $('#j_password').val();
            var code = $('#j_code').val();
            if ($.trim(username)==''){
                alert($.i18n.prop('username_is_null', '请输入用户名'));
                return false;
            }
            if ($.trim(password)==''){
                alert($.i18n.prop('password_is_null', '请输入密码'));
                return false;
            }
            if ($.trim(code)==''){
                alert($.i18n.prop('captcha_is_null', '请输入验证码'));
                return false;
            }
            //password = $.md5($('#j_password').val());
            var param = {
                j_username: username,
                j_password: password,
                j_code: code
            }

            //$.post('spring_security_login', param, function(data){
            //
            //}, 'json');
        });
    });
});