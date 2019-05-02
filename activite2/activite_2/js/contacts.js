/* 
Chaque contact a un nom et un prénom. Le programme gère un tableau de contacts et offre à l’utilisateur le choix entre les fonctionnalités suivantes :

Afficher chaque contact du tableau.
Quitter.
Le programme doit “boucler” jusqu’à ce que l’utilisateur choisisse de quitter. Il doit également utiliser des objets pour gérer les contacts.

Les deux contacts à insérer initialement dans le tableau sont :

Carole Lévisse
Mélodie Nelsonne
Pour obtenir le maximum de points possibles, ajoutez la possibilité pour l’utilisateur de saisir un nouveau contact qui sera inséré dans le tableau.

La vidéo ci-dessous permet d’observer le comportement du programme attendu.
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire de contacts ! \n1 : Liste des contasts \n2 : Ajouter un nouveau contact \n0 : Quitter");

class Contact 
{
	constructor(nom, prenom)
	{
		this.nom = nom;
		this.prenom = prenom;
	}

	decrire()
	{
		return `Nom : ${nom}, Prénom : ${prenom}`
	}
};

const caroleLevisse = new Contact(
	{
		nom : "Lévisse",
		prenom : "Carole",
	});

const melodieNelsonne = new Contact(
	{
		nom : "Nelsonne",
		prenom : "Mélodie",
	});

let tabContacts = [];

function addTab(contact)
{
	tabContacts.push(contact);
};

addTab(caroleLevisse);
addTab(melodieNelsonne);

/*
// Méthode avec if... else
do {
	input = prompt("Choisissez une option : ");

	if (input == 0)
	{
		console.log("Au revoir !");
	} else if (input == 1)
	{
		console.log("Test 1");
	} else if (input == 2)
	{
		console.log("Test 2")
	} else
	{
		console.log("Veuillez saisir 0, 1 ou 2")
	};
}
while (input != 0)
*/


do
{
	input = prompt("Choisissez une option : ");

	switch (input)
	{
		case "0" :
		console.log("Au revoir !");
		break;
		case "1": 
		for (let i = 0; i < tabContacts.length; i++) 
		{
			console.log("Nom : " + tabContacts[i].nom.nom +', Prénom : ' + tabContacts[i].nom.prenom);
		};
		break;
		case "2" :
		console.log("Test 2");
		break;
		default:
		console.log("Veuillez saisir 0, 1 ou 2");
		break;
	}
} while (input != 0)