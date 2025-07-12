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

//#############################   ORDER TEST      #############################
var OTEST1 = 1;
var onbt1 = document.getElementById("otest"+ OTEST1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        START : 1
})}
var CANCELTEST1 = 1;
var onbt1 = document.getElementById("cancel"+ CANCELTEST1);
onbt1.onclick = function(){
    database.ref("/MACHINEROBOT/CFSUADA").update({
        START : 0
})}


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

database.ref("/MACHINEROBOT/CFSUADA/nl1").on("value", function(snapshot){
    var X1 = snapshot.val();
    document.getElementById("cfsuaNL1").innerHTML = X1;
})
database.ref("/MACHINEROBOT/CFSUADA/nl2").on("value", function(snapshot){
    var X1 = snapshot.val();
    document.getElementById("cfsuaNL2").innerHTML = X1;
})