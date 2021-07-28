<?
    $connect=mysql_connect( "localhost", "llemonll1", "P@ssw0rd1") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("llemonll1",$connect);
?>
