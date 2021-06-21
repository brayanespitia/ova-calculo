//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comienza";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Correcto"; messageTime=""; messageError="respuesta incorrecta"; messageErrorG="respuesta incorrecta"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW50ZWdyYWwy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1 Si f(x) = 3x2 - 2x. ¿Cuál es su función integral en [2,5]?","2 Sea f(x) = 3x + 1 y g(x) = 2x - 1. ¿Cuál es la integral definida de f(x) - g(x) en [-1,1]?","3 Si una función f(x) permanece por debajo del eje OX en todo el intervalo [a,b], su integral definida en dicho intervalo es:","4 La integral definida entre [0, pi/4] de la función f(x) = tag x es igual a:","5 Sea f(x) = 3x + 1, ¿Cuál es su integral definida en [-1,2]?","6 ¿Qué signo tendrá la integral definida entre [0,1] de la función f(x) = x - 3?","7 Si f(x) = x / (x2 + 1) y F(t) es su función integral en [0,5], ¿Qué vale F(1)?","8 Si F(x) = x2 es una primitiva de f en [-1,1], ¿Qué vale la integral definida de f en [-1,1]","9 La derivada de la integral definida entre [0,x] de la función f(x) = Ln t / t es:","10 La integral definida en el intervalo [0, pi/4] de la función f(x) =x.sen x es igual a:"];
var answers1=["MTk2","MDA=","MC05Ng==","MDY5"];
var answers2=["MS00","MDEvNA==","MDEvMg==","MDA="];
var answers3=["MU5lZ2F0aXZh","ME51bGE=","MFBvc2l0aXZh"];
var answers4=["MS0gTG4oY29zKHBpLzQp","MGNvcyhwaS80KQ==","MExuIChjb3MocGkvNCkp"];
var answers5=["MTE1LzI=","MDcvNA==","MDA=","MDI="];
var answers6=["MU5lZ2F0aXZv","ME51bG8=","MFBvc2l0aXZv"];
var answers7=["MShMbiAyKSAvIDI=","MDA=","MDEvMg==","MExuIDI="];
var answers8=["MTA=","MDQ=","MDI=","MDE="];
var answers9=["MUxuIHggLyB4","MCgxIC0gTG4geCkveDI=","MDEveA=="];
var answers10=["MTIxLzIuKDEgLSBwaS80KQ==","MDA=","MDIxLzIucGkvNA=="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10];
var err=["respuesta incorrecta","","","","","","","","",""];
var ima=["","","","","","","","","",""];
var mp4=["","","","","","","","","",""];
var ogv=["","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="integral2_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
