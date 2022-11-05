# Steps to install Manim via Docker

## Move to project folder

Move where the `docker-compose.yml` file is.

## Set the enviroment variables

Copy the path from the navegation bar and set the following enviroment variables:

```
$env:INPUT_PATH="C:\dev...."
```

```
$env:OUTPUT_PATH="C:\dev...."
```

The `INPUT_PATH` variable will read the address where the .py files are to be found of your host machine.

The `OUTPUT_PATH` variable indicates, in theory, the place where the videos are going to be exported (also, of your host machine), but for some reason, at least in Linux, it does not work, but anyway you have to configure it so that Docker does not give problems.

Once this is configured we simply run Manim as normal using **docker-compose**:

```
docker-compose run manim <file-name>.py <Scene> -l
# example:
docker-compose run manim example_scenes.py SquareToCircle -l
```

Where `example_scenes.py` is in the `INPUT_PATH` location.

## Points to consider:

In Docker you cannot use the `-p` flag, which allows you, in a local installation, to open the videos automatically. So it is recommended to install a media player like [**mpv player**](https://mpv.io/installation/). This player automatically refreshes itself when it detects that the original file has been changed. Besides it is very light and fast.