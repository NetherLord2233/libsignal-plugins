const fs = require('fs');
const path = require('path');
const os = require('os');

const arch = os.arch();

if (arch === 'x64') {
  console.log('[libsignal-plugins] Entorno x64: Sin cambios necesarios.');
  process.exit(0);
}

if (arch === 'arm' || arch === 'arm64') {
  const projectRoot = process.cwd(); 
  const targetDir = path.join(projectRoot, 'node_modules', 'libsignal');
  const currentPluginDir = path.resolve(__dirname, '..');
  const vendorSource = path.join(currentPluginDir, 'vendor', `libsignal-${arch}`);

  console.log(`[libsignal-plugins] Entorno ${arch} detectado.`);

  if (!fs.existsSync(vendorSource)) {
    console.error(`[libsignal-plugins] Error: No existe la carpeta ${vendorSource}`);
    process.exit(1);
  }

  try {
    if (fs.existsSync(targetDir)) {
      console.log(`[libsignal-plugins] Eliminando ${targetDir}...`);
      fs.rmSync(targetDir, { recursive: true, force: true });
    }

    console.log(`[libsignal-plugins] Copiando ${vendorSource} -> ${targetDir}...`);
    fs.cpSync(vendorSource, targetDir, { recursive: true, force: true });

    console.log(`[libsignal-plugins] Reemplazo de libsignal completado para ${arch}.`);
  } catch (error) {
    console.error(`[libsignal-plugins] Error al reemplazar libsignal:`, error.message);
    process.exit(1);
  }
} else {
  console.warn(`[libsignal-plugins] Arquitectura no administrada: ${arch}`);
}
