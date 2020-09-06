google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);
	

      function drawChart() {
		
        var data_temp_chart = google.visualization.arrayToDataTable([
          ['Czas [min]', 'Temperatura [\xB0C]'],
          ['-60 min',  data_temp[data_temp_len - 21]],
          ['-57 min',  data_temp[data_temp_len - 20]],
          ['-54 min',  data_temp[data_temp_len - 19]],
          ['-51 min',  data_temp[data_temp_len - 18]],
		  ['-48 min',  data_temp[data_temp_len - 17]],
          ['-45 min',  data_temp[data_temp_len - 16]],
          ['-42 min',  data_temp[data_temp_len - 15]],
          ['-39 min',  data_temp[data_temp_len - 14]],
		  ['-36 min',  data_temp[data_temp_len - 13]],
          ['-33 min',  data_temp[data_temp_len - 12]],
          ['-30 min',  data_temp[data_temp_len - 11]],
		  ['-27 min',  data_temp[data_temp_len - 10]],
          ['-24 min',  data_temp[data_temp_len - 9]],
          ['-21 min',  data_temp[data_temp_len - 8]],
		  ['-18 min',  data_temp[data_temp_len - 7]],
          ['-15 min',  data_temp[data_temp_len - 6]],
          ['-12 min',  data_temp[data_temp_len - 5]],
          ['-9 min',  data_temp[data_temp_len - 4]],
		  ['-6 min',  data_temp[data_temp_len - 3]],
          ['-3 min',  data_temp[data_temp_len - 2]],
          ['Teraz',  data_temp[data_temp_len - 1]]
        ]);

        var temp_options = {
          title: 'Zmiany temperatury w ciągu ostatniej godziny',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var temp_chart = new google.visualization.LineChart(document.getElementById('chart_temp'));

        temp_chart.draw(data_temp_chart, temp_options);
		
		var data_bar_chart = google.visualization.arrayToDataTable([
          ['Czas [min]', 'Ciśnienie [hPa]'],
          ['-60 min',  data_bar[data_bar_len - 21]],
          ['-57 min',  data_bar[data_bar_len - 20]],
          ['-54 min',  data_bar[data_bar_len - 19]],
          ['-51 min',  data_bar[data_bar_len - 18]],
		  ['-48 min',  data_bar[data_bar_len - 17]],
          ['-45 min',  data_bar[data_bar_len - 16]],
          ['-42 min',  data_bar[data_bar_len - 15]],
          ['-39 min',  data_bar[data_bar_len - 14]],
		  ['-36 min',  data_bar[data_bar_len - 13]],
          ['-33 min',  data_bar[data_bar_len - 12]],
          ['-30 min',  data_bar[data_bar_len - 11]],
		  ['-27 min',  data_bar[data_bar_len - 10]],
          ['-24 min',  data_bar[data_bar_len - 9]],
          ['-21 min',  data_bar[data_bar_len - 8]],
		  ['-18 min',  data_bar[data_bar_len - 7]],
          ['-15 min',  data_bar[data_bar_len - 6]],
          ['-12 min',  data_bar[data_bar_len - 5]],
          ['-9 min',  data_bar[data_bar_len - 4]],
		  ['-6 min',  data_bar[data_bar_len - 3]],
          ['-3 min',  data_bar[data_bar_len - 2]],
		  ['Teraz',  data_bar[data_bar_len - 1]]
        ]);

        var bar_options = {
          title: 'Zmiany ciśnienia atmosferycznego w ciągu ostatniej godziny',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var bar_chart = new google.visualization.LineChart(document.getElementById('chart_bar'));

        bar_chart.draw(data_bar_chart, bar_options);
		
		var data_wet_chart = google.visualization.arrayToDataTable([
          ['Czas [min]', 'Wilgotność [%]'],
          ['-60 min',  data_wet[data_wet_len - 21]],
          ['-57 min',  data_wet[data_wet_len - 20]],
          ['-54 min',  data_wet[data_wet_len - 19]],
          ['-51 min',  data_wet[data_wet_len - 18]],
		  ['-48 min',  data_wet[data_wet_len - 17]],
          ['-45 min',  data_wet[data_wet_len - 16]],
          ['-42 min',  data_wet[data_wet_len - 15]],
          ['-39 min',  data_wet[data_wet_len - 14]],
		  ['-36 min',  data_wet[data_wet_len - 13]],
          ['-33 min',  data_wet[data_wet_len - 12]],
          ['-30 min',  data_wet[data_wet_len - 11]],
		  ['-27 min',  data_wet[data_wet_len - 10]],
          ['-24 min',  data_wet[data_wet_len - 9]],
          ['-21 min',  data_wet[data_wet_len - 8]],
		  ['-18 min',  data_wet[data_wet_len - 7]],
          ['-15 min',  data_wet[data_wet_len - 6]],
          ['-12 min',  data_wet[data_wet_len - 5]],
          ['-9 min',  data_wet[data_wet_len - 4]],
		  ['-6 min',  data_wet[data_wet_len - 3]],
          ['-3 min',  data_wet[data_wet_len - 2]],
          ['Teraz',  data_wet[data_wet_len - 1]]
        ]);

        var wet_options = {
          title: 'Zmiany wilgotności powietrza w ciągu ostatniej godziny',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var wet_chart = new google.visualization.LineChart(document.getElementById('chart_wet'));

        wet_chart.draw(data_wet_chart, wet_options);
		
		
		document.getElementById('temp_now').innerHTML = data_temp[data_temp_len - 1]
		document.getElementById('bar_now').innerHTML = data_bar[data_bar_len - 1]
		document.getElementById('wet_now').innerHTML = data_wet[data_wet_len - 1]
      }
		
		
		