
	function updateTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const seconds = now.getSeconds().toString().padStart(2, '0');
		const timeString = `${hours}:${minutes}:${seconds}`;
		const clockText = document.getElementById('LiveClock').getAttribute('text');

    console.log("==clock tick==");
		document.getElementById('LiveClock').setAttribute('value', timeString);
		//document.getElementById('LiveClock').flushToDom(true);
		return false;
	}

document.addEventListener("DOMContentLoaded", function(e){
  //runs code after DOM load
  // Initial call
	updateTime();
	// Update time every second
	setInterval(updateTime, 1000);
});

	