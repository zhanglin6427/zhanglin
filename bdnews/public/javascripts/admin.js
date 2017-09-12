$(document).ready(function() {

			//获取所有的数据
			function datashow() {

				$.ajax({
					url: "/getAllDatas",
					type: 'get',
					success: function(data) {
						// 				console.log(data);
						$('.commentTr').empty();
						//遍历
						data.forEach((ele, index) => {

							$('.table').append($('<tr></tr>').addClass('commentTr'))

							$('<td></td>').addClass('num').text(ele.newsNum).appendTo($('.commentTr')[index]);
							$('<td></td>').addClass('title').text(ele.newsTitle).appendTo($('.commentTr')[index]);
							$('<td></td>').addClass('date').text(ele.newsDate).appendTo($('.commentTr')[index]);
							$('<button></button>').addClass('btn btn-danger delete').text('删除').appendTo($('.commentTr')[index]);
							$('<button></button>').addClass('btn btn-action updata').text('修改').appendTo($('.commentTr')[index]);
						})

					}
				})

			}

			datashow();

			//将后台左边输入的信息，提交到sql数据中
			$('#insert').click(function(e) {
				e.preventDefault();
				var d = new Date();
				var year = d.getFullYear();
				var mon = d.getMonth() + 1;
				var day = d.getDate();

				s = year + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);

				var json = {

					newsNum: $('#newsNum').val(),
					newsTitle: $('#newsTitle').val(),
					newsContent: $('#newsContent').val(),
					newsImg: $('#newsImg').val(),
					newsDate: s,
					newsSrc: $('#newsSrc').val(),
					newsTip: $('#newsTip').val()

				}
				//	    console.log(json)

				$.ajax({
					url: '/inserUser',
					type: 'post',
					data: json,
					success: function(data) {
						
						alert(data.message);
						datashow();

					}
				})

				newsNum: $('#newsNum').val('');
				newsTitle: $('#newsTitle').val('');
				newsContent: $('#newsContent').val('');
				newsImg: $('#newsImg').val('');
				newsDate: s;
				newsSrc: $('#newsSrc').val('');
				newsTip: $('#newsTip').val('');

			})

			//删除信息
            
			$(".imfo .table").on("click", ".delete", function(e) {

				var num = $(this).parent('.commentTr').children('.num').text();
//				console.log(num)
				e.preventDefault();
				$.ajax({
					url: '/deleteOneNews',
					type: 'post',
					data: {
						newsNum: num
					},
					success: function(data) {
						alert(data.message);
						datashow();
					}
				})
			})

			//信息修改
            
            var thisnum;
//           首先将需要修改的信息加入页面
            $(".imfo .table").on("click", ".num", function(e) {
				e.preventDefault();
            	thisnum = $(this).text();
//				console.log(thisnum);  
				
				function dataget() {
					$.ajax({
						type: "post",
						url: "/getData",
						data: {
							tip: thisnum
						},
						success: function(results) {
						
							$('#newsTitle').val(results[0].newsTitle);
							$('#newsContent').val(results[0].newsContent);
							$('#newsImg').val(results[0].newsImg);
							$('#newsSrc').val(results[0].newsSrc);
							$('#newsData').val(results[0].newsData);
							$('#newsTip').val(results[0].newsTip);
							
						}

					});

				}
				
                dataget()
            	
            })
           
            //将修改成功的数据加入后台信息
			$(".imfo .table").on("click", ".updata", function(e) {
				e.preventDefault();
                e.preventDefault();
				var d = new Date();
				var year = d.getFullYear();
				var mon = d.getMonth() + 1;
				var day = d.getDate();

				s = year + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);
				var json = {

					newsNum: thisnum,
					newsTitle: $('#newsTitle').val(),
					newsContent: $('#newsContent').val(),
					newsImg: $('#newsImg').val(),
					newsDate: s,
					newsSrc: $('#newsSrc').val(),
					newsTip: $('#newsTip').val()

				}
					
//				console.log(json)

				$.ajax({
					url: '/updataOneNews',
					type: 'post',
					data: json,
					success: function(data) {
						alert(data.message);
						datashow();
					}
				})

				newsNum: $('#newsNum').val('');
				newsTitle: $('#newsTitle').val('');
				newsContent: $('#newsContent').val('');
				newsImg: $('#newsImg').val('');
				newsDate: null;
				newsSrc: $('#newsSrc').val('');
				newsTip: $('#newsTip').val('');
				

			})

		})