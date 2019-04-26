/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
prompt("Choisissez une option : ")

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


