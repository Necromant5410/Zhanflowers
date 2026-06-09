<?php
$required = ['name', 'age', 'phone', 'position', 'experience', 'portfolio', 'salary', 'schedule', 'priority'];
foreach ($required as $field) {
    if (empty($_POST[$field])) {
        die('Пожалуйста, заполните все поля!');
    }
}

$data = [
    $_POST['name'] ?? '',
    $_POST['age'] ?? '',
    $_POST['phone'] ?? '',
    $_POST['position'] ?? '',
    $_POST['experience'] ?? '',
    $_POST['portfolio'] ?? '',
    $_POST['salary'] ?? '',
    $_POST['schedule'] ?? '',
    $_POST['priority'] ?? '',
    date("Y-m-d H:i:s")
];

$filename = 'responses.csv';
$addHeaders = !file_exists($filename); 

$file = fopen($filename, 'a');

if (!$file) {
    die('Не удалось открыть файл для записи.');
}

if ($addHeaders) {
    fwrite($file, "\xEF\xBB\xBF");

    fputcsv($file, [
        'ФИО',
        'Возраст',
        'Телефон',
        'Вакансия',
        'Опыт',
        'Портфолио',
        'Желаемая зарплата',
        'График',
        'Приоритет на работе',
        'Дата и время отправки'
    ], ';' );
}

fputcsv($file, $data, ';');
fclose($file);


header("Location: index.html?success=1");
exit;
?>
