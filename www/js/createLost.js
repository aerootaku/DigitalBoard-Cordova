function init(){
    // CheckStorage();
    checkRole();
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

function deviceReady(){
    StatusBar.hide();
    console.log("Device is ready");
    var id = localStorage.getItem("userID");

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
        function onConfirm(buttonIndex) {
            localStorage.clear();
            if(buttonIndex == '1'){
                window.open('../index.html', '_self', 'location=no');
            }

        }
        navigator.notification.confirm(
            'Are you sure you want to logout?', // message
            onConfirm,            // callback to invoke with index of button pressed
            'Exit from App',           // title
            ['Logout','Cancel']     // buttonLabels
        );

    });

    //start for lost found posting
    var posted = localStorage.getItem("lastname") + " " + localStorage.getItem("firstname");
    $("#posted_by").val(id);
    // console.log(posted);
    $("#posted_by_name").val(posted);

    $("#lostForm").submit(function (e) {
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

    $("#lostPreview").on("click", function (e) {
      var desc =  $("#summernote").val();
      console.log(desc);
       $("#descriptionPreview").html(desc);
    });
}

function alertDismissed() {
    window.location.reload(true);
}

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
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