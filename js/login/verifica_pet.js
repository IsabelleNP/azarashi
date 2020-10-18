document.getElementById("btnSubmit").onclick = function() {
    var radios = document.getElementsByName("pets")
    var escolheuDesabilitado = false

    for (var i = 1; i < radios.length; i++) {
        if (radios[i].checked) {
            escolheuDesabilitado = true
        }
    }

    if(escolheuDesabilitado){
      $("#disabledPetModal").modal('show')
    }else{
      window.location.assign("pages/home.html");
    }
};
