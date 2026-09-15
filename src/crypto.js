import libsignal from '../index.js';

export const encryptData = libsignal.encryptData;
export const decryptData = libsignal.decryptData;
export const calculateMac = libsignal.calculateMac;
export const verifyMac = libsignal.verifyMac;
export const deriveSecrets = libsignal.deriveSecrets;
export const hash = libsignal.hash;
export const encryptWhisperMessage = libsignal.encryptWhisperMessage;
export const fillMessageKeys = libsignal.fillMessageKeys;

export const crypto = {
  encryptData: libsignal.encryptData,
  decryptData: libsignal.decryptData,
  calculateMac: libsignal.calculateMac,
  verifyMac: libsignal.verifyMac,
  deriveSecrets: libsignal.deriveSecrets,
  hash: libsignal.hash,
  encryptWhisperMessage: libsignal.encryptWhisperMessage,
  fillMessageKeys: libsignal.fillMessageKeys,
  ...libsignal
};

export default crypto;
