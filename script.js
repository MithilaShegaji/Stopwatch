let btn = document.getElementById("start");
let hr = 0, min = 0, sec = 0;
let intervalId;
let isRunning = false;

btn.addEventListener("click", function() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(function() {
            sec++;
            document.getElementById('seconds').innerHTML = (sec < 10 ? "0" + sec : sec) + "<span class='unit'> sec</span>";
            
            if (sec === 60) {
                min++;
                sec = 0;
                document.getElementById('minutes').innerHTML = (min < 10 ? "0" + min : min) + "<span class='unit'> min</span>";
            }
            
            if (min === 60) {
                hr++;
                min = 0;
                document.getElementById('hour').innerHTML = (hr < 10 ? "0" + hr : hr) + "<span class='unit'> hr</span>";
            }
        }, 1000); 
    }
});

// Stop button functionality
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(intervalId);
    isRunning = false;
});

// Pause and Play toggle functionality
document.getElementById("pause").addEventListener("click", function() {
    if (isRunning) {
        // Pause functionality
        clearInterval(intervalId);
        isRunning = false;
        document.getElementById("pause").innerHTML = "Play"; 
    } else {
        // Play functionality
        isRunning = true;
        document.getElementById("pause").innerHTML = "Pause"; 

        // Resume the timer
        intervalId = setInterval(function() {
            sec++;
            document.getElementById('seconds').innerHTML = (sec < 10 ? "0" + sec : sec) + "<span class='unit'> sec</span>";
            
            if (sec === 60) {
                min++;
                sec = 0;
                document.getElementById('minutes').innerHTML = (min < 10 ? "0" + min : min) + "<span class='unit'> min</span>";
            }
            
            if (min === 60) {
                hr++;
                min = 0;
                document.getElementById('hour').innerHTML = (hr < 10 ? "0" + hr : hr) + "<span class='unit'> hr</span>";
            }
        }, 1000); 
    }
});

// Reset button functionality
document.getElementById("reset").addEventListener("click", function() {
    clearInterval(intervalId);
    hr = min = sec = 0;
    isRunning = false;
    document.getElementById('seconds').innerHTML = "00<span class='unit'> sec</span>";
    document.getElementById('minutes').innerHTML = "00<span class='unit'> min</span>";
    document.getElementById('hour').innerHTML = "00<span class='unit'> hr</span>";
    document.getElementById('laps').innerHTML = ""; 
    document.getElementById("pause").innerHTML = "Pause"; 
});

// Lap functionality
document.getElementById("lap").addEventListener("click", function() {
    if (isRunning) {
        const lapTime = `${hr < 10 ? "0" + hr : hr} : ${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.getElementById('laps').appendChild(lapItem);
    }
});
