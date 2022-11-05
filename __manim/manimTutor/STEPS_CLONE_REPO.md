# Clone Manim-3b1b
```
git clone https://github.com/3b1b/manim.git
--I get all branches
--Create a new repo in github
git add remote <new repo name>
--when you create a new repo in git, it tells you the steps
git push 
```

# Fork repo

## Clone fork to local

```
$ git clone git@github.com:nickarino/manim-3b1b.git
$ cd manim-3b1b
```

## Check remotes

```
$ git remote -v
origin	git@github.com:nickarino/manim-3b1b.git (fetch)
origin	git@github.com:nickarino/manim-3b1b.git (push)
```

## Add original repo to remote

```
$ git remote add grant https://github.com/3b1b/manim.git
```

## Validate

```
$ git remote -v
grant	https://github.com/3b1b/manim.git (fetch)
grant	https://github.com/3b1b/manim.git (push)
origin	git@github.com:nickarino/manim-3b1b.git (fetch)
origin	git@github.com:nickarino/manim-3b1b.git (push)
```

## Fetch grant repo

```
$ git fetch grant
remote: Enumerating objects: 2850, done.
remote: Counting objects: 100% (67/67), done.
remote: Compressing objects: 100% (17/17), done.
remote: Total 2850 (delta 41), reused 63 (delta 38), pack-reused 2783
Receiving objects: 100% (2850/2850), 1.10 MiB | 3.00 MiB/s, done.
Resolving deltas: 100% (1743/1743), done.
From https://github.com/3b1b/manim
 * [new branch]        cairo-backend     -> grant/cairo-backend
 * [new branch]        fix_image_mobject -> grant/fix_image_mobject
 * [new branch]        gh-pages          -> grant/gh-pages
 * [new branch]        master            -> grant/master
 * [new branch]        video-work        -> grant/video-work
 * [new tag]           0.1.10            -> 0.1.10
 * [new tag]           0.1.11            -> 0.1.11
 * [new tag]           0.1.8             -> 0.1.8
 * [new tag]           0.1.9             -> 0.1.9
 * [new tag]           v0.1.4            -> v0.1.4
 * [new tag]           v0.1.5            -> v0.1.5
 * [new tag]           v0.1.6            -> v0.1.6
 * [new tag]           v0.1.7            -> v0.1.7
 * [new tag]           v0.2.0            -> v0.2.0
 * [new tag]           v1.0.0            -> v1.0.0
 * [new tag]           v1.1.0            -> v1.1.0
 * [new tag]           v1.2.0            -> v1.2.0
 * [new tag]           v1.3.0            -> v1.3.0
 * [new tag]           v1.4.0            -> v1.4.0
 * [new tag]           v1.4.1            -> v1.4.1
 * [new tag]           v1.5.0            -> v1.5.0
 * [new tag]           v1.6.0            -> v1.6.0
 * [new tag]           v1.6.1            -> v1.6.1
```

## Create branch from grant/cario-backend

```
$ git checkout -b cairo grant/cairo-backend
branch 'cairo' set up to track 'grant/cairo-backend'.
Switched to a new branch 'cairo'
```

## Check branches

```
git branch
* cairo
  master
```
## Push the cairo branch to your remote repo

```
$ git push -u origin cairo
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 288 bytes | 144.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'cairo' on GitHub by visiting:
remote:      https://github.com/nickarino/manim-3b1b/pull/new/cairo
remote: 
To github.com:nickarino/manim-3b1b.git
 * [new branch]        cairo -> cairo
branch 'cairo' set up to track 'origin/cairo'.
```

## Ready
