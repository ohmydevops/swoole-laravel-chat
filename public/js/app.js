$(document).ready(function(){
    // Declaring Variables.
    var socket_ip = "http://127.0.0.1";
    var socket_port = "1215";
    var socket = io(socket_ip+':'+socket_port, {transports: ['websocket']});

    // Declaring Socket Functions.
    socket.on('connect', function () {
        console.log(socket.id);
    });

    socket.on('disconnect', function () {
        console.log("disconnected");
    });
});