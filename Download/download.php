<?php
// Укажите пути к вашим файлам
$files = [
    'disk2.pak',
    'disk3.pak',
    'disk4.pak',
    'disk5.pak',
    'SetupScripts.exe'
];

$archiveName = 'объединенный_архив.zip';

// Создаем новый ZIP-архив
$zip = new ZipArchive();
if ($zip->open($archiveName, ZipArchive::CREATE) !== TRUE) {
    die("Невозможно создать архив");
}

// Добавляем каждый файл в архив
foreach ($files as $file) {
    if (file_exists($file)) {
        $zip->addFile($file, basename($file));
    }
}

$zip->close();

// Отправляем архив пользователю
header('Content-Type: application/zip');
header('Content-Disposition: attachment; filename="'.basename($archiveName).'"');
header('Content-Length: ' . filesize($archiveName));
readfile($archiveName);

// Удаляем временный архив
unlink($archiveName);
exit;
?>