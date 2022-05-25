$( document ).ready(function() {
    console.log( "ready!");
	
	// Change Background Image
	$('#bg').css("background-image", "url('images/bg/"+background_image+".jpg')");
	var logo='', cols = 3; innerHTML='', ButtonColor='#000', ButtonBorderColor='#000', ButtonBorderRadius='10', ButtonTextColor='#FFF', ButtonTextSize='2', PS_Title='', PS_Message='Empty Message', PS_Device='a', PS_Sound='1', PS_Vibration='0', PS_Icon='1', PS_IconColor='', PS_Priority='0', PS_Url='', PS_UrlTitle='', PS_Answer='0', PS_AnswerOption='', PS_Confirm='0';
	
	if(buttons_in_row==12){ cols = 1; }
	if(buttons_in_row==6){ cols = 2; }
	if(buttons_in_row==4){ cols = 3; }
	if(buttons_in_row==3){ cols = 4; }
	if(buttons_in_row==2){ cols = 6; }
	if(buttons_in_row==1){ cols = 12; }
	
	Buttons.forEach(function (m, i) {
		for (preferences in m) {
			if(preferences=='ButtonColor'){
				ButtonColor = m[preferences];
			}
			if(preferences=='ButtonBorderColor'){
				ButtonBorderColor = m[preferences];
			}
			if(preferences=='ButtonBorderRadius'){
				ButtonBorderRadius = m[preferences];
			}
			if(preferences=='ButtonTextColor'){
				ButtonTextColor = m[preferences];
			}
			if(preferences=='ButtonTextSize'){
				ButtonTextSize = m[preferences];
			}
			if(preferences=='PS_Title'){
				PS_Title = m[preferences];
			}
			if(preferences=='PS_Message'){
				PS_Message = m[preferences];
			}
			if(preferences=='PS_Device'){
				PS_Device = m[preferences];
			}
			if(preferences=='PS_Sound'){
				PS_Sound = m[preferences];
			}
			if(preferences=='PS_Vibration'){
				PS_Vibration = m[preferences];
			}
			if(preferences=='PS_Icon'){
				PS_Icon = m[preferences];
			}
			if(preferences=='PS_IconColor'){
				PS_IconColor = m[preferences];
			}
			if(preferences=='PS_Priority'){
				PS_Priority = m[preferences];
			}
			if(preferences=='PS_Url'){
				PS_Url = m[preferences];
			}
			if(preferences=='PS_UrlTitle'){
				PS_UrlTitle = m[preferences];
			}
			if(preferences=='PS_Answer'){
				PS_Answer = m[preferences];
			}
			if(preferences=='PS_AnswerOption'){
				PS_AnswerOption = m[preferences];
			}
			if(preferences=='PS_Confirm'){
				PS_Confirm = m[preferences];
			}
			if(preferences=='ButtomName'){
				innerHTML += "<div onclick=\"send('"+PS_Title+"','"+PS_Message+"','"+PS_Device+"','"+PS_Sound+"','"+PS_Vibration+"','"+PS_Icon+"','"+PS_IconColor+"','"+PS_Priority+"','"+PS_Url+"','"+PS_UrlTitle+"','"+PS_Answer+"','"+PS_AnswerOption+"','"+PS_Confirm+"')\" class=\"btnholder col-"+cols+"\"><button style=\"font-size:"+ButtonTextSize+"rem;color:"+ButtonTextColor+";background-color:"+ButtonColor+"\; border-radius: "+ButtonBorderRadius+"px; border: 1px solid "+ButtonBorderColor+"\" class=\"btn btn-primary btn-block\">" + m[preferences] + "</button></div>";
			}
		}
	});
	logo = "<div id=\"logo\"><img src=\"images/logo.png\"></div>";
	$('#bg').html (logo+innerHTML);
	$('#logo').css("background-color", logo_background_color);
	$('.btn').css("height", buttons_height);
});

function send(title,message,device,sound,vibration,icon,iconcolor,priority,Url,UrlTitle,Answer,AnswerOption,Confirm){
	$.ajax({
	  type: "POST",
	  url: 'https://www.pushsafer.com/api',
	  data:  {
			t: escape(title),
			m: escape(message),
			s: sound,
			v: vibration,
			i: icon,
			c: iconcolor,
			d: device,
			pr: priority,
			a: Answer,
			ao: AnswerOption,
			cr: Confirm,
			u: escape(Url),
			ut: escape(UrlTitle),
			k: private_key
	  }
	}).done(function(data) {
		var obj = jQuery.parseJSON(data);
		if(show_response_json==false) {data='';}
		if(obj.status==1){
			Swal.fire({
			  title: Success,
			  text: data,
			  icon: 'success',
			  confirmButtonText: OK
			})
		} else {
			Swal.fire({
			  title: Error,
			  text: data,
			  icon: 'error',
			  confirmButtonText: OK
			})
		}
	});
	
}