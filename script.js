// Attendre que la page soit entièrement chargée
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner le formulaire des élèves
  var studentForm = document.getElementById("studentForm");

  // Écouter l'événement de soumission du formulaire des élèves
  studentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Récupérer les valeurs des champs de saisie
    var name = document.getElementsByName("name")[0].value;
    var orientation = document.getElementsByName("orientation")[0].value;

    // Afficher les informations des élèves dans la console (vous pouvez les envoyer à un serveur ici)
    console.log("Nom de l'élève : " + name);
    console.log("Orientation souhaitée : " + orientation);

    // Réinitialiser les champs du formulaire
    studentForm.reset();
  });

  // Fonction pour afficher les réponses des professeurs
  function afficherReponseProfesseur(reponse) {
    var teacherSpace = document.getElementById("teacherSpace");

    // Créer un nouvel élément pour afficher la réponse
    var reponseElement = document.createElement("p");
    reponseElement.textContent = reponse;

    // Ajouter la réponse à l'espace des professeurs
    teacherSpace.appendChild(reponseElement);
  }

  // Exemple d'affichage d'une réponse de professeur
  afficherReponseProfesseur("Orientation favorable");

  // Exemple d'affichage d'une autre réponse de professeur
  afficherReponseProfesseur("Orientation défavorable");
});
