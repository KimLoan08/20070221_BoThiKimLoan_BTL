$(document).ready(function() {
    $("#myBtn").click(function() {
        $("#myModal").modal();
    })

    function kiemtraTDN() {
        let mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#txtTDN").val() == "") {
            $("#tbTDN").html("Không để trống.");
            return false;
        }
        if (!mauKT.test($("#txtTDN").val())) {
            $("#tbTDN").html("Mỗi ký tự đầu viết hoa và không dùng số");
            return true;
        }
        $("#tbTDN").html("*");
        return true;
    }
    $("#txtTDN").blur(kiemtraTDN);

    $("#myModal").modal("hide")
    return true

})