var IO = require("socket.io-client")

var $ = require("jquery")
window.jQuery = $
var bootstrap = require("bootstrap")
var template=require("./boot.jade")

/*
var io = IO.connect("127.0.0.1:3000")

io.on("connect", function(socket){
    console.log(" io connected")    
     
} )

$( document ).ready (function(){
    $("#triggr1").click(function(){
     console.log("click")
     var temp= $("#bla").html() 
     $("#bla").html ( temp + template({user:{key:"bli", name:"blu", status:"zor"}}))
    })
})  



module.exports= { bla :template}
*/
