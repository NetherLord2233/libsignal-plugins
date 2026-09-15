import libsignal from '../index.js';

export const encrypt = libsignal.encrypt || libsignal.encryptData;
export const decrypt = libsignal.decrypt || libsignal.decryptData;
export const encryptData = libsignal.encryptData;
export const decryptData = libsignal.decryptData;
export const calculateMac = libsignal.calculateMac;
export const calculateMAC = libsignal.calculateMac;
export const verifyMac = libsignal.verifyMac;
export const verifyMAC = libsignal.verifyMac;
export const deriveSecrets = libsignal.deriveSecrets;
export const hash = libsignal.hash;
export const encryptWhisperMessage = libsignal.encryptWhisperMessage;
export const fillMessageKeys = libsignal.fillMessageKeys;

export const crypto = {
  encrypt,
  decrypt,
  encryptData: libsignal.encryptData,
  decryptData: libsignal.decryptData,
  calculateMac: libsignal.calculateMac,
  calculateMAC: libsignal.calculateMac,
  verifyMac: libsignal.verifyMac,
  verifyMAC: libsignal.verifyMac,
  deriveSecrets: libsignal.deriveSecrets,
  hash: libsignal.hash,
  encryptWhisperMessage: libsignal.encryptWhisperMessage,
  fillMessageKeys: libsignal.fillMessageKeys,
  ...libsignal
};

export default crypto;
