	function confirmed() {
 		var _soulmates = document.getElementById("id_1");
		var _magic = document.getElementById("id_2");
		
 		_soulmates.disabled = true; _magic.disabled = true;
		
		$enabledsoulmates = _soulmates.checked;
		$enabledmagic = _magic.checked;
		
		$selected = true;
		
		document.getElementById("debugged").innerHTML = $enabledsoulmates + " " + $enabledmagic;
	}
	
	function confirmed() {
 		var _soulmates = document.getElementById("id_1");
		var _magic = document.getElementById("id_2");
		
		document.getElementById("id_1").checked = $enabledsoulmates;
		document.getElementById("id_2").checked = $enabledmagic;
		
		_soulmates.disabled = true; _magic.disabled = true;
	}
