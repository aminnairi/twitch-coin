export function twitchCoin(): void {
    const AFTER_FIVE_SECOND: number = 5000;
    const BUTTON_CLASS: string = ".tw-button.tw-button--success.tw-interactive";

    console.log("[TwitchCoin] I'm searching for a Twitch Coin button to gather Twitch Coin.");

    const button: HTMLButtonElement | null = document.querySelector(BUTTON_CLASS);

    if (button !== null) {
        console.log("[TwitchCoin] I found a button to gather Twitch coin and I'm going to click it.");
        button.click();
    } else {
        console.log("[TwitchCoin] Failed to find a button to gather Twitch coin.");
    }

    console.log("[TwitchCoin] I'm going to wait for five seconds before searching for another button to gather Twitch Coin.");

    window.setTimeout(twitchCoin, AFTER_FIVE_SECOND);
}
