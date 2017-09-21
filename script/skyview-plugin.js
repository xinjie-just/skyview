$(document).ready(function() {
	// 把关于我们的介绍文章部分的排版进行基础设置，避免以后调用没有样式的文章出现	

	// 引导页搜索
	$("#searchIcon").click(function() {
		$("#searchForm").slideToggle(600);
	});
	
	// 无人机页面，无人机和案例的切换
	$("#uavCase li").click(function() {
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");		
	});
	$("#uav").click(function(){
		$("#uavIntro").show();
		$("#caseIntro").hide();
	});
	$("#case").click(function(){
		$("#caseIntro").show();
		$("#uavIntro").hide();
	});

	// 服务切换
	$("#serviceTypeList li").click(function() {
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");
	});	

});