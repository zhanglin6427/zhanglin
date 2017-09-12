$('.list').click(function() {

	//导航的选项信息
	$('.all-top').hide();
	$('.mask').show();
})
$('.spa').click(function() {
	$('.all-top').show();
	$('.mask').hide();
})

//选择数据的导入	
$(document).ready(function() {
	mess();
	//         获取整个页面的信息
	function mess() {
        console.log(1);
//      console.log(data);
        
		$.ajax({
			type: "get",
			url: "/getAllDatas",
			success: function(data) {
				console.log(0);
				console.log(data);
                
				data.forEach((ele, index) => {
					var time = moment().startOf('hour').fromNow(); 
//					console.log(time);
					var vatime = parseInt(time);
//					console.log(vatime);
					$('.getdata').append($('<dl></dl>').addClass('commentDl'))
					$('<dt></dt>').addClass('imgs').appendTo($('.commentDl')[index]);
					$('<img>').addClass('bdImg').attr('src', ele.newsImg).appendTo($('.imgs')[index]);
					$('<dd></dd>').addClass('content').text(ele.newsContent).appendTo($('.commentDl')[index]);
					$('<span></span>').addClass('date').text(time).appendTo($('.content')[index]);
					
				})
			}

		});
	}
    
    
    //引入点击的信息
	$('#topNav .swiper-slide a').click(function() {
		$('.banner').hide();
		//定义点击的信息
		var thisTip = $(this).text();
		var thisInd = $(this).parent().index();
		$(this).addClass('cur').parent().siblings().children().removeClass('cur');
		//定义引入数据的函数
		function datainput() {

			$.ajax({
				type: "post",
				url: "/getOneData",
				data: {
					tip: thisTip
				},
				success: function(results) {

					$('.commentDl').remove();
					var time = moment().startOf('hour').fromNow(); 
					console.log(time);
					results.forEach((ele, index) => {
						$('.getdata').append($('<dl></dl>').addClass('commentDl'))
						$('<dt></dt>').addClass('imgs').appendTo($('.commentDl')[index]);
						$('<img>').addClass('bdImg').attr('src', ele.newsImg).appendTo($('.imgs')[index]);
						$('<dd></dd>').addClass('content').text(ele.newsContent).appendTo($('.commentDl')[index]);
					    $('<span></span>').addClass('date').text(time).appendTo($('.content')[index]);
                        
					})
				}

			});

		}

		datainput();

	})

})