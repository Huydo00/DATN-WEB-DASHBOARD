var firebaseConfig = {
apiKey: "AIzaSyAn0rRvInY8z2XsOMulwNpv9ckU-OKB2CY",
authDomain: "smh-iot-2e746.firebaseapp.com",
databaseURL: "https://smh-iot-2e746-default-rtdb.firebaseio.com",
projectId: "smh-iot-2e746",
storageBucket: "smh-iot-2e746.appspot.com",
messagingSenderId: "639089713442",
appId: "1:639089713442:web:72bc80c666315b0e49057b",
measurementId: "G-GJYH1F0S3D"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//SLIDER PUMP
// var sliderpump = document.getElementById("slider-water");
// sliderpump.oninput = function(){
//     var firebaseRef = firebase.database().ref().child("/IOT/pumpwater");
//     firebaseRef.set(sliderpump.value);     
// }
// //Status PUMP
// database.ref("/IOT/pumpwater").on("value", function(snap){      
//     sliderpump.value = snap.val();
// });

//X1

//#############################   ORDER TEST CF SỮA      #############################
var OTEST1 = 1;
var onbt1 = document.getElementById("otest"+ OTEST1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        CFSUADASTART : 1
})}
var CANCELTEST1 = 1;
var onbt1 = document.getElementById("cancel"+ CANCELTEST1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        CFSUADASTART : 0
})}

//#############################   ORDER TEST BAC XIU     #############################
var OTEST2 = 2;
var onbt1 = document.getElementById("otest"+ OTEST2);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/bacxiuDA").update({
        CFSUADASTART : 1
})}
var CANCELTEST2 = 2;
var onbt1 = document.getElementById("cancel"+ CANCELTEST2);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/bacxiuDA").update({
        CFSUADASTART : 0
})}

//#############################   ORDER TEST DEN DA     #############################
var OTEST3 = 3;
var onbt1 = document.getElementById("otest"+ OTEST3);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/cfdendaDA").update({
        CFSUADASTART : 1
})}
var CANCELTEST3 = 3;
var onbt1 = document.getElementById("cancel"+ CANCELTEST3);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/cfdendaDA").update({
        CFSUADASTART : 0
})}

//#############################   ORDER TEST DEN KO DA    #############################
var OTEST4 = 4;
var onbt1 = document.getElementById("otest"+ OTEST4);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/cfdenkodaDA").update({
        CFSUADASTART : 1
})}
var CANCELTEST4 = 4;
var onbt1 = document.getElementById("cancel"+ CANCELTEST4);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/cfdenkodaDA").update({
        CFSUADASTART : 0
})}





// var Y2 = 2;
// var onbt1 = document.getElementById("act"+ Y2);
// onbt1.onclick = function(){
//     database.ref("/MACHINEROBOT").update({
//         nl1 : 1
//     });
// }
// var offbt1 = document.getElementById("unact"+ Y2);
// offbt1.onclick = function(){
//     database.ref("/MACHINEROBOT/CFSUADA").update({
//         nl1 : 0
//     });
// }

//#############################     CF SỮA      #############################
var A1 = 1;
var onbt1 = document.getElementById("btcfsuaNL"+ A1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        nl1 : Number((document.getElementById("inputcfsuaNL" + A1)).value)
})}

var A2 = 2;
var onbt2 = document.getElementById("btcfsuaNL"+ A2);
onbt2.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        nl2 : Number((document.getElementById("inputcfsuaNL" + A2)).value)
})}

var A3 = 3;
var onbt3 = document.getElementById("btcfsuaNL"+ A3);
onbt3.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        nl3 : Number((document.getElementById("inputcfsuaNL" + A3)).value)
})}

var A4 = 4;
var onbt4 = document.getElementById("btcfsuaNL"+ A4);
onbt4.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        nl4 : Number((document.getElementById("inputcfsuaNL" + A4)).value)
})}

database.ref("/MACHINEROBOT/CFSUADA/nl1").on("value", function(snapshot){
    var X1 = snapshot.val();
    document.getElementById("cfsuaNL1").innerHTML = X1;
})
database.ref("/MACHINEROBOT/CFSUADA/nl2").on("value", function(snapshot){
    var X2 = snapshot.val();
    document.getElementById("cfsuaNL2").innerHTML = X2;
})
database.ref("/MACHINEROBOT/CFSUADA/nl3").on("value", function(snapshot){
    var X3 = snapshot.val();
    document.getElementById("cfsuaNL3").innerHTML = X3;
})
database.ref("/MACHINEROBOT/CFSUADA/nl4").on("value", function(snapshot){
    var X4 = snapshot.val();
    document.getElementById("cfsuaNL4").innerHTML = X4;
})

//#############################     BAC XIU DA      #############################
var FCbacxiu1 = 1;
var onbt1 = document.getElementById("btbacxiuNL"+ FCbacxiu1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/bacxiuDA").update({
        nl1 : Number((document.getElementById("inputbacxiuNL" + FCbacxiu1)).value)
})}

var FCbacxiu2 = 2;
var onbt2 = document.getElementById("btbacxiuNL"+ FCbacxiu2);
onbt2.onclick = function(){
    database.ref("/MACHINEROBOT/bacxiuDA").update({
        nl2 : Number((document.getElementById("inputbacxiuNL" + FCbacxiu2)).value)
})}

var FCbacxiu3 = 3;
var onbt3 = document.getElementById("btbacxiuNL"+ FCbacxiu3);
onbt3.onclick = function(){
    database.ref("/MACHINEROBOT/bacxiuDA").update({
        nl3 : Number((document.getElementById("inputbacxiuNL" + FCbacxiu3)).value)
})}

var FCbacxiu4 = 4;
var onbt4 = document.getElementById("btbacxiuNL"+ FCbacxiu4);
onbt4.onclick = function(){
    database.ref("/MACHINEROBOT/bacxiuDA").update({
        nl4 : Number((document.getElementById("inputbacxiuNL" + FCbacxiu4)).value)
})}

database.ref("/MACHINEROBOT/bacxiuDA/nl1").on("value", function(snapshot){
    var FCbacxiuX1 = snapshot.val();
    document.getElementById("bacxiuNL1").innerHTML = FCbacxiuX1;
})
database.ref("/MACHINEROBOT/bacxiuDA/nl2").on("value", function(snapshot){
    var FCbacxiuX2 = snapshot.val();
    document.getElementById("bacxiuNL2").innerHTML = FCbacxiuX2;
})
database.ref("/MACHINEROBOT/bacxiuDA/nl3").on("value", function(snapshot){
    var FCbacxiuX3 = snapshot.val();
    document.getElementById("bacxiuNL3").innerHTML = FCbacxiuX3;
})
database.ref("/MACHINEROBOT/bacxiuDA/nl4").on("value", function(snapshot){
    var FCbacxiuX4 = snapshot.val();
    document.getElementById("bacxiuNL4").innerHTML = FCbacxiuX4;
})

//#############################     CAFE DEN DA     #############################
var FCdenda1 = 1;
var onbt1 = document.getElementById("btcfdendaNL"+ FCdenda1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/cfdendaDA").update({
        nl1 : Number((document.getElementById("inputcfdendaNL" + FCdenda1)).value)
})}

var FCdenda2 = 2;
var onbt2 = document.getElementById("btcfdendaNL"+ FCdenda2);
onbt2.onclick = function(){
    database.ref("/MACHINEROBOT/cfdendaDA").update({
        nl2 : Number((document.getElementById("inputcfdendaNL" + FCdenda2)).value)
})}

var FCdenda3 = 3;
var onbt3 = document.getElementById("btcfdendaNL"+ FCdenda3);
onbt3.onclick = function(){
    database.ref("/MACHINEROBOT/cfdendaDA").update({
        nl3 : Number((document.getElementById("inputcfdendaNL" + FCdenda3)).value)
})}

var FCdenda4 = 4;
var onbt4 = document.getElementById("btcfdendaNL"+ FCdenda4);
onbt4.onclick = function(){
    database.ref("/MACHINEROBOT/cfdendaDA").update({
        nl4 : Number((document.getElementById("inputcfdendaNL" + FCdenda4)).value)
})}

database.ref("/MACHINEROBOT/cfdendaDA/nl1").on("value", function(snapshot){
    var FCdendaX1 = snapshot.val();
    document.getElementById("cfdendaNL1").innerHTML = FCdendaX1;
})
database.ref("/MACHINEROBOT/cfdendaDA/nl2").on("value", function(snapshot){
    var FCdendaX2 = snapshot.val();
    document.getElementById("cfdendaNL2").innerHTML = FCdendaX2;
})
database.ref("/MACHINEROBOT/cfdendaDA/nl3").on("value", function(snapshot){
    var FCdendaX3 = snapshot.val();
    document.getElementById("cfdendaNL3").innerHTML = FCdendaX3;
})
database.ref("/MACHINEROBOT/cfdendaDA/nl4").on("value", function(snapshot){
    var FCdendaX4 = snapshot.val();
    document.getElementById("cfdendaNL4").innerHTML = FCdendaX4;
})

//#############################     CAFE DEN KHONG DA     #############################
var FCdenkoda1 = 1;
var onbt1 = document.getElementById("btcfdenkodaNL"+ FCdenkoda1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/cfdenkodaDA").update({
        nl1 : Number((document.getElementById("inputcfdenkodaNL" + FCdenkoda1)).value)
})}

var FCdenkoda2 = 2;
var onbt2 = document.getElementById("btcfdenkodaNL"+ FCdenkoda2);
onbt2.onclick = function(){
    database.ref("/MACHINEROBOT/cfdenkodaDA").update({
        nl2 : Number((document.getElementById("inputcfdenkodaNL" + FCdenkoda2)).value)
})}

var FCdenkoda3 = 3;
var onbt3 = document.getElementById("btcfdenkodaNL"+ FCdenkoda3);
onbt3.onclick = function(){
    database.ref("/MACHINEROBOT/cfdenkodaDA").update({
        nl3 : Number((document.getElementById("inputcfdenkodaNL" + FCdenkoda3)).value)
})}

var FCdenkoda4 = 4;
var onbt4 = document.getElementById("btcfdenkodaNL"+ FCdenkoda4);
onbt4.onclick = function(){
    database.ref("/MACHINEROBOT/cfdenkodaDA").update({
        nl4 : Number((document.getElementById("inputcfdenkodaNL" + FCdenkoda4)).value)
})}

database.ref("/MACHINEROBOT/cfdenkodaDA/nl1").on("value", function(snapshot){
    var FCdenkodaX1 = snapshot.val();
    document.getElementById("cfdenkodaNL1").innerHTML = FCdenkodaX1;
})
database.ref("/MACHINEROBOT/cfdenkodaDA/nl2").on("value", function(snapshot){
    var FCdenkodaX2 = snapshot.val();
    document.getElementById("cfdenkodaNL2").innerHTML = FCdenkodaX2;
})
database.ref("/MACHINEROBOT/cfdenkodaDA/nl3").on("value", function(snapshot){
    var FCdenkodaX3 = snapshot.val();
    document.getElementById("cfdenkodaNL3").innerHTML = FCdenkodaX3;
})
database.ref("/MACHINEROBOT/cfdenkodaDA/nl4").on("value", function(snapshot){
    var FCdenkodaX4 = snapshot.val();
    document.getElementById("cfdenkodaNL4").innerHTML = FCdenkodaX4;
})
