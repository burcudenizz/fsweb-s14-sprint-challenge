/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("projects").truncate();
  await knex("resources").truncate();
  await knex("tasks").truncate();
  await knex("project_resources").truncate();
  // truncate()'in del()'den farkı id kolununu da silmesidir.
  //önce truncate() ile veritabanı temizlenir ki önceden girilmiş veriler vs.silinir.

  const defaultProjects = [
    {
      project_name: "React ile Web Sitesi Tasarlama",
      project_description: "React kütüphanesi ile form ekranı oluşturma",
    },
    {
      project_name:
        "Giyilebilir teknoloji ürünü olan watchlar için bir sağlık uygulaması ",
      project_description:
        "Fuletter ve ilgili kütüphaneleri kullanarak uygulamanın tasarlanması, kodlanması ve test edilmesi",
    },
  ];

  const defaultResources = [
    {
      resource_name: "Github",
      resource_description: "github documentation page",
    },
    { resource_name: "Google", resource_description: "Flutter official page" },
  ];
  const defaultTasks = [
    {
      project_id: 1,
      task_description: "react form componenti oluştur",
      task_notes:
        "react bootstrap kütüphanesini indir, bootstrap form ekranını kullan",
    },
    {
      project_id: 1,
      task_description: "react form validasyonunu yap",
      task_notes: "forma girilen değerleri kontrol et",
    },
    {
      project_id: 1,
      task_description: "flutter arayüzü oluştur.",
      task_notes:
        "flutter componentlerinden grid ve card componentlerini kullan",
    },
  ];

  //many to many ilişkisi vardır. birden çok projenin birden çok kaynağı vardır.

  const defaultProjects_Resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 2 },
  ];

  //datalar oluşturulunca insert() ile tablolara datalar eklenir.

  await knex("projects").insert(defaultProjects);
  await knex("resources").insert(defaultResources);
  await knex("tasks").insert(defaultTasks);
  await knex("project_resources").insert(defaultProjects_Resources);
};
