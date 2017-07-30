/*
 *
 *link to the json response
 *
*/
var link = "https://us-central1-bookaholic-786.cloudfunctions.net/home"

$(document).ready(function(){
    
    /*
    *
    *ajax handles response and calls editHtml function passing json response as
    *an argument
    *
    */
    
    $.ajax({
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            url: link,
            dataType: 'json',
            contentType: 'application/json',
            success: function(res) {editHtml(res);},
            error: function(){alert('Error retrieving data. Please try again later.');}
        });
    
    function editHtml(res) {
        /*
        *
        *for loop to display combo images in slider
        *
        */
        for (var i = 0; i < res.combos.length; i++){
            if (i==0) {
                $('.carousel-indicators').html('<li data-target="#myCarousel" data-slide-to="0" class="active"></li>');
                $('.carousel-inner').html('<div class="item active"><img src="'+res.combos[i].imageURL+'" alt="Los Angeles" style="height:450px; width: 100%;"></div>');
            }else {
                $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
                $('.carousel-inner').append('<div class="item"><img src="'+res.combos[i].imageURL+'" alt="Los Angeles" style="height:450px; width: 100%;"></div>');
            }
        }
        
        /*
        *
        *for loop to display products in horizontal scroll
        *
        */
        
        for(var i = 0; i < res.products.length; i++) {
            $('#products').append('<div class="col-xs-4"><img src="'+res.products[i].imageURL+'" width="200" class="img-rounded img-responsive img-raised" style="margin-bottom: 10px;"><span>' +res.products[i].productName+' </span><span class="label label-info">&#8377; '+res.products[i].ourPrice+'</span><br><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal'+i+'"><i class="material-icons">info</i> More Info</button></div>');
            
            $('.awesome').append('<div id="myModal'+i+'" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Author name: '+res.products[i].authorName+'</h4></div><div class="modal-body"><p><img src="'+res.products[i].imageURL+'" class="img-rounded img-responsive img-raised" style="margin-bottom: 10px;"><br><h2>'+res.products[i].productName+'</h2><span class="label label-info">'+res.products[i].subCategory+'</span><br><br>Our Price: '+res.products[i].ourPrice+'<br>Stock Left: '+res.products[i].quantity+'<br><br>Reading duration: '+res.products[i].readingDuration+'</p></div><div class="modal-footer"><button type="button" class="btn btn-primary"><i class="material-icons">add_shopping_cart</i> Add to Cart</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
        }
    }
});