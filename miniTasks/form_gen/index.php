<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form id="dynamic-form" action="" method="post">

  </form>
  <button type="submit" form="dynamic-form">Submit</button>
  <button class="add-new-input">Add</button>
  <script src="script.js"></script>
  <pre><?print_r($_POST)?></pre>
</body>
</html>