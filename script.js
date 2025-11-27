var target_mili_sec = new Date("January 12, 2026 11:59:59").getTime();
        function timer(){
            var now_mili_sec = new Date().getTime();
            var difference = target_mili_sec - now_mili_sec;

            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = String(days).padStart(2, '0');
            document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

            if (difference < 0) {
                document.getElementById("title").innerHTML = "<h1>Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n Time's up! \n </h1>";
                document.getElementById("timerDisplay").style.display = "none";
                document.body.style.backgroundColor = "#ff0000ff";
                document.body.style.color = "#000000ff";
            }
        }
        setInterval(timer, 1000);