# Welcome to Beastsite 3.0!

## Start Here

This is the third major iteration of the Beast website, whose current version can be viewed [here](https://www.mit.edu/~beast).

The purpose of this README is to make sure we have a continuation of knowledge between older and newer generations of Beasties. **Please add/edit/remove anything you think can help future Beasties (or your future self) understand it more easily!**

If you don't want to download the entire repo to update the README, you can click the little pencil icon and edit it directly on GitHub in your web browser.

### How do I start doing awesome website things?

This README walks you through the steps needed to help develop and maintain our beloved Beastsite.

0. Setup
1. Making changes
2. Sharing changes to GitHub
3. Updating the actual website on Athena

Keep scrolling (or jump using GitHub's table of contents) to see these steps.

### How do I add a new bio to the Beasties page?

Update `js/beasties.js`. If you follow the format of the existing Beastie data, then you shouldn't have any problems.

### How do I add a new quote to the quotes page?

Update `js/quotes.js`. Make sure to include `\"` (not just `"`) so that the words are wrapped in visible quotes.

To test your changes, you can temporarily comment out everything except the quote(s) you added and refresh your local copy of `quotes.html` to make sure everything looks correct.

### I'm stuck or have other questions!

Reach out to current members of Beast WebComm (beastsite@mit.edu). We also have a [channel in the Beast Discord](https://discord.com/channels/631269317513707549/1016902588354007131) that includes some alums who can also help.


## Getting Started

### 0. Set up

After you've been added to this repo, run this on your local computer to clone the directory:
```
git clone https://github.com/beast-2e/beast-2e.github.io.git yourfoldername
cd yourfoldername
```

### 1. Make changes

On your file explorer app, navigate to wherever you cloned the directory, double-click on a file that ends in `.html`, and it should open in your browser.

Any changes you make locally should show up on your local version of the website after you refresh the page. Note that this doesn't affect the public published version of the website, so feel free to make/break anything whatsoever!

### 2. Share changes to GitHub

Thus far, your changes have only existed on your local copy of the code on your computer. Now, let's upload it to the repo in GitHub!

```
git checkout -b yourbranchname -t origin/main
git status # Sanity check: your modified file(s) should appear in red.
git add nameoffileyouchanged
git status # Sanity check: the file(s) you added should appear in green.
git commit -m "an explanation of your changes goes here"
git checkout main
git merge yourbranchname
git push
```

### 3. Update the actual website on Athena

Now that your changes are in shared repo on GitHub, we can update the actual (public) Beast website!

First, connect to Athena by a) visiting https://athena.dialup.mit.edu or b) running `ssh yourkerb@athena.dialup.mit.edu` on your local computer. Follow the sign-in instructions.

Then, after you've been added to [beastsite@mit.edu](https://groups.mit.edu/webmoira/list/beastsite), run these commands:
```
cd /mit/beast/www/
git pull
```

To verify that your changes went through, visit the Beast website at https://www.mit.edu/~beast (or, equivalently, https://web.mit.edu/beast/www).

Note that it may sometimes take a bit (maybe up to 30 minutes) for things to show up even if you did everything correctly, so don't immediately lose hope if nothing seems to have changed!
