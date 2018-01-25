(function() {
	function hashtag(text){
	    var repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
	    return repl;
	}
	
	var buttons = document.getElementsByClassName("follow-btn");
	var descriptions = document.getElementsByClassName("profile-description");

	for(var i =0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function( event ) {
			event.preventDefault();
			console.log(event.currentTarget);
			event.currentTarget.classList.add("clicked");
			event.currentTarget.innerHTML = "Following";
		}, false);
	}

	for(var i = 0; i < descriptions.length; i++) {
		descriptions[i].innerHTML = hashtag(descriptions[i].innerHTML);
	}
   
})();