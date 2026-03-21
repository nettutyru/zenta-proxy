<?php
header('Content-Type: text/plain; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$subFile = DIR . '/sub.txt';
$rename = "⚡ ZENTA-PROXY"; // название подписки для Happ

if(file_exists($subFile)){
    echo "# " . $rename . "\n";
    echo file_get_contents($subFile);
} else {
    echo "# Подписка пустая";
}
?>