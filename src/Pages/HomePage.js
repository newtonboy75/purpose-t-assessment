import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/api/projects")
      .then((res) => res.json())
      .then((json) => {
        let project_ids = [];
        console.log(json);
        for (let project of json) {
          console.log(project.project_id);
          project_ids.push(project.project_id);
        }
        console.log(project_ids);
        setProjects(project_ids);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <p>Sample Forms</p>
      <ul>
        {!loading &&
          projects.map((form_id) => (
            <li key={form_id}>
              <a href={`/form-builder/view/${form_id}`}>Form ID #{form_id}</a>
            </li>
          ))}
      </ul>

      <div><a href={`/form-builder?pid=${parseInt(projects)+1}&part=1`}>Create New form </a></div>
      <div>View Submissions</div>
    </>
  );
};

export default HomePage;
