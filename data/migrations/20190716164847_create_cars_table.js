exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN")
      .unique()
      .notNullable();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.decimal("Mileage").notNullable();
    tbl.string("Transmission");
    tbl.string("Title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
