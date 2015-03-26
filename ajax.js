$(document).on('ready', function() {
    //added callback, this was not the right thing to do, setting the dataType as jsonp should add callback to the
    //the url
    var instagramAPI = 'https://api.instagram.com/v1/media/popular?client_id=27cfd4900cee4cf99fef9c977fdcce7b';

    $.ajax({
    url: instagramAPI,
    type: 'get',
 
    // The name of the callback parameter, as specified by the YQL service
    //jsonp: "callback",
 
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",
 
    // Tell YQL what we want and that we want JSON
    data: {
        //q: "select title,abstract,url from search.news where query=\"cat\"",
        format: "json"
    },
 
    // Work with the response
    success: function( response ) {
        //$('#data').text(response);
        //console.log( response ); // server response
        //console.log( response.data );
        
        //create array from the data we get
        var data_array = response.data;
        // data_array.length, decided to only grab three images
        for(var i=0; i < 3; i++){
            var img_src = data_array[i].images.low_resolution.url;
            console.log(img_src);
            var new_img_tag = "<img src=" + '"' + img_src + '"' + "/>";
            //console.log("new_img_src");
            //add img tag to html
            $('#data').append(new_img_tag);
        }
    }
});
    /*
    $.ajax({
        url: instagramAPI,
        type: 'get',
        dataType: "jsonp",
        //cache: false,
        
        //method: 'GET',
        data: {
            format: "json"   
        },
        //jsonp: 'callBackFunction',
        
        success: function(data){
            $('#data').text(data);
        }
    });
    */
    
    
    //https://instagram.com/oauth/authorize/?client_id=27cfd4900cee4cf99fef9c977fdcce7b&redirect_uri=http://brydenfogelman.com/instagram+oauth&response_type=token
    /*
    $.getJSON( instagramAPI, {
        tags: "image",
      })
        .done(function( data ) {
            $('#data').text(data);
        });
        */
});

