$(document).ready(function() {

	$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за обратную связь!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});