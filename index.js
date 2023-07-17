let city = document.getElementById("city");
 let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let input = document.getElementById("inp") ;
 let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location")
        image.src="https://github.com/SHIV220/Weather-App/blob/main/error1.png?raw=true";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    if(jsonData.cod == 404){
        alert("Please Enter Write Location")
        image.src="error2.png";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Clouds"){
        image.src="https://raw.githubusercontent.com/SHIV220/Weather-App/4bac83ac1aebc6b42a3504d96badb26e818e95d2/cloud.svg"
    }else if(type.innerHTML == "Clear"){
        image.src="https://raw.githubusercontent.com/SHIV220/Weather-App/a8c690c54a239673f6197f3f0adceb6c1f071717/clear.svg"
    }else if(type.innerHTML == "Rain"){
        image.src="https://raw.githubusercontent.com/SHIV220/Weather-App/a8c690c54a239673f6197f3f0adceb6c1f071717/rain.svg"
    }else if(type.innerHTML == "Snow"){
        image.src="https://raw.githubusercontent.com/SHIV220/Weather-App/a8c690c54a239673f6197f3f0adceb6c1f071717/snow.svg"
    }else if(type.innerHTML == "Haze"){
        image.src="https://raw.githubusercontent.com/SHIV220/Weather-App/4bac83ac1aebc6b42a3504d96badb26e818e95d2/haze.svg"
    }else if(type.innerHTML == "Strom"){
        image.src="https://raw.githubusercontent.com/SHIV220/Weather-App/4bac83ac1aebc6b42a3504d96badb26e818e95d2/storm.svg"
    }
    input.value=""
 }

 function myFun(){
    search=input.value;
    data(search)
 }
