# Welcome to Beastsite 3.0!

This is the third major iteration of the Beast website, whose current version can be viewed [here](https://www.mit.edu/~beast).

If you've never written a line of code before, don't worry: the README (this document!) contains instructions to help you get started and will walk you through the steps needed to help develop and maintain our beloved Beastsite:

0. Setup
1. Making changes
2. Sharing changes to GitHub
3. Updating the actual website on Athena

Stuck or have questions? Reach out to Teresa (t_gao@mit.edu*) or current members of Beast WebComm (beastsite@mit.edu). We also have a [channel in the Beast Discord](https://discord.com/channels/631269317513707549/1016902588354007131) precisely for this purpose.

\* I graduated in 2023 and am no longer at MIT, but I don't bite!

## 0. Set up

The first thing you'll want to do is clone this repository (repo), which effectively means that you're downloading a copy of all the files here and that the changes you make can eventually be seen here.

1. Open up the command line on your computer. On Windows, this can be Command Prompt or Powershell. On Mac, this is Terminal.
2. Navigate to wherever you want to clone the repository. Some helpful commands for this are `pwd` (a.k.a., print working directory, which tells you where you currently are), `ls` (which lists all of the files and folders in your current directory), `cd foldername` (which lets you "enter" a subfolder of your current directory), and `cd ..` (which lets you take a step backward from where you are; e.g., if you are in `folder/subfolder/` and run this command, you will end up in `folder/`).
3. Type `git clone https://github.com/beast-2e/beast-2e.github.io.git` and hit enter; the code will appear in a folder called `beast-2e.github.io` (which you can get to via `cd beast-2e.github.io`). Optionally, you can type `git clone https://github.com/beast-2e/beast-2e.github.io.git yourfoldernamehere`, and the code will appear in whatever you call your subfolder.
4. Once you've entered the repo, it's a good idea to create a branch so that your changes don't just go directly to the `main` branch. (In version control, branches are different tracks of history: like "what if" scenarios, but actually.) This is because sometimes people have simultaneous diverging ideas that would be confusing to add to the same branch at once. You can do this by running `git checkout -b yourbranchname -t origin/main`, which will create a new branch with your branch name that tracks the changes occurring on `main`.

## 1. Make changes

The files that are most relevant to any changes that you might want to make are the HTML files (page content) followed by the CSS files (page format).

To see how things are set up, feel free to open up any of the files ending in `.html` in your favorite editor! You can gauge the effects of any changes you make by double-clicking on the `.html` file, which should open it up in your web browser.

Note: To update quotes, simply update `js/quotes.js`! Make sure to add quotation marks (including `\"`s, which add quotation marks that are visible on the page) and trailing commas on each entry. Displayed quotes are randomly generated; to test newly added quotes, comment out the lines for all the other ones that you don't want to see in the moment.

## 2. Share changes to GitHub

So you've made changes that you're happy with, and these changes live on your computer. Let's get those updates in the cloud as well by *pushing* them to GitHub, where our code repository is stored!

1. On command line, navigate to your repository.
2. To check which files you've changed, run `git status`. The names of the changed files should appear in red.
3. For each file whose changes you want to save, run `git add nameofthisfile`. If you're lazy and are sure that you want to keep the changes in every file you've changed, you can run `git add -A` to add all files.
4. For peace of mind, you can run `git status` again. The names of the changed files that you want to save the changes of should appear in green.
5. Now that you've added your changes, it's time to name them (so that, when you or a fellow Beastie is looking through the history of the repo, they can remember what exactly it was that you were trying to do here). Run `git commit -m "insert explanation of your changes here"`.
6. Finally, run `git push`! This will transfer your changes from your local computer all the way to GitHub so that other people with access to this repo can view the code for your changes. Note that if other people have been working on this repo simultaneously, you may need to run `git pull` first to incorporate their changes into your local copy, but only run this after running `git commit` so you don't accidentally override your own changes.

## 3. Update the actual website on Athena

The previous step saved your changes from your local computer to GitHub. Now, we need to make sure MIT Athena has your changes so that you can see the changes you made on the actual website!

1. Connect to Athena by opening Terminal, PowerShell, or any similar command prompt-y program on your computer and typing `ssh yourkerb@athena.dialup.mit.edu`.
2. After you hit Enter, follow the prompts to enter your password and authenticate via Duo.
3. Hooray: you're connected to Athena via SSH! Now, access Beast's Athena locker with the command `cd /mit/beast/`. If you don't have permissions to do this, ask a hall chair to add you to the `beastsite@mit.edu` list.
4. The website lives in `www/`; enter this folder via `cd www/`. (If you are lost at any time, feel free to type `pwd` and the path to your current location should be printed as output to the console.)
5. The GitHub repo (this!) should already be cloned here, which you can verify by typing `git status`. (If this is not the case, and you're getting some message about the folder not being a GitHub repo, then type `cd ..` followed by `mv www/ www-temp/` and `git clone https://github.com/beast-2e/beast-2e.github.io.git www/`.)
6. Pull your changes from GitHub by typing `git pull`.
7. To verify that your changes went through, visit the Beast website at https://www.mit.edu/~beast (or, equivalently, https://web.mit.edu/beast/www). Note that it may sometimes take a bit (maybe up to 30 minutes) for things to show up even if you did everything correctly, so don't immediately lose hope if nothing seems to have changed!
