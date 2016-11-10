##需求
-	按照每过0:00算一天

```PHP
		function maketime($date)
		{
		    list($year, $month, $day) = explode('-', $date);
		    return mktime(0, 0, 0, $month, $day, $year);
		}

		$date1 = '2007-01-08';
		$date2 = '2007-01-09';
		echo $d = (maketime($date2) - maketime($date1)) / (3600 * 24);

```
-	mktime(hour,minute,second,month,day,year,is_dst)函数

-	is_dst 	可选。如果时间在日光节约时间(DST)期间，则设置为1，否则设置为0，若未知，则设置为-1。自 5.1.0 起，is_dst 参数被废弃，因此应该使用新的时区处理特性。