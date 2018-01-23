$(document).ready(function(){
	/**//**//**//*ExpandPage*/

	var youtube_link = function(vari){
		switch(vari){
			case 'Summary':
				return 'https://www.youtube.com/embed/4fndeDfaWCg?autoplay=0';
				break;
			case 'Task':
				return 'https://www.youtube.com/embed/OT5msu-dap8?autoplay=0';
				break;
			case 'Gantt':
				return 'https://www.youtube.com/embed/GZXHBgjQjNM?autoplay=0';
				break;
			case 'Document':
				return 'https://www.youtube.com/embed/UVJ_zysu9Dc?autoplay=0';
				break;
			case 'Source Code':
				return 'https://www.youtube.com/embed/7JJfJgyHYwU?autoplay=0';
				break;
			case 'Release Version':
				return 'https://www.youtube.com/embed/g_s17HMFaug';
				break;
			case 'Testcase':
				return '';
				break;
			case 'Change Log':
				return '';
				break;
			case 'Cost':
				return '';
				break;
			case 'Performance':
				return '';
				break;
			case 'Post API':
				return '';
				break;
			case 'Chat':
				return '';
				break;
			case 'Logtime':
				return '';
				break;
			case 'Project Setting':
				return '';
				break;
			case 'Callendar':
				return '';
				break;
			case 'Todo':
				return '';
				break;
			case 'Meeting':
				return '';
				break;
			case 'Report':
				return '';
				break;
			case 'Estate':
				return '';
				break;
			case 'Case Study':
				return '';
				break;
			case 'Recruitment':
				return '';
				break;
			case 'Announcement':
				return '';
				break;
			case 'Request & Resolution':
				return '';
				break;
			case 'Check In':
				return '';
				break;
			case 'Leaving':
				return '';
				break;
			case 'Salary':
				return '';
				break;
			case 'Prepayment':
				return '';
				break;
			case 'Over Time':
				return '';
				break;
			case 'Bonus':
				return '';
				break;
			case 'Role & Permisison':
				return '';
				break;
			case 'Device Management':
				return '';
				break;
			case 'Level & Department':
				return '';
				break;
			case 'Profit':
				return '';
				break;
			case 'Email':
				return '';
				break;
			case 'IP Accsee Control':
				return '';
				break;
			case 'Scrum':
				return '';
				break;
			default:
				return 0;
				break;
		}
	};

	var images_arr = ["Summary.png","Task.png","Gantt.png","Document.png","Source Code.png","Release Version.png","Testcase.png","Change Log.png","Cost.png","Performance.png","Post API.png","Chat.png","Logtime.png","Project Setting.png","Callendar.png","Todo.png","Meeting.png","Report.png","Estate.png","Case Study.png","Recruitment.png","Announcement.png","Request & Resolution.png","Check In.png","Leaving.png","Survey.png","KPI.png","Contact List.png","Accounting.png","Contract.png","Salary.png","Prepayment.png","Over Time.png","Bonus.png","Role & Permisison.png","Device Management.png","Level & Department.png","Profit.png","Email.png","IP Accsee Control.png","Scrum.png"];
	var bind_option = function(){
		for(var k=0;k<images_arr.length;k++){
			var strIn = images_arr[k];
			var strOut = strIn.split('.');
			$('.ex-content').append("<div class='menu-inline' value='"+strOut[0]+"'><img src='./img/"+images_arr[k]+"'><p>"+images_arr[k]+"</p></div>");
		};
		$('.menu-inline p').contents().filter(function() {
		    return this.nodeType == 3
		}).each(function(){
		    this.textContent = this.textContent.replace('.png','');
		});
	};

	bind_option();

	var check_state = function(){
		var check_hang = sessionStorage.getItem("rememberMe");
		if(!!check_hang){
			for(var i=0;i<images_arr.length;i++){
				var strIn = images_arr[i];
				var strOut = strIn.split('.');
				if($("div.menu-inline[value='"+strOut[0]+"']").text() == check_hang){
					getContent(window.location.href, false);
				}
			}
		}else{
			console.log('sessionStorage not found!!!');
		}
	}
	check_state();
	
	$('.menu-inline').click(function(e){
		e.preventDefault();
		var laText = $(this).text();
		strIn = window.location.href;
		strOut = strIn.split('?');
		var url = strOut[0]+'?page='+laText;
		getContent(url, true);
	});
	
	/**/             
    window.addEventListener("popstate", function(e) {
        getContent(window.location.href, false);
    });
     
    function getContent(url, addEntry) {
    	index = url.indexOf('?page=');
		strOut = decodeURIComponent(url.substr(index+6));
		if(youtube_link(strOut)!=0){
	    	$('.Xvideo').replaceWith("<div class='Xvideo'><iframe width='420' height='315' src='"+youtube_link(strOut)+"' frameborder='0' allowfullscreen></iframe></div>");
	    	$("div.menu-inline").css({'min-height':'40px','margin-top':'5px','cursor': 'pointer','padding': '10px','width': '93%','display': 'flex','align-items': 'center','border-radius': '15px','box-shadow': '0px 0px 10px rgba(0,0,0,0.5)','background-color': 'transparent'});
	    	$("div.menu-inline[value='"+strOut+"']").css({'min-height':'40px','margin-top':'5px','cursor': 'pointer','padding': '10px','width': '93%','display': 'flex','align-items': 'center','border-radius': '15px','box-shadow': '0px 0px 10px rgba(0,0,0,0.5)','background-color': 'lightgrey'});
	        if(addEntry == true) {
	            history.pushState(null, null, url);
		    }
		}else{
			alert('Page Not found!!!');
		}
	}
	/**/

	getContent(window.location.href, false);
});