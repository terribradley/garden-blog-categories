import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postForm() {
      this.set('addNewPost', true);
    },
    save1() {
      var params = {
        image: this.get('image'),
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category'),
        story: this.get('story')
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
