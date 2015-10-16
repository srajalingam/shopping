var item;
var price;
$(window).on("load",function(){
	item=$.cookie("product_name").split(",");
	price=$.cookie("price").split(",");
	$.each([item,price],function(){
		$(".container_content").html("")
		$.each(this,function(key,value){
			console.log(key);
			console.log(value);
			// console.log(item[key]);
			// console.log(price[key]);
			// console.log(key);
				$(".container_content").append('<ul><li>Item<p class="item">'+item[key]+'</p></li><li>Quantity<p><input type="text" value="1" class="cart_count" data-product_price='+price[key]+'></p></li><li>Price<p class="price">'+price[key]+'</p></li><li>Remove<p><img src="images/delete.png" style="width:15px;margin-left: 15px;" class="delete_icon"></img></p></li><li>Action<p class="check_out" data-price_checkout='+price[key]+' data-product_name='+item[key]+'>check out</p></li><div class="empty_div"></div></ul>')
			})
		})
	
})

$(".container_content").on("keyup",".cart_count",function(){
	var price_content=$(this).data("product_price");

	var cart_count=$(this).val();
	console.log(cart_count);
	var count_add=cart_count*price_content;
	$(this).parent().parent().parent().find("li:nth-child(3) p").html(count_add);
})

$(".container_content").on("click",".delete_icon",function(){
	$(this).parent().parent().parent().remove();
	var item_remove=item;
	var price_remove=price;
	var current_price=$(this).parent().parent().parent().find("li:nth-child(2) p input[type='text']").data("product_price");
	var current_item=$(this).parent().parent().parent().find("li:nth-child(1) p").text();
	
	index = item_remove.indexOf(current_item);
	item_remove.splice(index,1)
	$.cookie("product_name",item_remove);
	
	index = price_remove.indexOf(current_price);
	price_remove.splice(index,1)
	$.cookie("price",price_remove);
	
})
$(".container_content").on("click",".check_out",function(){
	$(".alert_box").show();
	$(".opacity").show()
	var product_name=$(this).data("product_name")
	var price_checkout=$(this).parent().parent().find("li:nth-child(3) p").text();
	$(".cart_name").val(product_name);
	$(".price_cart").val(price_checkout);
})
$(".close_btn").on("click",function(){
	$(".alert_box").hide();
	$(".opacity").hide()
})

$(".clear_cart").on("click",function(){
	$(this).parent().find("ul").remove();
	$.cookie("price","");
	$.cookie("item","");
	$.cookie("product_name","");
})