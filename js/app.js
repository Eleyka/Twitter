

window.addEventListener('load', function() {
  // seleccionando los elementos del DOM
  var nameContact = document.getElementById('name');
  var btnSave = document.getElementById('save');
  var containerContact = document.getElementById('container-contact');

  // agregando evento click al boton Guardar
  btnSave.addEventListener('click', function(event) {
    // previniendo la acción por defecto que tiene el botón: recargar.
    event.preventDefault();

    // creando elemento contenedor 'li' del nuevo contacto
    var newContact = document.createElement('li');

    // creando span de Name
    var newName = document.createElement('span');
    newName.setAttribute('class', 'contact-name');
    newName.textContent = time() + '   ' + nameContact.value;
    newContact.appendChild(newName);

    // insertando el nuevo contacto arriba del elemento anterior
    containerContact.insertBefore(newContact, containerContact.firstElementChild);
  });
});

function validar() {
  var text1 = document.getElementById('name');

  if (text1.value !== '') {
    document.getElementById('save').disabled = '';
  } else {
    document.getElementById('save').disabled = 'disabled';
  }
}
/* Al contador regresivo se le da sus diferentes colores */
function cuenta() {
  var longitud = 140;
  var resta = '';
  var obs = document.getElementById('name').value.length;
  resta = longitud - obs;
  if (obs > 140) {
    document.getElementById('save').disabled = 'disabled';
  } else if (obs > 130 && obs <= 140) {
    document.getElementById('mostrar-caracteres').style.color = '#ab8b6f';
  }
  else if (obs > 120 && obs <= 130) {
    document.getElementById('mostrar-caracteres').style.color = '#f17c72';
  }
  document.getElementById('mostrar-caracteres').value = resta;
}

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);

/* Definiendo tamaño de mi texarea */
function autosize() {
  var el = this;
  setTimeout(function() {
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}
/* Limpia el campo de texto */
function clear() {
  document.querySelector('#text').value = '';
  span.textContent = '';
}

/* Captura de la hora del Tweet */
function time() {
  var date = new Date();
  var hours = date.getHours();
  var min = date.getMinutes();
  var time;
  if (min < 10) {
    min = '0' + min;
  }
  if (hours >= 12 && hours <= 24) {
    time = hours + ':' + min + ' PM';
  } else {
    time = hours + ':' + min + ' AM';
  }
  return time;
}