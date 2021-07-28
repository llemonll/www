<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	/*
		$_SESSION['userid']
		$_SESSION['username']
		$_SESSION['usernick']
		$_SESSION['userlevel']

		$num=1  (나야나~~~~~)
		$page=2
	*/
	
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>대우조선해양:홍보 센터</title>

    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub4common.css">
    <link rel="stylesheet" href="./css/write_form.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
       
    <script src="../common/js/prefixfree.min.js"></script>


     <!--[if IE 9]>  
            <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
            <![endif]-->
</head>
<body>
    
    <div class="wrap">


        <!--서브헤더영역 -->
        <? include "../common/sub_head.html" ?> 


        <div class="visual"></div>

        <div class="sub_menu">
            <h3>홍보 센터</h3>
            <ul>
                <li><a href="sub4_1.html">보도 자료</a></li>
                <li class="current"><a href="sub4_2.html">공지 사항</a></li>
            </ul>
            <div class="line_map">
                    홈 &gt; 홍보 센터 &gt;<strong> 공지 사항</strong>
                </div>
        </div>

        <article id="content">

            <div class="title_area">
                
                <h2>공지 사항</h2> 
                <div class="slogan">
                    <p><span>대우조선해양</span>에서 알려드리는 <span class="color">공지 사항</span> 입니다.</p> 
                </div>        
            </div>

            <div class="content_area">
                <form  name="board_form" method="post" action="insert.php"> 
                    <div id="write_form">
                        <div class="write_line"></div>
                        <div id="write_row1">
                            <ul>
                                <li class="col1"> 이 름&nbsp;&nbsp;:&nbsp;</li>
                                <li class="col2"><?=$usernick?></li>
                                <li class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</li>
                            </ul>
                        </div>
                        <div class="write_line"></div>
                        <div id="write_row2">
                            <ul>
                                <li class="col1">제 목</li>
                                <li class="col2"><input type="text" name="subject"></li>
                            </ul>
                        </div>
                        <div class="write_line"></div>
                        <div id="write_row3">
                            <div class="col1"> 내 용</div>
                            <div class="col2"><textarea rows="25" cols="108" name="content"><?=$item_content?></textarea></div>
                        </div>
                    </div>

                    <div id="write_button">
                        <ul>
                            <li>
                                <input type="submit" value="저 장">
                            </li>
                            <li>
                                <a href="list.php?page=<?=$page?>">목 록</a>
                            </li>
                        </ul>
                    </div>
                </form>   
            </div>
        </article>
        <!--서브푸터영역 -->
        <? include "../common/sub_foot.html" ?>

    </div>


        <!--  JQuery -->
        <script src="../common/js/jquery-1.12.4.min.js"></script>
        <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>  
        <script src="../common/js/gnb.js"></script>
</body>
</html>