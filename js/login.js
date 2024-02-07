$(document).ready(function(){
    
    // Đăng ký sự kiện submit cho biểu mẫu
    $("#login-form").submit(function(event){
        // Ngăn chặn việc submit mặc định của biểu mẫu
        event.preventDefault();

        // Lấy giá trị của thẻ input được chỉ định
        var username = $("#user").val();
        var password = $("#pass").val();

        // Xuất giá trị ra trên tab console trên trình duyệt
        console.log("username: ", username, " password: ", password);

        // Ajax request
        $.ajax({
            url: "http://localhost:9090/login",
            method: "post",
            data: {
                username: username,
                password: password
            }
        }).done(function(token){
            localStorage.setItem("token", token);
            console.log("server tra ve ", token);
            localStorage.setItem("username", username)
            location.reload();
        }).fail(function(){
            console.log("Tài khoản hoặc mật khẩu không đúng");
            $("#message1").html("*Tài khoản hoặc mật khẩu không đúng");
        });
    });
});
