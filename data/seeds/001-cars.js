exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 23819843,
          Make: "Toyota",
          Model: "Corolla",
          Mileage: "35818.2",
          Transmission: "V6",
          Title: "Clean"
        },
        {
          VIN: 29323929,
          Make: "Hyundai",
          Model: "Sonata",
          Mileage: "68382.2",
          Transmission: "V6",
          Title: "Clean"
        },
        {
          VIN: 92348929,
          Make: "Mazda",
          Model: "B4000",
          Mileage: "82582.3",
          Transmission: "V6",
          Title: "Clean"
        }
      ]);
    });
};
