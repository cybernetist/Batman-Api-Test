
var form = new FormData();
var settings = {
  "url": "https://www.cheapshark.com/api/1.0/deals?title=batman&sortBy=savings&exact=0",
  "method": "GET",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  var datas = response;
  var jsonData = jQuery.parseJSON(datas);

  $.each(jsonData, function(index, element) { 
    var savingsFloor = Math.floor(element.savings);
    var gameBox = `  <div class="rounded-[16px] bg-white h-full dark:bg-zinc-700">
    <div class="relative">
        <img class="h-[200px] rounded-t-[16px] w-full" src="`+ element.thumb +`">
        <div class="absolute top-2.5 right-5 bg-discount text-white p-2 rounded-lg font-serif">%`+ savingsFloor +`</div>
    </div>
    <div class="flex flex-col justify-between min-h-[150px] h-[200px] lg:h-[150px] p-4">
        <div class="flex">
            <h4 class="dark:text-white">`+ element.title +`</h4>
        </div>
        <div class="order mt-2 flex flex-col md:flex-col lg:flex-row justify-between">
            <div class="price flex items-center md:justify-start lg:justify-center">
                <h4 class="text-[28px] font-bold dark:text-white">$`+ element.salePrice +`</h4>
                <span class="text-[20px] text-oldPrice line-through ml-2 ">$`+ element.normalPrice +`</span>
            </div>
            <button class="bg-orderBtn py-2 lg:px-3 text-[14px] font-bold text-white rounded-[4px] font-serif	tracking-wider">ORDER</button>
        </div>
    </div>
</div>`;

    $('#gameContent').append(gameBox);
  
});

});

//Dark Mode Toogle

$("#toogleA").on( "click", function(event) {

  if( $('#toogleA').is(':checked') ){
    $("html").addClass("dark");
  }
  else{
    $("html").removeClass("dark");
  }
  

} );