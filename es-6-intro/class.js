// suyntic suger
class Instructor {
  name;
  desegnation = "Web course Instructor";
  team = "web team";
  location;
  constructor(userName, userLocation) {
    this.name = userName;
    this.location = userLocation;
  }
  startSupport(time) {
    console.log(`start the sesson at ${time}`);
  }
  startQuize(module) {
    console.log(`Please create a quise for module ${module}`);
  }
}

const rahim = new Instructor("Rahim Uddin", "Jashore");

rahim.startQuize(50);
rahim.startSupport("9:00 AM");

