import Ember from 'ember';

var urinals = [{
  location: "Portland",
  brand: "American Standard",
  type: "lean",
  image: "http://urinal.net/stockholm_airpt/ARLANDA_T5_1.med.jpg",
  description: "this is where I found true pees."
}, {
  location: "Norway",
  brand: "Dolly Dimples",
  type: "hipster",
  image: "http://urinal.net/dollys_dimples/DOLLYS_DIMPLES3.med.jpg",
  description: "who likes pizza?"
}, {
  location: "Austrailia",
  brand: "Game ON",
  type: "athletic",
  image: "http://urinal.net/slattery_auctions/Britex_Stainless_Steel_Urinal_TV1.med.jpg",
  description: "He shoots he scores"
}];


export default Ember.Route.extend({
  model() {
    return urinals;
  },
});
