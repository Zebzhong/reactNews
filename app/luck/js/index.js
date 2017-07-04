$(function() {
	var main = (function($){
		function init(){
			autoScale();
			autoHeight();
			myswiper();
		}
		function autoScale(){
			var scale = 1/window.devicePixelRatio;
	
			$(document.body).append('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale+'" />')
	
			$('html').css('font-size',$(window).width()/10);
		}
		function autoHeight(){
			// var len = $('.item').length;
			var height = $(window).height();
			// $('.swiper-slide').css('height',height);
			$('.item').css('height',height);		
		}
		function myswiper(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        direction: 'vertical',
		        nextButton:".next",
		        speed:300,
		        onInit:function(swiper){
		            swiperAnimateCache(swiper); //隐藏动画元素
		            swiperAnimate(swiper); //初始化完成开始动画
		        },
		        onSlideChangeEnd: function(swiper){
		            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		        }
		    });         
		}
		return {
			init:init
		}
	})(jQuery)
	main.init();
})
