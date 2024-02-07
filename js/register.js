$(document).ready(function(){
    // Đăng ký sự kiện submit cho biểu mẫu
    $("#register-form").submit(function(event){
        // Ngăn chặn việc submit mặc định của biểu mẫu
        event.preventDefault();

        // Lấy giá trị của thẻ input được chỉ định
        var name = $("#name-register").val();
        var email = $("#email-register").val();
        var password1 = $("#password1-register").val();
        var password2 = $("#password2-register").val();
        var checkboxChecked = $("#customControlAutosizing2").is(":checked");
        // Kiểm tra xem mật khẩu nhập lại có khớp với mật khẩu ban đầu không
        if (password1 !== password2) {
            $("#message").html("*Mật khẩu nhập lại không đúng");
            return;
        }
        // Kiểm tra xem checkbox đã được chọn hay chưa
        // Nếu checkbox chưa được chọn, hiển thị thông báo và dừng việc gửi biểu mẫu
        if (!checkboxChecked) {
            $("#message").html("*Vui lòng đồng ý với Điều khoản & Điều kiện");
            return;
        }


        // Ajax request
        $.ajax({
            url: "http://localhost:9090/users/create",
            method: "post",
            data: {
                name: name,
                email: email,
                password: password1
            },
            success: function(response) {
                // Lấy giá trị của key "data" từ phản hồi
                var responseData = response.data;

                // So sánh giá trị "data" với chuỗi "Thêm thành công"
                if (responseData === "Thêm thành công") {
                    $("#message").html("*Thêm thành công");
                    setTimeout(function(){
                        location.reload();
                    }, 2000);
                } else {
                    $("#message").html("*Tài khoản đã tồn tại");
                }
            },
            error: function(xhr, status, error) {
                console.error("Lỗi: " + error);
            }
        });
    });
});
