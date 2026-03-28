# Welcome to Beastsite 4.0!

## Start Here

This is the fourth major iteration of the Beast website, whose current version can be viewed [here](https://www.mit.edu/~beast). Compared to the previous version of the website, this version simplifies a lot of the CSS with Bootstrap and cleans up the JavaScript with jQuery.

The purpose of this README is to make sure we have a continuation of knowledge between older and newer generations of Beasties. **Please add/edit/remove anything you think can help future Beasties (or your future self) understand it more easily!**

If you don't want to download the entire repo (repository) to update the README, you can click the little pencil icon and edit it directly on GitHub in your web browser.

### I'm new to Beast/coding! How do I start doing awesome website things?

This README walks you through the steps needed to help develop and maintain our beloved Beastsite.

0. Setup
1. Making changes
2. Sharing changes to GitHub
3. Updating the actual website on Athena

(You can also read [this official guide to Git](https://education.github.com/git-cheat-sheet-education.pdf),
though everything you need to know to get started is already included in this README.)

Keep scrolling (or jump using GitHub's table of contents) to see these steps.

### How do I add a new bio to the Beasties page?

Update `js/beasties.js`. If you follow the format of the existing Beastie data, then you shouldn't have any problems.

### How do I add a new quote to the quotes page?

Update `js/quotes.js`. Make sure to include `\"` (not just `"`) so that the words are wrapped in visible quotes, which is helpful to distinguish if a certain "quote" actually contains multiple speakers.

To test your changes, you can temporarily comment out everything except the quote(s) you added and refresh your local copy of `quotes.html` to make sure everything looks correct.

### How can I debug formatting issues that I'm only seeing on the actual website?

These might have to do with image/resource loading errors, which you won't see if you just open up, say, `index.html` locally. In order to reproduce these issues while you're developing, you'll need to install Node or Python and run something like `python -m http.server`. This will deploy the website to http://localhost:8000, allowing you to test scenarios like forcing the images/resources to be hard reloaded the same way as on the actual website.

### I'm stuck or have other questions!

Reach out to current members of Beast WebComm (beastsite at mit dot edu). We also have a [channel in the Beast Discord](https://discord.com/channels/631269317513707549/1016902588354007131) that includes some alums who can also help.


## Getting Started

### 0. Set up

After you've been added to this repo, run this on your local computer to clone the directory and navigate to it:
```
git clone https://github.com/beast-2e/beast-2e.github.io.git yourfoldername
cd yourfoldername
```

### 1. Make changes

You'll need to install a text editor or IDE in order to make changes to the code. [Sublime](https://www.sublimetext.com/download) is a nice free text editor that you can open from the command line with `subl .`.

On your file explorer app, navigate to wherever you cloned the directory, double-click on a file that ends in `.html`, and it should open in your browser.

Any changes you make locally should show up on your local version of the website after you refresh the page. Note that this doesn't affect the public published version of the website, so feel free to make/break anything whatsoever!

### 2. Save changes

A commit is a snapshot of the state of your code at a certain point in time. You'll need to explicitly *stage* your changes to add them to a commit, which ensures that only the changes you want to actually keep make it to this repo.

```
git checkout -b yourbranchname -t origin/main
git status # Sanity check: your modified file(s) should appear in red.
git add nameoffileyouchanged # Repeat this for every file you changed.
git status # Sanity check: the file(s) you added should appear in green.
git commit -m "an explanation of your changes goes here"
```

Want to view your previous commits? Run `git log` (`q` to quit).

### 3. Share changes to GitHub

Thus far, your commits have only existed on your local copy of the code on your computer. Now, let's upload them to the repo in GitHub!

```
git checkout main
git pull
git merge yourbranchname
git push
```

### 4. Update the actual website on Athena

Now that your changes are in shared repo on GitHub, we can update the actual (public) Beast website!

First, connect to Athena by a) visiting https://athena.dialup.mit.edu or b) running `ssh yourkerb@athena.dialup.mit.edu` on your local computer. Follow the sign-in instructions.

Then, after you've been added to [beastsite at mit dot edu](https://groups.mit.edu/webmoira/list/beastsite), run these commands:
```
cd /mit/beast/www/
git pull
```

To verify that your changes went through, visit the Beast website at https://www.mit.edu/~beast (or, equivalently, https://web.mit.edu/beast/www).

Note that it may sometimes take a bit (maybe up to 30 minutes) for things to show up even if you did everything correctly, so don't immediately lose hope if nothing seems to have changed!
