function init(){
    // CheckStorage();
    checkRole();
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

function deviceReady(){
    StatusBar.hide();
    console.log("Device is ready");
    var xid = localStorage.getItem("userID");

    $("#dashboardHref").on("click", function () {
        console.log("Sing-up");
        window.open('dashboard.html', '_self', 'location=no');
    });

    $("#pendingAnnouncementHref").on("click", function () {
        console.log("Sing-up");
        window.open('pendingAnnouncement.html', '_self', 'location=no');
    });

    $("#pendingEmployeeHref").on("click", function () {
        console.log("Sing-up");
        window.open('pendingEmployee.html', '_self', 'location=no');
    });

    $("#approveEmployeeHref").on("click", function () {
        console.log("Sing-up");
        window.open('employeeList.html', '_self', 'location=no');
    });
    $("#settingsHref").on("click", function () {
        console.log("Sing-up");
        window.open('settings.html', '_self', 'location=no');
    });

    $("#CreatelostfoundHref").on("click", function () {
        console.log("Sing-up");
        window.open('createLost.html', '_self', 'location=no');
    });
    $("#CreatespecialHref").on("click", function () {
        console.log("Sing-up");
        window.open('createSpecial.html', '_self', 'location=no');
    });
    $("#CreatescholarHref").on("click", function () {
        console.log("Sing-up");
        window.open('createScholar.html', '_self', 'location=no');
    });
    $("#CreatesportsHref").on("click", function () {
        console.log("Sing-up");
        window.open('createSports.html', '_self', 'location=no');
    });

    // $("#logout").on('click', function(){
    //     var logout = localStorage.getItem("username");
    //     app.dialog.confirm('Are you sure you want to logout?', 'Logout?', function () {
    //         app.dialog.alert('Goodbye!', 'Digital Bulletin', function(){
    //             localStorage.clear();
    //             $.ajax({
    //                 type: 'get',
    //                 url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
    //                 data: {logout: logout},
    //                 success: function (response) {
    //                     window.open('../index.html', '_self', 'location=no');
    //                 },
    //                 error: function(data){
    //                     console.log(data);
    //                     // app.dialog.alert('Server Error. Please try again later', 'Error');
    //                 }
    //
    //             });
    //         });
    //     });
    //
    // });


    //dashboard fetch
    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {getlost: xid},
        success: function(data) {
            $('#lostFound').append(data);

        },
        error: function (data) {

        }
    });
    //dashboard fetch
    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {getSpecial: xid},
        success: function(data) {
            $('#specialAnn').append(data);

        },
        error: function (data) {

        }
    });

    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {getScholarship: xid},
        success: function(data) {
            $('#scholarshipContent').append(data);

        },
        error: function (data) {

        }
    });

    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {getSports: xid},
        success: function(data) {
            $('#sportsContent').append(data);

        },
        error: function (data) {

        }
    });

    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {getExam: xid},
        success: function(data) {
            $('#examContent').append(data);

        },
        error: function (data) {

        }
    });
    //end
    $("#lostFoundParent").delegate('.edit', 'click', function (e) {
        e.preventDefault();
        var approve = "";
        var eid = $(this).data("id");
        let name = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
        $("#request").val(name);
        console.log(eid);
        $("#post_id").val(eid);
        $("#table_name").val("tbl_lost_found");

    });

    $("#specialParent").delegate('.edit', 'click', function (e) {
        e.preventDefault();
        var approve = "";
        var eid = $(this).data("id");
        console.log(eid);
        let name = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
        $("#request").val(name);
        $("#post_id").val(eid);
        $("#table_name").val("tbl_special");
    });

    $("#scholarParent").delegate('.edit', 'click', function (e) {
        e.preventDefault();
        var approve = "";
        var eid = $(this).data("id");
        console.log(eid);
        let name = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
        $("#request").val(name);
        $("#post_id").val(eid);
        $("#table_name").val("tbl_scholarship");
    });

    $("#sportsParent").delegate('.edit', 'click', function (e) {
        e.preventDefault();
        var approve = "";
        var eid = $(this).data("id");
        console.log(eid);
        let name = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
        $("#request").val(name);
        $("#post_id").val(eid);
        $("#table_name").val("tbl_sports");
    });

    $("#examParent").delegate('.edit', 'click', function (e) {
        e.preventDefault();
        var approve = "";
        var eid = $(this).data("id");
        console.log(eid);
        let name = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
        $("#request").val(name);
        $("#post_id").val(eid);
        $("#table_name").val("tbl_room_exam");
    });
    //dashboard fetch
    $("#lostFoundEdit").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (response) {
                console.log(response);
                var resp = JSON.parse(response);
                navigator.notification.alert(
                    resp.Message,  // message
                    alertDismissed,         // callback
                    resp.title,            // title
                    'Okay'                  // buttonName
                );


            },
            error: function(data){

            }

        });
        e.preventDefault();
    });
}

function alertDismissed() {
    //do nothing here
    window.location.reload(true);
}

function CheckStorage(){
    var logCheck = localStorage.getItem('login');
    if(logCheck != 'true'){
        window.open('index.html', '_self', 'location=no');
    }
}

function checkRole() {
    var role = localStorage.getItem("role");
    console.log(role);
    if (role == 'Admin') {
        //do nothing
    }
    else if (role == 'Dean') {
        $('#pendingAnnouncements').css('display', 'none');
        $('#requestAnnouncements').css('display', 'none');
        $('#manageAnnouncements').css('display', 'none');
        $('#manageEmployees').css('display', 'none');
        $('#manageID').css('display', 'none');
        $('#reportsAnalytics').css('display', 'none');
        // $('#CreatelostfoundHref').css('display', 'none');
        $('#createRoomHref').css('display', 'none');
        // $('#CreatespecialHref').css('display', 'none');
        $('#CreatescholarHref').css('display', 'none');
        $('#CreatesportsHref').css('display', 'none');
    }
    else if (role == 'Scholar') {
        $('#pendingAnnouncements').css('display', 'none');
        $('#requestAnnouncements').css('display', 'none');
        $('#manageAnnouncements').css('display', 'none');
        $('#manageEmployees').css('display', 'none');
        $('#manageID').css('display', 'none');
        $('#reportsAnalytics').css('display', 'none');
        // $('#CreatelostfoundHref').css('display', 'none');
        // $('#createRoomHref').css('display', 'none');
        // $('#CreatespecialHref').css('display', 'none');
        // $('#CreatescholarHref').css('display', 'none');
        $('#CreatesportsHref').css('display', 'none');
    }

    else if (role == 'Sports') {
        $('#pendingAnnouncements').css('display', 'none');
        $('#requestAnnouncements').css('display', 'none');
        $('#manageAnnouncements').css('display', 'none');
        $('#manageEmployees').css('display', 'none');
        $('#manageID').css('display', 'none');
        $('#reportsAnalytics').css('display', 'none');
        // $('#CreatelostfoundHref').css('display', 'none');
        // $('#createRoomHref').css('display', 'none');
        // $('#CreatespecialHref').css('display', 'none');
        $('#CreatescholarHref').css('display', 'none');
        // $('#CreatesportsHref').css('display', 'none');
    }

    else if (role == 'Faculty') {
        $('#pendingAnnouncements').css('display', 'none');
        $('#requestAnnouncements').css('display', 'none');
        $('#manageAnnouncements').css('display', 'none');
        $('#manageEmployees').css('display', 'none');
        $('#manageID').css('display', 'none');
        $('#reportsAnalytics').css('display', 'none');
        // $('#CreatelostfoundHref').css('display', 'none');
        // $('#createRoomHref').css('display', 'none');
        // $('#CreatespecialHref').css('display', 'none');
        $('#CreatescholarHref').css('display', 'none');
        $('#CreatesportsHref').css('display', 'none');
    }
}