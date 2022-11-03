<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/26389fd30f.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>

    <title>Todo App</title>
    <style>
        body {
            font-family: 'Poppins';
        }

        h3 {
            color: #796852;
        }

        ul {
            list-style: none;
            padding-left: 0px;

        }

        a {
            color: #0d6efd;
            text-decoration: none;
        }

        i {

            cursor: pointer;
        }

    </style>
</head>

<body>

    <div class="container mt-5" id="app">
        <h3>TO DO LIST</h3>
        <router-view></router-view>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>


</body>

</html>
