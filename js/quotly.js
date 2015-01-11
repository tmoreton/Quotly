// var fs = require('fs');
// var csvFile = fs.readFileSync("quotes.csv","utf8");
// var quote_array = csvParse(csvFile)
// console.log(quote_array);

// function csvParse(csvFile){
//     var arrayOfObjects = [];
//     var arr = csvFile.split("\n");
//     var newObj;
//     keys = arr.shift().split(",");
//     arr.forEach(function(contact){
//         contact = contact.split(",");
//         newObj = {};
//         for(var i =0; i < contact.length; i++){
//             newObj[keys[i]] = contact[i];
//         }
//         arrayOfObjects.push(newObj);
//     })
//     return arrayOfObjects;
// }

function csvParse(csvFile){
  var quote_array = csvFile.split('\n');
  return quote_array;
}

var quotes = [
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.  -Helen Keller", 
"Perfection is not attainable, but if we chase perfection we can catch excellence.  -Vince Lombardi", 
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.  -Jimmy Dean",
"Nothing is impossible, the word itself says 'I'm possible'!  -Audrey Hepburn",
"The measure of who we are is what we do with what we have.  -Vince Lombardi",
"Put your heart, mind, and soul into even your smallest acts. This is the secret of success.  -Swami Sivananda",
"Try to be a rainbow in someone's cloud.  -Maya Angelou",
"We know what we are, but know not what we may be.  -William Shakespeare",
"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.  -John F. Kennedy",
"Change your thoughts and you change your world.  -Norman Vincent Peale",
"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.  -Francis of Assisi",
"It is during our darkest moments that we must focus to see the light.  -Aristotle Onassis",
"Out of difficulties grow miracles.  -Jean de la Bruyere",
"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.  -Buddha",
"Believe you can and you're halfway there.  -Theodore Roosevelt",
"We can't help everyone, but everyone can help someone.  -Ronald Reagan",
"Your big opportunity may be right where you are now.  -Napoleon Hill",
"Whoever is happy will make others happy too.  -Anne Frank",
"When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.  -Wilma Rudolph",
]

var fonts = [
"'Dosis', sans-serif",
"'Crafty Girls', cursive",
"'Cabin', sans-serif",
"'Poiret One', cursive",
"'Quicksand', sans-serif",
"'Josefin Sans', sans-serif",
"'Lobster', cursive",
"'Waiting for the Sunrise', cursive",
"'Shadows Into Light', cursive",
"'Gloria Hallelujah', cursive",
"'Pacifico', cursive",
"'Jura', sans-serif",
"'Amatic SC', cursive",
"'Special Elite', cursive",
"'Dancing Script', cursive",
"'Courgette', cursive",
"'Shadows Into Light Two', cursive",
"'Play', sans-serif",
"'Open Sans', sans-serif",
"'Open Sans Condensed', sans-serif",
"'Cookie', cursive",
"'Alegreya', serif",
"'Pinyon Script', cursive",
"'Bangers', cursive",
"'Raleway', sans-serif",
"'Slabo 27px', serif",
"'Playball', cursive",
"'Kaushan Script', cursive",
]

// <!--Digital clock and date function -->
tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var used_quotes= ["I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'  -Muhammad Ali"];

function GetClock(){
  var d = new Date();
  var nday = d.getDay(),
  nmonth = d.getMonth(),
  ndate = d.getDate(),
  nyear = d.getYear(),
  nhour = d.getHours(),
  nmin = d.getMinutes(),
  nsec = d.getSeconds(),
  ap;

  if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}

  if(nyear<1000) nyear+=1900;
  if(nmin<=9) nmin="0"+nmin;

  document.getElementById('clockbox').innerHTML=""+tday[nday]+",  "+tmonth[nmonth]+"  "+ndate+",  "+nyear+"  "+nhour+":"+nmin+ap+"";

  if ((nhour === 9) && (nmin === 44) && (nsec === 0) && (ap === " AM")) {
      var random_color = '#'+Math.floor(Math.random()*16777215).toString(16);
      var random_num = Math.floor(Math.random()*quotes.length);
      var random_quote = quotes[random_num];
      used_quotes.push(quotes.pop(quotes[random_num]));
      var random_font = fonts[Math.floor(Math.random()*fonts.length)];
      $('body').css('background-color', random_color); 
      $('h1,p,#clockbox,h2,h3,#quote').css('font-family', random_font);
      document.getElementById('quote').innerHTML = random_quote;
      //$('h2').html("<h2>" + random_quote + "</h2>");
  }
}

window.onload=function(){
  GetClock();
  setInterval(GetClock,1000);
}
console.log(used_quotes)
$(document).ready(function () {  
    $(".btn").click(function() {
      var random_color = '#'+Math.floor(Math.random()*16777215).toString(16);
      var random_num = Math.floor(Math.random()*quotes.length);
      var random_quote = quotes[random_num];
      used_quotes.push(quotes.pop(quotes[random_num]));
      var temp_quote = used_quotes[-1];
      var random_font = fonts[Math.floor(Math.random()*fonts.length)];
      $('body').css('background-color', random_color); 
      $('h1,p,#clockbox,h2,h3').css('font-family', random_font);
      //$('h2').html("<h2>" + temp_quote + "</h2>");
      document.getElementById('quote').innerHTML = random_quote;
    });
});