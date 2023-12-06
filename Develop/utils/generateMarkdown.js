
function renderLicenseBadge(license) {

  // set badge to be empty 
  let badge = "";

  // checks to see if None was selected for lisence option 
  // otherwise set badge = ![License Badge](https://shields.io/badge/license-" + license + "-green)
  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

function renderlicenseUrl(license) {
  let licenseUrl;

  // using switch also the code to check for multiple cases  
  switch (license) {
    case "MIT":
      licenseUrl = "https://mit-license.org/";
      break;
    case "BSD":
      licenseUrl = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseUrl = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseUrl = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseUrl = "";
      break;
  }

  return licenseUrl;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None") {
    licenseSect += "## License\n"

    // After the new line renderlicenseUrl(license) is called and returns the corresponding link for the license
    licenseSect += "Please see " + renderlicenseUrl(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}

// A function to generate readmeFile for README
function generatereadmeFile(data) {
  const readmeSections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];

  // readmeFile is a string which will have the information which we want to pass on to be written
  // readmeFile will also include \n to handle the structure of the file
  // we need this otherwise the data would be all on one line
  // data is the information grabbed from the cli when ran with node
  // data.title == name: 'title' from the questions created in index.js
  // the "# " creates style for the README when opened with "Open with Preview" and in browser
  let readmeFile = "# " + data.title + "\n";

  // add license badge
  readmeFile += renderLicenseBadge(data.license) + "\n";

  // add table of contents
  readmeFile += "## Table of Contents\n";

  for (let i = 0; i < readmeSections.length; i++) {

    // for every section which is not a License and data.license is not equal to None
    if (!(readmeSections[i] === "License" && data.license === "None")) {

      // concat ->
      // provide the name of the section section number: i+1 [" + readmeSections[i] + "]
      // provide the id of the link for the table: (#" + readmeSections[i][0].toLowerCase()
      // provide the link for the file of the corresponding tag:  readmeSections[i].substring(1) + ")\n"
      readmeFile += i + 1 + ". [" + readmeSections[i] + "](#" + readmeSections[i][0].toLowerCase()
        + readmeSections[i].substring(1) + ")\n";

    }
  }

  // a new line
  readmeFile += "\n";


  // Left to Right traverse through the readmeSections
  // Refer to
  // readmeSections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];
  // Emblodens the text and creates a horizontal line below 
  // the readmeSections[0] (the name of the sectiom)
  readmeFile += "## " + readmeSections[0] + "\n";
  readmeFile += data.description + "\n";

  readmeFile += "## " + readmeSections[1] + "\n";
  readmeFile += data.install + "\n";

  readmeFile += "## " + readmeSections[2] + "\n";
  readmeFile += data.usage + "\n";

  readmeFile += "## " + readmeSections[3] + "\n";
  readmeFile += data.guidelines + "\n";

  readmeFile += "## " + readmeSections[4] + "\n";
  readmeFile += data.test + "\n";

  // We are now calling renderLicenseSection and concating it's return to 
  // the readmeFile
  readmeFile += renderLicenseSection(data.license) + "\n";

  readmeFile += "## " + readmeSections[6] + "\n";
  readmeFile += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
  readmeFile += "You can email me at " + data.email + " if you have any additional questions.\n"

  return readmeFile;
}

module.exports = generatereadmeFile;