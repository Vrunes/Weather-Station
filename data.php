<?php
			$temp = [];
			$bar = [];
			$wet = [];
			$time = [];
            if ($file = fopen('T_all.txt', 'r')) {
				while (!feof($file)) {
					$line = fgets($file);
					$val = floatval ($line);
					array_push($temp, $val);
				}
				fclose($file);
			}
			array_pop($temp);
			
			if ($file = fopen('C_all.txt', 'r')) {
				while (!feof($file)) {
					$line = fgets($file);
					$val = floatval ($line);
					array_push($bar, $val);
				}
				fclose($file);
			}
			array_pop($bar);
			
			if ($file = fopen('W_all.txt', 'r')) {
				while (!feof($file)) {
					$line = fgets($file);
					$val = floatval ($line);
					array_push($wet, $val);
				}
				fclose($file);
			}
			array_pop($wet);
			
			if ($file = fopen('date.txt', 'r')) {
				while (!feof($file)) {
					$line = fgets($file);
					array_push($time, $line);
				}
				fclose($file);
			}
			array_pop($time);
        ?>