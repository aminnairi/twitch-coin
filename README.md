# twitch-coin

Automatically gather your Twitch Coin while watching your favorite streamer.

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
`make build` | Build the artifacts into the `build` folder and create the extension archive `twitch-coin.zip`.
`make clean` | Remove the `twitch-coin.zip` extension archive.
`make mrproper` | Remove all files listed in the [`.gitignore`](./.gitignore) file.
`make stop` | Stop the Docker Compose services.
`make restat` | Restart the Docker Compose services.
