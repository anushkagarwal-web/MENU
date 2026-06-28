let date,month ,zodiac_sign;
date= parseInt(prompt("Enter your birth date"));
month=prompt("Enter your birth month").toLowerCase();

if(date>=1 && date<=31){
if((month =="April" || month=="June" || month=="September" || month=="November")&& date>30){
    document.write("Invalid date");
}
else if(month == "February" && date > 29){
    document.write("Invalid date ")
}
else{   
if((date>=21 && month=="march")|| (date<=19 && month=="april"))
{
    zodiac_sign="Aries"
}
else if((date>=20 && month=="april")|| (date<=20 && month=="may"))
{
    zodiac_sign="Taurus"
}
else if((date>=21 && month=="may")|| (date<=20 && month=="june"))
{
    zodiac_sign="Gemini"
}
else if((date>=21 && month=="june")|| (date<=22 && month=="july"))
{
    zodiac_sign="Cancer"
}
else if((date>=23 && month=="july")|| (date<=22 && month=="august"))
{
    zodiac_sign="Leo"
}
else if((date>=23 && month=="august")|| (date<=22 && month=="september"))
{
    zodiac_sign="Virgo"
}
else if((date>=23 && month=="september")|| (date<=22 && month=="october"))
{
    zodiac_sign="Libra"
}
else if((date>=23 && month=="october")|| (date<=21 && month=="november"))
{
    zodiac_sign="Scorpio"
}
else if((date>=22 && month=="november")|| (date<=21 && month=="december"))
{
    zodiac_sign="Sagittarius"
}
else if((date>=22 && month=="december")|| (date<=19 && month=="january"))
{
    zodiac_sign="Capricorn"
}
else if((date>=20 && month=="january")|| (date<=18 && month=="february"))
{
    zodiac_sign="Aquarius"
}
else if((date>=19 && month=="february")|| (date<=20 && month=="march"))
{
    zodiac_sign="Pisces"
}
else{
   document.write("Invalid date or month");
}
if(zodiac_sign){
document.write("Zodiac Sign:" +zodiac_sign);
}
}
}
else{
   document.write( "Invalid date");
}