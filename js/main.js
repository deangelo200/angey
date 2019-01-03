
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
        
   
    function convertMusic() {

        var url = document.getElementById('urlinput').value;
        var apIUrl = "http://muzillamp3.com:8000/convert/"

        $.post({
            url: apIUrl,
            data: {
                url: url
            },
            success: function (response) {
                title = response.title;
                thumbnail = response.thumbnail;
                $('.videoTitle').append(title);
                $('.videoThumbnail').attr("src", thumbnail);

            }
        });

    }




    $(".convertButton").click(function () {

        convertMusic();
    });


 
        

    
}




//$(document).ready(function () {
//
//
//
//
//    function convertMusic() {
//
//        var url = document.getElementById('urlinput').value;
//        var apIUrl = "http://muzillamp3.com:8000/convert/"
//
//        $.post({
//            url: apIUrl,
//            data: {
//                url: url
//            },
//            success: function (response) {
//                title = response.title;
//                thumbnail = response.thumbnail;
//                $('.videoTitle').append(title);
//                $('.videoThumbnail').attr("src", thumbnail);
//
//            }
//        });
//
//    }
//
//
//
//
//    $(".convertButton").click(function () {
//
//        convertMusic();
//    });
//
//
//
//
//
//
//
//
//
//});