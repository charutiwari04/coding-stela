var formHTML = '<form><b>Inquiry Form</b><input type="text" placeholder="Name" required></br></br><input type="email" placeholder="Email" required></br></br><input type="tel" placeholder="Phone number"></br></br><input id="submit-btn" type="button" value="SUBMIT"></form>';
$('#inquiry').click(function(){
	$('.mid-side-2').html(formHTML);
});
$('.mid-side-2').on('click', '#submit-btn',function(e){
	$('.mid-side-2').html("<span id='thank'>Thank You!</span>");
});
