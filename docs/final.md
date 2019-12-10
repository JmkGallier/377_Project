# Final Report
## Title

PG County Budget Spending 2018

##### Team members
James Gallier, Michael Omaye, Maryan Shykh, Zhelun Wei, Kevin Zhang

##### Application Link
https://pg-county-budget.herokuapp.com/


##### Information Problem
Our group hopes to solve the information problem of displaying how Prince George’s County spends their fiscal year budget. Currently, there is only a dataset that will display this information. While accuracy is not the issue, understanding the significance of a lot of the information is an issue. We hope to find a better way of displaying this information so that the people of Prince George’s County can understand and see where spending is allocated to and hopefully help future adjustments and changes. Additionally, we hope this will encourage more specific data entry in the future. Information about the spending currently is very vague, and we hope that providing a new way to display spending will encourage better data entry so that it can be better understood and defended if necessary.

##### Identified Stakeholders
The two primary stakeholders for this project will include the people that reside in Prince George’s County and anyone in the local government. This includes anyone that can make any sort of decision or influence over where the spending will be allocated to. The people who reside in Prince George’s county are the ones whose taxpayer money will result in spending within the county. Additionally, the spending will typically have an effect on them directly as they are the ones that will see the changes that may result in spending. Thus, understanding where spending is going and how they may want to make adjustments will be an area of interest for the people that reside in Prince George’s County. The decision makers or anyone in the local government are also stakeholders as they are the ones that can actually make decisions on where and how spending will be made in the future. Limited budgets makes decision making extremely tough and crucial within Prince George’s County, and thus having a better way to see the spending of past fiscal years will help current and future decisions.


##### Target Browsers
Our target browser is any mobile phone and personal computer. Our app will adjust itself based on the screen size. To view information clearly we recommend screen size that are medium to large size.

##### Data

We chose to work with the “Spending Information for FY 2018” API. The reason why we chose to work with this API is because many ordinary shareholders will not access this data because they don’t know how to. By creating a simple platform for them, they will be better educated and help optimize the Prince George’s County budget. PG County ​Finance/Budget​ Spending Information FY2018 API 
Link:https://data.princegeorgescountymd.gov/Finance-and-Budget/Spending-Information-for-FY-2018/2qma-7ez9/data


##### Strategies and Solutions
The proposed system solves this informational problem because it gives the stakeholders a platform where they can access Prince George’s County spending data for the year 2018. We believe this will have a big impact of the shareholders because the shareholders are tax payers and are interested to see where their money is being spent. This will also help shareholders conduct research to help optimize the spending budget of Prince George’s County.

##### Technical System Decision Rationale
We decided to work with W3 school template for the front end of the website because it allowed our pages to load fast, work on mobile devices and keeping everything the same as we added new content. We decided to work with sqlite3 because our dataset contained about 54,000 data points which would take a long time to load, everytime we called upon the API. We decided it would be more beneficial to load all the data once and store locally onto sqlite3 and then have the app grab the data from the sqlite3. We decided to use canjas.js because for simplicity and interactive reasons. We are able to go into the script section of the HTML and produce these graphs using the data from sqlite3.


##### Final System Address the Problem
Our application helps address the problem of better presenting data to the user. We help our users be better transparent with the Prince George's county Spending for agencies in 2018. This application tells a story of the data through a visual bar graph. It’s easy to see where the most spending goes for each agency in the county. We have a simple and friendly user drop down, that once an agency is selected and clicked for submit, a bar graph is produced with the highest spending showing first and going down to the lowest spending. This ease will help user quickly answer questions that the user has.

##### Challenges Faced
There were many challenges that we came across. One of the challenges was to load the data set with 54,000 data points onto our application. The problem was that it took too long. Then we decided to store it locally through sqlite3. This helped us solve the slow loading from grabbing the API data. Then we came across a problem where we were not sure how to grab in input from the user and then parse through our local database. To solve this problem we created a function in our server.js and also when a user clicks on submit button it goes straight to sqlite3 instead of JSON. Then we had problems with pushing the information from the sql database to front end. We decided to create just one graph instead of dividing our data into different graphs. In the end this helped with loading data and lowered the complexity of our application.

##### Possible Future Work
Throughout the semester, This project taught us a lot about Dynamic web applications and how it could potentially be lucrative for a number of reasons. From building a server, team building, working with server, etc. We wished there was more time to explore new ideas for our project. However, we discussed possible future work directions with this problem. Moving forward we could potentially add other years showing a graph comparing how an agency in PG county spend their budget, working with a different dataset, including the fIscal spending of previous years, including other counties from Maryland and lastly expanding our program to other platforms. E.g Laptop, tablets. Etc. Overall, we believe that with these additions our project  could have the potential of becoming a useful tool for anyone wanting to know significant information regarding the state's fiscal spending budget.
