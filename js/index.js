$(document).ready(function () {

  //타이핑 효과
  const content = "신입 프론트엔드 개발자 정종현입니다";
  const text = document.querySelector(".text");
  let i = 0;

  let tyInt = setInterval(typing, 100);

  function typing() {
    text.innerHTML += content[i++];
    if (i > content.length) {
      text.innerHTML   = ""
      i = 0;
    }else if (i == content.length) {
      clearInterval(tyInt, 0);
    }
  }


  //커서
  let target = document.querySelector("#cusor");
  function blink() {
    target.classList.toggle("active");
  }
  setInterval(blink, 500);

  //눈
  // function createSnow() {
  //   const el = document.createElement("div");
  //   el.classList.add('snow');
  //   document.getElementsByClassName('.wrap').appendChild(el);
  // }
  // createSnow();

  //네비이동
  let offset = 0;
  let bts = document.querySelectorAll(".bt");
  let menu_h = $(".m_menu").height();

  $(bts[0]).click(function () {
    offset = $(".home").offset();
    scroll_ani();
  })
  $(bts[1]).click(function () {
    offset = $(".about").offset();
    scroll_ani();
  })
  $(bts[2]).click(function () {
    offset = $(".skills").offset();
    scroll_ani();
  })
  $(bts[3]).click(function () {
    offset = $(".p_wrap").offset();
    scroll_ani();
  })
  $(bts[4]).click(function () {
    offset = $(".contact").offset();
    scroll_ani();
  })

  function scroll_ani() {
    $("html").stop().animate({scrollTop:offset.top - 60}, 300)
  }

  // $(window).resize(function () {
  //   $('.home').css('height', $(window).height());
  //   });

  //스크롤시 네비배경 나타남
  nav();

  function nav() {
    $(window).scroll(function () {
      let scroll = $(this).scrollTop();
      if (scroll > 100) {
        $("header").css({
          "background-color": "white"
        })
        document.querySelector("header").style.boxShadow = "0 2px 2px rgba(0, 0, 0, 0.5)";
      }
      if (scroll == 0) {
        $("header").css({
          "background-color": "rgba(0, 0, 0, 0)"
        })
        document.querySelector("header").style.boxShadow = "0 0 0";
      }
    })
  };

  //햄버거메뉴
  var span = document.querySelectorAll('span');
  var bt_count = false;
  var click_ani_time = 300;
  var ani_ing = false;


  $(".h_menu").click(function () {
    if (ani_ing == false){
      ani_ing = true;
      h_menu_ani();
      setTimeout(function () {
        ani_ing = false;
      }, click_ani_time);
    }
  });


  function h_menu_ani() {
    if (bt_count == false) {
      bt_count = true;
      $(span[0]).css({
        "top": "calc(50%)",
        "transform": "rotate(45deg)"
      });
      $(span[1]).css({
        "opacity":"0"
      });
      $(span[2]).css({
        "top": "calc(50%)",
        "transform": "rotate(-45deg)"
      });
      $(".m_menu").stop().animate({
        "right": "0px"
      }, click_ani_time);
    }else {
      bt_count = false;
      $(span[0]).css({
        "top": "calc(50% - 10px)",
        "transform": "rotate(0deg)"
      });
      $(span[1]).css({
        "opacity":"1"
      });
      $(span[2]).css({
        "top": "calc(50% + 8px)",
        "transform": "rotate(0deg)"
      });
      $(".m_menu").stop().animate({
        "right": "-160px"
      }, click_ani_time);
    }
  }

});
