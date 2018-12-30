function init(){
    // CheckStorage();
    checkRole();
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

function deviceReady() {
    StatusBar.hide();
    console.log("Device is ready");
    var id = localStorage.getItem("userID");

    var app = new Framework7();
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

    $("#logout").on('click', function(){
        var logout = localStorage.getItem("username");
        app.dialog.confirm('Are you sure you want to logout?', 'Logout?', function () {
            app.dialog.alert('Goodbye!', 'Digital Bulletin', function(){
                localStorage.clear();
                $.ajax({
                    type: 'get',
                    url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
                    data: {logout: logout},
                    success: function (response) {
                        window.open('../index.html', '_self', 'location=no');
                    },
                    error: function(data){
                        console.log(data);
                        // app.dialog.alert('Server Error. Please try again later', 'Error');
                    }

                });
            });
        });

    });

    $('#scholarDT').DataTable({
        responsive: true,
        "bInfo": false,
        "lengthChange": false,
        "bProcessing": true,
        "sAjaxSource": "http://digitalbulletinboard.xyz/bulletin/api.php?getScholarTable",
        "aoColumns": [
            {mData: 'posted_by'},
            {mData: 'description'},
            {mData: 'date_posted'},
            {mData: 'time_posted'}

        ]
    });
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