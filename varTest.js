var pets = {
  names: ["Baron", "Chief", "Axel"],
  owner: "Jason",
  description :function(){
    return this.names.map((pet) => {
      return `${this.owner} knows an awesome dog named ${pet}.`;
    })
  }
};
console.log(pets.description());
