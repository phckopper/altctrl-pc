# Altctrl PC

A PC receiver for the [balena-altctrl](https://github.com/phckopper/balena-altctrl), allowing you to interface with preexisting games with your physical controllers!

---

# Architecture

This project is developed using electron and React for its UI. Under the hood, it communicates with the server using Websockets via the [altctrl-js](https://github.com/phckopper/altctrl-js) library. 

Keyboard and mouse emulation is done using the [nut.js](https://nutjs) library and the gamepad is emulated through [ViGEm](https://vigem.org).
