//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
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
var timeOnMessage=5; messageOk="Respuesta correcta"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW50ZWdyYWw="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen","Responde verdadero o falso segun la imagen"];
var answers1=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers2=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers3=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers4=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers5=["MXZlcmRhZGVybw==","MGZhbHNv"];
var answers6=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers7=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers8=["MWZhbHNv","MHZlcmRhZGVybw=="];
var answers9=["MXZlcmRhZGVybw==","MGZhbHNv"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9];
var err=["intenta de nuevo","","","","","","","",""];
var ima=["1.PNG","2.PNG","3.PNG","4.PNG","5.PNG","6.PNG","7.PNG","8.PNG","9.PNG"];
var mp4=["","","","","","","","",""];
var ogv=["","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="integral_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
