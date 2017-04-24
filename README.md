# LibreHealth OWA Find Patients
A Open Web App with a web component that helps in searching patients.

# Setup

To setup you'll need to build from source.

## Prerequisits

* git
* bower
* java 

## Steps

1. Clone the repository

` git clone https://github.com/zulrich91/lh-patient-search.git `

2. Install dependencies

* ` cd lh-patient-search`

* ` bower install `

3. Package

  Run any of these commands to package the app before deployment.
  
* ` jar -cf lh-patient-search.zip .`
* ` zip -r lh-patient-search.zip .`

**Note**: The packaging commands end with a full stop. 

4. Upload to your toolkit server and navigate to

` http://localhost:8080/lh-toolkit/owa/lh-patient-search/index.html `

**Note**: The link depends on the name of your zip package.** 

**Note: The app is still under development**

