
```PHP

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">
	// jssdk config 对象
	jssdkconfig = {php echo json_encode($_W['account']['jssdkconfig']);} || {};
	// 是否启用调试
	jssdkconfig.debug = false;
	
	// 这里面便是菜单配置的一些选项
	jssdkconfig.jsApiList = [
		'checkJsApi',
		'onMenuShareTimeline',
		'onMenuShareAppMessage',
		'onMenuShareQQ',
		'onMenuShareWeibo',
		'hideOptionMenu',
		'showOptionMenu'
	];

	wx.config(jssdkconfig);
	require(['jquery', 'util'], function($, util){
		{if $share['share_open_close']==1}
		var sharedata = {
	        "imgUrl" : "{$shareimg}",
	        "link" : "{$sharelink}",
	        "desc" : "{$sharedesc}",
	        "title" : "{$sharetitle}"
	    };
		var share_data = {
			title: sharedata.title,
			desc: sharedata.desc,
			link: sharedata.link,
			imgUrl: sharedata.imgUrl,			    
			{if !empty($share['share_cancel'])}
				// 分享取消
				cancel: function (res) {
			        $("#share_tip").text("{$share['share_cancel']}");
			        $("#share_miao").text("3秒后自动关闭本弹出提示框");
					$("#share_box_tip").show();
			        djstime(3,'秒后自动关闭本弹出提示框','share_miao');
			        setTimeout(function () { 
			            $("#share_box_tip").hide();
			        }, 4000);
			    },
			{/if}
			{if !empty($share['share_fail'])}
				// 分享取消
			    fail: function (res) {
			        $("#share_tip").text("{$share['share_fail']}");
			        $("#share_miao").text("3秒后自动关闭本弹出提示框");
					$("#share_box_tip").show();
			        djstime(3,'秒后自动关闭本弹出提示框','share_miao');
			        setTimeout(function () { 
			            $("#share_box_tip").hide();
			        }, 4000);
			    },
			{/if}
			
			//分享成功// 分享成功了，我们是不是可以做一些分享统计呢？
			success : function(resp) {
				$.getJSON('{php echo $this->createMobileUrl('share_confirm', array('rid' => $rid,'from_user' => $page_from_user))}', function(data){
			    	{if !empty($share['share_confirm'])}
						if(data.success==1) {
                    	    $("#share_tip").text("{$share['share_confirm']}");
			   	     	}else{
			        	    $("#share_tip").text(data.msg);
			    	    }
			    	    $("#share_miao").text("3秒后自动关闭本弹出提示框");
						$("#share_box_tip").show();
			   	        djstime(3,'秒后自动关闭本弹出提示框','share_miao');
			    	    setTimeout(function () {
                    	    $("#share_box_tip").hide();
							{if $share['share_confirmurl']=='活动首页'}
							    location.reload();
							{else if $share['share_confirmurl']=='我的奖品'}
							    window.location.href="{php echo $this->createMobileUrl('myaward', array('rid' => $rid))}";
							{else}
							    window.location.href="{$share['share_confirmurl']}";
							{/if}
                	    }, 4000);
					{/if}
				});
			},
		};
		{/if}
		wx.ready(function () {
			wx.hideOptionMenu();
			{if $share['share_open_close']==1}
			wx.showOptionMenu();
			wx.onMenuShareAppMessage(share_data);
			wx.onMenuShareTimeline(share_data);
			wx.onMenuShareQQ(share_data);
			wx.onMenuShareWeibo(share_data);
			{/if}
		});
	});
	
</script>

```