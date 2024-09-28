$(document).ready(function(){

    $(".rōmaji").hide();
    $(".japonais").hide();
    $(".traduction").hide();
    $(".detailBio").hide() ;
   
    $("#vert").click(function(){
        alert("Vous avez cliqué sur le paragraphe de la catégorie 'STATUT' : il va devenir vert et les titres de toutes les parties deviendront violettes") ;
        //$("p").hide() ;
        //$("p").show() ;

        var $maVariable = $("#vert").text() ; 
        // récupère la valeur du paragraphe

        alert($maVariable) ; 
        // affiche le résultat dans une fenêtre pop-up

        console.log($maVariable) ;
        // affiche le résultat dans la console de débogage
        $("#vert").css("color", "green"); // Ca va devenir vert
        $("h4").css("color", "purple");

    });




    $("#g").hover(function(){
        alert("Vous avez passé la souris sur le 1er paragraphe de l'introduction de la biographie du groupe : il va être écrit en gras ") ;
        $("#g").addClass("gras");
    });


    $("#b2").dblclick(function(){
        alert("Vous avez double-cliqué sur la liste des 'EX-Membres' : la liste des ex-membres va disparaitre...") ;
        $("#b2").hide();
    });

    $(".rom").hover(function(){
        $(".rōmaji").show();
    });
    $(".jap").hover(function(){
        $(".japonais").show();
    });
    $(".trad").hover(function(){
        $(".traduction").show();
    });


    $(".color1").dblclick(function(){
        /*$(".color1").addClass("color2");*/
        $(".color1").addClass("color4");
        /*$(".color4").removeClass("color1");*/
        $(".color2").addClass("color3");
        /*$(".color3").removeClass("color2");*/
        /*$(".color2").removeClass("color1");*/
    });

    $(".color2").dblclick(function(){
        /*$(".color2").addClass("color1");*/
        $(".color2").addClass("color3");
        /*$(".color3").removeClass("color2");*/
        $(".color1").addClass("color4");
        /*$(".color1").removeClass("color4");*/
        /*$(".color1").removeClass("color2");*/
    });

    $(".color3").dblclick(function(){
        /*$(".color1").addClass("color2");*/
        $(".color3").addClass("color2");
        /*$(".color2").removeClass("color3");*/
        $(".color4").addClass("color1");
        /*$(".color1").removeClass("color4");*/
        /*$(".color2").removeClass("color1");*/
    });

    $(".color4").dblclick(function(){
        /*$(".color2").addClass("color1");*/
        $(".color4").addClass("color1");
        /*$(".color1").removeClass("color4");*/
        $(".color3").addClass("color2");
        /*$(".color2").removeClass("color3");*/
        /*$(".color1").removeClass("color2");*/
    });


    $("#ajout_texte").dblclick(function(){
        $("p").append("<p>&#x1F308;</p>");
        $("#ajout_texte").append("<h1>&#x1F338</h1>");
    });


    $(".detailBi").click(function(){
        $(".detailBio").show() ;
    });

}) ;