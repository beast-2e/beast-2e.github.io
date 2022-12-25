# Welcome to Beastsite 2.0!

A lot of the setup for this version of Beast's website has been made by Teresa (t_gao@mit.edu), so for anyone making future changes, please let me know if anything is confusing or could be made more efficient and I'll try to help!

## 0. Set up

The first thing you'll want to do is clone this repository (repo), which effectively means that you're downloading a copy of all the files here and that the changes you make can eventually be seen here.

1. Open up the command line on your computer. On Windows, this can be Command Prompt or Powershell. On Mac, this is Terminal.
2. Navigate to wherever you want to clone the repository. Some helpful commands for this are `pwd` (a.k.a., print working directory, which tells you where you currently are), `ls` (which lists all of the files and folders in your current directory), `cd foldername` (which lets you "enter" a subfolder of your current directory), and `cd ..` (which lets you take a step backward from where you are; e.g., if you are in `folder/subfolder/` and run this command, you will end up in `folder/`).
3. Type `git clone https://github.com/beast-2e/beast-2e.github.io.git` and hit enter; the code will appear in a folder called `beast-2e.github.io` (which you can get to via `cd beast-2e.github.io`). Optionally, you can type `git clone https://github.com/beast-2e/beast-2e.github.io.git yourfoldernamehere`, and the code will appear in whatever you call your subfolder.

## 1. Make changes

*TODO: add explanation for where everything lives within this repo*

## 2. Share changes

*TODO: add instructions for committing and pushing*

## 3. Update the actual website

The previous step saved your changes from your local computer to GitHub. Now, we need to make sure MIT Athena has your changes!

1. Connect to Athena by opening Terminal, PowerShell, or any similar command prompt-y program on your computer and typing `ssh yourkerb@athena.dialup.mit.edu`.
2. After you hit Enter, follow the prompts to enter your password and authenticate via Duo.
3. Hooray: you're connected to Athena via SSH! Now, access Beast's Athena locker with the command `cd /mit/beast/`. If you don't have permissions to do this, ask a hall chair to add you to the `beastsite@mit.edu` list.
4. The website lives in `www/`; enter this folder via `cd www/`. (If you are lost at any time, feel free to type `pwd` and the path to your current location should be printed as output to the console.)
5. The GitHub repo (this!) should already be cloned here, which you can verify by typing `git status`. (If this is not the case, and you're getting some message about the folder not being a GitHub repo, then type `cd ..` followed by `mv www/ www-temp/` and `git clone https://github.com/beast-2e/beast-2e.github.io.git www/`.)
6. Pull your changes from GitHub by typing `git pull`.
7. To verify that your changes went through, visit the Beast website at https://www.mit.edu/~beast (or, equivalently, https://web.mit.edu/beast/www). Note that it may sometimes take a bit (maybe up to 30 minutes) for things to show up even if you did everything correctly, so don't immediately lose hope if nothing seems to have changed!
