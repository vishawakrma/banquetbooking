
		function alter_box(id){
			var id_num = parseInt(id.split('')[1]);
			var key = event.keyCode || event.charCode;
			if (key === 8 || key === 46) {
		        if(id_num != 1){
		        	var prev = 'o'+(id_num-1).toString();
		        	console.log(id_num, prev);
		        	document.getElementById(prev).focus();
		        }
		    }else{
		    	var id_num = parseInt(id.split('')[1]);
				if(id_num!=6){
					var next = 'o'+(id_num+1).toString();
					document.getElementById(next).focus();
				}
		    }
		}

		function verifyOTP(){
			var o1=document.getElementById('o1').value;
			var o2=document.getElementById('o2').value;
			var o3=document.getElementById('o3').value;
			var o4=document.getElementById('o4').value;
			var o5=document.getElementById('o5').value;
			var o6=document.getElementById('o6').value;

			var alert_box = document.getElementById('alert_box');
			if(o1!="" && o2!="" && o3!="" && o4!="" && o5!="" && o5!=""){
				var otp = parseInt(o1+o2+o3+o4+o5+o6);
				alert_box.style.display = 'none';
				alert(otp);
			}else{
				alert_box.style.display = 'block';
			}
		}
