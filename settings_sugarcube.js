function confirmed() {
		var _soulmates = document.getElementById("id_1");
		var _magic = document.getElementById("id_2");
		
 		
		$enabledsoulmates = _soulmates.checked;
		$enabledmagic = _magic.checked;
		_soulmates.disabled = true; _magic.disabled = true;
	
		$selected = true;
		// document.getElementById("debugged").innerHTML = $enabledsoulmates + " " + $enabledmagic;
	}
	
function reload() {
		var _soulmates = document.getElementById("id_1");
		var _magic = document.getElementById("id_2");
	
		_soulmates.checked = $enabledsoulmates;
		_magic.checked = $enabledmagic;
		_soulmates.disabled = true; _magic.disabled = true;
	}
