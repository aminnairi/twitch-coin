# twitch-coin

Automatically gather your Twitch Coin while watching your favorite streamer.

![Code Style CI](https://github.com/aminnairi/twitch-coin/workflows/Code%20Style%20CI/badge.svg?branch=latest)

## Development

### Requirements

- Git
- Docker
- Docker Compose
- GNU/Make

### Installation

```console
$ git clone https://github.com/aminnairi/twitch-coin.git    # HTTPS
$ git clone git@github.com:aminnairi/twitch-coin.git        # SSH
```

### Commands

Command | Description
---|---
`make start` | Start the Docker Compose services.
`make install` | Install the Node.js dependencies.
`make lint` | Check for consistency in the source-code's code-style.
`make audit` | Check for security flaws in the development dependencies.
`make build` | Build the artifacts into the `build` folder and create the extension archive `twitch-coin.zip`.
`make clean` | Remove the `twitch-coin.zip` extension archive.
`make mrproper` | Remove all files listed in the [`.gitignore`](./.gitignore) file.
`make stop` | Stop the Docker Compose services.
`make restat` | Restart the Docker Compose services.
