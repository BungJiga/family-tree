// This is the class and constructor used to create an object with a person's information.
class PersonInfo {
  constructor(id, gender, parents, children, siblings, spouses, bio) {
    this.id = id;
    this.gender = gender;

    this.parents = [];
    for (const parent of parents) {
      this.parents.push({ id: parent });
    }

    this.children = [];
    for (const child of children) {
      this.children.push({ id: child });
    }

    this.siblings = [];
    for (const sibling of siblings) {
      this.siblings.push({ id: sibling });
    }

    this.spouses = [];
    for (const spouse of spouses) {
      this.spouses.push({ id: spouse });
    }

    this.bio = bio;
  }
}

let data = [
  // This is the object that represents you
  new PersonInfo("Me", "male", ["Dad", "Mom"], [], ["Melanie"], [], "This is me!"),

  // These two objects are your parents
  new PersonInfo("Dad", "male", [], ["Me","Melanie"], [], ["Mom"], "I'm your dad."),
  new PersonInfo("Mom", "female", [], ["Me", "Melanie"], [], ["Dad"], "I'm your mom."),

  // These objects are your siblings
  new PersonInfo("Melanie", "female", ["Dad", "Mom"], [], ["Me"], [], "I'm your sister."),
  
];

export default data;
