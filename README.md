# Pizza Empire React Assessment

This is a simple Web Application built with ReactJS.
This project is a task to test my Front-End architecture skills, knowledge of modern ReactJS & Typescript patterns, and understanding of good UI & UX. It utilizes Redux for state management and is styled using Styled-Components.
The app functionalities includes adding to cart, calculation of the total cost of items in the cart, increasing or decreasing the quantity of items in the cart, deleting items from the cart, filtering items by size and name and a checkout flow using a wizard form. The project is also mobile responsive.

## Setup

To run this project, download it to your computer and install it locally using npm:

```
$ cd local-file-directory
$ npm install
$ npm start
```

### How do you document your frontend code?

Writing of documentation remains the best way for Engineers to document their code.
To document my code, I write a documentation making use of visual aids and ensure that I keep it up to date as changes occur in the codebase.
I make sure to properly comment my code and ensure that I use self-explanatory naming conventions.
Also, I include a README file to properly explain and instruct users of the app.

### What are your thoughts on testing for the front-end?

Frontend testing validates that what people see on websites and the features they use function as intended.
I believe that frontend testing is important to the total development flow. It ensures that errors on the frontend are caught and fixed before code is deployed. This I believe will save us the issues of having broken sites in production.

### What Design Patterns have you used in your frontend projects?

The Observer design pattern: Here, I use a model and a view part, where the model part holds data and the state of that data and the view part acts as observer and gets data from the model part when the data has been updated.
The goal of the observer design pattern is to create this one-to-many relationship between the subject and all of the observers waiting for data so they can be updated. So anytime the state of the subject changes, all of the observers will be notified and updated instantly.

The Decorator Design Pattern: This design pattern allows one to change base class without affecting said base class or any other classes. Instead of messing up an object instance of the base class just to add a few things to it, the decorator design pattern allows us to add a new property to the original object instance and it won't affect other instances of that class object.

### What do you think about Typescript on the front-end?

Having used Typescript on a project sometime in 2021, it is a techonology that I appreciate, and would definitely love to utilize in my work. It helps to catch mistakes early through a type system and to make JavaScript development more efficient; errors are detected on the go during compilation to JavaScript. TypeScript type inference also makes typing a bit easier and a lot less explicit.

### What are the most important performance issues in React web applications?

React performance issues are mostly to the Virtual DOM which React uses. Wasted renders are a major issue with the Virtual DOM; they can eat up unnecessary CPU and memory resources. In relation to the Virtual DOM, performance related issues in React js originate from: 
  - Redundant processing in components that do not update the DOM.
  - Diff Algorithm keeps on updating leaf nodes that do not need to be updated.
  - Heavy CPU computation due to Diff algorithm updating components.

### How did you decide on the technical and architectural choices used as part of your solution?

The application required me to use React. However, I would also have used React as my framework of choice in building my solution as it allows me to easily get my application on the go. 
  - I employed styled-components to allow for faster and easier styling of my components, especially in writing media queries for mobile responsive. 
  - Redux was employed for my state management. This is a flux architecture and probably the best state management system around for React. Redux is maintainable, makes state predictable, makes debugging easy, is easy to test and has state persistence for retaining data on refresh. 
  - For the design, I took inspiration from different websites and ensured to employ a colour combination that flows with pizza and also gives the application an attractive look and feel.

### Are there any improvements you could make to your submission?

Improvements will always exist for built softwares. These are some of the reasons for QA testing and general end to end tests.
In the case of this application, I could use the help of a UI/UX designer to help give a more perfect design.
Also, I could improve the form validations. For now, I just wrote a simple logic to ensure they are all filled before moving to the next page of the wizard.
