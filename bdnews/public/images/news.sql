-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:8889
-- Generation Time: 2017-09-06 07:26:29
-- 服务器版本： 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews2`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newsNum` int(11) NOT NULL,
  `newsTitle` text NOT NULL,
  `newsContent` text NOT NULL,
  `newsImg` varchar(1000) NOT NULL,
  `newsSrc` text NOT NULL,
  `newsDate` date NOT NULL,
  `newsTip` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsNum`, `newsTitle`, `newsContent`, `newsImg`, `newsSrc`, `newsDate`, `newsTip`) VALUES
(41, '金家', '9月3日，2017年金砖国家工商论坛在福建省厦门市开幕。', 'http://news.xinhuanet.com/world/2017-09/03/1121595634_15044240901161n.jpg', '新华网', '2017-09-06', '推荐'),
(42, '弃《战狼2》', '时隔两年，情景重现，前期投资《战狼2》的光线再次选择中途退场，转而投注同档期上映的《三生三世十里桃花》，并进行了8亿的保底发行。', 'https://timg01.bdimg.com/timg?pacompress&imgtype=1&sec=1439619614&autorotate=1&di=ef35d57f17baeacf26d46ded2f62ea29&quality=90&size=b870_10000&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F85bfc0b69744e80b9e02e108f9d8fb4c.jpeg', '百家号', '2017-09-05', '百家'),
(43, '樱花林荫道', '此外，也有一些不喜欢“随大流”的林荫道，比如，将无患子、珊瑚朴、金丝柳、柳树、臭椿作为行道树的林荫道各有一条。', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2698625739,2814313720&fm=58', '百度新闻', '2017-09-05', '社会'),
(44, '宅男女神！', '不过首发主打MV《Look What You Made Me Do》（又名《贱人本宫这回要怼死你》）一曝光，立马成为YouTube史上首日点播率最高的MV。', 'http://himg2.huanqiu.com/attachment2010/2017/0904/20170904013446785.gif', '环球网', '2017-09-05', '国际'),
(45, '海警船巡航', '中国外交部多次说过，钓鱼岛及其附属岛屿自古以来就是中国的固有领土。中国海警船编队在钓鱼岛海域进行正常巡航，是中方的固有权利，外人无权说三道四。', 'http://himg2.huanqiu.com/attachment2010/2017/0905/11/16/20170905111608674.jpg', '环球网', '2017-09-06', '军事'),
(46, '氢弹', '氢弹是利用原子弹爆炸的能量点燃氢的同位素氘、氚等质量较轻的原子的原子核发生核聚变反应瞬时释放出巨大能量的核武器，又称聚变弹、热核武器。', 'http://himg2.huanqiu.com/attachment2010/2017/0904/08/17/20170904081735400.jpg', '环球网', '2017-09-06', '军事');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsNum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `newsNum` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
