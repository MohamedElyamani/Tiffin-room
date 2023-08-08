$(document).ready(()=>{
    $(".menu-content").slice(0, 3).show();
    $('.more a').click(()=>{
        $(".menu-content:hidden").slice(0, 3).show();
        if($(".menu-content:hidden").length ==0){
            $('.more').hide()
        }
    })
    $('#loading').fadeOut(1000, ()=>{
        $('body').css('overflow-y','auto')
    })
})

function moreMenu(){
    let cols=``
    for(let i = 1; i <= 8; i++){
        cols += `
        <div class="col-md-6">
          <div class="menu-content">
          <div class = 'content'>
            <img src="img/menu-${i}.jpg" />
            <div class="cont">
              <h5>Dish ${i}</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pretium est in diam suscipit, id tincidunt magna elementum.
              </p>
              <div class="price">
                <p>Serving 2-3 Persons</p>
                <div class="price-tax d-flex">
                  <h5>$12.99</h5>
                  <p>+tax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        `
    }
    document.getElementById('rowData').innerHTML = cols;
}
moreMenu();