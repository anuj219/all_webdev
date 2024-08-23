// load XML data using AJAX
// Ajax - asynchronous javascript and xml
// it works where nobody has to wait for each other

// get means firing an http request - either get or post - so it req server(xampp) to fetch xml data

$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"mov.xml",
        dataType:"xml",
        success:function(xml){
            $('#movie_list').append('<li> Succesrfssfrsfvsss</li>')
        },
        error: function(){
            $('#movie_list').append('<li> Error Loading List</li>'); //this works as innerHTML in JS
        }
    })

    // $('#butt1').click(function(){
    //     var movie = $('#search_box').val(); // fetches value from the id
    //     alert(movie);
    // })

})
