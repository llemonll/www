<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <link rel="stylesheet" href="css/login.css">
</head>
<body>
       <article id="content">
       <div class="login_top">
           <h2>로그인</h2>
           <a href="../index.html" class="Dsmelogo">로고</a>
       </div>
       <form  name="member_form" method="post" action="login.php">     
           <div id="login_form">
                <div class="id_pw_input">
                    <ul>
                        <li>
                            <label class="hidden" for="id" >아이디</label>
                            <input type="text" id="id" name="id" class="login_input" placeholder="아이디">
                        </li>
                        <li>
                            <label class="hidden"  for="pass">비밀번호</label>
                            <input type="password" id="pass" name="pass" class="login_input" placeholder="비밀번호 ">
                        </li>
                    </ul>						
                </div>
                <div class="login_button">
                    <input type="submit" value="로그인">
                    <a href="../index.html" >취소</a>
                </div>
            </div> 
            <div class="find">
                <ul>
                    <li>보안접속<i class="fas fa-lock"></i></li>
                    <li>
                        <p>아아디 / 비밀번호를 잊으셨나요? </p>
                        <span><a href="id_find.php">아이디 찾기</a></span>
                        <span><a href="pw_find.php">비밀번호 찾기</a></span>
                    </li>
                </ul>
            </div>   
            <div class="join_button">
                <span>회원 가입</span>
                <p>아직 DSME 회원이 아니신가요?<br> 회원가입 후 자세한 정보를 확인하세요</p>
                <a href="../member/member_check.html">회원가입</a>
            </div>   
            

       </form>
       
   </article>
    
</body>
</html>