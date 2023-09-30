var button = document.querySelector("#submit");
        var video = document.getElementById("myVideo");

        button.addEventListener('click', function () {
            sound();
            document.querySelectorAll("h1")[1].innerHTML = "Hey! You are Hacked <br> Thanks for clicking the link ....";
            document.querySelectorAll("h1")[1].style.fontSize = "8rem" ;
            var count = 0;
            const lst = ["green", "red", "yellow"];

            function changeBackgroundColor() {
                if (count < 200) {
                    var randomnumber = Math.floor(Math.random() * 3);
                    document.body.style.backgroundColor = lst[randomnumber];
                    count++;
                    setTimeout(changeBackgroundColor, 10); 
                } else {
                    
                    document.querySelector("#main").style.display = "none" ;
                    document.body.style.backgroundColor = "#000" ;
                    video.style.display = "block";
                    video.play();
                }
            }

            changeBackgroundColor(); 
        });
    
        function sound(){
            var audio = new Audio("./Hacking Bgm.mp3");
            audio.play();
        }