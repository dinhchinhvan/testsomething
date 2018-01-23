// $(document).ready(function(){

// onPageLogin();
// onPageSignup();
// onPageForgetPassword();

//     // function proccessURL(){
//     //     if($.url().param() == '?page=login'){
//     //          $(".signupx").hide();
//     //         $(".login").show();
//     //         $(".alphab").addClass('plus');
//     //     }
//     // }
//     // proccessURL();
    
//     var errorCode ={
//         1061: 'The username or password is incorrect!',
//         1062: 'The username or password is incorrect!',
//         1063: 'The username or password is incorrect!',
//         1064: 'The username or password is incorrect!',
//         1065: 'The username or password is incorrect!',
//         1066: 'The username or password is incorrect!',
//         1067: 'The username or password is incorrect!',
//         1068: 'The username or password is incorrect!',
//         1069: 'Password invalid',
//         1070: 'Re-password failed',
//         1071: 'You do not have permission',
//         1071: 'You can not log in, this device has been locked'
//     }

//     function ErrorPassword(error){
//         if(error != null){
//             $('#email-login').focus();
//             $('#email-login').addClass('error');
//             $('#email-login').removeClass('text_input');
//             $('#password-login').addClass('error1');
//             $('#password-login').removeClass('text_input');
//             $('.login p').addClass('p-red');
//             $('.login p').removeClass('p-green');
//             $('.login p').removeClass('p-blue');
//             $('.login p').html(error);
//         }else{
//             $('#email-login').removeClass('error');
//             $('#email-login').addClass('text_input');
//             $('#password-login').removeClass('error1');
//             $('#password-login').addClass('text_input');
//             $('.login p').html('');
//         }
//     }

//     function onPageLogin(queryParams){
//         if(localStorage['email-login'] !== undefined) {
//             $('#email-login').val(localStorage.getItem('email-login'));
//         }
//         if(localStorage.getItem('Remember-Me')) {
//             var data = JSON.parse(localStorage.getItem('Remember-Me'));
//             $('#email-login').val(data.email);
//             $('#password-login').val(data.pass);
//             $('input#remme')[0].checked = true;
//         }

//     	var loginuser = false;
//         var user;
//         if (localStorage.length != 0){
//                 loginuser = true; 
//             } else {
//                 loginuser = false;
//             }
//             if (localStorage['User-Data'] !== undefined) {
//                 user = JSON.parse(localStorage['User-Data']);
//             } else {
                
//             }  
//         $("#login-submit-btn").unbind('click');
//         $("#login-submit-btn").click(function(){
//             $('#login-submit').unbind('submit');
//             $('#login-submit').submit(function(e){
//                 $('.login p').addClass('p-blue');
//                 $('.login p').removeClass('p-green');
//                 $('.login p').removeClass('p-red');
//                 $('.login p').html('Loading...');
//             	loginFunction(queryParams);
//             	e.preventDefault();
//             });
//         });
//     };

//     function loginFunction(queryParams){
//         if($('input#remme')[0].checked) {
//             localStorage.setItem('Remember-Me', JSON.stringify({
//                 email: $('#email-login').val(),
//                 pass: $('#password-login').val()
//             }));
//         } else {
//             if(localStorage['Remember-Me'] !== undefined) {
//                 localStorage.removeItem('Remember-Me');
//             }
//         }
//         FCMconfig(queryParams);
//     }
//     function LoginWithTokenFCM(token, queryParams){
//         var datalogin = {
//             email: $('#email-login').val(),
//             password: $('#password-login').val(),
//             deviceFcmToken: "DefaultToken",
//             deviceOS: KnowBrower().Name,
//             deviceDescription: navigator.userAgent,
//             deviceOSVersion: KnowBrower().Version,
//             deviceName: navigator.platform
//         };
//         if (!!token) {
//             datalogin.deviceFcmToken = token;
//         } else {} 
//         api.post("/user/login", datalogin, function(success, data) {
//             if(success) {
//                 loginuser = true;
//                 var _tz = timezoneJS.timezone;
//                 _tz.loadingScheme = _tz.loadingSchemes.MANUAL_LOAD;
//                 _tz.loadZoneDataFromObject(tzdata);
//                 var a = new Date(Date.now());
//                 var dt = new timezoneJS.Date(a, data.user.companyId.timeZone);
//                 data.user.companyId.timeZone = dt.getTimezoneOffset()/(-60);
//                 localStorage.setItem('User-Data', JSON.stringify(data));
//                 if (!data.user.avatar) {
//                     if(queryParams == '?page=login'){
//                         window.location.replace("/#/setting");
//                     }else {
//                         $('.login p').addClass('p-green');
//                         $('.login p').removeClass('p-red');
//                         $('.login p').removeClass('p-blue');
//                         $('.login p').html('Login successful');
//                         confirmF();
//                     }
//                 } else {
//                     $('.login p').addClass('p-green');
//                     $('.login p').removeClass('p-red');
//                     $('.login p').removeClass('p-blue');
//                     $('.login p').html('Login successful');
//                     window.location.replace("/#/mypage");
//                 }
//             } else  {
//                 var error = errorCode[data];
//                 ErrorPassword(error);
//             }
//         })
//     }  

//     function confirmF() {
//         r = confirm("Update profile?");
//         if (r == true) {
//             window.location.replace("/#/profile");
//         } else {
//             window.location.replace("/#/mypage");
//         }
//     }

//     function KnowBrower() {
//     	var nAgt = navigator.userAgent,
//     		browserName = "",
//     		fullVersion = "";
//     	if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
//     		fullVersion = nAgt.substring(nAgt.indexOf("Opera") + 6);
//     		browserName = "opera";
//     	} else if (typeof InstallTrigger !== 'undefined') {
//     		fullVersion = nAgt.substring(nAgt.indexOf("Firefox") + 8);
//     		browserName = "firefox";
//     	} else if (/constructor/i.test(window.HTMLElement) || (function (p) {
//     		return p.toString() === "[object SafariRemoteNotification]";
//     	})(!window['safari'] || safari.pushNotification)) {
//     		fullVersion = nAgt.substring(nAgt.indexOf("Safari") + 7);
//     		if ((nAgt.indexOf("Version")) != -1) {
//     			fullVersion = nAgt.substring(nAgt.indexOf("Version") + 8);
//     		}
//     		browserName = "safari";
//     	} else if ( /*@cc_on!@*/ false || !!document.documentMode) {
//     		fullVersion = nAgt.substring(nAgt.indexOf("MSIE") + 5);
//     		browserName = "ie";
//     	} else if (!( /*@cc_on!@*/ false || !!document.documentMode) && !!window.StyleMedia) {
//     		fullVersion = nAgt.substring(nAgt.indexOf("Edge") + 5);
//     		browserName = "edge";
//     	} else if (!!window.chrome && !!window.chrome.webstore) {
//     		fullVersion = nAgt.substring(nAgt.indexOf("Chrome") + 7);
//     		browserName = "chrome";
//     	} else { }

//     	if ((fullVersion.indexOf(";")) != -1) {
//     		fullVersion = fullVersion.substring(0, fullVersion.indexOf(";"));
//     	} else if ((fullVersion.indexOf(" ")) != -1) {
//     		fullVersion = fullVersion.substring(0, fullVersion.indexOf(" "));
//     	} else { }
//     	var majorVersion = parseInt('' + fullVersion, 10);
//     	if (isNaN(majorVersion)) {
//     		fullVersion = '' + parseFloat(navigator.appVersion);
//     		majorVersion = parseInt(navigator.appVersion, 10);
//     	} else { }
//     	return BrowserInfor = {
//     		Name: browserName,
//     		Version: fullVersion
//     	}
//     }
//     function FCMconfig(queryParams) {
//     	messaging.getToken()
//     		.then(token => {
//     			return messaging.deleteToken(token)
//     		})
//     		.then(result => {
//     			return messaging.getToken()
//     		})
//     		.then(token => {
//     			console.log(token)
//     			LoginWithTokenFCM(token, queryParams);
//     		})
//     		.catch(e => {
//     			LoginWithTokenFCM();
//     		})
//     };

//     function onPageSignup() {
//         $("#btn-register").click(function(){
//             $("#btn-register").unbind('click');
//             $('#form-register').submit(function(e){
//                 $('#form-register').unbind('submit');
//             	signup();
//             	e.preventDefault();
//             });
//         });
//         $("#user-register, #email-register, #password-register, #re-password").on( "keydown", function(event) {
//             if(event.which == 13) 
//             signup();
//         });
//     }
//     function signup() {
//         var dataregister = {
//             email: $("#email-register").val(),
//             password: $("#password-register").val(),
//             companyId: $("#CompanyId").val()
//         };
//         var result=false;
//         if (dataregister.password == $("#re-password").val()) {
//             if(password(dataregister.password)){
//                 result = true;
//             }else{
//                 result=false;
//             }
//         } else {
//             alert("Re-password incorrect");
//         }
//         if (result) {      
//             api.post("/user/register", dataregister, function(success, data){
//                 if (success) {                
//                     alert("Please check mail active user");
//                     localStorage.setItem('email-login', $("#email-register").val());
//                 } else if (data == 661){              
//                     alert("User is existed");
//                 } else {                
//                     alert("Error");
//                 }
//             })
//         }else{
//             alert('Your password must contain at least eight characters including one uppercase letter, one special character and alphanumeric characters.');
//         }
//     }
//     function password(data){
//         var password = data.target || data;
//         var filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*()?&])[A-Za-z\d$@$!%*?&()]{8,}/;
//         if (!filter.test(password)) {           
//             return false;
//         }else{
//             return true;
//         }   
//     }

//     function onPageForgetPassword() {
//         $("#forgetten-password").unbind('click');
//         $("#forgetten-password").click(function(){
//             $('#form-reset').unbind('submit');
//             $('#form-reset').submit(function(e){
//             	forgotPwd();
//             	e.preventDefault();
//             });
//         });
//     }
//     function forgotPwd() {
//         var dataforget = {
//             email: $("#email-forget").val()
//         };
        
//         api.post("/mail/send", dataforget, function(success, data){
//             if (success) {
//                 localStorage.setItem('email-login', $("#email-forget").val());
//                 alert("Please check mail");
//             } else{            
//                 alert("Error");
//             }
//         });
//     }

// });