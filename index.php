<html>
  <head>
	<link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="script.js"></script>
	<?php
		include 'data.php';
    ?>
	<script type="text/javascript">
		var data_temp = <?php echo json_encode($temp);?>;

		var data_temp_len = data_temp.length;

		var data_bar = <?php echo json_encode($bar);?>;

		var data_bar_len = data_bar.length;

		var data_wet = <?php echo json_encode($wet);?>;

		var data_wet_len = data_wet.length;
	</script>
  </head>
  <body>
	<h3>Na tej stronie można zobaczyć pomiary z ostatniej godziny</h3>
	<h3>Aby zobaczyć listę wszystkich wykonanych pomiarów kliknij <a href="all.php">TUTAJ</a></h3>
	<h4>Ostatni pomiar: <?php echo end($time); ?>
	<hr>
	<p class="info">Temperatura: <b id="temp_now"></b><b> <span>&#176;</span>C</b></p>
    <div class="chart" id="chart_temp"></div>
	<hr>
	<p class="info">Ciśnienie atmosferyczne: <b id="bar_now"></b><b> hPa</b></p>
	<div class="chart" id="chart_bar"></div>
	<hr>
	<p class="info">Wilgotność powietrza: <b id="wet_now"></b><b> %</b></p>
	<div class="chart" id="chart_wet"></div>
	<hr>
  </body>
</html>
