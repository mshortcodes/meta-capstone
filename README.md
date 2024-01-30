# Capstone Project

## Table of Contents

-   [Setting up the repository](#exercise-setting-up-the-repository)
-   [Setting up the React project](#exercise-setting-up-the-react-project)
-   [Committing the project](#exercise-committing-the-project)
-   [Wireframing the project](#exercise-wireframing-the-project)
-   [Designing component](#exercise-designing-components)
-   [Applying design fundamentals in Figma](#exercise-applying-design-fundamentals-in-figma)
-   [Setting up the HTML document](#exercise-setting-up-the-html-document)
-   [Adding meta tags and setting up OGP](#exercise-adding-meta-tags-and-setting-up-ogp)
-   [Setting up the CSS layout](#exercise-setting-up-the-css-layout)
-   [Styling elements](#exercise-styling-elements)
-   [Setting up the app components](#exercise-setting-up-the-app-components)
-   [Defining the Bookings page](#exercise-defining-the-bookings-page)
-   [Adding table Booking state](#exercise-adding-table-booking-state)
-   [Adding unit tests](#exercise-adding-unit-tests)
-   [Adding form validation](#exercise-adding-form-validation)
-   [Accessibility](#exercise-ensuring-your-application-is-accessible-to-users)
-   [Evaluating and revising the UX](#exercise-evaluating-and-revising-the-ux)

## Exercise: Setting up the repository

### Overview

In earlier courses in the Front-End Developer program, including
React Basics
and
Advanced React
, you used create-react-app to build your own starter, boilerplate React projects. This means that, by now, you should be quite familiar with setting up a React project using VS Code and the create-react-app npm package. Furthermore, you should also understand version control best practices and be able to track and manage changes to your code. In this exercise and exercises to come, you will integrate this understanding and further expand your skillset, starting with setting up a repository with GitHub.

The following resources may help you complete this exercise:

React Basics - Setting up a React project in VS Code

Version Control - What is version control?

Version Control - Create your GitHub account

Scenario
It's time for you to start building the web application for the Little Lemon website. You’ll begin by setting up the project on your local machine and tracking it with Git.

Instructions

### Step 1: Setup a new React app using create-react-app

Navigate to a folder on your machine where you want Little Lemon restaurant’s web app to live.

Start a new React project inside the chosen folder using the npm init react-app my-app command, where my-app is the name of your choice.

For assistance, refer to the "Opening the built-in VS Code terminal and running npm init react-app command" section in the
Setting up a React project in VS Code
lesson item from the React Basics course.

### Step 2: Add a new repository on GitHub

Navigate to your GitHub account.

Tip: If you need to create an account, refer to the
Create your GitHub account
lesson item.

Inside the GitHub account, create a new repository.

Screenshot from GitHub interface for adding a repository or other project elements
Once the new repository window displays, note the URL of the repository.

### Step 3: Use the git command to push to your repository

Once you’ve built the starter app using create-react-app, navigate to the directory using the command line. You will need to push your files to the repository on GitHub.

Run the git init command to initialize the repository.

Use the git add command to stage your files for commit.

Use the git commit command to commit your staged changes.

Tip: You may refer to the
Add and commit
lesson item in the Version Control course for further assistance.

Use the git remote command to add a remote for the repository on GitHub.

Tip: If you’re unsure of the remote URL, view the repository on GitHub and it will provide you with the relevant information.

Screenshot from GitHub repository setup guide
You may find it helpful to revisit the
Connecting to GitHub via HTTPS
,
Connecting to GitHub via SSH
and
Remote vs. local
lesson items in the Version Control course for additional guidance.

Use the git push command to push the commits to the remote repository.

Tip: Refer to the
Push and pull
lesson item for further assistance.

Run the git status command, then the git log command to confirm that Git is tracking your project locally and that you have the correct Git user set up.

Log on to GitHub and check that your commits are visible on the repository

Conclusion

You have completed all the steps necessary to set up your project's Git. You can now push every new commit to the remote origin and share your project's code with the world.

# Exercise: Setting up the React project

### Overview

You previously discovered that instead of building a new React project from scratch, you can cut down on the initial steps by starting from a boilerplate project. However, you’ll first want to set up a few things to make this a streamlined process. In this exercise, you will set up a React project and tweak the resulting default boilerplate.

Scenario
So far, you have been preparing to create the reserve-a-table function for the Little Lemon website. As a part of this process, it is now time to set up your React project properly.

Note: Before you begin, this exercise assumes that you are using the VS Code editor as your editor of choice. However, it is possible to use other editors to achieve similar results. If you are using another editor, you may use this exercise as a pointer and demonstration of how things are done in VS Code.

VS Code comes with many extensions that can help you when developing applications in any kind of technology and React is no different. There are numerous extensions that you have available at your disposal to make your React development a smoother and more efficient experience. In the steps that follow, you'll set up a few React-specific extensions, including:

ES7+ React/Redux/GraphQL/React-Native

Auto Rename Tag

Trailing Spaces

You’ll also clean up your starter app’s code.

Instructions

### Step 1: Setup the ES7+ React/Redux/GraphQL/React-Native VS Code extension

Add the
ES7+ React/Redux/GraphQL/React-Native VS Code extension
. This extension provides you with JavaScript and React/Redux snippets in ES7+ with Babel plugin features for VS Code.

### Step 2: Setup the Auto Rename Tag VS Code extension

Add the
Auto Rename Tag VS Code extension
. This extension makes it possible to automatically rename the paired HTML/XML tag as Visual Studio IDE does.

### Step 3: Setup the Trailing Spaces VS Code extension

Add the
Trailing Spaces VS Code extension
. This extension allows you to highlight and delete trailing spaces. It’s also useful when working with Git to help you spot accidental whitespace addictions more easily and prevent unnecessary commits.

### Step 4: Create the React project

Use create-react-app to create the Little Lemon project.

Tip: Refer to the previous recap reading for guidelines.

### Step 5: Remove the starter app's boilerplate code from App.js

Open the project in Visual Studio Code. create-react-app generates some code in the App.js file that we will not need for the project.

Remove all the code in between the returned div with the classname of App.

Add some text in between the opening and closing div tags, such as Homepage, for the time being.

### Step 6: Remove the starter app's logo.svg file

Delete the logo.svg file from the app and delete its import from the App.js file.

Conclusion
By completing this exercise, you have set up and altered the default boilerplate React project in preparation to build the full application. Well done.

# Exercise: Committing the project

### Overview

So far, you've set up your project using create-react-app. You've also set up the repository on GitHub so that you can push your commits to it, making them visible to the world or to a select few people, based on whether your repository is public or private. Additionally, you've added some VS Code extensions to help you streamline your workflow and simplified your starter app in the previous exercise. Specifically, you've:

Removed all the code in between the returned div with the className of App.

Added some text in between the opening and closing div tags.

Deleted the logo.svg file from the app, as well as deleted its import inside the App.js file.

However, you haven't been instructed to commit these updates to your project yet. In this exercise, you will:

Add your changes as another commit

Push those changes to your remote origin (GitHub)

Inspect the updates on GitHub

Scenario
When you add new features to the React app you are building for Little Lemon as you progress through the various course exercises and save the changes to your app’s code, you need to commit and push those changes to GitHub. This makes it possible to track changes and for other developers to access your code if need be. You should then verify that you’ve pushed those changes by inspecting the newly-added commit on the GitHub website. Committing progress you’ve made with your project will feature throughout the development process.

Note: To recap key topics related to committing your project, you can revisit the
Version Control
course.

Instructions

### Step 1: Add your changes as another commit

Save all your updates in your local project. Make sure to save each file individually or click the File >` Save All command in VS Code's top-level menu.

Once that's done, open the built-in terminal and run the git add --all command, followed by the git commit -m "Some commit message of your choice goes here" command.

Tip: Make sure that the commit message is sensical, such as Simplify the boilerplate app.

### Step 2: Push your changes to your remote origin (GitHub)

Now that you have saved and committed the changes, you can push them to GitHub.

Use the git push command to push the saved and committed changes to GitHub.

### Step 3: Inspect the updates on GitHub

Open your browser and navigate to GitHub.

Make sure you're logged in.

Locate your project's repository.

Ensure that your most recently pushed commit is displayed.

Tip: Sometimes it takes a few seconds for GitHub to update with your changes. Refreshing the GitHub web application might help show the updates.

Conclusion
By completing this exercise, you now have the ability to commit your changes to GitHub as you make them to your project.

# Exercise: Wireframing the project

Overview
In this exercise, you will create a wireframe of the homepage of the Little Lemon website. On completion, you will have all the skills to wireframe your design solution for your project on the reserve-a-table section of the Little Lemon website.

A wireframe is like an architect's drawing - a building blueprint but for a digital product. Its purpose is to create a basic structure for each screen in the design before things like branding, colors and images are considered. In other words, wireframes provide a way to communicate ideas quickly that can be refined later. With wireframes, the focus is placed on the user experience and what users need to accomplish a task.

Although wireframes can be sketched out on paper, in this exercise, Figma will be used to draw the wireframe. This makes it possible to share the wireframe with other team members, giving them the opportunity to make comments in the same document.

Scenario
Little Lemon has faced difficulties with the reserve-a-table feature on its website. The feature doesn’t exist in the navigation bar and there is no specific button on its homepage to highlight this option. In this exercise, you will create a wireframe of the homepage incorporating this feature.

Instructions

### Step 1: List the client's requirements

First, let's list the Little Lemon owners’ (your client's) requirements. These will become content blocks that will provide a skeleton of where the content will appear in the wireframe:

About Little Lemon

Highlights and specials

Descriptions and photos of dishes

Navigation bar

Footer

Testimonials

Now, that you have a better idea of the content, let’s start creating the actual wireframe in Figma.

### Step 2: Create the frame and grid

Create a 1440 x 2900 frame

Add a 12-column layout grid to the frame.

Note: You may wish to revisit the
Grids and constraints
lesson item in the Principles of UX/UI course before you begin or refer to it as you go along.

Empty web app template
Construct content blocks using rectangles and name the sections. In the first frame, you need content blocks that contain the following:

Navigation bar

Hero section that showcases the Little Lemon restaurant

Highlights section showing the week’s specials

Testimonials

About the Little Lemon restaurant

Footer

Template of full layout of wireframes for Little Lemon web app
Move the content blocks out of the frame.

Select the rectangles and make them narrower to give you a rough guide of the content blocks to use as a reference when designing within the frame.

Template of full layout of wireframes for Little Lemon web app

### Step 3: Design the Navigation Bar content block

In the navigation bar, the elements you need are the Little Lemon logo and links to the other pages on the website.

For the logo, create a rectangle and draw diagonal lines through it. This is a conventional way to denote a placeholder on a wireframe if an image is not readily available.

The Little Lemon owners have provided a list of pages needed for the website, as given below. You'll need to link to each one:

Home

About

Menu

Reservations

Order online

Login

Full layout of wireframes in Little Lemon web app, with focus on 'Navigation bar' section

### Step 4: Design the Hero Section content block

In the Hero content block, include:

The Little Lemon name

Where it is located

A brief description of what type of food it offers

The option to book a table online

In relation to the latter item, put this in the content block as a button, so that, once clicked, the user is brought to another page where they can carry this task out. To do this, add a grey background and populate the block.

Full layout of wireframes for Little Lemon web app, with focus on 'Hero Section' section

### Step 5: Design the Highlights content block

It’s now time to move on to the Highlights block, where the owners want to highlight Little Lemon’s weekly specials.

In this section, you should include the following:

Title

Name of the dish

Dish description

Price and

Image of the dish

Note that when a dish is clicked, the user is taken to another screen and that this highlights section is scrollable horizontally in order to see further items.

Add a button so the user can go to the order online page.

Full layout of wireframes for Little Lemon web app, with focus on 'Highlights' section

### Step 6: Design the Testimonials content block

Once users have created a profile and logged in, they can leave reviews and ratings out of 5. To accomplish this:

Add a background to separate it from the Highlights content block above.

Create placeholders for the reviews.

Full layout of wireframes for Little Lemon web app, with focus on 'Testimonials' section

### Step 7: Design the About content block

As the Little Lemon owners have yet to provide the written content for this section, add a text box placeholder.

Because you will need some images here, also add image placeholders.

Full layout of wireframes for Little Lemon web app, with focus on 'About' section

### Step 8: Design the Footer Navigation content block

First add a background, followed by the following content:

Logo

Doormat navigation (links to other pages)

Contact details

Social media links

Full layout of wireframes for Little Lemon web app, with focus on 'Footer Navigation' section
Repeat this process for all the screens in the reserve-a-table page section of the website.

Note: No colors, fonts or images are included at this stage. All that is important when wireframing the project is the content, layout and functionality.

Conclusion
Now that you have covered the basics in wireframing and wireframed the first page or homepage, you can wireframe and design your solution for the reserve-a-table project.

# Exercise: Designing components

Overview
In this exercise, you will create a drop-down animated component animation in Figma using variants. When you complete this exercise, you’ll be able to add this to your reserve-a-table section on the Little Lemon website project.

Note: The subject matter of designing a component in Figma, as well as interactive component design has previously been covered in the Principles of UX/UI design course. You may want to revise or refer to the following lesson items whilst completing the exercise:

Design a component in Figma

Interactive component design

Scenario
As defined as an opportunity in the User Journey map that you explored in the
Principles of UX and UI
recap earlier in this lesson, the persona Tilly wanted an option to select a type of occasion when making a reservation. This may, for example, allow Little Lemon to prepare something special to mark the event and save her time either by calling in advance to explain or in order to be discreet, alerting the staff to the nature of the occasion before she and her party arrive for her booking.

Instructions

### Step 1: Create the component and variants

Create a desktop frame:

In this frame, create a rectangle that is 400w x 80h.

Change the fill color to #EDEFEE.

Add rounded corners, with a radius of 8, and give it a drop shadow effect.

Illustration depicting empty, un-labelled button
Add some text, an icon and an arrow (a chevron) to indicate this is a dropdown menu, which, when clicked, will open up the occasion options for the user to select.

Illustration depicting dropdown menu labelled 'Occasion'
Duplicate the rectangle to examine the list as it would be displayed when it drops down:

On the duplicated rectangle, remove the rounded corners and the drop shadow.

Add a dashed bottom stroke, delete the icons as they are not necessary and change the title to Birthday.

Then, group the elements.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Duplicate this box and add the other occasion options and name them.

Note: Although three options - birthday, engagement and anniversary - are used in this exercise, feel free to add additional options.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Group all the elements and navigate to the top menu bar to create a component and a variant. These are encompassed in a purple dashed container.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Note: You can easily extend the container so that you can position the main component and the variant side by side.

Illustration depicting contents of dropdown menu labelled 'Occasion'
On the left, in the layers panel, there are now two variants -the default, which is how the dropdown list will display in idle state, and variant 2, which will display the active state:

Example hierarchy of elements within a Figma frame named 'dropdown'
Illustration depicting dropdown menu labelled 'Occasion', in both closed and open states
Delete the dropdown options in the default

Copy variant 2 and name it Birthday, as that's what the user will get when they select the Birthday option.

Delete the party icon and the other options in the dropdown.

Modify the arrow by rotating it 180 degrees. To make the user aware that they have made a selection, change the rectangular fill color to #495E57 and the text color to white.

Illustration depicting dropdown menu in various states
Duplicate this variant twice (for the additional two options) and rename them Engagement and Anniversary.

Illustration depicting possible states for dropdown menu labelled 'Occasion'
You have now created the dropdown list.

### Step 2: Prototype and animate

To animate the dropdown, navigate to prototype on the right-side bar and connect the components.

Illustration depicting outcomes from selecting various options within dropdown menu labelled 'Occasion'
To create a nice, smooth animation, use Smart animate in these connections to create a small delay when clicked.

'Interaction details' menu accessed from 'Interactions' list in the 'Prototype' section of Figma
Connect the default or idle state to variant 2.

Connect variant 2 to the Birthday state, with the same settings: on click and smart animate.

Repeat for the Engagement and Anniversary variants.

Also connect these variants to the default or idle variant when the Birthday, Engagement, or Anniversary option is clicked.

Note: The connections covered in point 3 to point 6 are as follows:

Illustration depicting possible outcomes for dropdown menu labelled 'Occasion'
Next, create a new desktop frame and call it prototype.

Copy the default or idle component and add it to the prototype frame.

Then, add the text Select occasion.

Illustration depicting dropdown menu labelled 'Occasion'

### Step 3: Present animation

Now is the moment of truth to determine whether the dropdown menu works as intended.

Navigate to the presentation mode.

Click the dropdown menu. The options should appear.

Illustration depicting contents of dropdown menu labelled 'Occasion'
Select an occasion. The button should change color.

Illustration depicting a dropdown menu labelled 'Select Occasion', with the 'Birthday' option selected
Navigate back to the idle state and determine if you can change the occasion. This is important should a user make a mistake in their selection.

Illustration depicting dropdown menu set to 'Engagement' state
Note: When testing your dropdown menu, the smooth transition created by using Smart Animate should be visible.

Conclusion
By completing this exercise, you have created a dropdown animated menu that you can incorporate into many aspects of your project when creating the reserve-a-table section for the Little Lemon website.

# Exercise: Applying design fundamentals in Figma

Overview
This exercise will cover the steps from wireframes to high-fidelity mock-ups and apply design fundamentals using the brand style guide, which specifies every aspect of the look and feel of the brand. This includes typefaces, colors, and how pictures and images should be used. It also includes a UI kit, a set of files containing critical UI components like font sizes, icons and documentation. A Figma file of the wireframe used in this exercise and an image resource folder is provided below.

On completion, you will have the skills necessary to take the wireframes of your design solution for your project on the reserve-a-table section of the Little Lemon website to produce high-fidelity mock-ups. You may wish to revise the following lesson items in the Principles of UX/UI course before you begin or refer to them as you go along:

Working with images

Design text hierarchy and grid

High fidelity design

Scenario
The owners of the Little Lemon Restaurant have approved the wireframes for their website and want you to turn these wireframes into a high-fidelity design or a design that closely resembles the final product using their brand style guide.

Instructions

### Step 1: Brand style guide

First, let’s examine the style guide provided by the owners of Little Lemon. This guide serves as a starting point.

Style guide for Little Lemon restaurant, with logos, typefaces, colors and images

Wireframe for home page of Little Lemon web app
Now, let’s start with creating the styles as per the brand style guide. Styles help you simplify your workflow, keep text and colors consistent and save valuable time.

To create a color style, follow the next steps using the Little Lemon brand colors:

Accepted colors for Little Lemon, as extracted from style guide
To create text styles, follow the next steps using the Little Lemon brand text styles:

Description of accepted typefaces for Little Lemon restaurant, as extracted from style guide

### Step 2: Add content to the placeholders on the wireframe

First, the Navigation bar needs a logo and the text needs to be altered.

Wireframe for navigation bar of Little Lemon web app
Next up is the Hero section.

Wireframe for section introducing 'Reserve a Table' functionality in Little Lemon web app
Finally, work with the Highlights section.

Wireframe for 'Specials' section of Little Lemon web app
Conclusion
Well done! You should now have something similar to the following mock-up:

Example Little Lemon web app with table reservation functionality, featuring approved styling

## Exercise: Setting up the HTML document

Overview
Using semantic HTML and understanding how it works in React is the next fundamental step in the process of creating the reserve-a-table web functionality for Little Lemon. In this exercise, you will organize your JSX code so that it follows HTML5 best practices.

To revisit using semantic HTML in webpages, you may find it helpful to refer to the following lesson items in the HTML and CSS in-depth course now or as you progress through the exercise:

Semantic tags

Semantic HTML cheat sheet

Scenario
By completing this exercise, your React app will use a semantic HTML structure to better describe the intention and semantics of the document. As you have learned, semantic HTML is important for describing the meaning, or semantics, of your HTML document. It also assists accessibility software, such as screen readers, in describing your content to users with disabilities.

Instructions

### Step 1: Set up the initial semantic structure

Open your project in Visual Studio Code.

Open the App.js file.

The App component’s root element uses a div element. As this is not a semantic tag, replace it with a React fragment.

Tip: Remember, a fragment starts with a `<>` tag and ends with a `</>` tag.

Review your UI/UX and decide how each of the sections of the design will be represented using semantic tags.

Tip: Use the header, nav, main and footer semantic tags.

Inside the fragment, add the semantic tags.

### Step 2: Break the sections down into React components

Now that you have planned your semantic structure, it is important to decide which sections will be dynamically updated and if those sections should be child components of the App component.

Tip: For simplicity, you can create a component for each semantic element you added to App.js.

Create a JavaScript file for each semantic element that will be a React component, for example, Header.js, Nav.js, Main.js and Footer.js.

In each component, return the semantic HTML element.

In App.js, replace the semantic tags with the corresponding child components, for example `<header>` `</header>` will be replaced with `<Header/>`.

### Step 3: Add the logo and navigation elements

The initial components are now set up. You will now add the details for the logo and navigation.

Add the Little Lemon logo to the appropriate React component using the `<img>` tag.

Add the website navigation to the Nav component. It is important to add a hyperlink for each key page of the website based on your mockup.

Tip: Use a `<ul>` element and add an `<li>` element for each `<a>` hyperlink.

### Step 4: Add the footer content

Review your design and add the necessary HTML elements to the footer component.

Conclusion
By completing this exercise, you have now set up the semantic foundations to build the rest of your application. As you progress through the course, ensure that you apply the appropriate semantic HTML elements to the content that you are building.

## Exercise: Adding meta tags and setting up OGP

Overview
Building a website is an important part of marketing a business. Equally, word of mouth and social media are important for bringing in new customers. In this exercise, you will prepare the Little Lemon web app for search engines and social media platforms, by adding meta tags and setting up Open Graph protocol (OGP).

Scenario
The Little Lemon restaurant makes great food and the owners hope that happy customers will recommend the restaurant to others by sharing the website on social media. Potential customers may also try to find the website using popular search engines. It is an important task to make sure that the website is presented correctly on both search engines and social media platforms. In this exercise, you will add metatags and set up the Open Graph protocol (OGP) to help ensure the correct presentation of your project on these various platforms. You may find it helpful to refer to the following lesson items in the HTML and CSS in-depth course now or as you progress through the exercise:

Metadata

UX with meta tags

Social media cards

Setting up social media cards

Instructions
You will apply the following to the index.html file in your project.

### Step 1: Add the appropriate description (meta tag)

Add your own description for your Little Lemon restaurant application:

`<meta name="description" content="your text goes here"/>`

### Step 2: Add the og:title meta tag

Add the Open Graph's title for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:

`<meta name="og:title" content=""/>`

### Step 3: Add the og:description meta tag

Add your own description for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:

`<meta name="og:description" content=""/>`

### Step 4: Add the og:image meta tag

Add your own Open Graph image for your Little Lemon restaurant application, inside the double quotes in the content HTML attribute:

`<meta name="og:image" content=""/>`
Conclusion
In this exercise, you prepared the Little Lemon web app for search engines and social media platforms using Open Graph meta tags. When the app is launched online, it will appear with the correct information for potential customers.

## Exercise: Setting up the CSS layout

Overview
To build upon the wireframes you designed for the Little Lemon reserve-a-table web app functionality, your next task is to create the web app layout using HTML and CSS. In this exercise, you will use your CSS skills to code reusable sections of your app’s layout. The code you write in this exercise is one of many building blocks that you can use and reuse in different parts of your React app.

Scenario
Visitors to the Little Lemon website will be viewing the content on different devices, from small devices such as mobile phones to large devices like desktops and tablets. Therefore, the owners of Little Lemon have requested that the website is responsive. To achieve this you will need to implement the responsive column layout that you previously planned, using either a CSS Grid or Flexbox Layout. In this exercise, you will create the necessary CSS rules to allow for a responsive layout. You will apply these rules throughout the course. As you progress through the exercise, it may be helpful to revisit the following lesson items from the HTML and CSS in-depth course:

CSS web layout

CSS units of measurement

Understanding Flexbox

Basic Flexbox

CSS Grids

Grids and Flexbox cheat sheet

Instructions

### Step 1: Set up the CSS rules

Based on the mockup, decide if you will use a CSS Grid or Flexbox Layout

Open the app.

Based on the mockup, add the required CSS Grid or Flexbox rules to the file.

Tip: If you are unsure which rules to add, refer to the
Grids and Flexbox cheat sheet
lesson item.

### Step 2: Apply the CSS rules to HTML elements

Open the index.html file and apply the CSS rules to the HTML elements.

Open your previously created component files and apply the CSS rules to the HTML elements.

### Step 3: Verify that the HTML elements are positioned correctly

Run your app using the npm start command

Open the web browser and go to
http://localhost:3000
to view the web app.

Ensure that the elements are positioned correctly in the web browser

Using the web browser developer tools to view the web page in responsive mode, ensure that the elements are positioned correctly on a mobile device.

Conclusion
By completing this exercise, the Little Lemon website’s visual layout will display correctly on different device sizes. This will provide a good user experience to visitors of the website.

## Exercise: Styling elements

Overview
Now that the layout of the Little Lemon web app is set up, the next step is to set up the necessary CSS rules to apply the visual stylings based on the design that you built in Figma. In this exercise, you’ll use your CSS skills to code the way specific HTML elements should look on the Little Lemon web app.

Scenario
Little Lemon wants you to implement recognizable styles for HTML elements on their restaurant app. In this exercise, you will style these HTML elements. The styles need to be in line with the Figma design and wireframe you created, including, for example, font size, spacing, line height, colors, background colors and borders.

In preparation for this exercise, you can recap CSS selectors, best practices and examples by referring to the following lesson items in the HTML and CSS in-depth course:

Widely used selectors

All selectors and their specificity

Combination selectors

Pseudo-classes

Instructions

### Step 1: Consider your Figma design and wireframe

Inspect the design and mockup for your app. During your evaluation, you may consider:

What is the common theme across your site?

What are the colors?

What are the font sizes?

What are the responsive design considerations?

Will your HTML elements (including images) have the border radius set to 0 or will it be somewhat rounded?

Will your divs, articles, asides and other tags have a CSS shadow?

What other CSS properties you can think of?

### Step 2: Style the HTML headings, paragraphs and spans

Bearing in mind design considerations, style your headings, paragraphs and spans, namely, the following elements:

h1, h2, h3, h4, h5 and h6

p

span

### Step 3: Style the navigation elements

Bearing in mind design considerations, style your navigation elements, namely:

nav

ul

li

### Step 4: Style your images

Bearing in mind design considerations, style your images, that is, the img tag.

Note: You might need to come back to this task again and again as you develop the app and fine-tune the styling.

### Step 5: Apply the rules to existing HTML elements

Open your previously created component files and apply the CSS rules to the HTML elements.

### Step 6: Verify that the HTML elements are styled correctly

Run your app using the npm-start command.

Open the web browser and go to
http://localhost:3000
to view the web app.

Ensure that the elements are styled correctly in the web browser.

Using the web browser developer tools, view the web page in responsive mode to ensure that the elements are styled correctly on a mobile device.

Conclusion
By completing this exercise, you have a complete CSS code for the HTML elements which you can use to style the elements in your project.

## Exercise: Setting up the app components

Overview
In this exercise, you will set up the components and routing for the different areas of the Little Lemon website.

Scenario
Now that the visual foundations of the Little Lemon website are set up, you’ll need to set up the components and routing for the functions and features of the website. Using component-based web development, you can code components that you can reuse throughout the Little Lemon website, for example, you could code the Nav component for the homepage of the website and re-use it for other pages, such as the About page and Bookings page. For more information on this approach to web development, you may find it helpful to revisit the following lesson items in the Introduction to Front-end development course:

Single page applications

What is React?

Component hierarchy

Creating React hierarchy

Navigation

The NavBar

Instructions

### Step 1: Recognize components to build, using your design

Map, 1-to-1, the components you have in Figma. Here is an example of the components that could be built for the web app's homepage layout:

Nav (the top-level navigation of the website, sometimes referred to as the navbar)

CallToAction (sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible)

Homepage (the component for the homepage)

Specials (the component that loops over the specials that come from a data source)

CustomersSay (testimonials, including star ratings, customer images and customer details)

Chicago (the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it)

BookingPage (the component for the table reservations page)

### Step 2: Set up the Navigation

Now that your components are set up, the next step is to add the navigation and routes.

Update the hyperlinks in your navbar to use the Link component.

In the Main component you created in the previous exercise, add the Routes component and define a route for each page. For example:

1234
`<Routes>` 
`<Route path="/" element={`<HomePage />` }>``</Route> `
`<Route path="/booking" element={`<BookingPage />` }>``</Route> `
`</Routes>`

### Step 3: Code the first version of the homepage's components

Now that you've identified the components that your homepage needs to have, code some simple components for the page.

Note: At this point, all that you need to have are the images and text.

### Step 4: Style the homepage components

Style the components that you've coded for the homepage using the style guide. You may choose to style the following using CSS rules that you’ve previously created, or, update the rules as necessary.

Font size

Color

Background

Line-height

Letter-spacing

Grid

Flex

Display

Border

Border radius

Note: Keep in mind that you may need to set aside sufficient time for styling. Styling these components will take some time, maybe even a few hours.

Conclusion
By completing this exercise, you have built and styled-components for the homepage of the Little Lemon website. You can apply these skills to creating component-based layouts for the Little Lemon reserve-a-table functionality.

## Exercise: Defining the Bookings page

Overview

Now that you’ve set up the foundations of the project, the next step is to begin adding the key features of the Little Lemon web app.In this exercise, you’ll set up the table booking page.

Scenario

Currently, a visitor to the Little Lemon web app cannot reserve a table. Your task is to improve the app by allowing the user to enter data into the form so that they can complete their registration. Thus, you need to build a Booking Form component that has the following entries (form items):

Date

Time

Number of guests

Occasion (Birthday, Anniversary)

Submit reservation button (to submit the form)

To do this, you need to implement a form in a controlled component named BookingForm. As you progress through the exercise, it may be helpful to revisit the following lesson items:

Creating a form

What are controlled components?

Creating a Form component in React

Event handling and embedded expressions

Using hooks

Observing state

Instructions

### Step 1: Check the component and routes

If you haven’t done so already, create the BookingForm and BookingPage components. The BookingPage will contain the BookingForm component, in addition to any additional content before and after the form.

Note: Before proceeding to the next step, check that your routes and navigation bar are set up to allow navigation to the booking page.

### Step 2: Code the form structure

Next, you’ll need to build the form structure in the BookingForm component. You can use the following plain HTML5 implementation as a starting point, however, you should convert it to JSX so that you can later connect the input to the React state.

Note: Keep in mind the difference between the for attribute in HTML and htmlFor in JSX. Also, remember to self-close all tags in JSX.

```
<form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form>
```

### Step 3: Code the form behavior

Using what you already know about events, effects and state in React, update your form's code to keep track of its own state.

Define a state variable for field in the form.

Connect each state variable to the form fields using the value and onChange form element attributes.

The options in the booking time field should be displayed from a list of available times. For now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options.

Tip: Use the useState function to declare the variable.

Now that the state is connected to the input elements, the form is ready to communicate with an API, a task you may complete in future.

Conclusion
By completing this exercise, you’ve created the component of the Bookings page for customers to reserve a table. In the next lesson, you’ll work on lifting up the state and connecting the component to the list of available reservation times.

## Exercise: Adding table booking state

Overview
Previously, you set up the BookingForm component and tracked its state. However, to be truly functional, your Little Lemon reserve-a-table web app functionality will need to be able to share state across components.

Scenario
The goal of this exercise is for you to expand the implementation of the component for the Booking page of the Little Lemon website.

As part of the reserve-a-table web app functionality, the page will display the existing booked table times and available slots, using a list component containing several instances of a BookingSlot component.

Available booking slots will be shared between the components and updated when the user submits the form. As your progress through the exercise, it may be worth revising the following lesson items in the Advanced React course:

Working with React hooks

Lifting up state

Working with complex data in useState

What is useReducer and how it differs from useState

Instructions

### Step 1: Life state up to the Main component

As you added the table booking state to the BookingForm component in the previous exercise, in this exercise, you need to lift the state up to the Main component. This is the preferred approach in this case, as your app is relatively simple.

Move the availableTimes useState hook from the BookingForm component into the Main component

Pass down the state and state changing functions from the Main component to the BookingForm component using props in order to make state work across different components.

### Step 2: Update BookingForm to display available times based on the selected date

The next step is to prepare the available times to be updated based on the date the user has selected. To do this, you will change the availableTimes state to a reducer.

In the Main component, create a function named updateTimes which will handle the state change. This function will change the availableTimes based on the selected date. For now, the function can return the same available times regardless of the date.

Next, create a function called initializeTimes which will create the initial state for the availableTimes.

Then, change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.

Update the BookingForm component to dispatch the state change when the date form field is changed.

Tip: Include the newly selected date in the dispatch parameter.

Conclusion
By completing this exercise, you should now have an app for Little Lemon in which state works across several components, moving you another step closer to having a fully-functional booking page.

Although outside the scope of this capstone project, it’s worth mentioning that you may favor more robust state management approaches in the case of larger or more complex apps.

## Exercise: Adding unit tests

Overview
In this exercise, you will write two unit tests that you can use to check that your web app is working correctly. With regards to writing tests and the related syntax, you may find it useful to recap the following lesson items in the Advanced React course:

Why React Testing library

Writing the first test for your form

Scenario
Testing code is a key step of the app development process. In this exercise, you’ll practice writing and implementing unit tests for components and state using React Testing Library to verify that the individual functionalities within your Little Lemon web app work as expected.

Instructions

### Step 1: Test for some static text being rendered in the BookingForm component

Using your mockups, pick a part of the BookingForm component that has some static text, such as a heading or label.

In preparation for coding a test of this static test, review the following starting code for a test, based on an example in the
Writing the first test for your form
lesson referenced earlier:

```
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})
```

Keeping in mind the above example, code a test for the static text being rendered in the BookingForm component, using code like this:

```
screen.getByText("BookingForm");
```

Note: You will need to adjust the code based on what you've decided your Bookings component should render.

### Step 2: Test the updateTimes and initializeTimes functions

The next step is to validate the behavior of the updateTimes and initializeTimes reducer functions.

Write a unit test for the initializeTimes function to validate that it returns the correct expected value.

Write a unit test for the updateTimes function to validate that it returns the same value that is provided in the state. This unit test is important as it will be updated later when the logic of changing the available times based on the selected date is implemented.

Conclusion
In this exercise, you explored two examples of unit tests that can be used to check that your web app works correctly. In the event that the tests produce errors or unexpected outcomes, you’ll have a better idea of where exactly you need to apply a fix.

## Exercise: Adding form validation

Overview

Now that all the features are implemented, it is important to provide a good user experience. Part of a good user experience is preventing the user from submitting invalid data. This has the added benefit of helping to ensure data integrity when it is submitted to the API.

Scenario
In this exercise, you will update the booking form to use client-side validation. You will achieve this using both HTML5 validation and validation through React. You can recap concepts related to client-side form validation by revisiting the following lesson items:

HTML and CSS in-depth: Forms and validation

HTML and CSS in-depth: Making the most out of client-side validation

React basics: Common event handling

Advanced React: Creating a form component in React

Instructions

### Step 1: Implement HTML5 validation

For each form input field, consider what HTML5 validation can be applied. For example, the user should not be able to reserve a table for less than one person.

Apply the validation to each form input field in BookingForm.

### Step 2: Implement client-side validation using React

After applying the HTML5 validation, consider which input fields could use further validation via JavaScript and React. For example, the submit button should be disabled if the form input fields are invalid.

Tip: Use events to detect field changes and submit button clicks.

Tip: If you built your form using Formik, take advantage of Formik’s built-in validation functions.

### Step 3: Run the web app

Run the web app and verify that the form validation behaves as expected. When all of the fields are valid, it should be possible to submit the form.

Conclusion
In this exercise, you added client-side form validation to improve the user experience and help ensure valid data is submitted to the API. Customers reserving a table using the website will now have a more satisfactory experience when using the Little Lemon website.

## Exercise: Ensuring your application is accessible to users

Overview
The goal of this exercise is for you to review your application's accessibility and revise the project with improvements.

Scenario
It is very important to ensure any app you create is accessible to all users. As such, you need to ensure the accessibility of the app you have created for Little Lemon.

There are many ways that you can improve a React application's accessibility. One way that has been discussed in this course is the use of semantic markup. Another important accessibility improvement that ties in well with setting up semantic markup is the use of ARIA attributes

As you complete this exercise, you may find it helpful to review the following content:

Web accessibility

Designing for accessibility

You can also check out the Accessibility resource available at the official React docs website linked in the additional resources. This provides a nice overview of accessibility in React, including the points discussed here, plus a few additional points.

Instructions

### Step 1: Improving the semantic markup you're using

Improve your app accessibility by improving the semantic markup you’re using.

Note: This step's completion will depend on how much work you've already done on making your app's code semantic in the previous lesson items that were dedicated to this specific goal.

### Step 2: Use ARIA attributes

Improve app accessibility by using ARIA attributes

Add at least the aria-label attribute and set it to On Click, as follows:

aria-label="On Click"

Tip: Remember, the aria-\* attributes are an exception to the rule that all JSX properties and attributes use camelCase. In the case of ARIA attributes, it's proper JSX syntax to use the hyphen-cased syntax, just like in plain HTML.

Note: This step's completion will also depend on how much attention you've paid to the semantic structure of your app in the previous exercises.

### Step 3: Labeling forms

To improve the accessibility of your forms, use the label element and the HTML For attribute, which maps to the id attribute of the actual form item, such as an input.

Note: This is important because it allows users to click on a specific form input label, and it will automatically focus into the given form input.

Conclusion
You have now practiced reviewing an application's accessibility and revising the project with improvements. Although these three steps are not all the different ways in which you can improve the accessibility of your React apps, you are three steps closer to ensuring your web app is accessible to all users.

## Exercise: Evaluating and revising the UX

Overview
In this exercise, you will carry out an abridged version of a heuristic evaluation using Jakob Nielsen’s 10 usability heuristics for user interface design. To complete the evaluation, you will use a template, which is a guide that will assist you in determining how user-friendly your solution to the little Lemon reserve-a-table online function is. The goal of this template is not to provide you with a specific diagnosis but to assist you in identifying areas to focus on to improve the user experience. Simply put, the goal is to help you identify problems with your solution that may make it difficult for users to find information, complete tasks and effectively use the site.

Instructions

### Step 1

Open the Excel sheet called Heuristics evaluation template below.

Click on Heuristics Template 1 at the bottom of the Excel sheet. In Template 1, all the heuristics are listed with their relevant definitions.

Start by selecting the usability problems under the relevant heuristics it violates. Then assign a severity rating of none, cosmetic, minor, major or catastrophic to each problem. The severity ratings are outlined below:

S0: It violates a heuristic but does not appear to be a usability issue.

S1: Users may easily overcome cosmetic usability issues or occur infrequently. Unless extra time is available, it does not need to be fixed for the next release.

S2: Minor usability problems may occur more frequently or be more challenging to overcome. Fixing this should be given low priority for the next release.

S3: Major usability problem occurs frequently and persistently or users may be unable or unaware of how to fix the problem. It is essential to fix, so it should be given high priority.

S4: Usability catastrophe seriously impairs the use of the product and cannot be overcome by users. It is imperative to fix this before the product can be released.

### Step 2

Click on Heuristics Template 2 at the bottom of the Excel sheet. All the heuristics are mentioned and what each means in template 2.

Describe the problem you encounter and assign an easy-to-fix rating to each problem, which is maximum, considerable, concentrated, easy or trivial. The easy-to-fix ratings are outlined below:

E0: Fix will require maximum effort, including more investigation into the proper solution.

E1: Fix will require considerable effort, but the issue and solution are understood.

E2: Fix will require a more concentrated effort, but the issue and solution are understood.

E3: A single developer with minor effort can quickly complete Fix.

E4: Fix is trivial and easy to implement.

Conclusion
In this exercise, you completed an abridged version of a heuristic evaluation using Jakob Nielsen’s 10 usability heuristics for user interface design.
