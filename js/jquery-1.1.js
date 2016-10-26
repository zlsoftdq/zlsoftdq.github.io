	var map, toolBar, mouseTool, contextMenu;
	map = new AMap.Map("show_map", {		resizeEnable: true	});	map.plugin(["AMap.ToolBar","AMap.MouseTool"], function(){				toolBar = new AMap.ToolBar(); 		map.addControl(toolBar);			mouseTool = new AMap.MouseTool(map); 		});		var menuContent = document.createElement("div");	menuContent.innerHTML =	"<div class='menu'>"+		"<ul>"+
			"<li onclick='zoomMenu(1)'>放大</li>"+
			"<li onclick='zoomMenu(0)'>缩小</li>"+
			"<li onclick='distanceMeasureMenu()'>测量距离</li>"+
			"<li onclick='addMarkerMenu()'>添加标志位置</li>"+
		"</ul>"+
	"</div>";
	contextMenu = new AMap.ContextMenu({isCustom:true,content:menuContent});	AMap.event.addListener(map, 'rightclick', function(e){		contextMenu.open(map, e.lnglat);		contextMenuPositon = e.lnglat; 	});	contextMenu.close();	function zoomMenu(tag){	if(tag === 0){	map.zoomOut();}		if(tag === 1){	map.zoomIn();}		   contextMenu.close();	}			function distanceMeasureMenu(){		mouseTool.rule();		   contextMenu.close();}		function addMarkerMenu(){		mouseTool.close();		var marker = new AMap.Marker({			map: map,			position: contextMenuPositon, 			icon: "http://webapi.amap.com/images/marker_sprite.png", 
			offset: {x:-8,y:-34}
		});
		contextMenu.close();
	}	$(function(){		$(".s_btn").click(function(){			var text = $(".s_text").val();			 map.setCity(text);		});	});