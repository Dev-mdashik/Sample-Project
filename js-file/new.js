// function app(value)
// {
//    var dropdown = document.getElementById('cricket');
//     if(value=="1")
//     {
//         alert("You Selected :" +value);
//     }
//     else if(value=="b")
//     {
//         alert("SA");
//     }
//     else if(value=="3")
//     {
//         alert("IND");
//     }
//     // else if(cricket!=="")
//     // {
//     //     alert("good");
//     // }
//      document.getElementById("result").innerHTML = value;

// }

// function validation()
// {
//    alert("test");
//    var slt = document.getElementById("teams").value;
//    if(slt=="")
//    {
//     alert("Select Teams");
//    document.getElementById("team_err").style.display="block";
//    }
//    else if(slt!=="") {
//     document.getElementById("team_err").style.display="none";
//    }

// }
import fetch from "node-fetch";

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((countries) => showInfo(countries));

function showInfo(countries) {
  for (let country of countries) {
    console.log(country.name.official);
  }
}
