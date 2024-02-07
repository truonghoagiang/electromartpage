// main.js
$(document).ready(function(){
    // Kiểm tra xem có key "data" trong Local Storage hay không
    var userName = localStorage.getItem("username");

    if (userName) {
        // Nếu có key "username", đăng nhập thành công
    

         var username = userName; // Bạn có thể lấy từ dữ liệu trong Local Storage hoặc một nguồn khác
         showLoggedInState(username);
    }

    // Hàm hiển thị trạng thái đăng nhập
    function showLoggedInState(username) {
    // Ẩn nút đăng nhập và đăng ký
    $(".top-header-lists li:has(a[href='#login'])").hide();
    $(".top-header-lists li:has(a[href='#register'])").hide();

    // Thêm tên người dùng vào phần tử có class là "top-header-lists"
    $(".top-header-lists").append("<li><span>" + username + "</span></li>");

    // Tạo một container cho các phần tử "Logout"
    var logoutContainer = $("<li></li>");

    // Thêm thẻ "Logout" vào container
    logoutContainer.append("<a href='#logout' id='btn-logout'>Logout</a>");

    // Thêm container vào phần tử có class là "top-header-lists"
    $(".top-header-lists").append(logoutContainer);
    // Thêm khoảng cách vào nút "Logout" bằng thuộc tính CSS margin
    logoutContainer.find("#btn-logout").css("margin-left", "10px");


    // Xử lý sự kiện khi người dùng nhấn nút "Logout"
    $("#btn-logout").click(function() {
        // Xóa dữ liệu từ Local Storage
        localStorage.removeItem("username");
        localStorage.removeItem("token");

        // Hiển thị lại nút đăng nhập và đăng ký
        $(".top-header-lists li:has(a[href='#login'])").show();
        $(".top-header-lists li:has(a[href='#register'])").show();

        // Xóa tên người dùng và nút "Logout"
        $(".top-header-lists li:has(span)").remove();
        logoutContainer.remove(); // Xóa container chứa nút "Logout"
        $("#user").val("");
        $("#pass").val("");
    });
}

});
