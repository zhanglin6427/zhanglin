var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
	
	host:'localhost', 
	port:'8889',    
	user:'root',    
	password:"root",  
	database:'baidunews2'   

})

con.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '百度新闻' });
});

//将信息渲染到admin页面中，先get得到数据，用res.json传出到admin中
router.get('/getAllDatas', function(req, res, next) {
  var sql = 'SELECT * from `news`';
//	console.log(sql);
	con.query(sql,function(error,results,f){
//		 console.log(results);
         res.json(results)
	})
});

router.post('/getOneData', function(req, res, next) {
//	console.log(req.body);
    var sql = 'SELECT * from `news` where newsTip=?';
	con.query(sql,[req.body.tip],function(error,results,f){
         res.json(results);
	})
});



//得到数据，传输到sql数据库中
router.post('/inserUser',function(req,res,next){
      
	var  newsTitle = req.body.newsTitle;
	var  newsContent = req.body.newsContent;
	var  newsImg = req.body.newsImg;
	var  newsDate = req.body.newsDate;
	var  newsSrc = req.body.newsSrc;
	var  newsTip = req.body.newsTip;
	
	var sql = "INSERT INTO news( newsTitle, newsContent, newsImg, newsDate, newsSrc, newsTip) VALUES (?,?,?,?,?,?)";

	con.query(sql,[newsTitle,newsContent,newsImg,newsDate,newsSrc,newsTip],function(err,results,f){
		res.json({message:'插入成功'});
	})
})


    //删除信息

	
router.post('/deleteOneNews',function(req,res,next){
	con.query('DELETE FROM `news` WHERE newsNum=?',[req.body.newsNum],function(err,results,f){
		res.json({message: '删除成功'});
	})
})


//修改信息 ，首先将信息添加到页面
router.post('/getData', function(req, res, next) {
//	console.log(req.body);
//	console.log(444);
    var sql = 'SELECT * from `news` where newsNum=?';
	con.query(sql,[req.body.tip],function(error,results,f){
//		 console.log(results);
         res.json(results);
	})
});

//然后将修改页面的信息进行修改

router.post('/updataOneNews',(req, res, next)=>{
	
//	console.log(req.body.newsNum);
	var updata = "UPDATE `news` SET `newsTitle`=?,`newsContent`=?,`newsImg`=?,`newsSrc`=?,`newsDate`=?,`newsTip`=? WHERE newsNum=?";
	var inputData=req.body;
	var dataArr=[inputData.newsTitle,inputData.newsContent,inputData.newsImg,inputData.newsSrc,inputData.newsDate,inputData.newsTip,inputData.newsNum];
	
	var sql = `UPDATE news SET newsTitle="${inputData.newsTitle}",newsContent="${inputData.newsContent}",newsImg="${inputData.newsImg}",newsSrc="${inputData.newsSrc}",newsDate="${inputData.newsDate}",newsTip="${inputData.newsTip}" WHERE newsNum='${inputData.newsNum}'`;
// 	console.log(sql);
	con.query(sql,dataArr,function(err,results,f){
		if(err) throw err;
		res.json({message:'数据修改成功'});
	})
	

})



module.exports = router;
 