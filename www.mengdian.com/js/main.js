$(function() {
  var bgColor = ['#3e3235','#989088','#a59c6c','#9b8c7d','#9c8f80'];
  var container=$(".layout.top-banner");
  if(!container.hasClass("no-change")){
    container.css({
      background:bgColor[0]
    });
  }
  
  var bannerNow = 1;
  var bannerNum = $(".banner-icons li").length;
  var brandNow = 1;
  var brandNum = $(".brand-icons li").length;
//首页
  if (bannerNum||brandNum) {
    function gotoBanner(num) {
      $(".banner-ul .now").removeClass("now");
      $(".banner-ul .banner-li" + num).addClass("now");
      $(".banner-icons .now img").attr("src", "img/slide-icon.png");
      $(".banner-icons .now").removeClass("now");
      $(".banner-icons .icons" + num + " img").attr("src", "img/slide-icon2.png");
      $(".banner-icons .icons" + num).addClass("now");
      //头部banner 颜色
      if(!container.hasClass("no-change")){
        if(num == 1){
            container.css({
              background:bgColor[0]
            });
          }else{
            container.css({
              background:bgColor[num - 1]
            });
          }
        }
      }

    function gotoBrand(num) {
      $(".brand-box.now").removeClass("now");
      $(".brand-box.brand-box" + num).addClass("now");
      $(".brand-icons .now img").attr("src", "img/slide-icon3.png");
      $(".brand-icons .now").removeClass("now");
      $(".brand-icons .icons" + num + " img").attr("src", "img/slide-icon4.png");
      $(".brand-icons .icons" + num).addClass("now");
    }
    $(".brand-icons li").each(function(index) {
      var i = index + 1;
      $(this).click(function() {
        brandNow = i;
        gotoBrand(i);
      });
    });
    $(".banner-icons li").each(function(index) {
      var i = index + 1;
      $(this).click(function() {
        bannerNow = i;
        gotoBanner(i);
      });
    });
    setInterval(function() {
      bannerNow++;
      brandNow++;
      if (bannerNow > bannerNum) {
        bannerNow = 1;
      }
      if (brandNow > brandNum) {
        brandNow = 1;
      }
      gotoBanner(bannerNow);
      gotoBrand(brandNow);
    }, 6000);

    $(".post a").click(function() {
      $(".mask").show();
      $("html,body").animate({
        scrollTop: 0
      }, 10);
    });
    $(".post-close").click(function() {
      $(".mask").hide();
    });
  }

  var winh = $(window).height();
  var $backToTopEle = $("#icon_top");
  //返回顶部
  if ($backToTopEle.length) {
    $backToTopEle.on("click", function() {
      $("html,body").animate({
        scrollTop: 0
      }, 300);
    })
    var $backToTopFun = function() {
      var st = $(document).scrollTop();
      (st > winh) ? $backToTopEle.fadeIn(): $backToTopEle.fadeOut();
      if (!window.XMLHttpRequest) {
        $backToTopEle.css("top", st + winh - 166);
      }
    };
    $(window).bind("scroll", $backToTopFun);
    $backToTopFun();
  }

  //关闭首页弹窗
  $('.tanceng .mc .img .close_btn').on('click',function(){
    $('.tanceng').fadeOut();
  })


//帮助
$(".topic").click(function(){
  if($(this).parent(".question").hasClass("now")){
    $(this).parent(".question").removeClass("now");
  }else{
    $(".question.now").removeClass("now");
    $(this).parent(".question").addClass("now");
  }
});
$(".que-close").click(function(){
  $(this).parents(".question").removeClass("now");
});

//slef
$(function(){
  $(".self-nav1").mouseenter(function(){
    $(".now").removeClass("now");
    $(".self-nav1").addClass("now");
    $(".self-cont1").addClass("now");
  });
  $(".self-nav2").mouseenter(function(){
    $(".now").removeClass("now");
    $(".self-nav2").addClass("now");
    $(".self-cont2").addClass("now");
  });
  $(".self-nav3").mouseenter(function(){
    $(".now").removeClass("now");
    $(".self-nav3").addClass("now");
    $(".self-cont3").addClass("now");
  });
});

});
