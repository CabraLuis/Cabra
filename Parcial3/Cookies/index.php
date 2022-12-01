<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <?php
    if (isset($_COOKIE['cookieTest'])) {
        setcookie("CabraCookie","cookieparatest",time()+(7*24*60*60));
        printf("Esta cookie tiene como valor:%s", $_COOKIE['CabraCookie']);
    }
    else {
        setcookie("CabraCookie","cookieparatest",time()+(7*24*60*60));
        printf("Esta cookie tiene como valor:%s", $_COOKIE['CabraCookie']);
    }
    ?>    
</body>
</html>