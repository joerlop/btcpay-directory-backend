exports.up = function(knex) {
    return knex.schema.createTable('companies', companies => {
  
        companies.increments();
      
        companies
        .string('name', 500)
        .notNullable();

        companies
        .string('url', 500)
        .notNullable();

        companies
        .string('type', 200)
        .notNullable();

        companies
        .string('description', 500)
        .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('companies');
  };