Pusher.logToConsole = true;

var pusher = new Pusher('b7a01f95de7dcfc94bfd', {
    cluster: 'ap1',
    forceTLS: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    if(data.role == localStorage.getItem('role') || data.id == localStorage.getItem("userID")){
        console.log("For Admin and Staff");
        // $.ajax({
        //     type: 'POST',
        //     url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
        //     data: {savenotif: "", user_id: data.id, title: data.title, notif: data.message},
        //     success: function (response) {
        //         console.log(response);
        //     },
        //     error: function(data){
        //         console.log(data);
        //     }
        //
        // });
        // fetchCount();
        // fetchNotif();
        cordova.plugins.notification.local.schedule({
            title: data.title,
            text: data.message,
            foreground: true
        });
    }
});