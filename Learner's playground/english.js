var num_clicks = 1


async function read_file() {

    var index = 0


    let response = await fetch('antonyms.txt');
    let data = await response.text();
    let data_arr = data.split("~")
    generate_equation(data_arr, num_clicks)

}


async function generate_equation(arr_data, numberofClicks) {

    if (numberofClicks > 0) {

        if (numberofClicks < arr_data.length) {
            days_data = arr_data[numberofClicks - 1]
            lst_data = days_data.split("|")

            var str = '<div style="position:absolute;bottom: 0;right: 0;"><a href="#" class="previous" id="prev">&laquo; Previous</a> <a href="#" class="next" id="next">Next &raquo;</a> </div>' +
                '<h1 class="head" style="text-align:center;border-bottom:10px double black;color:black;font-size:30px"> <span class="multicolortext"> Antonyms (Day-' + numberofClicks + ') </span>' + '</h1>' + '<div style=" height:70%;font-size:90px;align:center;margin-left: auto; margin-right: auto;">'

            lst_data.forEach(function (slide) {
                ele = slide.split("-")
                str += `<div class="letters"   >` + ele[0] + '</div>' + `<div class="letters"  >` + ele[1] + '</div>';
                    
          
            });

            str += '</div>';



           

            document.getElementById("slideContainer").innerHTML = str;
            next.addEventListener("click", function () {
                const audio = document.getElementById("myAudio");
          
                numberofClicks = numberofClicks + 1
                generate_equation(arr_data, numberofClicks)
            });

            prev.addEventListener("click", function () {
                numberofClicks = numberofClicks - 1
                generate_equation(arr_data, numberofClicks)
            });

        }
        else {

            numberofClicks = arr_data.length

        }


    }

    else {
        numberofClicks = 1

    }
}






function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

read_file()






