$(document).ready(function(){
	window.onbeforeunload = function () {
		$(window).scrollTop(0);
	}

	$('#content-1').hide();
	$('.languages #vn').click(function(){
		$('#content-2').hide();
		$('#content-1').show();
		$(window).scrollTop(0);
	});
	$('.languages #en').click(function(){
		$('#content-2').show();
		$('#content-1').hide();
		$(window).scrollTop(0);
	})

	$(".forgot_pass a").click(function(){
		var uRl = window.location.href;
		history.replaceState(null,null, uRl.split('?page=login')[0]);
		$('.login').hide();
		$('.alphab').removeClass('plus');
		$('.alphac').addClass('plus');
		$('.reset_form').show();
	});
	var page_one  = $('.page-one');
	if( page_one.length){
		var scrollStart = 0;
		var offset = $(".page-one").offset();
		var offset2 = $('.top').offset();
		$(".top").hide();
		$(document).scroll(()=>{
			scrollStart = $(this).scrollTop();
			if(scrollStart > $(".page-one").offset().top) {
	          $('.nav-bar').css({"background":"rgba(178,34,34, 1)"});
	       } else {
	          $('.nav-bar').css({"background-color":"transparent","opacity":"1"});
	       }
	       if(scrollStart > offset2.top + 100) {
	          $('.top').fadeIn('slow');
	       } else {
	          $('.top').fadeOut(100);
	       }
		});
	}
	
	$(".gito-icon").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	})
	$(".top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	})
	$(function(){
	    $('input[name="rad"]').click(function(){
	        var radio = $(this);

	        // if this was previously checked
	        if (radio.data('waschecked') == true)
	        {
	            radio.prop('checked', false);
	            radio.data('waschecked', false);
	        }
	        else
	            radio.data('waschecked', true);

	        // remove was checked from other radios
	        radio.siblings('input[name="rad"]').data('waschecked', false);
	    });
	});
	

	$(".btn-chp").mouseenter(()=>{
		$(".btn-chp-img").addClass('hovericonX');
		$(".hovericonX").removeClass('btn-app-img');		
		$(".btn-chp").css({"color":"#000000", "background-color":"#ffffff","opacity":"0.5"});
	});

	$(".btn-app").mouseenter(()=>{
		$(".btn-app-img").addClass('hovericonY');
		$(".hovericonY").removeClass('btn-app-img');
		$(".btn-app").css({"color":"#000000", "background-color":"#ffffff","opacity":"0.5"});
	});

	$(".btn-chp").mouseleave(()=>{
		$('.hovericonX').addClass('btn-chp-img');
		$(".btn-chp-img").removeClass('hovericonX');
		$(".btn-chp").css({"color":"#ffffff", "background-color":"transparent","opacity":"1"});
	});

	$(".btn-app").mouseleave(()=>{
		$(".hovericonY").addClass('btn-app-img');
		$(".btn-app-img").removeClass('hovericonY');
		$(".btn-app").css({"color":"#ffffff", "background-color":"transparent","opacity":"1"});
	});

	var change_header_img = function(){
		// var images = ["./img/Group87.png","./img/Group.png"];
			$('.page-one').find("img").eq(1).addClass('animate');
			$('.page-one').find("img").eq(0).removeClass('animate');
		var i = 1;
		setInterval(fadeDivs, 6000);
		function fadeDivs(){
		    if(i % 2 != 0){
				$('.page-one').find("img").eq(1).removeClass('animate');
				$('.page-one').find("img").eq(0).addClass('animate');
				i++;
			}
			else{
				$('.page-one').find("img").eq(1).addClass('animate');
				$('.page-one').find("img").eq(0).removeClass('animate');
				i++;
			}
		};
	}
	change_header_img();

	var scrollToClass = function(){
		$(".explore-arr").click(()=>{
			$('html, body').stop().animate({
				scrollTop: $(".fix-img").offset().top -49
			}, 1000);
		});
		$('.nav-bar ul li a').click(function(e) {
			e.preventDefault();
			if($(this).attr('class') == 'loginx'){
				history.replaceState(null, null, window.location.href+"?page=login");
				$(".signupx").hide();
				$(".login").show();
				$(".alphab").addClass('plus');
			}
			else if($(this).attr('class') == 'active'){
				$(".signupx").show();
				$(".login").hide();
				$(".alphaa").addClass('plus');
			}else{
				$('html, body').stop().animate({
					scrollTop: $($(this).attr('href')).offset().top - 49
				}, 1000);
			}
	    });
	};
	scrollToClass();

	$(".btn_get_start").click(function(){
		$(".signupx").show();
		$(".alphaa").addClass('plus');
	})
	$(".btn_last_box").click(function(){
		$(".signupx").show();
		$(".alphaa").addClass('plus');
	});
    $(".iconflag.vietnam").click(function(){
	window.location.href='layout-vn.html';
	})
	$(".chuyenhinh1").click(function(){
		$(".imagesize.image1").css('display', 'block');
		$(".imagesize.image2").css('display', 'none');
		$(".imagesize.image3").css('display', 'none');
	})
	$(".chuyenhinh2").click(function(){
		$(".imagesize.image2").css('display', 'block');
		$(".imagesize.image1").css('display', 'none');
		$(".imagesize.image3").css('display', 'none');
		console.log('ahihi'); 
	})
	$(".chuyenhinh3").click(function(){
		$(".imagesize.image3").css('display', 'block');
		$(".imagesize.image2").css('display', 'none');
		$(".imagesize.image1").css('display', 'none');
	})
	$(".iconflag.english").click(function(){
		window.location.href='layout-eng.html';
	})
	// var images_arr = ["Summary","Task","Gantt","Document","Source Code","Release Version","Testcase","Change Log","Cost","Performance","Post API","Chat","Logtime","Project Setting","Callendar","Todo","Meeting","Report","Estate","Case Study","Recruitment","Announcement","Request & Resolution","Check In","Leaving","Survey","KPI","Contact List","Accounting","Contract","Salary","Prepayment","Over Time","Bonus","Role & Permisison","Device Management","Level & Department","Profit","Email","IP Accsee Control","Scrum"];
	// for( var i = 0; i < 41; i++){
	// 		var pos = -i*108;
	// 		var el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 		var temp = $("<a href='#' target='_blank'></a>").append(el);
	// 		var inl = $("<div class='inline'></div>").append(temp);
	// 		if(i<6)
	// 			$(".append0").append(inl);
	// 		else if(i < 12)
	// 			$(".append1").append(inl);
	// 		else if(i < 18)
	// 			$(".append2").append(inl);
	// 		else if(i < 24)
	// 			$(".append3").append(inl);
	// 		else if(i < 30)
	// 			$(".append4").append(inl);
	// 		else if(i < 36){
	// 			if(i==30){
	// 				pos = -35*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[30]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==31){
	// 				pos = -36*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==32){
	// 				pos = -37*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==33){
	// 				pos = -38*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==34){
	// 				pos = -39*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==35){
	// 				pos = -40*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			$(".append5").append(inl);}
	// 		else if(i < 41){
	// 			if(i==36){
	// 				pos = -30*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==37){
	// 				pos = -31*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==38){
	// 				pos = -32*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==39){
	// 				pos = -33*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			if(i==40){
	// 				pos = -34*108;
	// 				el = $("<div class='home-icon1'><p>"+images_arr[i]+"</p></div>").css({"background-position-x":+pos+"px"});
	// 				temp = $("<a href='#' target='_blank'></a>").append(el);
	// 				inl = $("<div class='inline'></div>").append(temp);
	// 			}
	// 			$(".append6").append(inl);}
	// 	}

	$('.inline').click(function(e){
		e.stopPropagation();
		$(".inline a").attr("href", "./expandPage.html?page="+$(this).text());
		sessionStorage.setItem("rememberMe", $(this).text());
	});
	
	// var change_feature_content = function(){
	// 	var content_above = [{"title":"Manage your entire project visually","nd1":"With the Summary feature, your whole project will be displayed centrally. Easilly capture project progress with start time, end time and percentage of completion. Put a description of this feature here, can show many different lines to be empty.","nd2":"Put a description of this feature here, can show many different lines to be empty.","img":"./img/Group 24.png"},{"title":"Manage consistent timetable","nd1":"With the Summary feature, your whole project will be displayed centrally. Easilly capture project progress with start time, end time and percentage of completion. Put a description of this feature here, can show many different lines to be empty.","nd2":"Put a description of this feature here, can show many different lines to be empty.","img":"./img/Group 24 Copy 2.jpg"}];
	// 	var content_below = [{"title":"Manage consistent timetable","nd1":"With the Summary feature, your whole project will be displayed centrally. Easilly capture project progress with start time, end time and percentage of completion. Put a description of this feature here, can show many different lines to be empty.","nd2":"Put a description of this feature here, can show many different lines to be empty.","img":"./img/Group 24 Copy.jpg"},{"title":"Manage your entire project visually","nd1":"With the Summary feature, your whole project will be displayed centrally. Easilly capture project progress with start time, end time and percentage of completion. Put a description of this feature here, can show many different lines to be empty.","nd2":"Put a description of this feature here, can show many different lines to be empty.","img":"./img/Group 24 Copy.png"}];
	// 	var i = 0; var j = 0;
	// 	setInterval(fadeContent, 5000);
	// 	function fadeContent(){
	// 		i++;
	// 	    i = (i < content_above.length ? i : 0);
	// 	    $('.page-thirdth-content').find("img").fadeOut(300, ()=>{
	// 			$(".page-thirdth-content").children("img").first().attr('src', content_above[i].img).fadeIn(300);
	// 			$(".page-thirdth-content").children("img").eq(1).attr('src', content_below[i].img).fadeIn(300);
	// 			$(".tagt").addClass('tagt');
	// 	    	$(".tagb").addClass('tagb');
	// 	    	$(".page-thirdth-content").find("h2").first().text(content_above[i].title).fadeIn(3000);
	// 	    	$(".page-thirdth-content").find("p").first().text(content_above[i].nd1).fadeIn(3000);
	// 	    	$(".page-thirdth-content").find("p").eq(1).text(content_above[i].nd2).fadeIn(3000);
	// 	    	$(".page-thirdth-content").find("h2").eq(1).text(content_below[i].title).fadeIn(3000);
	// 	    	$(".page-thirdth-content").find("p").eq(2).text(content_below[i].nd1).fadeIn(3000);
	// 	    	$(".page-thirdth-content").find("p").eq(3).text(content_below[i].nd2).fadeIn(3000);
	// 		});
	// 	};
	// }

	// change_feature_content();

	/**//**/

	var sum=0,x=0,y=0,z=0;			
	var calc1 = function(){
		$("#user").keyup(function(){
			if($("#user").val()!=""){
				x = $("#user").val()*5;
				$("#s1").val("$"+x);
				sum=x+y+z;
				$("#sum").val("$"+sum);
			}else{
				$("#s1").val("");
				if($("#user").val()=='' && $("#muted_user").val()=='' && $("#gb_storage").val()==''){
					$("#sum").val('');
				}else{
					x = $("#user").val()*5;
					sum=x+y+z;
					$("#sum").val("$"+sum);
				}
			}
		
		});
	}
	calc1();
	var calc2 = function(){
		$("#muted_user").keyup(function(){
			if($('#muted_user').val()!=""){
					y = $('#muted_user').val()/2;
					$("#s2").val("$"+y);
					sum=x+y+z;
					$("#sum").val("$"+sum);
				}else{
					$("#s2").val("");
					if($("#user").val()=='' && $("#muted_user").val()=='' && $("#gb_storage").val()==''){
						$("#sum").val('');
					}else{
						y = $('#muted_user').val()/2;
						sum=x+y+z;
						$("#sum").val("$"+sum);
					}
			}
		});
	}
	calc2();
	var calc3 = function(){
		$("#gb_storage").keyup(function(){
			if($('#gb_storage').val()!=""){
				z = Math.floor($('#gb_storage').val()/30)*10+$('#gb_storage').val()%30;
				$("#s3").val("$"+z);
				sum=x+y+z;
				$("#sum").val("$"+sum);
			}else{
				$("#s3").val("");
				if($("#user").val()=='' && $("#muted_user").val()=='' && $("#gb_storage").val()==''){
					$("#sum").val('');
				}else{
					z = Math.floor($('#gb_storage').val()/30)*10+$('#gb_storage').val()%30;
					sum=x+y+z;
					$("#sum").val("$"+sum);
				}
			}
		});
	}
	calc3();


	$("#frame2").hide();
	$("#btn_gcp").css("color","#009DF7");
	$("#btn_gcp").css("border-color","#009DF7");
	$("#btn_gcp").css("opacity","1");
	$("#btn_ysp").click(function(){
		$(this).css("color","#009DF7");
		$(this).css("border-color","#009DF7");
		$(this).css("opacity","1");
		$("#btn_gcp").css("opacity","0.5");
		$("#btn_gcp").css("color","#000");
		$("#btn_gcp").css("border-color","#000");
		$("#frame").hide();
		$("#frame2").show();
		$('.calculation_box').hide();
		$('.page_5').css('min-height','635px');
	});
	$("#btn_gcp").click(function(){
		$(this).css("color","#009DF7");
		$(this).css("border-color","#009DF7");
		$(this).css("opacity","1");
		$("#btn_ysp").css("opacity","0.5");
		$("#btn_ysp").css("color","#000");
		$("#btn_ysp").css("border-color","#000");
		$("#frame").show();
		$("#frame2").hide();
		$('.calculation_box').show();
		// $('.page_5').css('min-height','960px');
	});

	$(".languages p").click(function(e){
		e.stopPropagation();
		$(".languages p").removeClass("english");
		$(this).addClass("english");
	});

	$('.input-search input').focusin(function(){
		$(this).css('border','solid lightgrey 1px');
	});
	$('.input-search input').focusout(function(){
		$(this).css('border','solid grey 1px');
	});

	$('#btn_cancel-login').click(function(e){
		e.stopPropagation();
		var uRl = window.location.href;
		history.replaceState(null,null, uRl.split('?page=login')[0]);
		$('.login').hide();
		$(".alphab").removeClass('plus');
		$('#email-login').removeClass('error');
	    $('#email-login').addClass('text_input');
	    $('#password-login').removeClass('error1');
	    $('#password-login').addClass('text_input');
	    $('.login p').html('');

	});

	$('#btn_cancel-signup').click(function(e){
		e.stopPropagation();
		$('.signupx').hide();
		$(".alphaa").removeClass('plus');
	});


	$('#btn_cancel_reset').click(function(e){
		e.stopPropagation();
		$('.reset_form').hide();
		$(".alphac").removeClass('plus');
		$(".alphab").removeClass('plus');
	});

	$('.name_form span img').click(function(e){
		e.stopPropagation();
		var uRl = window.location.href;
		history.replaceState(null,null, uRl.split('?page=login')[0]);
		$('.login').hide();
		$('.signupx').hide();
		$(".alphaa").removeClass('plus');
		$(".alphab").removeClass('plus');
		$('#email-login').removeClass('error');
        $('#email-login').addClass('text_input');
        $('#password-login').removeClass('error1');
        $('#password-login').addClass('text_input');
        $('.login p').html('');
	});

	$('.reset span img').click(function(e){
		e.stopPropagation();
		$('.login').hide();
		$('.signupx').hide();
		$('.reset_form').hide();
		$(".alphaa").removeClass('plus');
		$(".alphab").removeClass('plus');
		$(".alphac").removeClass('plus');
	});

	$(".text_signup a").click(function(e){
		e.stopPropagation();
		history.replaceState(null,null, window.location.href+"?page=login");
		$('.signupx').hide();
		$(".alphaa").removeClass('plus');
		$('.alphab').addClass('plus');
		$('.login').show();
	});


	$("input").prop('required',true);
	$("#remme").prop('required',false);

	$('.calc_popup').click(function(){
		$('.calc_popup').removeClass('plus');
		$('.calc_popup').css({'display':'none','align-items': 'center'});
	});

	$('.circle_question').click(function(){
		$('.calc_popup').addClass('plus');
		$('.calc_popup').css({'display':'flex','align-items': 'center'});
	});

	$('.calculation_box').click(function(e){
		e.stopPropagation();
	});

	$(".dropbtn").click(function(){
		$(".dropdown-content").toggle();

	})

	$(".radio_btn").attr("checked", false);
	$(".text_content").click(function(){
		var x=$(this).text();
		$(".dropbtn").text(x);
		switch(x){
			case '5 users': $(".circle_svr").text("$100");break;
			case '10 users': $(".circle_svr").text("$500");break;
			case '25 users': $(".circle_svr").text("$1,000");break;
			case '50 users': $(".circle_svr").text("$2,000");break;
			case '100 users': $(".circle_svr").text("$4,000");break;
			case '250 users': $(".circle_svr").text("$8,000");break;
			case '500 users': $(".circle_svr").text("$15,000");break;
			case '2,000 users': $(".circle_svr").text("$24,000");break;
			case '5,000 users': $(".circle_svr").text("$32,000");break;
			case '10,000 users': $(".circle_svr").text("$40,000");break;
			case '15,000 users': $(".circle_svr").text("$48,000");break;
			case '20,000 users': $(".circle_svr").text("$56,000");break;
			case '50,000 users': $(".circle_svr").text("$64,000");break;
			case '100,000 users': $(".circle_svr").text("$72,000");break;
		}

		$(".dropdown-content").hide();
	});

	$('.createnew a').click(function(){
		var uRl = window.location.href;
		history.replaceState(null,null, uRl.split('?page=login')[0]);
		$('.login').hide();
		$(".alphab").removeClass('plus');
		$(".alphaa").addClass('plus');
		$('.signupx').show();
	});

	

	$('.arr-left').mouseenter(function(){
		$(this).addClass('arr-left-hover');
	});

	$('.arr-left').mouseleave(function(){
		$(this).removeClass('arr-left-hover');
	});

	$('.arr-right').mouseenter(function(){
		$(this).addClass('arr-right-hover');
	});

	$('.arr-right').mouseleave(function(){
		$(this).removeClass('arr-right-hover');
	});

	var array = [224.5,1124.5,2024.5,2924.5,3824.5];
	var run=0;

	$('.arr-left').click(function(){
		if(run>0){
			run--;
			$('.page-two-content').stop().animate({
				scrollLeft: array[run] - 224.5
			}, 1000);
		}
	});
	$('.arr-right').click(function(){
		if(run<array.length-1){
			run++;
			$('.page-two-content').stop().animate({
				scrollLeft: array[run] - 224.5
			}, 1000); 
		}
	});

	$("#a1,#a2,#a3").hide();
	$("#tu1,#tu2,#tu3").hide();
	$("#td1").click(function(){
		$("#a1").show();
		$("#td1").hide();
		$("#tu1").show();
	})

	$("#tu1").click(function(){
		$("#a1").hide();
		$("#td1").show();
		$("#tu1").hide();
	})

	$("#td2").click(function(){
		$("#a2").show();
		$("#td2").hide();
		$("#tu2").show();
	})

	$("#tu2").click(function(){
		$("#a2").hide();
		$("#td2").show();
		$("#tu2").hide();
	})

	$("#td3").click(function(){
		$("#a3").show();
		$("#td3").hide();
		$("#tu3").show();
	})

	$("#tu3").click(function(){
		$("#a3").hide();
		$("#td3").show();
		$("#tu3").hide();
	})

	$(".text_box_sub").focusin(function(e){
		e.stopPropagation();
		$(this).addClass("text_box_sub_1");
		$(".text_box_sub_1").removeClass("text_box_sub");
	})

	$(".text_box_sub").focusout(function(e){
		e.stopPropagation();
		if($(this).val()==""){
			$(this).addClass("text_box_sub");
			$(".text_box_sub").removeClass("text_box_sub_1");
		}
	})
});
