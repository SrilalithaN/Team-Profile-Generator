const generateManager = function (manager) {
  return `<div class="container">
    <div class="row">
      <div class="team-area col-12 d-flex justify-content-center">
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title">
              <i class="fas fa-mug-hot mr-2"></i>Manager
            </h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">${manager.id}</li>
              <li class="list-group-item">
                Email:
                <a href="${manager.email}">
                ${manager.email}
                </a>
              </li>
              <li class="list-group-item">${manager.officeNumber}</li>
            </ul>
          </div>
        </div>
    `;
};

const generateEngineer = function (engineer) {
  return `  <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${engineer.name}</h2>
      <h3 class="card-title">
        <i class="fas fa-glasses mr-2"></i>Engineer
      </h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">
          Email:
          <a href="${engineer.email}">${engineer.email}</a>
        </li>
        <li class="list-group-item">
          GitHub:
          <a
            href="${engineer.github}"
            target="_blank"
            rel="noopener noreferrer"
            >${engineer.github}</a
          >
        </li>
      </ul>
    </div>
  </div>`;
};
const generateIntern = function (intern) {
  return `<div class="card employee-card">
     <div class="card-header">
       <h2 class="card-title">${intern.name}</h2>
       <h3 class="card-title">
         <i class="fas fa-user-graduate mr-2"></i>Intern
       </h3>
     </div>
     <div class="card-body">
       <ul class="list-group">
         <li class="list-group-item">${intern.id}</li>
         <li class="list-group-item">
           Email: <a href="${intern.email}">${intern.email}</a>
         </li>
         <li class="list-group-item">School: ${intern.school}</li>
       </ul>
     </div>
   </div>`;
};
generateHTML = (data) => {
  // array for cards
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join("");

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};
const generateTeamPage = function (employeeCards) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
    
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
             ${employeeCards}
            </div>
          </div>
        </div>
    </div>
  </body>
</html>

    `;
};
module.exports = generateHTML;
