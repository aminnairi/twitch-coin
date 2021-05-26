import {twitchCoin} from "./twitch-coin";

describe("twitch-coin", (): void => {
    const button: HTMLButtonElement = document.createElement("button");

    button.setAttribute("aria-label", "Claim bonus");

    document.body.appendChild(button);

    console.log = () => {
        return null;
    };

    it("should click the button if available", (): void => {
        expect.assertions(1);

        const callback: () => void = jest.fn();
        const listener: () => void = () => callback();

        button.addEventListener("click", listener, false);

        twitchCoin();

        expect(callback).toHaveBeenCalledWith();

        button.removeEventListener("click", listener);
    });

    it("should not click the button if not available", (): void => {
        expect.assertions(1);

        const callback: () => void = jest.fn();
        const listener: () => void = () => callback();

        button.removeAttribute("aria-label");
        button.addEventListener("click", listener, false);

        twitchCoin();

        expect(callback).not.toHaveBeenCalled();

        button.removeEventListener("click", listener);
    });
});
