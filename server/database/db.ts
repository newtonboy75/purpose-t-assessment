import sqlite3 from "sqlite3";
import * as path from "path";
import { ParsedQs } from "qs";

const db_file = path.resolve(__dirname, "./forms_db.db");

const db = new sqlite3.Database(db_file, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the forms_db database.");
});

export const getAllForm = () => {
  db.all("SELECT * FROM form_table", (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      return rows;
    }
  });
};

export const saveForm = (
  formDataId: string | string[] | ParsedQs | ParsedQs[] | undefined,
  formData: string,
  projectid: string | string[] | ParsedQs | ParsedQs[] | undefined,
  type: string | string[] | ParsedQs | ParsedQs[] | undefined,
  part: string | string[] | ParsedQs | ParsedQs[] | undefined
) => {
  //console.log(formDataId, formData)
  let currentDate = Date.now();

  //id, JSON.stringify(req.body), projectid, type

  db.run(
    "INSERT INTO form_table(form_id, task_data, created_at, project_id, type, part) VALUES(?, ?, ?, ?, ?, ?) ON CONFLICT(form_id) DO UPDATE SET task_data=?",
    [formDataId, formData, currentDate, projectid, type, part, formData],
    (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log("Row was added to the table: ${this.lastID}");
    }
  );
};

export const getAllFormByProjectId = (
  formDataId: string | string[] | ParsedQs | ParsedQs[] | undefined
) => {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT task_data FROM form_table WHERE project_id=?",
      [formDataId],
      (err, rows) => {
        if (err) {
          //console.error(err.message);
          reject();
        }
        resolve(rows);
      }
    );
  });
};

export const getProjects = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT project_id FROM form_table GROUP BY project_id", (err, rows) => {
      if (err) {
        console.log(err)
        reject(err);
      } else {
        console.log(rows)
        resolve(rows);
      }
    });
  });
};
