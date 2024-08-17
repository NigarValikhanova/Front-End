
var month = document.getElementById("month");
var year = document.getElementById("year");


month.addEventListener("change", function () {
    fetch(`https://api.aladhan.com/v1/calendarByCity/2024/${month.value}?city=Baku&country=Azerbaijan&method=2`)
        .then(response => response.json())
        .then(json => {
            var result = '';
            document.querySelector("table tbody").innerHTML = "";
            json.data.forEach(element => {
                console.log(element)
                result += `
                <tr>
                <td>${element.date.gregorian.day}</td>
                <td>${element.date.hijri.date}</td>
                <td>${element.timings.Imsak}</td>
                <td>${element.timings.Fajr}</td>
                <td>${element.timings.Sunrise}</td>
                <td>${element.timings.Dhuhr}</td>
                <td>${element.timings.Asr}</td>
                <td>${element.timings.Sunset}</td>
                <td>${element.timings.Maghrib}</td>
                <td>${element.timings.Isha}</td>
                <td>${element.timings.Midnight}</td>
                </tr>`

            });
            document.querySelector("table tbody").innerHTML = result;
        })
})

//var result = '';
//result += '<tr><th scope="row">1</th><td>Mark</td></tr><tr><th scope="row">2</th><td>Jacob</td></tr>'