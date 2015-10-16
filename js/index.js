
var arr_price=[];
var arr_product_name=[];
$(".add_cart").on("click",function(){
	var price=$(this).parent().find(".price").val();
	var product_name=$(this).parent().find(".product_name").val();
	arr_price.push(price);
	console.log(arr_price);
	arr_product_name.push(product_name);
	$.cookie("price",arr_price);
	$.cookie("product_name",arr_product_name);
	var price_value=$.cookie("price");
	var product_value=$.cookie("product_name");
	var price_split=price_value.split(",");
	$(".cart_added").html(price_split.length+"items");
	$(this).replaceWith('<p class="cart_added_already"><button type="submit" class="no_add">Cart added</button></p>')
	
})

$(window).on("load",function(){
	var price_product=$.cookie("price").split(",");
	var product_name=$.cookie("product_name").split(",");
	// arr_price.push(price_product);
	for(var i=0; i<price_product.length;i++){
	   if(price_product[i] !== "" && price_product[i] !== null){
		arr_price.push(price_product[i]);
	   }
	}
	for(var i=0; i<product_name.length;i++){
	   if(product_name[i] !== "" && product_name[i] !== null){
		arr_product_name.push(product_name[i]);
	   }
	}
	if((price_product.length)>0){
		$(".cart_added").html(price_product.length+"items");
		if((price_product[0])===""){
			$(".cart_added").html("");
		}
	}
})