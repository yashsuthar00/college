<?php
$conn = new mysqli("localhost","root","","iu297");

if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM ys";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
    echo "<table border='1'>
    <tr>
    <th> IU</th>
    <th>NAME </th>
    <th>BRANCH</th>
    <th>EMAIL</th>
    </tr>";
    while ($row = $result->fetch_assoc())
    {
        echo "<tr><td>" . $row['IU'] . "</td>
        <td>" . $row['NAME'] . "</td>
        <td>" . $row['BRANCH'] . "</td>
        <td>" . $row['EMAIL'] . "</td>
        </tr>";
    }
    echo "</table>";
}
else
{
    echo "No records found";
}
$conn->close();
?>
