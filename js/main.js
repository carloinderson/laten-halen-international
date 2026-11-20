/* Laten Halen International - kleine interacties */
(function () {
  'use strict';

  // Startpagina: een geplakte link gaat mee naar het aanvraagformulier.
  var heroLink = document.getElementById('hero-link');
  if (heroLink) {
    var meenemen = function (e) {
      var waarde = heroLink.value.trim();
      if (!waarde) return;
      try { sessionStorage.setItem('lhi-link', waarde); } catch (err) {}
    };
    var knop = heroLink.parentNode.querySelector('a[href="aanvraag.html"]');
    if (knop) knop.addEventListener('click', meenemen);
    heroLink.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { meenemen(); window.location.href = 'aanvraag.html'; }
    });
  }

  // Aanvraagpagina: de meegenomen link staat alvast ingevuld.
  var formLink = document.getElementById('f-link');
  if (formLink && !formLink.value) {
    try {
      var bewaard = sessionStorage.getItem('lhi-link');
      if (bewaard) { formLink.value = bewaard; sessionStorage.removeItem('lhi-link'); }
    } catch (err) {}
  }
})();
