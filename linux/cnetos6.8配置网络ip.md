###配置网络


-	
	
	$cd /etc/sysconfig/network-scripts
	$vim ./ifcfg-eth0


			DEVICE=eth0
			HWADDR=10:60:4B:88:8A:D6
			TYPE=Ethernet
			UUID=bf013981-38bd-44c2-b696-094c5a6e3b61
			ONBOOT=yes
			IPADDR=10.1.56.115
			NETMARK=255.255.255.0
			GATEWAY=10.1.56.1
			DNS=218.6.200.139
			NM_CONTROLLED=yes
			BOOTPROTO=none

	
	配置说明：
		IPADDR:ip地址
		NETMARK：掩码
		GATEWAY:网关
		DNS：dns服务器

	一般就只是需要这四个就醒了，我用的学校的网络
	