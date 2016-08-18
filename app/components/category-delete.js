import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(category) {
      if(confirm("Are you sure?")) {
        this.sendAction('destroyCategory', category);
      }
    }
  }
});
