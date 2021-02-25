<?php
//$adminmail = "stylasnet1@gmail.com";
$adminmail = "info@hana-tenshoku.com,saito@hana-gr.com,saito@hana-kango.com";
$sendmail = "info@hana-dear.com";
$adminsite ="hana-dear.com";
$sitename = "株式会社はな　採用サイト";
function es ($data){
  //配列の時は値を１づつ呼び出して再帰呼び出し:自身を呼び出すこと
  if (is_array($data)){
    return array_map(__METHOD__,$data);
    //__METHOD__は実行中のメソッド:es()を呼び出すマジック定数
  }else{
    return htmlspecialchars($data,ENT_QUOTES,'UTF-8');
  }
}
$sexary = array("男","女");
$moveary = array("自転車","原付","小型","車","その他");
$licenseary = array("無","有");
$_POST = es($_POST);
$_GET = es($_GET);
$name = "";
$kana = "";
$tel = "";
$mail = "";
$sex = "";
$age = "";
$exp = "";
$wtype = "";
$addr = "";
$station = "";
$mtype = "";
$move = "";
$license = "";
$mdate = "";
$message = "";
$error = 0;
if(isset($_POST["name"])){
	$name = $_POST["name"];
}else{
	$error++;
}
if(isset($_POST["kana"])){
	$kana = $_POST["kana"];
}else{
	$error++;
}
if(isset($_POST["tel"])){
	$tel = $_POST["tel"];
}else{
	$error++;
}
if(isset($_POST["mail"])){
	$mail = $_POST["mail"];
}else{
	$error++;
}
if(isset($_POST["sex"])){
	$sex = $sexary[$_POST["sex"]];
}
if(isset($_POST["age"])){
	$age = $_POST["age"];
}
if(isset($_POST["exp"])){
	$exp = $_POST["exp"];
}
if(isset($_POST["wtype"])){
	$wtype = $_POST["wtype"];
}
if(isset($_POST["addr"])){
	$addr = $_POST["addr"];
}else{
	$error++;
}
if(isset($_POST["station"])){
	$station = $_POST["station"];
}
if(isset($_POST["mtype"])){
	$mtype = $_POST["mtype"];
}
if(isset($_POST["move"])){
	$move = $moveary[$_POST["move"]];
}
if(isset($_POST["license"])){
	$license = $licenseary[$_POST["license"]];
}
if(isset($_POST["mdate"])){
	$mdate = $_POST["mdate"];
}
if(isset($_POST["message"])){
	$message = $_POST["message"];
}
if($error == 0){
mb_language("Japanese");
mb_internal_encoding("UTF-8");

$title = "ホームページより応募がありました。[".$adminsite."]";
$title2 = "ご応募ありがとうございました。";
$content = "応募がありました\n\n";
$content .= "お名前：" .$name."\n";
$content .= "フリガナ：".$kana."\n";
$content .= "電話番号：".$tel."\n";
$content .= "メールアドレス：".$mail."\n";
$content .= "性別：".$sex."\n";
$content .= "年齢：".$age."\n";
$content .= "臨床経験年数：".$exp."\n";
$content .= "職種：".$wtype."\n";
$content .= "居住地：".$addr."\n";
$content .= "最寄り：".$station."\n";
$content .= "勤務時の移動手段：".$mtype."\n";
$content .= "訪問時の移動手段：".$move."\n";
$content .= "免許証：".$license."\n";
$content .= "面接、見学希望日時：".$interview."\n";
$content .= "＝＝＝＝お問い合わせ内容＝＝＝＝\n".$message."\n";
$mailfrom="From:".$sendmail."\r\nReturn-Path:".$sendmail;


if(mb_send_mail($adminmail, $title, $content,$mailfrom)){
	$recontent = $name."さま\n\n";
$recontent .= <<< EOF
この度はご応募ありがとうございました。
内容をご確認後ご連絡いたします。

※このメールは自動返信のメールです。

＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

$sitename
https://$adminsite/

＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
EOF;
	if(mb_send_mail($mail, $title2, $recontent,$mailfrom)){
		Header("location:apply_thanks.html");
	}else{
		Header("location:error.html");
	}

} else {
		Header("location:error.html");
}
}else{
	Header("location:error.html");
}
?>
