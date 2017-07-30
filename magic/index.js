link = "https://us-central1-bookaholic-786.cloudfunctions.net/home"

$(document).ready(function(){
    
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
        for (var i = 0; i < res.combos.length; i++){
            if (i==0) {
                $('.carousel-indicators').html('<li data-target="#myCarousel" data-slide-to="0" class="active"></li>');
                $('.carousel-inner').html('<div class="item active"><img src="'+res.combos[i].imageURL+'" alt="Los Angeles" style="height:450px; width: 100%;"></div>');
            }else {
                $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
                $('.carousel-inner').append('<div class="item"><img src="'+res.combos[i].imageURL+'" alt="Los Angeles" style="height:450px; width: 100%;"></div>');
            }
        }
        
        for(var i = 0; i < res.products.length; i++) {
            $('#products').append('<div class="col-xs-4"><img src="'+res.products[i].imageURL+'" width="200" class="img-rounded img-responsive img-raised"'+i+'"><button class="btn btn-info">' +res.products[i].productName+'</button></div>');
        }
    }
});