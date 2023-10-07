<!-- Include, require, date functions in php. -->

<!DOCTYPE html>
<html>
    <head>
        <title>PHP Include and Date Example</title>
    </head>

    <body>
        <h1>Welcome to PHP Include and Date Example</h1>
        <p>Current date and time: 
        <?php echo date('Y-m-d H:i:s'); ?>
        </p>
        <h2>Including an External File Using include</h2>
        <div>
            <?php
            include 'external_file.php';
            echo "This text is displayed after including external_file.php using include.";
            ?>
        </div>
        <h2>Including an External File Using require</h2>
        <div>
            <?php
            require 'external_file.php';
            echo "This text is displayed after including external_file.php using require.";
            ?>
        </div>
    </body>
</html>
