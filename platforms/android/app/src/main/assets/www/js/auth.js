function init(){
    CheckStorage();
    document.addEventListener("deviceready", deviceReady, true);
    
    delete init;
}

function deviceReady(){
    console.log("Device is ready");
    StatusBar.hide();
    var app = new Framework7();

    // app.dialog.preloader()
    // setTimeout(function() {
    //     app.dialog.close();
    // }, 3000);

    $("#signup").on("click", function () {
        console.log("Sing-up");
        window.open('signup.html', '_self', 'location=no');
    });

    $("#loginhref").on("click", function () {

        console.log("Login");
        window.open("index.html", '_self', 'location=no');

    });
    $("#goHome").on("click", function () {

        console.log("Login");
        window.open("index.html", '_self', 'location=no');

    });
    $("#adminHref").on("click", function () {

        console.log("Login");
        window.open("login.html", '_self', 'location=no');

    });

    $("#employeeHref").on("click", function () {

        console.log("Login");
        window.open("login.html", '_self', 'location=no');

    });
    
    $("#studentHref").on("click", function () {

        console.log("Login");
        window.open("student.html", '_self', 'location=no');

    });

    $("#loginForm").submit(function(e){
        e.preventDefault();
        app.dialog.preloader('Logging in..');
        var username = $("#username").val();
        var password = $("#password").val();
        var login = $("#login").val();
        $.ajax({
            type: 'POST',
            url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
            data: {username: username, password: password, login: login},
            success: function (response) {
                app.dialog.close();
                console.log(response);
                var resp = JSON.parse(response);
                if(resp.title == 'Success'){
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('userID', resp.id);
                    localStorage.setItem('firstname', resp.firstname);
                    localStorage.setItem('lastname', resp.lastname);
                    localStorage.setItem('middlename', resp.middlename);
                    localStorage.setItem('declared', resp.password);
                    localStorage.setItem('username', resp.username);
                    localStorage.setItem('role', resp.role);
                    localStorage.setItem("pw", resp.password);
                    console.log(localStorage.getItem("role"));

                    app.dialog.alert('Login Success', 'Success', function(){
                        // if(res.role == 'Admin'){
                        //
                        // }
                        window.open('pages/dashboard.html', '_self', 'location=no');
                    });
                }
                else {
                    app.dialog.alert(resp.Message, resp.title);
                }

            },
            error: function(XMLHttpRequest, textStatus, errorThrown, data){
                app.dialog.alert('Unable to connect with the server.. Please check your internet connection or try again later', 'Error');
                app.dialog.close();
            }

        });
        // e.preventDefault();

    });

    $("#formFaculties").submit(function(e){
        app.dialog.preloader("Saving your information");
        const formData = $("#formFaculties").serialize();
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: 'http://digitalbulletinboard.xyz/bulletin/api.php',
            data: formData,
            success: function (response) {
                console.log(response);
                var resp = JSON.parse(response);
                app.dialog.alert(resp.Message, resp.title);
            },
            error: function(data){
                console.log(data);
                app.dialog.alert('Server Error. Please try again later', 'Error');
            }

        });
        app.dialog.close();
        e.preventDefault();

    });

//end
}

function onoffline(){
    app.alert.dialog("Your Device is not Connected to any network");
    console.log("Not connected to the internet")
}

function CheckStorage(){
    var logCheck = localStorage.getItem('login');
    if(logCheck == 'true'){
        window.open('pages/dashboard.html', '_self', 'location=no');
    }
}

function validate(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}