$(document).ready(function(){
    
    function ktUserName(){
        var re = /^[a-zA-Z0-9]{6,250}/
        if ($("#txtUser").val() == ""){
            $("#errUser").html("Vui lòng điền tên đăng nhập")
            return false
        }
        if (re.test($("#txtUser").val()) == false){
            $("#errUser").html("Tên đăng nhập không đúng!")
            return false
        }
        $("#errUser").html("")
        return true
    }
    $("#txtUser").blur(ktUserName)


    function ktPass(){
        var re = /^[a-zA-Z0-9]{6,250}/
        if ($("#txtPass").val() == ""){
            $("#errPass").html("Vui lòng điền mật khẩu")
            return false
        }
        if (re.test($("#txtPass").val()) == false){
            $("#errPass").html("Mật khẩu không đúng!")
            return false
        }
        $("#errPass").html("")
        return true
    }
    $("#txtPass").blur(ktPass)
})