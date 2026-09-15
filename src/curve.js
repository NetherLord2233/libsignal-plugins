import libsignal from '../index.js';

export const generateKeyPair = libsignal.generateKeyPair;
export const calculateAgreement = libsignal.calculateAgreement;
export const verifySignature = libsignal.verifySignature;
export const calculateSignature = libsignal.calculateSignature || libsignal.curve25519Sign;
export const calculateMac = libsignal.calculateMac;
export const createKeyPair = libsignal.createKeyPair;
export const curve25519Sign = libsignal.curve25519Sign;

export const Curve = {
  generateKeyPair: libsignal.generateKeyPair,
  calculateAgreement: libsignal.calculateAgreement,
  verifySignature: libsignal.verifySignature,
  calculateSignature: libsignal.calculateSignature || libsignal.curve25519Sign,
  calculateMac: libsignal.calculateMac,
  createKeyPair: libsignal.createKeyPair,
  curve25519Sign: libsignal.curve25519Sign,
  ...libsignal
};

export default Curve;
