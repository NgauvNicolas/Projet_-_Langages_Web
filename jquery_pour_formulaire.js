$(document).ready(function(){



    $("#thanks").hide() ;

    $("#f1").click(function(){
        $("#f2").hide() ;
        $("#f3").hide() ;
        $("#f4").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;
        //$("p").show() ;
    });

    $("#b1").click(function(){
        $("#b1").hide() ;
        $("#f1").hide() ;
        $("#f3").hide() ;
        $("#f4").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;
        $("#f2").show() ;
    });

    $("#b2").click(function(){
        $("#f2").hide() ;
        $("#f3").hide() ;
        $("#f4").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;
        $("#f1").show() ;
        $("#b1").show() ;
    });

    $("#b3").click(function(){
        $("#f1").hide() ;
        $("#f2").hide() ;
        $("#f4").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;
        $("#f3").show() ;
    });

    $("#b4").click(function(){
        $("#f1").hide() ;
        $("#f3").hide() ;
        $("#f4").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;
        $("#f2").show() ;
    });

    $("#b5").click(function(){
        $("#f1").hide() ;
        $("#f2").hide() ;
        $("#f3").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;
        $("#f4").show() ;
    });

    $("#b6").click(function(){
        $("#f1").hide() ;
        $("#f2").hide() ;
        $("#f4").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;
        $("#f3").show() ;
    });

    $("#b7").click(function(){
        $("#f1").hide() ;
        $("#f2").hide() ;
        $("#f3").hide() ;
        $("#f4").hide() ;
        $("#f6").show() ;
        $("#f5").show() ;
    });


    $("#envoi").click(function(e){ // e est une variable pour récupérer les erreurs potentielles
        
        e.preventDefault(); // Pour que lorsqu'on clique rien ne soit envoyé, 
        // afin de tester (si on récupère bien la valeur de $nom par exemple) : 
        // car un envoi = réinitialisation
        
        //alert("Vous avez envoyé votre formulaire") ;
        //$("p").hide() ;
        //$("p").show() ;

        //var $maVariable = $("p").text() ; 
        // récupère la valeur du paragraphe

        var $nom = $('#nom_utilisateur').val() ;
        alert($nom) ;

        //alert($maVariable) ; 
        // affiche le résultat dans une fenêtre pop-up

        //console.log($maVariable) ;
        // affiche le résultat dans la console de débogage
        //$("p").css("color", "red"); // Ca va devenir rouge

        var $prenom = $('#prenom_utilisateur').val() ;
        alert($prenom) ;
        var $pseudo = $('#pseudo_utilisateur').val() ;
        alert($pseudo) ;

        var $age = $('#age_utilisateur').val() ;
        alert($age) ;
        var $genre = $("input[name='genre']:checked").val() ; // avec l'attribut name
        alert($genre) ;

        var $ad_pr = $('#adresse_pr').val() ;
        alert($ad_pr) ;

        var $ad_comp = $('#adresse_comp').val() ;
        alert($ad_comp) ;

        var $code_p = $('#code_p').val() ;
        alert($code_p) ;

        var $city = $('#city').val() ;
        alert($city) ;

        var $pays = $('#pays').val() ;
        alert($pays) ;

        var $tel = $('#tel').val() ;
        alert($tel) ;

        var $email = $('#e-mail').val() ;
        alert($email) ;

        var $infos_comp = $("input[name='infos']:checked").val() ; // avec l'attribut name
        alert($infos_comp) ;

        var $maVar = $("#menu").val(); 
        // récupère la valeur de l'attribut value (ici, 1, 2, 3 ou 4)
        var $menu = $("#menu option:selected").text(); 
        // récupère la valeur qui s'affiche (entre les balises <option>)
        alert($menu) ;

        var $comment = $('#comment').val() ;
        alert($comment) ;

        var $check = $("input[name='check']:checked").val(); // avec attribut name
        alert($check)

        $("#titre").hide() ;
        $("#b1").hide() ;
        $("#f1").hide() ;
        $("#f2").hide() ;
        $("#f3").hide() ;
        $("#f4").hide() ;
        $("#f5").hide() ;
        $("#f6").hide() ;

        $("#thanks").show() ;

    });
}) ;


