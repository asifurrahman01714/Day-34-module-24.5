 const submit = document.getElementById('submit');
        submit.addEventListener('click', function () {
            const cityName = document.getElementById('cityName');

            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value +
                    "&appid=d28d3705bf3d0301c84f7905b7e79908")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data.name);
                    console.log(data.main.temp);
                    const cityName = document.getElementById('locationName');
                    cityName.innerText = data.name;

                    const fahrenheit = data.main.temp;
                    const celcius = fahrenheit - 273;
                    const temperature = document.getElementById('temperature');
                    temperature.innerText = celcius.toFixed(2);


                    const weatherCloud = data.weather[0].main;
                    document.getElementById("cloud").innerText = weatherCloud;
                    
                    const iconCode = data.weather[0].icon;
                    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                    const cloudImage = document.getElementById("cloudImage");
                    cloudImage.src = iconUrl;

                    const timeZone = `Timezone: GMT ${data.timezone / 3600 +3}:00  `;
                    // const timeZone = new Date((data.sys.sunrise + data.timezone) * 1000);
                    console.log(timeZone);
                })
        })