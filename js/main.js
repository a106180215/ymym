
var inline = document.getElementsByClassName('inline');
		var block =  document.getElementsByClassName('block');
		var butt = document.getElementById("butt");
		var butts = document.getElementById("butts");
			

			butt.onclick = function() {
				for (var i = 0; i < block.length; i++) {
					block[i].style.display="inline";
				}
			}
	     	butts.onclick = function() {
			for (var i = 0; i < block.length; i++) {
				block[i].style.display = "block";
			}
		}