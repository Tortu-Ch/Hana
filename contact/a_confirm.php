<?php
function es ($data){
  //配列の時は値を１づつ呼び出して再帰呼び出し:自身を呼び出すこと
  if (is_array($data)){
    return array_map(__METHOD__,$data);
    //__METHOD__は実行中のメソッド:es()を呼び出すマジック定数
  }else{
    return htmlspecialchars($data,ENT_QUOTES,'UTF-8');
  }
}
$_POST = es($_POST);
$_GET = es($_GET);
$sexary = array("男","女");
$moveary = array("自転車","原付","小型","車","その他");
$licenseary = array("無","有");
if($_POST["sex"] == ""){
    $sex = "選択無し";
}else{
    $sex = $sexary[$_POST["sex"]];
}
if($_POST["move"] == ""){
    $move = "選択無し";
}else{
    $move = $moveary[$_POST["move"]];
}
if($_POST["license"] == ""){
    $license = "選択無し";
}else{
    $license = $licenseary[$_POST["license"]];
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
<meta charset="UTF-8">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFX6VDM');</script>
<!-- End Google Tag Manager -->
        <meta http-equiv="x-ua-compatible" content="ie=edge">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>エントリーフォーム | 医療・介護、葬儀、身元保証までトータルサポート | 株式会社はな採用サイト</title>
<meta name="keywords" content="介護,採用,転職,求人,看護,理学療法士,言語聴覚士,福祉">
<meta name="description" content="医療・介護、葬儀、身元保証まで。「ヒューマンケアリング」で地域に安心の輪を広げる株式会社はなの総合採用サイトです。">


<meta name="author" content="エントリーフォーム | 医療・介護、葬儀、身元保証までトータルサポート | 株式会社はな採用サイト">
<meta property="og:title" content="エントリーフォーム | 医療・介護、葬儀、身元保証までトータルサポート | 株式会社はな採用サイト">
<meta property="og:description" content="医療・介護、葬儀、身元保証まで。「ヒューマンケアリング」で地域に安心の輪を広げる株式会社はなの総合採用サイトです。">
<meta property="og:type" content="website">
<meta property="og:site_name" content="医療・介護、葬儀、身元保証までトータルサポート | 株式会社はな採用サイト">

<!--本番サーバー上がってから？
<meta property="og:url" content="">
<meta property="og:image" content="">
-->

<!--Twitter
<meta name="twitter:title" content="">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="">
<meta name="twitter:domain" content="">
<meta property="og:locale" content="ja_JP">
-->

<!--Facebook
<meta property="fb:app_id" content="">
<meta property="fb:app_admins" content="">
-->

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700,900&display=swap" rel="stylesheet">
  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="../js/inview/animate.css">
  <link rel="stylesheet" href="../css/normalize.css">
  <link rel="stylesheet" href="../css/skeleton.css">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/add.css">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/animation.css">
  <link rel="stylesheet" href="../css/style-underlayer.css">
  <link rel="stylesheet" href="css/form.css">
    

  <!-- Scripts
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="../../dist/images/favicon.png">

</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFX6VDM"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <script src="js/snowfall.js"></script>
    <div class="cover">
    <header id="navArea" class="top_messages">
                <nav  class="navbar navbar-default navbar-expand-md navbar-light py-0 ">
                    <div class="hidden"></div>
                    <div class="inner">
                        <div class="navbar-collapse collapse flex-column align-items-end pb-3 pb-md-0" id="navbarContent">
                        <ul class="nav__main navbar-nav order-md-2 mt-3">
                                <li class="nav-item active "><a class="nav-link px-4" href="#">はなを知る</a>
                                    <ul class="sp_nav__main_row navbar-nav order-md-2 mt-3">
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/about_hana/about_hana.html">はなを知るTOP</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/about_hana/top_message.html">TOPメッセージ</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/about_hana/hana_history.html">はなの歴史</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/about_hana/nmb_hana.html">数字で知るはな</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/about_hana/philosophy.html">企業理念</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/about_hana/brand_hana.html">ブランド方針</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/about_hana/hana_company.html">会社情報</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link px-4" href="#">ビジネスを知る

                                </a>
                                <ul class="sp_nav__main_row navbar-nav order-md-2 mt-3">
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_index.html">ビジネスを知るTOP</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_care.html">看護</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_index.html#sec2">介護</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_funeral.html">葬儀</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_index.html#sec3">身元保証</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_index.html#sec5">ジム・ケア</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_index.html#sec7">コンサル業</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_index.html#sec6">飲食業</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/business/business_index.html#sec8">本部</a></li>
                                </ul></li>                        
                                <li class="nav-item dropdown">
                                    <a href="#" id="navbarDropdownMenuLink" class="nav-link dropdown-toggle px-4" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">
                                        人を知る
                                    </a>
                                    <ul class="sp_nav__main_row navbar-nav order-md-2 mt-3">
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/human/human-index.html">人を知るTOP</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/human/executive.html">役員紹介</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/human/organization_chart.html">組織図</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/human/new-graduate.html">新入社員</a></li>
                                        <li class="sp_nav-item active "><a class="nav-link px-4" href="/human/employee1.html">入社3年目</a></li>
                                        
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link px-4" href="#">特集

                                </a>  <ul class="sp_nav__main_row navbar-nav order-md-2 mt-3">
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/special/symposium.html">座談会</a></li>
                                    <!--
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="#">新卒</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="#">キャリア</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="#">職種別Q&A</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="#">採用スケジュール&採用実績</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="#">質問会・採用会のお知らせ</a></li>
                                    -->
                                </ul></li>
                                <li class="nav-item"><a class="nav-link px-4" href="#">採用

                                </a>  <ul class="sp_nav__main_row navbar-nav order-md-2 mt-3">
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/kango1.html">看護師</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/kango2.html">理学療法士、作業療法士、言語聴覚士</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/care1.html">主任介護支援専門員・介護支援専門員</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/fukushi.html">福祉用具専門相談員</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/funeral1.html">葬祭部葬祭課</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/funeral2.html">葬祭部寝台事業部</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/1c.html">訪問鍼灸マッサージ職</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/personal.html">パーソナルトレーナー</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/restaurant.html">飲食事業部</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/faq.html">職種別Q&A</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/schedule.html">採用スケジュール/採用実績</a></li>
                                    <li class="sp_nav-item active "><a class="nav-link px-4" href="/recruit/question.html">質問会/説明会のお知らせ</a></li>

                                </ul></li>
                                <li class="nav-item"><a class="nav-link px-4" href="/privacypolicy/privacypolicy.html">プライバシーポリシー</a></li>
                                <li class="nav-item"><a class="nav-link px-4" href="/contact/contact.html">お問い合わせ</a></li>
                                <!--<li class="nav-item"><a class="nav-link px-4" href="#">新着情報</a></li>-->
                            </ul>       
                           
                        </div>
                </nav>
      <div class="container_header">
        <div class="rows">
          <div class="six columns">
            <a class="navbar-brand" href="/">
              <h1 class="font-weight-bold color__logo text-center">
                <img src="../images/top/logo.png" alt="医療・介護、葬儀、身元保証までトータルサポート \| 株式会社はな採用サイト" class="u-max-full-width">
              </h1>
            </a>
          </div>
          <div class="six columns">
            <div class="toggle_btn">
              <span></span>
              <span></span>
              <span>Menu</span>
            </div>
          </div>
          <div id="mask"></div>
        </div>
      </div>
    </header>
    <main id="top_message">
      <section class="section1">
        <div class=" container_image">
          <div class="section_kv row">
            <div class="section_kv_img twelve columns">
              <img src="../images/contact/main-contact.jpg" alt="" class="u-max-full-width">
            </div>

            <div class="kv_message">

            </div>
          </div>
        </div>
      </section>

      <section class="top_message brand_section1" >
        <div class="title_box">
          <div class="inner">
          <div class="moblock">
              <div>
            <div class="title_box_img text-center">
              <h1>応募フォーム<span><img src="../images/ptitle/apply.svg" alt=""></span></h1>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
        <section id="content_title" class="form">
          <div class="section_cover">
            <div class="container">
              <p>
                以下の内容をご確認の上、送信してください。
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div class="section_cover">
            <div class="container">

              <div class="form_wrapperwrapper">


                <div class="form-area">

                  <form class="" action="a_send.php" method="post">
                      <table>
                    <tr class="form_content">
                      <th>お名前<span>※</span></th>
                        <td><?php echo $_POST["name"];?><input type="hidden" name="name" value="<?php echo $_POST["name"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>フリガナ</th>
                        <td><?php echo $_POST["kana"];?><input type="hidden" name="kana" value="<?php echo $_POST["kana"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>電話番号<span>※</span></th>
                      <td><?php echo $_POST["tel"];?><input type="hidden" name="tel" value="<?php echo $_POST["tel"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>メールアドレス<span>※</span></th>
                        <td><?php echo $_POST["mail"];?><input type="hidden" name="mail" value="<?php echo $_POST["mail"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>性別</th>
                        <td><?php echo $sex;?><input type="hidden" name="sex" value=<?php echo $_POST["sex"];?>></td>
                        
                    </tr>
                    <tr class="form_content">
                      <th>ご年齢</th>
                        <td><?php echo $_POST["age"];?><input type="hidden" name="age" value="<?php echo $_POST["age"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>臨床経験年数</th>
                        <td><?php echo $_POST["exp"];?><input type="hidden" name="exp" value="<?php echo $_POST["exp"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>職種<span>※</span></th>
                        <td><?php echo $_POST["wtype"];?><input type="hidden" name="wtype" value="<?php echo $_POST["wtype"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>居住地<span>※</span></th>
                        <td><?php echo $_POST["addr"];?><input type="hidden" name="addr" value="<?php echo $_POST["addr"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>最寄駅</th>
                        <td><?php echo $_POST["station"];?><input type="hidden" name="station" value="<?php echo $_POST["station"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>勤務時の移動手段</th>
                        <td><?php echo $_POST["mtype"];?><input type="hidden" name="mtype" value="<?php echo $_POST["mtype"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>訪問時の移動手段</th>
                        <td><?php echo $move;?><input type="hidden" name="move" value=<?php echo $_POST["move"];?>></td>
                    </tr>
                    <tr class="form_content">
                      <th>運転免許証の有無</th>
                        <td><?php echo $license;?><input type="hidden" name="license" value=<?php echo $_POST["license"];?>></td>
                    </tr>
                    <tr class="form_content">
                      <th>面接、見学希望日</th>
                        <td><?php echo $_POST["mdate"];?><input type="hidden" name="mdate" value="<?php echo $_POST["mdate"];?>"></td>
                    </tr>
                    <tr class="form_content">
                      <th>お問い合わせ内容</th>
                        <td><?php echo str_replace("\n","<br />",$_POST["message"]);?><input type="hidden" name="message" value="<?php echo $_POST["message"];?>"></td>
                    </tr>
                      </table>
                      <button type="submit" name="button" class="arrow_button-contact">
                        送信する
                        <div class="arrow_wrapper">
                          <img src="../images/business/business_index/arrow1.svg">
                        </div>
                      </button>

                  </form>
                </div>
                <div class="form-back_accent">

                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div class="copyright text-center">
            Copyright © 2020 Hana Co.,Ltd All Rights Reserved.
          </div>
        </footer>
    </main>
  </div>
  <script src="../js/snowfall.js"></script>
  <script type="text/javascript" src="../js/inview/jquery.inview.js"></script>
    <script src="../js/animate2.js"></script>
    <script src="../js/main.js"></script>
</body>

</html>