import {twitchCoin} from "./twitch-coin";

describe("twitch-coin", (): void => {
    const button: HTMLButtonElement = document.createElement("button");

    button.classList.add("tw-button");
    button.classList.add("tw-button--success");
    button.classList.add("tw-interactive");

    document.body.appendChild(button);

    console.log = () => {
        return null;
    };

    it("should click the button if available", (): void => {
        expect.assertions(1);

        const callback: () => void = jest.fn();

        button.addEventListener("click", callback);

        twitchCoin();

        expect(callback).toBeCalled();

        button.removeEventListener("click", callback);
    });

    it("should not click the button if not available", (): void => {
        expect.assertions(1);

        const callback: () => void = jest.fn();

        button.classList.remove("tw-button");
        button.classList.remove("tw-button--success");
        button.classList.remove("tw-interactive");
        button.addEventListener("click", callback);

        twitchCoin();

        expect(callback).not.toBeCalled();

        document.body.removeEventListener("click", callback);
    });
});
