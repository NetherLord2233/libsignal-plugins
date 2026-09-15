import libsignal from '../index.js';

export const encryptData = libsignal.encryptData;
export const decryptData = libsignal.decryptData;
export const calculateMAC = libsignal.calculateMAC;
export const verifyMAC = libsignal.verifyMAC;
export const deriveSecrets = libsignal.deriveSecrets;
export const hash = libsignal.hash;
export const encryptWhisperMessage = libsignal.encryptWhisperMe>
export const fillMessageKeys = libsignal.fillMessageKeys;

export const crypto = {
  encryptData: libsignal.encryptData,
  decryptData: libsignal.decryptData,
  calculateMAC: libsignal.calculateMAC,
  verifyMAC: libsignal.verifyMAC,
  deriveSecrets: libsignal.deriveSecrets,
  hash: libsignal.hash,
  encryptWhisperMessage: libsignal.encryptWhisperMessage,
  fillMessageKeys: libsignal.fillMessageKeys,
  ...libsignal
};

export default crypto;