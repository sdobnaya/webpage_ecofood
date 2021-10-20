	
	
<script type="text/javascript">
	$(document).ready(function(){
		$('.slider').slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [{
				breakpoint: 991,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					infinite: true
				}
			}]
		})
	})
</script>	