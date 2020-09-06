<html>
  <head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<?php
		include 'data.php';
    ?>
	<script type="text/javascript">
	var data_temp = <?php echo json_encode($temp);?>;

	var data_bar = <?php echo json_encode($bar);?>;

	var data_wet = <?php echo json_encode($wet);?>;
		
	var data_time = <?php echo json_encode($time);?>;

	var len = data_time.length;
		
	window.onload = (function show_temp(){
		for (var i = len-1; i > 0 ; i--) {
			document.getElementById('table').innerHTML += '<td>'+data_time[i]+'</td><td>'+data_temp[i]+' <span>&#176;</span>C</td><td>'+data_bar[i]+' hPa</td><td>'+data_wet[i]+' %</td>';
		}
	})
	</script>
  </head>
  <body>
	<h3>Wszystkie pomiary:</h3>
	<table id="table">
		<tr>
			<th>Data</th>
			<th>Temperatura</th>
			<th>Ciśnienie</th>
			<th>Wilgotność</th>
		</tr>
	</table>
  </body>
</html>