// bu`Task` modeli buraya

const db = require("../../data/dbConfig");

async function getAll() {
  let allTasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("p.*", "t.*");

  let transformedTasks = allTasks.map((task) => {
    return {
      task_id: task.task_id,
      task_description: task.task_description,
      task_notes: task.task_notes,
      project_name: task.project_name,
      project_description: task.project_description,
      task_completed: task.task_completed === 0 ? false : true,
    };
  });

  return transformedTasks;
}

async function create(task) {
  const [insertedId] = await db("tasks").insert(task);
  const inserted = await db("tasks").where("task_id", insertedId).first();

  inserted.task_completed = inserted.task_completed == 1; //true & false
  return inserted;
}

module.exports = { getAll, create };
