    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "test1";
        $conn = new mysqli($servername,$username,$password,$dbname);

        if ($conn -> connect_errno)
        {
            echo "Failed to connect to MySQL: " . $conn -> connect_error;
            exit();
        }

        $sql = "select * from test1";
        $result = ($conn->query($sql));
        $row = [];

        if ($result->num_rows > 0)
        {
            $row = $result->fetch_all(MYSQLI_ASSOC);
        }
    ?>

<!DOCTYPE html>
<html>
    <style>
        td,th {
        border: 1px solid black;
        padding: 10px;
        margin: 5px;
        text-align: center;
        }
    </style>

    <body>
        <div class="container">
            <h1>User Data</h1>

            <table >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                </thead>

                <tbody>
                <?php
                if(!empty($row))
                foreach($row as $rows)
                {
                ?>
                    <tr>
                    <td><?php echo $rows['name']; ?></td>
                    <td><?php echo $rows['age']; ?></td>
                    <td><?php echo $rows['gender']; ?></td>
                    </tr>
                    <?php 
                } 
                ?>
                </tbody>

            </table>

        </div>
    </body>
</html>
<?php mysqli_close($conn);?>
