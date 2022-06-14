import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

const { keyboard, Key } = require('@nut-tree/nut-js');

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  nutjs: {
    async type(m: string) {
      keyboard.config.autoDelayMs = 100;
      await keyboard.type(m);
    },
    async pressKey(key) {
      keyboard.config.autoDelayMs = 0; // TODO: as nut.js uses setTimeout for this, it introduces a noticeable delay
      await keyboard.pressKey(key);
    },
    async releaseKey(key) {
      keyboard.config.autoDelayMs = 0;
      await keyboard.releaseKey(key);
    },
    Key,
  },
});
