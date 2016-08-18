import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    newCommentForm() {
      this.set('addNewComment', true);
    },
    save1() {
      var params = {
        userName: this.get('userName') ? this.get('userName') : "",
        date: this.get('date') ? this.get('date') : "",
        comment: this.get('comment') ? this.get('comment') : "",
        post: this.get('post') ? this.get('post') : ""
      };
      this.set('addNewComment', false);
      this.sendAction('save2', params);
    }

  }
});
