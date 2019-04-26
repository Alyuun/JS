const aurora = {
	nom : "Aurora",
  sante : 150,
  force : 25,
  intel : 50,
  xp : 0,
  
  decrire(){
  	return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience`
	}
};

aurora.xp +=13;
aurora.sante -= 10;

const glacius = {
	nom : "Glacius",
  sante : 150,
  force : 40,
  intel : 30,
  xp : 0,
  
  decrire(){
  	return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience`
  }
};

console.log(glacius.decrire());