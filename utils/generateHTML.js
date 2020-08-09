const fs = require('fs');


class generateHTML {
  constructor(employees) {
    this.manager = employees.filter(function (employee) { return employee.role == 'Manager'; });
    this.engineers = employees.filter(function (employee) { return employee.role == 'Engineer'; });
    this.interns = employees.filter(function (employee) { return employee.role == 'Intern'; });
    this.finalHTML = '';
  }

  //Builds the html page
  render() {
    this.finalHTML =
      `<!doctype html>
        <html lang="en">
          <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        
            <title>Hello, world!</title>
          </head>
          <body style="margin: 0; padding: 0;">

            <div class="bg-success d-flex" style="height: 100px;">
              <h2 class="text-white" style="margin: auto;">My Team</h2>
            </div>


  <main class="container">
    <div class="row h-100">
        `;
    //Write manager to HTML
    this.displayManager();
    //Write engineers to HTML
    this.engineers.forEach(this.displayEngineer.bind(this));
    //Write interns to HTML
    this.interns.forEach(this.displayIntern.bind(this));

    this.finalHTML += `
        </div>
        </main>    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      </body>
    </html>
        `;


  }

  displayManager() {
    let text = `    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info text-white">
          <h3 class="text-center">${this.manager[0].name}</h3>
          <h5 class="text-center">${this.manager[0].role}<h5>
        </div>
        <ul class="list-group list-group-flush text-white">
          <li class="list-group-item bg-secondary">id: ${this.manager[0].id}</li>
          <li class="list-group-item bg-secondary">email: <a href = "mailto:${this.manager[0].email}?subject = Feedback&body = Message">
          ${this.manager[0].email}
          </a></li>
          <li class="list-group-item bg-secondary">office: ${this.manager[0].officeNumber}</li>
        </ul>
      </div>`;

    this.finalHTML += text;
  }

  displayEngineer(engineer) {

    let text = `    <div class="card" style="width: 18rem;">
        <div class="card-header bg-info text-white">
          <h3 class="text-center">${engineer.name}</h3>
          <h5 class="text-center">${engineer.role}<h5>
        </div>
        <ul class="list-group list-group-flush text-white">
          <li class="list-group-item bg-secondary">id: ${engineer.id}</li>
          <li class="list-group-item bg-secondary">email: <a href = "mailto:${engineer.email}?subject = Feedback&body = Message">
          ${engineer.email}
          </a></li>
          <li class="list-group-item bg-secondary">GitHub: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
      </div>`;

    this.finalHTML += text;
  }

  displayIntern(intern) {
    let text = `    <div class="card" style="width: 18rem;">
    <div class="card-header bg-info text-white">
      <h3 class="text-center">${intern.name}</h3>
      <h5 class="text-center">${intern.role}<h5>
    </div>
    <ul class="list-group list-group-flush text-white">
      <li class="list-group-item bg-secondary">id: ${intern.id}</li>
      <li class="list-group-item bg-secondary">email: <a href = "mailto:${intern.email}?subject = Feedback&body = Message">
      ${intern.email}
      </a></li>
      <li class="list-group-item bg-secondary">School: ${intern.school}</li>
    </ul>
  </div>`;

    this.finalHTML += text;
  }

  writeToFile() {
    let data = this.finalHTML;
    let fileName = './dist/index.html'
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }

        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    })
  }
}

module.exports = generateHTML;