#  Coding test

Using the Gulp boilerplate, create the app from the visuals provided. (Gulp instructions in below)

There is no need to use any CSS / JS frameworks, just plain HTML, CSS/SCSS and jQuery is fine.
The images required are in the /build/assets/images folder.

We are interested in your attention to detail, organisation and problem solving skills.

<b>The app should:</b>

1. Be responsive and as close to the visual as possible with breakpoints at 576px, 768px, 992px and 1200px, with a max width of 1366px.
2. Have the necessary hover and active states. When hovering an item display the black overlay, when an item is clicked show the pink overlay and stay pink unless clicked again, multiple items can be active.
3. Add a new item when the ‘Add Item’ button is clicked.
4. Remove all the items when the ‘Remove All Items’ button is clicked.
5. Reload the page when the ‘Reload’ button is clicked.

<b>Bonus points:</b>

1. Use BEM css methodology.
2. Create the ability to add custom text when adding an item.


# Gulp boilerlate

This is a skeleton template to help start building the front end of a website/app.

<strong>Step 1:</strong>

CD into the directory where the gulpfile.js is stored.

Install the modules required to use gulp, these are used in our 'gulpfile.js' file. The modules required are declared in the 'package.json' file:

To install the modules type the following command: `npm install`

<strong>Step 2:</strong>

Next we need to run the build tool gulp.

Type the following command: `gulp`

Gulp will start and run any tasks setup in 'gulpfile.js'. It will watch for any changes in the /src directory and automatically compile the scripts and output them in public_html.

<strong>Step 4:</strong>

Make sure any js or css edits are made in the /src/ directory. GULP will output the final minified versions in the distribution/build directory.

Code away!!