Vue.component("xswiper", {
	template: `
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img :src="news?news[1].author.avatar_url:'../images/1.jpg'" /></div>
				<div class="swiper-slide"><img src="../images/1.jpg" /></div>
				<div class="swiper-slide">Slide 3</div>
				<div class="swiper-slide">Slide 4</div>
				<div class="swiper-slide">Slide 5</div>
				<div class="swiper-slide">Slide 6</div>
				<div class="swiper-slide">Slide 7</div>
				<div class="swiper-slide">Slide 8</div>
				<div class="swiper-slide">Slide 9</div>
				<div class="swiper-slide">Slide 10</div>
			</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
		</div>
	`,
	mounted: function() {
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true
		});
	},
	computed: {
		news() {
			return this.$store.state.news
		}
	}
})
