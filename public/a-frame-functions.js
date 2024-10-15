
	function updateTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const seconds = now.getSeconds().toString().padStart(2, '0');
		const timeString = `${hours}:${minutes}:${seconds}`;
		const clockText = document.getElementById('LiveClock').getAttribute('text');

    
		document.getElementById('LiveClock').setAttribute('value', timeString);
		//document.getElementById('LiveClock').flushToDom(true);
    console.log("==real clock tick==");
		return false;
	}

document.addEventListener("DOMContentLoaded", function(){
  //runs code after DOM load
  // Initial call
	updateTime();
	// Update time every second
	setInterval(updateTime, 1000);
});

	
/* ===== ==================== ===== */
/* ===== Session Timer ===== */
/* ===== ==================== ===== */
  var timer = new Timer();
  timer.start();

  timer.addEventListener('secondsUpdated', function () {
    console.log("==timer tick==");
    document.getElementById('SessionTimer').setAttribute('value', timer.getTimeValues().toString());
  });