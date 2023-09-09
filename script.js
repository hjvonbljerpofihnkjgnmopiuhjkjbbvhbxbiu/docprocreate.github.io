$(function(){
  $('.menu-ac').click(function(){
    $(this).next('.ac').slideToggle(500);
  });
  $('.fa-search').click(function(){
           $(".search").animate({
                width: "toggle"
            });
  });
});

var documentation = [
  {
    title: "Interface",
    url: "interface.html",
    content: "Ceci est la documentation pour l'interface utilisateur."
  },
  {
    title: "Pinceaux",
    url: "pinceaux.html",
    content: "Ceci est la documentation pour les pinceaux."
  }
  // Ajoutez d'autres résultats prédéfinis ici
];

  $('form').submit(function (e) {
    e.preventDefault(); // Empêche la soumission du formulaire

    var searchTerm = $('.search').val().toLowerCase();

    // Recherche dans la documentation
    var result = documentation.find(function (doc) {
      return doc.title.toLowerCase() === searchTerm;
    });

    if (result) {
      // Redirection vers la page de documentation trouvée
      window.location.href = result.url;
    } else {
      alert("Aucun résultat trouvé pour la recherche : " + searchTerm);
    }
  });
});
