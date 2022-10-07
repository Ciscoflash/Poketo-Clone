let innerSecond = $(".innerSecond")
shopAll = $("#shopAll")
papper_Planner = $("#papper_Planner")
Desk_Supplier = $("#Desk_Supplier")
home_Decor = $("#home_Decor")
Apparel_Acc = $("#Apparel_Acc")
finalSale = $("#finalSale")
wholeSale = $("#wholeSale")
login = $("#login")
firstSlider = $("#firstSlider")
hoverServe = $("#hoverServe")
secondHover = $("#secondHover")

$(document).ready(function(){
    // THIS WOULD HIDE THE SECOND NAVIGATION ONLOAD
    innerSecond.hide()

    // THIS WOULD BEGIN TO SHOW THEM ON HOVER
   
    shopAll.on("mouseenter", function(){
        $(".inner1").slideDown()
        $(".inner2").hide()
    })
    $(".secondNav").on("mouseleave", function(){
      $(".inner1").slideUp()
    })
    papper_Planner.on("mouseenter", function(){
      $(".inner1").slideUp()
        $(".inner2").show()
        $(".inner3").slideUp()
    })
    $(".secondNav").on("mouseleave", function(){
        $(".inner2").hide()
    })
    Desk_Supplier.on("mouseenter", function(){
      $(".inner2").hide()
        $(".inner3").slideDown()
        $(".inner4").hide()
    })
    $(".secondNav").on("mouseleave", function(){
        $(".inner3").slideUp()
    })
    home_Decor.on("mouseenter", function(){
      $(".inner3").slideUp()
        $(".inner4").show()
    })
    $(".secondNav").on("mouseleave", function(){
        $(".inner4").hide()
    })
    Apparel_Acc.on("mouseenter", function(){
      $(".inner4").hide()
        $(".inner5").slideDown()
    })
    $(".secondNav").on("mouseleave", function(){
        $(".inner5").slideUp()
    })

    // INITIATING THE SKIPPER METHOD
    // $(".skippr").skippr({
    //     autoPlay : true,
    //     autoPlayDuration : 500,
    //     logs : true,
    //     transition: 'slide',
    //         speed: 500,
    //         easing: 'easeOutQuart',
    //         navType: 'block',
    //         childrenElementType: 'div',
    //         arrows: true,
    //         autoPlayDuration: 5000,
    //         keyboardOnAlways: true,
    //         hidePrevious: false
    // })
    

    // $(".skipper").flickity({
    //   // options
    //   cellAlign: 'left',
    //   contain: true,
    //   autoPlay: true,
    //   pauseAutoPlayOnHover: true
    // });

    
    // HOVER EFFECT HERE
    hoverServe.on("mouseenter", function(){
      $(".opa1").css({
        "width": "100%",
    "height": "530px",
    "background": "rgb(0, 0, 0, .72)",
      })
    })
    hoverServe.on("mouseleave", function(){
      $(".opa1").css({
        "width": "100%",
    "height": "530px",
    "background": "transparent",
      })
    })

    // THIS IS FOR THE SECOND EFFECT
    secondHover.on("mouseenter", function(){
      $(".secondOpa2").css({
        "width": "100%",
    "height": "530px",
    "background": "rgb(0, 0, 0, .72)",
      })
    })
    secondHover.on("mouseleave", function(){
      $(".secondOpa2").css({
        "width": "100%",
    "height": "530px",
    "background": "transparent",
      })
    })

})

// THIS IS THE HOVER ANIMATION EFFECT FOR THE STATIONARIES
$(".column3Opacity").on("mouseenter", function(){
  $(".firstRow").css({
    "transform": "scale(1.1)",
    "overflow": "hidden",
  })
})
$(".column3Opacity").on("mouseleave", function(){
  $(".firstRow").css({
    "transform": "scale(1)",
    "overflow": "hidden",
  })
})
$(".column3Opacity2").on("mouseenter", function(){
  $(".topColumn").css({
    "transform": "scale(1.1)",
    "overflow": "hidden",
  })
})
$(".column3Opacity2").on("mouseleave", function(){
  $(".topColumn").css({
    "transform": "scale(1)",
    "overflow": "hidden",
  })
})
$(".column3Opacity3").on("mouseenter", function(){
  $(".bottomColumn").css({
    "transform": "scale(1.1)",
    "overflow": "hidden",
  })
})
$(".column3Opacity3").on("mouseleave", function(){
  $(".bottomColumn").css({
    "transform": "scale(1)",
    "overflow": "hidden",
  })
})
// ANIMATION FOR SECTION 3 ENDS HERE

$(".firstImg").on("mouseenter", function(){
  $(".firstOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Spectrum-Wall-Planner-Lifestyle_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".firstShop").fadeIn(500)
})
$(".firstImg").on("mouseleave", function(){
  $(".firstOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".firstShop").fadeOut(500)
})
$(".secondImg").on("mouseenter", function(){
  $(".secondOpacity").css({
    "width": "80%",
    "background-image": "url(../images/New-Stationery-lifestyle_5c00770b-2428-4f2a-8392-95fade20f28b_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".secondShop").fadeIn(500)
})
$(".secondImg").on("mouseleave", function(){
  $(".secondOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".secondShop").fadeOut(500)
})
$(".thirdImg").on("mouseenter", function(){
  $(".thirdOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Self-Planner-NL-04_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".thirdShop").fadeIn(500)
})
$(".thirdImg").on("mouseleave", function(){
  $(".thirdOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".thirdShop").fadeOut(500)
})
$(".fourthImg").on("mouseenter", function(){
  $(".fourthOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Creativity-Journal-NL-01_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".fourthShop").fadeIn(500)
})
$(".fourthImg").on("mouseleave", function(){
  $(".fourthOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".fourthShop").fadeOut(500)
})

$(".Anchors").hide()
// THIS IS THE HOVER FOR THE LANDING PRODUCTS
$(".firstImg").on("mouseenter", function(){
  $(".firstOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Spectrum-Wall-Planner-Lifestyle_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".firstShops").fadeIn(500)
})
$(".firstImg").on("mouseleave", function(){
  $(".firstOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".firstShops").fadeOut(500)
})
$(".secondImg").on("mouseenter", function(){
  $(".secondOpacity").css({
    "width": "80%",
    "background-image": "url(../images/New-Stationery-lifestyle_5c00770b-2428-4f2a-8392-95fade20f28b_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".secondShops").fadeIn(500)
})
$(".secondImg").on("mouseleave", function(){
  $(".secondOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".secondShops").fadeOut(500)
})
$(".thirdImg").on("mouseenter", function(){
  $(".thirdOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Self-Planner-NL-04_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".thirdShops").fadeIn(500)
})
$(".thirdImg").on("mouseleave", function(){
  $(".thirdOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".thirdShops").fadeOut(500)
})
$(".fourthImg").on("mouseenter", function(){
  $(".fourthOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Creativity-Journal-NL-01_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".fourthShops").fadeIn(500)
})
$(".fourthImg").on("mouseleave", function(){
  $(".fourthOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".fourthShops").fadeOut(500)
})
$(".fifthImg").on("mouseenter", function(){
  $(".fifthOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Dome-Wallets-Group-1x1_183c0a8e-613b-436b-beb0-708851058620_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".fifthShops").fadeIn(500)
})
$(".fifthImg").on("mouseleave", function(){
  $(".fifthOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".fifthShops").fadeOut(500)
})
$(".sixthImg").on("mouseenter", function(){
  $(".sixthOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Dome-Wallet-Yellow-Open_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".sixthShops").fadeIn(500)
})
$(".sixthImg").on("mouseleave", function(){
  $(".sixthOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".sixthShops").fadeOut(500)
})
$(".seventhImg").on("mouseenter", function(){
  $(".seventhOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Dome-Wallet-Hand-Model-Red_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".seventhShops").fadeIn(500)
})
$(".seventhImg").on("mouseleave", function(){
  $(".seventhOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".seventhShops").fadeOut(500)
})
$(".eightImg").on("mouseenter", function(){
  $(".eightOpacity").css({
    "width": "80%",
    "background-image": "url(../images/Dome-Wallet-Navy-Open_480x.jpg)",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "height": "210px",
    "position": "absolute",
    "top": "0",
    "left": "30px",
    "margin-top": "10px",
  })
  $(".eightShops").fadeIn(500)
})
$(".eightImg").on("mouseleave", function(){
  $(".eightOpacity").css({
    "width": "70%",
    "background": "transparent",
  })
  $(".eightShops").fadeOut(500)
})



// FOOTER TOP-RIGHT HOVER EFFECT 
$(".topColumn5Opacity").on("mouseenter", function(){
  $(".topColumn5").css({
    "transform": "scale(1.1)",
  "overflow": "hidden"
  })
})
$(".topColumn5Opacity").on("mouseleave", function(){
  $(".topColumn5").css({
    "transform": "scale(1)",
  "overflow": "hidden"
  })
})
$(".bottomColumn5Opacity").on("mouseenter", function(){
  $(".bottomColumn5").css({
    "transform": "scale(1.1)",
  "overflow": "hidden"
  })
})
$(".bottomColumn5Opacity").on("mouseleave", function(){
  $(".bottomColumn5").css({
    "transform": "scale(1)",
  "overflow": "hidden"
  })
})


// THIS IS FOR THE PRODUCT PAGE
$(document).ready(function(){
  $(".productPage").hide()

  $(".shops").on("click", function(){
    $(".productPage").show()
  })

  $(".Exit").on("click", function(){
    $(".productPage").hide()
  })
})