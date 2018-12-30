function init(){
    CheckStorage();
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

function deviceReady(){
    console.log("Device is ready");
    StatusBar.hide();
    var app = new Framework7();
    $("#goHome").on("click", function () {

        console.log("Login");
        window.open("index.html", '_self', 'location=no');

    });

   //dashboard fetch
   var xid = "";
   $.ajax({
    type: 'get',
    url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
    data: {getlostAll: xid},
    success: function(data) {
        app.dialog.close();
        $('#lostFound').append(data);

    },
    error: function (data) {
        app.dialog.close();
        app.dialog.alert('Unable to fetch record. Please check your internet connection', 'Network Failure');
    }
});

$.ajax({
    type: 'get',
    url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
    data: {getScholarshipAll: xid},
    success: function(data) {
        app.dialog.close();
        $('#scholarshipContent').append(data);

    },
    error: function (data) {
        app.dialog.close();
        app.dialog.alert('Unable to fetch record. Please check your internet connection', 'Network Failure');
    }
});

$.ajax({
    type: 'get',
    url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
    data: {getSportsAll: xid},
    success: function(data) {
        app.dialog.close();
        $('#sportsContent').append(data);

    },
    error: function (data) {
        app.dialog.close();
        app.dialog.alert('Unable to fetch record. Please check your internet connection', 'Network Failure');
    }
});
$.ajax({
    type: 'get',
    url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
    data: {getSpecialFilter: xid},
    success: function(data) {
        app.dialog.close();
        $('#specialAnn').append(data);

    },
    error: function (data) {
        app.dialog.close();
        app.dialog.alert('Unable to fetch record. Please check your internet connection', 'Network Failure');
    }
});

    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {getExamAll: xid},
        success: function(data) {
            app.dialog.close();
            $('#examAll').append(data);

        },
        error: function (data) {
            app.dialog.close();
            app.dialog.alert('Unable to fetch record. Please check your internet connection', 'Network Failure');
        }
    });

    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {getVideo: xid},
        success: function(data) {
            app.dialog.close();
            $('#video').append(data);
        },
        error: function (data) {
            app.dialog.close();
            app.dialog.alert('Unable to fetch record. Please check your internet connection', 'Network Failure');
        }
    });


    $.ajax({
        type: 'get',
        url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        data: {imageAll: xid},
        success: function(data) {
            app.dialog.close();
            $('#image').append(data);
        },
        error: function (data) {
            app.dialog.close();
            app.dialog.alert('Unable to fetch record. Please check your internet connection', 'Network Failure');
        }
    });
//end
}

function CheckStorage(){
    var logCheck = localStorage.getItem('login');
    if(logCheck == 'true'){
        window.open('pages/dashboard.html', '_self', 'location=no');
    }
}
