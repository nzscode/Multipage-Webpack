# webpack-template

Template for web-publish ready html doc, with webpack install needed only

1.  Setting up the Git Repo:

    1. Make a new Git Repository with a README.md
    2. Using Git Clone and the SSH, clone the git repository to your preferred
       folder (repos)

2.  Open the repository in your IDE
3.  In the root folder make two folders: src, dist

    1. In the src folder make two files: index.js, index.html

4.  Make a .gitignore file in the root folder
    1. Open the .gitignore file and add "node_modules"
5.  Use CTRL ~ to open the Terminal in your IDE (VS CODE)

6.  To initalize the webpack setup : npm init -y
7.  To setup Webpack: npm install --save-dev webpack webpack-cli
8.  In the root folder create a file: webpack.config.js
9.  To the webpack.config.js file add the following code: It can also be copied
    from :
    https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin

        	const HtmlWebpackPlugin = require("html-webpack-plugin");
            const path = require("path");
            
            module.exports = {
                entry: "./src/index.js",
                plugins: [
                    new HtmlWebpackPlugin({
                        scriptLoading: "blocking",
                        template: "./src/index.html",
                    }),
                ],
                output: {
                    filename: "main.js",
                    path: path.resolve(__dirname, "dist"),
                    clean: true,
                },
                module: {
                    rules: [
                        {
                            test: /\.css$/i,
                            use: ["style-loader", "css-loader"],
                        },
                    ],
                },
            };


11. To setup webpack to manage HTML: npm install --save-dev html-webpack-plugin
12. In package.json add a comma at the end of "scripts: { "test":... , "build":
    webpack", ...}
    It should look like this:
    
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack"
  },

    
14. In the src folder create a style.css file
15. Make sure the necessary rules are in webpack.config.js for css
    1. Install the files needed to run CSS & Styles: npm install --save-dev
       css-loader style-loader
16. Import the css file into the index.js file using : import "./style.css" at
    the top of the file
17. To complete basic Build, npx webpack OR npm run build
18. for adding images, fonts, json, data. See:
    https://webpack.js.org/guides/asset-management/

19. To test if working, add boilerplate to src> index.html and a console.log
    statement to index.js For css testing, add a div componenet nad change its
    color to something using js then save each individual file and run npm run
    build

20. To publish the files through GitHub:

    ```
    git add dist && git commit -m "Initial dist subtree commit"
    ```

    
    ```
    git subtree push --prefix dist origin gh-pages
    ```

    3.  If you already have a "gh-pages" branch, use the 1st command below.

        -   If you don't have a "gh-pages" branch, initialize it by using the
            2nd command below.
        -   Make it easier to run by creating scripts like these in your
            package.json file:

            ```js
            "scripts":
                {
                "gh-deploy": "git push origin :gh-pages && git subtree push --prefix dist origin gh-pages",
                "gh-deploy-init": "git push origin && git subtree push --prefix dist origin gh-pages"
                }
            ```
   
            

        \-In terminal:
```
            npm run gh-deploy
            npm run gh-deploy-init
```



4.  In your repository in GitHub. Go to Settings. Go to Pages.
    \-   Under the Source section you will see a dropdown list of branches.
    \-   Select the "gh-pages" branch and select the root as your folder.
    \-   Then click Save.



## Adding Font-Awesome Icons to element
- When creating the element:
      - add the font-awesome code to the inner code of the element
      Ex:
  
  ```js
  let deleteBtn = document.createElemnt("div");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>` ``     ```

To the index.html page of the src folder add the script from the kit

        ```html
        <script src="https://kit.fontawesome.com/08988bcf09.js" crossorigin="anonymous"></script>
        ```


## If at any point you have issues where when


    ```
    npx webpack
    ```


you get an error child something, try this:


```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo n latest
```


## BEST WAY TO MAKE A PROJECT
1. Make the project in index.html in a sample repo
2. Create a new repo, using the template from webpack-template
3. Copy over the code into the new repo, into the respective src files
4. Make sure to:
   
   a.

   ```
   git add .
   ```

   
   b.

   ```
   git commit -m
   ```
   
   c.

   ```
   git push
   ```

   
6. Use:

    ```
    npx webpack
    ```

   OR


   ```
   npm run build
   ```

   
9. Use:

    ```
    git subtree push --prefix dist origin gh-pages
    ```

7. Use:

    ```
    git add dist && git commit -m "Initial dist subtree commit"
    ```


8. Use:

   ```
   npm run gh-deploy-init
   ```


   ```
   npm run gh-deploy
   ```  

9. Go to the Settings of the Repo, on GitHub.
10. In the Pages Tab, make sure the gh-pages branch is selected in the root folder, and the save button is greyed out. Refresh the page every minute until the clickable link shows up.
