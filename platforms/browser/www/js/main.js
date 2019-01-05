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
                $('.videoTitle').text(title);
                $('.videoThumbnail').attr("src", thumbnail);
                $('.videoTitle').css("display", 'block');
                $('.videoThumbnail').css("display", 'block');
                $('.downloadButton').css("display", 'block');



            }
        });

    }




    $(".convertButton").click(function () {

        convertMusic();
    });
