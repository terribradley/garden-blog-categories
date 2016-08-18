import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('comment', params.comment_id);
},
  actions: {
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post', ((comment.post).post_id));
    }
  }
});
