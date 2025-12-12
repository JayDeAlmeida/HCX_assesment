# HCX_assesment
Here lies my solutions for the given challenge.

To start you need to use the command git clone followed by the repository url on the terminal to import the full repository.

Then, still on the terminal, run npm install cypress.

Be sure to install the Cucumber extension available on your IDE extensions library.

You can run the tests in two ways:
If your machine is strong, you can run npx cypress open. This command will open Cypress' interface and you will be able to see the automation working (opening pages and clicking...). Be aware, this run consumes a lot of ram memory. Don't recommend to run it on a 6Gb ram lower machine, specially with other programs opened (yes, your browser with multiple oppened tabs counts).

If your machine is not built to run codes, you can run each test by clickin on the green arrow available on the side of each scenario. Or just type npx cypress run on your terminal. This command will make Cypress run all the tests from the file without opening it's visual interface.

For information:
Login information for Swag Labs' e-commerce testing site
user name: standard_user
password: secret_sauce