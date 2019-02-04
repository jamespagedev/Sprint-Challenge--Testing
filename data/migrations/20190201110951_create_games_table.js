exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(tbl) {
    // Primary Key 'id'
    tbl.increments();

    // Other Columns
    tbl
      .string('title', 255)
      .notNullable()
      .unique();
    tbl.text('genre').notNullable();
    tbl.integer('releasedYear');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropUnique('name').dropTableIfExists('games');
};
