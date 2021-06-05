function home(){
    window.location.href = "http://localhost/e-commerce/";
}

function categorias(param){
    $("main").load("html/principal.html");
    window.location = "?categoria=" + param;
}