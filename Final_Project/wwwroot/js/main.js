/*start jquery code*/

/************ OWL carousel *****************/

/*$(document).ready(function () {
    $("p").css("background-color", "red");
});*/

/*********tooltip*********** */

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/* forth popup */

$(document).ready(function () {
  $("a#open-popup").click(function () {
    $("#popup-list").toggle("slow");
  });
});

$(document).ready(function () {
  $("a#open-popup2").click(function () {
    $("#popup-list2").toggle("slow");
  });
});
$(document).ready(function () {
  $("a#open-popup3").click(function () {
    $("#popup-list3").toggle("slow");
  });
});
$(document).ready(function () {
  $("a#open-popup4").click(function () {
    $("#popup-list4").toggle("slow");
  });
});

/******add new skill*******/

$(document).ready(function () {
  $("#show-drop-down").click(function () {
    $("#your-list").toggle("slow");
  });
});

$(document).ready(function () {
  $("#show-drop-down-ul").click(function () {
    $("#your-list-ul").toggle("slow");
  });
});

$(document).ready(function () {
  var maxField = 10; //Input fields increment limitation
  var addButton = $(".add_button"); //Add button selector
  var wrapper = $(".field_wrapper"); //Input field wrapper
  var fieldHTML =
    '<div><input type="text" class="form-control" style="margin-top:20px" form="f" placeholder="Add New Skills "name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button mt-3"><i class="fas fa-times remove"></i></a></div>'; //New input field html
  var x = 1; //Initial field counter is 1

  //Once add button is clicked
  $(addButton).click(function () {
    //Check maximum number of input fields
    if (x < maxField) {
      x++; //Increment field counter
      $(wrapper).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(wrapper).on("click", ".remove_button", function () {
    $(this).parent("div").remove(); //Remove field html
    x--; //Decrement field counter
  });
});

/* add new email student */

$(document).ready(function () {
  var maxField = 20; //Input fields increment limitation
  var addskills = $(".add_skills"); //Add button selector
  var student_filed = $(".student-filed"); //Input field wrapper
  var fieldHTML =
    '<div><input type="text" class="form-control" style="margin-top:20px" form="f"  placeholder="Enter skill "name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button mt-3"><i class="fas fa-times remove "></i></a></div>'; //New input field html
  var x = 0; //Initial field counter is 0

  //Once add button is clicked
  $(addskills).click(function () {
    //Check maximum number of input fields
    if (x < maxField) {
      x++; //Increment field counter
      $(student_filed).append(fieldHTML); //Add field html
    }
  });

  //Once remove button is clicked
  $(student_filed).on("click", ".remove_button", function () {
    $(this).parent("div").remove(); //Remove field html
    x--; //Decrement field counter
  });
});

/* two tabs action  && show and hide content*/

$(document).ready(function () {
  $("#tab1").click(function () {
    $("#tab1").css({
      "border-width": "2px 2px 0px 2px",
      "border-style": "solid",
      "border-color": "rgb(225 225 225)",
    });
    $("#tab2").css("border", "0px");
    $("#content1").show();
    $("#content2").hide();
  });
});

$(document).ready(function () {
  $("#tab2").click(function () {
    $("#tab2").css({
      "border-width": "2px 2px 0px 2px",
      "border-style": "solid",
      "border-color": "rgb(225 225 225)",
    });
    $("#tab1").css("border", "0px");
    $("#content2").show();
    $("#content1").hide();
  });
});

/**********Cancel Default Action************/

$("#tab2").on("click", function (event) {
  // remove default of the click
  event.preventDefault();
  // stop propagation
  event.stopPropagation();
});

$("#tab1").on("click", function (event) {
  // remove default of the click
  event.preventDefault();
  // stop propagation
  event.stopPropagation();
});

$("#link").on("click", function (event) {
  // remove default of the click
  event.preventDefault();
  // stop propagation
  event.stopPropagation();
});
$("#t1").on("click", function (event) {
  // remove default of the click
  event.preventDefault();
  // stop propagation
  event.stopPropagation();
});
$("#t2").on("click", function (event) {
  // remove default of the click
  event.preventDefault();
  // stop propagation
  event.stopPropagation();
});
$("#t3").on("click", function (event) {
  // remove default of the click
  event.preventDefault();
  // stop propagation
  event.stopPropagation();
});

$(document).ready(function () {
  $("#tab-btn1").click(function () {
    $("#tab-btn1").css({
      "border-width": "2px 2px 0px 2px",
      "border-style": "solid",
      "border-color": "rgb(225 225 225)",
    });
    $("#tab-btn2").css("border", "0px");
    $("#tab-btn3").css("border", "0px");
    $("#tab-btn4").css("border", "0px");
    $("#contents1").show();
    $("#contents2").hide();
    $("#contents3").hide();
    $("#contents4").hide();
  });
});

$(document).ready(function () {
  $("#tab-btn2").click(function () {
    $("#tab-btn2").css({
      "border-width": "2px 2px 0px 2px",
      "border-style": "solid",
      "border-color": "rgb(225 225 225)",
    });
    $("#tab-btn1").css("border", "0px");
    $("#tab-btn3").css("border", "0px");
    $("#tab-btn4").css("border", "0px");
    $("#contents2").show();
    $("#contents1").hide();
    $("#contents3").hide();
    $("#contents4").hide();
  });
});

$(document).ready(function () {
  $("#tab-btn3").click(function () {
    $("#tab-btn3").css({
      "border-width": "2px 2px 0px 2px",
      "border-style": "solid",
      "border-color": "rgb(225 225 225)",
    });
    $("#tab-btn1").css("border", "0px");
    $("#tab-btn2").css("border", "0px");
    $("#tab-btn4").css("border", "0px");

    $("#contents3").show();
    $("#contents1").hide();
    $("#contents2").hide();
    $("#contents4").hide();
  });
});

$(document).ready(function () {
  $("#tab-btn4").click(function () {
    $("#tab-btn4").css({
      "border-width": "2px 2px 0px 2px",
      "border-style": "solid",
      "border-color": "rgb(225 225 225)",
    });
    $("#tab-btn1").css("border", "0px");
    $("#tab-btn2").css("border", "0px");
    $("#tab-btn3").css("border", "0px");
    $("#contents4").show();
    $("#contents1").hide();
    $("#contents2").hide();
    $("#contents3").hide();
  });
});

$(document).ready(function () {
  $("#t1").click(function () {
    $("#details").show();
    $("#details2").hide();
    $("#details1").hide();
  });
});

$(document).ready(function () {
  $("#t2").click(function () {
    $("#details1").show();
    $("#details2").hide();
    $("#details").hide();
  });
});

$(document).ready(function () {
  $("#t3").click(function () {
    $("#details2").show();
    $("#details").hide();
    $("#details1").hide();
  });
});

let list = document.querySelectorAll(".navigations li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigations = document.querySelector(".navigations");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigations.classList.toggle("active");
  main.classList.toggle("active");
};

/*
$(document).ready(function () {
    $(".baner-slider").owlCarousel({
        loop: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: false,
            },
        },
    });
});

$(document).ready(function () {
    $(".new-arrive").owlCarousel({
        loop: false,
        autoplay: false,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
            },
        },
    });
});
$(document).ready(function () {
    $(".new-arrive").owlCarousel({
        loop: false,
        autoplay: false,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
            },
        },
    });
});

$(document).ready(function () {
    $(".soon-arrive").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        dots: false,
        items: 1,
        autoplayTimeout: 2000,
        autoplaySpeed: 500,
    });
});
*/
/************************ Start Tabs Slider *********************/
/*$(document).ready(function () {
    $(".featured").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,

        responsive: {
            0: {
                items: 2,
                nav: true
            },
            765: {
                items: 3,
                nav: true
            },
            990: {
                items: 4,
                nav: true
            },
        },
    });
});

$(document).ready(function () {
    $(".best-seller").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            765: {
                items: 3,
                nav: true
            },
            990: {
                items: 4,
                nav: true
            },
        },
    });
});

$(document).ready(function () {
    $(".top-rated").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,

        responsive: {
            0: {
                items: 2,
                nav: true
            },
            765: {
                items: 3,
                nav: true
            },
            990: {
                items: 4,
                nav: true
            },
        },
    });
});

$(document).ready(function () {
    $(".mostviewed").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            765: {
                items: 3,
                nav: true
            },
            990: {
                items: 4,
                nav: true
            },
        },
    });
});
*/
/************************ End Tabs Slider *********************/

/****************** start offer slidre ****************/
/*$(document).ready(function () {
    $(".offer").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 10,
        dots: false,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            },
        },
    });
});
*/
/**********************************About page owl**********************/
/******* our team slider ********/
/*$(document).ready(function () {
    $(".team").owlCarousel({
        loop: true,
        // autoplay:true,
        // autoplayTimeout:6000,
        // autoplaySpeed:1500,
        autoplayHoverPause: true,
        margin: 20,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
        },
    });
});
*/
/****************** start offer code img change ****************/
/*$(document).ready(function () {
    $(".small-img").click(function () {
        var imgSrc = $(this).attr("src");
        $(".top-img").attr("src", imgSrc);
    });
});
*/
/****************** end offer slidre ****************/

/******************** start testmonial slider ******************/

/*$(document).ready(function () {
    $(".jumbotron").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
    });
});

// $(document).ready(function(){
//     $('.hellow').owlCarousel({
//     loop:true,
//     items:1,
//     autoplay:true,
//     autoplayTimeout:5000,
//     autoplaySpeed:1500,
//     autoplayHoverPause:true,

//     })
// });
*/
/******************** end testmonial slider ******************/

/********************* start top category slider ***************/

/*$(document).ready(function () {
    $(".categ1").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
    });
});

$(document).ready(function () {
    $(".categ2").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
    });
});

$(document).ready(function () {
    $(".categ3").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
    });
});
*/
/********************* end top category slider ***************/

/************************* start brands slider******************/
/*$(document).ready(function () {
    $(".brand").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 6,
                nav: false,
            },
        },
    });
});*/
/************************* end brands slider******************/

/************************* start related products slider******************/

/*$(document).ready(function () {
    $(".related").owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
                nav: true
            },
        },
    });
});*/
/************************* end related products slider******************/

/***************** end OWL carousel *****************/

/*$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});*/

/*********************** start jquery code ****************/
/*$(document).ready(function () {
    $("#user").click(function () {
        $("#log-regi").toggle("slow");
    });

    $("#cart , #cart-items").hover(function () {
        $("#cart-items").toggle();
    });

    $("#wish-list , #wish-list-items").hover(function () {
        $("#wish-list-items").toggle();
    });
*/
/*******************************************************/
//    $("#shop").hover(function(){
//  $(".shop-category").toggle('slow');
//  });
/*});
 */
/**************************************************************************/
/****************** register validation *****************/
/*$(document).ready(function () {
    $(" #name").blur(function () {
        if ($("#name").val() != "") {
            $(this).css("border-color", "green");
            $(".register .fa-user").css("color", "green");
            $("p.name").addClass("d-none");
        } else {
            $(this).css("border-color", "red");
            $(".register .fa-user").css("color", "red");
            $("p.name").removeClass("d-none");
        }
    });

    $("#email").blur(function () {
        if ($("#email").val() != "") {
            $(this).css("border-color", "green");
            $(".register .fa-at").css("color", "green");
            $("p.email").addClass("d-none");
        } else {
            $(this).css("border-color", "red");
            $(".register .fa-at").css("color", "red");
            $("p.email").removeClass("d-none");
        }
    });

    $("#pass").blur(function () {
        if ($("#pass").val() != "") {
            $(this).css("border-color", "green");
            $(".register .fa-unlock").css("color", "green");
            $("p.pass").addClass("d-none");
        } else {
            $(this).css("border-color", "red");
            $(".register .fa-unlock").css("color", "red");
            $("p.pass").removeClass("d-none");
        }
    });

    $("#re-pass").change(function () {
        if ($("#pass").val() == $("#re-pass").val()) {
            $(this).css("border-color", "green");
            $(".register .fa-undo").css("color", "green");
            $("p.re-pass").addClass("d-none");
        } else {
            $(this).css("border-color", "red");
            $(".register .fa-undo").css("color", "red");
            $("p.re-pass").removeClass("d-none");
        }
    });

    $(".register button").click(function () {
        if ($("#name").val() != "") {
            if ($("#email").val() != "") {
                if ($("#pass").val() != "") {
                    if ($("#re-pass").val() != "") {
                        alert("good");
                    } else {
                        alert("re pass empty");
                    }
                } else {
                    alert("pass empty");
                }
            } else {
                alert("email empty");
            }
        } else {
            alert("name empty");
        }
    });
});
*/
/****************** login validation *****************/
/*$(document).ready(function () {
    $("#lo-email").blur(function () {
        if ($("#lo-email").val() != "") {
            $(this).css("border-color", "green");
            $(".login .fa-at").css("color", "green");
            $("p.lo-email").addClass("d-none");
        } else {
            $(this).css("border-color", "red");
            $(".login .fa-at").css("color", "red");
            $("p.lo-email").removeClass("d-none");
        }
    });

    $("#lo-pass").blur(function () {
        if ($("#lo-pass").val() != "") {
            $(this).css("border-color", "green");
            $(".login .fa-unlock-alt").css("color", "green");
            $("p.lo-pass").addClass("d-none");
        } else {
            $(this).css("border-color", "red");
            $(".login .fa-unlock-alt").css("color", "red");
            $("p.lo-pass").removeClass("d-none");
        }
    });

    $(".login button").click(function () {
        if ($("#lo-email").val() != "") {
            if ($("#lo-pass").val() != "") {
                alert("good");
            } else {
                alert(" pass empty");
            }
        } else {
            alert("email empty");
        }
    });
});

/**********************************shop page*************** */
/*$(document).ready(function () {
    $(".filter-icon").click(function () {
        $("#aside").toggleClass("aside-show");
        $("#aside").toggleClass("d-none col-3");
        $(".filter-icon").toggleClass("left-filter-icon");
        // if ($(window).width() > 765) {
        //     alert('hi')
        //     // $('#aside').addClass('d-none col-3');
        // }
    });
});

/**** filter price ****/
/*$(document).ready(function () {
    $("#myRange").on("input", function () {
        var val = $(this).val();
        $("#price").text(val);
    });
});

/**********************************cart page ******************* */
/*$(document).ready(function () {});

var count = parseInt($("#jq-quant").val()),
    price = parseInt($(".price").html()),
    totalPrice = $("#total-price");

$("#plus").click(function () {
    if (count >= 1) {
        $("#jq-quant").val((count += 1));
        totalPrice.html(parseInt(totalPrice.html()) + price);
    }
});

$("#sub").click(function () {
    if (count > 1) {
        $("#jq-quant").val((count -= 1));

        totalPrice.html(parseInt(totalPrice.html()) - price);
    }
});

/**************************single product page ************************* */

/* *********  F.A.Q CODE                      *************** */
/*$(document).ready(function () {
    $("#item-five").click(function () {
        $(".accordion1").fadeIn();
        $(".accordion2").hide();
        $(".accordion3").hide();
        $(".accordion4").hide();
        $(".accordion5").hide();
    });
    $("#item-four").click(function () {
        $(".accordion2").fadeIn();
        $(".accordion1").hide();
        $(".accordion3").hide();
        $(".accordion4").hide();
        $(".accordion5").hide();
    });
    $("#item-three").click(function () {
        $(".accordion3").fadeIn();
        $(".accordion1").hide();
        $(".accordion2").hide();
        $(".accordion4").hide();
        $(".accordion5").hide();
    });
    $("#item-two").click(function () {
        $(".accordion4").fadeIn();
        $(".accordion3").hide();
        $(".accordion1").hide();
        $(".accordion2").hide();
        $(".accordion5").hide();
    });
    $("#item-one").click(function () {
        $(".accordion5").fadeIn();
        $(".accordion4").hide();
        $(".accordion3").hide();
        $(".accordion1").hide();
        $(".accordion2").hide();
    });
});

/************ contact page */

/*$(document).ready(function () {
    $(".span").click(function () {
        //            $("#show").toggleClass("drobdown");

        $("#face").fadeToggle();
        $("#twit").fadeToggle(500);
        $("#inst").fadeToggle(1000);
    });
});
*/
