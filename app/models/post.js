import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
  story: DS.attr(),
  comments: DS.hasMany('comment', { async: true})

});
