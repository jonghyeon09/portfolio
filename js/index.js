$(document).ready(function () {
  //타이핑 효과
  const content = "Welcome to my Portfolio";
  const text = document.querySelector(".text");
  let i = 0;

  let tyInt = setInterval(typing, 100);

  function typing() {
    text.innerHTML += content[i++];
    if (i > content.length) {
      text.innerHTML = "";
      i = 0;
    } else if (i == content.length) {
      clearInterval(tyInt, 0);
    }
  }

  //커서
  let target = document.querySelector("#cusor");
  function blink() {
    target.classList.toggle("active");
  }
  setInterval(blink, 500);

  //네비이동
  let offset = 0;
  const bts = document.querySelectorAll(".bt");
  const title = document.querySelector(".nav_title");
  const m_menuh = $("header").height();

  $(title).click(function () {
    offset = $(".home").offset();
    scroll_ani();
  });

  $(bts[0]).click(function () {
    offset = $(".home").offset();
    scroll_ani();
  });
  // $(bts[1]).click(function () {
  //   offset = $(".about").offset();
  //   scroll_ani();
  // });
  $(bts[1]).click(function () {
    offset = $(".skills").offset();
    scroll_ani();
  });
  $(bts[2]).click(function () {
    offset = $(".p_wrap").offset();
    scroll_ani();
  });
  $(bts[3]).click(function () {
    offset = $(".contact").offset();
    scroll_ani();
  });

  function scroll_ani() {
    $("html")
      .stop()
      .animate({ scrollTop: offset.top - m_menuh }, 300);
  }

  // 스크롤 버튼컬러
  const homeh = $(".home").height();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= $(".home").offset().top - m_menuh) {
      $(bts).removeClass("color"); //컬러초기화
      $(bts[0]).addClass("color"); //클릭시 컬러변경
    }
    // if ($(this).scrollTop() >= $(".about").offset().top - m_menuh) {
    //   $(bts).removeClass("color");
    //   $(bts[1]).addClass("color");
    // }
    if ($(this).scrollTop() >= $(".skills").offset().top - m_menuh) {
      $(bts).removeClass("color");
      $(bts[1]).addClass("color");
    }
    if ($(this).scrollTop() >= $(".p_wrap").offset().top - m_menuh) {
      $(bts).removeClass("color");
      $(bts[2]).addClass("color");
    }
    if ($(this).scrollTop() >= $("body").height() - homeh) {
      $(bts).removeClass("color");
      $(bts[3]).addClass("color");
    }
  });

  //스크롤시 네비배경 나타남
  nav();

  function nav() {
    $("header").css("display", "none");
    $(window).scroll(function () {
      let scroll = $(this).scrollTop();
      if (scroll > 1) {
        $("header").css({ display: "block" });
        document.querySelector("header").style.boxShadow =
          "0 2px 2px rgba(0, 0, 0, 0.5)";
      }
      if (scroll == 0) {
        $("header").css("display", "none");
        document.querySelector("header").style.boxShadow = "0 0 0";
      }
    });
  }

  //햄버거메뉴
  const span = document.querySelectorAll("span");
  let bt_count = false;
  let click_ani_time = 300;
  let ani_ing = false;

  $(".h_menu").click(function () {
    if (ani_ing == false) {
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
        top: "calc(50%)",
        transform: "rotate(45deg)",
      });
      $(span[1]).css({
        opacity: "0",
      });
      $(span[2]).css({
        top: "calc(50%)",
        transform: "rotate(-45deg)",
      });
      $(".m_menu").stop().animate(
        {
          right: "0px",
        },
        click_ani_time
      );
    } else {
      bt_count = false;
      $(span[0]).css({
        top: "calc(50% - 10px)",
        transform: "rotate(0deg)",
      });
      $(span[1]).css({
        opacity: "1",
      });
      $(span[2]).css({
        top: "calc(50% + 8px)",
        transform: "rotate(0deg)",
      });
      $(".m_menu").stop().animate(
        {
          right: "-160px",
        },
        click_ani_time
      );
    }
  }
});
