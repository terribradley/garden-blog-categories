import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,

  actions: {
    postForm() {
      this.set('updatePost', true);

    },
    update(post) {
      var params = {
        image: this.get('image'),
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category'),
        story: this.get('story')
      };
        this.set('updatePost', false);
        this.sendAction('update', post, params);
    }
  }
});
