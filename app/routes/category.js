import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('category', params.category_id);
  },
  actions: {
    destroyCategory(category) {
      debugger
      category.destroyRecord();
      this.transitionTo('admin');
    }
  }
});









    // save3(params) {
    //   var newPost = this.store.createRecord('post', params);
    //   newPost.save();
    //   this.transitionTo('admin');
    // },
    //
    // update(post, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       post.set(key,params[key]);
    //     }
    //   });
    //   post.save();
    //   this.transitionTo('admin');
