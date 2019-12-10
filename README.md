# PG County Budget Spending 2018


#### Documentation
[User Manual](https://github.com/JmkGallier/377_Project/blob/master/docs/user.md)  
[Developer Manual](https://github.com/JmkGallier/377_Project#developer-manual)


#### Project Description
PG County Budget Spending 2018 app hopes to solve the information problem of displaying how Prince George’s County 
spends their fiscal year budget through each agency in the county. Currently, there is only a dataset that will 
display this information. While accuracy is not the issue, understanding the significance of a lot of the information 
is an issue. We hope to find a better way of displaying this information so that the people of Prince George’s County 
can understand and see where spending is allocated to and hopefully help future adjustments and changes. Additionally, 
we hope this will encourage more specific data entry in the future. Information about the spending currently is very 
vague, and we hope that providing a new way to display spending will encourage better data entry so that it can be 
better understood and defended if necessary.


##### Application Link
https://pg-county-budget.herokuapp.com/


##### Target Browsers
Our target browser is any mobile phone 
or desktop browser. Our app will 
adjust itself based on the screen size. 
To view information clearly we recommend 
screen size that are medium to large size. 


# Developer Manual

##### Software requirements for local instances
NOTE: These dependencies should be installed while in the application directory with npm.
(If you plan to run the application of a third-party service, see the host service documentation).
* sqlite3    
* express    
* node-fetch    


#### Installation and running the server
Before installing fork/download this repository to the directory you wish to run the application from. If you use a
service that deploys from a github repository, please create a fork in your own
github account and link the service to it.


##### Running from a local machine or server.
1. Before launching the application, use a terminal to navigate to the directory containing the application files (this should be the 
directory that you installed the software requirements to). If you are using a NIX based system (MacOS, Linux, Powershell)
this can be done with the 'cd' and 'ls' bash commands.    
    ```bash
    cd Downloads/Path_to_Server_Directory/
    ```    
    ```bash
    ls ## Returns content of the current directory
    ```    

2. After making sure you are in the correct which contains the 'package.json' file, enter the following command:    
    ```bash
    npm install
    ```
3. In the terminal, confirm that a directory titled 'node-modules' was generated. Then start the server with:    
    ```bash
    npm start
    ```    

4. To view your local application, open any browser and enter the following into the address bar:    
    ```text
    localhost:5000
    ```


#### API Endpoints

##### 1. Get
Our Get request uses a static variable which contains the URL where we gathered our database items. The request 
fetches the content of the page into an array, which is then used as an argument for our JavaScript Database 
Initialization function. This function enters enters all the contents of the database array into the pgCountySpending
database located in the build directory.

##### 2. Post
The Post request is used take the users agency selection, returning it as a variable to the backend. This variable
is created by taking the the 'param' value from the 'body' object from within the request. This value is then used 
as an argument in a JavaScript function that queries the SQLite3 database for all amounts billed and descriptions 
the bills. This data is then returned to the frontend.

#### Expected Bugs
Get request time/promise issue
Post issue gets data but cannot return data from a promise
