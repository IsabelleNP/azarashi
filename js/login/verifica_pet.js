document.getElementById("btnSubmit").onclick = function() {
    var radios = document.getElementsByName("pets")
    var escolheuDesabilitado = false
    var checked = radios[0]

    for (var i = 1; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = radios[i]
            escolheuDesabilitado = true
        }
    }

    if(escolheuDesabilitado){
      $("#disabledPetModal").modal('show')
    }else{
      window.location.assign("pages/home.html?habit=" + checked.value);
    }
};

document.getElementById("btnContinue").onclick = function() {
  var radios = document.getElementsByName("pets")
  var checked = null

  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          checked = radios[i]
      }
  }
  window.location.assign("pages/home.html?habit=" + checked.value);
}
