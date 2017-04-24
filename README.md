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

` cd lh-patient-search`

` bower install `

3. Package

` jar -cf lh-patient-search.zip .`
` zip -r lh-patient-search.zip .`
**Note**: The packaging commands end with a full stop. 

4. Upload to your toolkit server and navigate to

` http://localhost:8080/lh-toolkit/owa/lh-patient-search/index.html `

**Note**: The link depends on the name of your zip package. 

You should see something like

![alt tag](http://picpaste.com/pics/Screen_Shot_2017-03-31_at_3.39.12_PM-W7uLhlGE.1490971189.png)

**Note: The app is still under development

