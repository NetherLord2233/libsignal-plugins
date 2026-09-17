const fs = require('fs');
const path = require('path');
const os = require('os');

const arch = os.arch();
console.log(`[libsignal-plugins] Arquitectura detectada: ${arch}`);

if (arch === 'arm' || arch === 'arm64') {
  const rootDir = path.resolve(__dirname, '..');
  const targetDir = path.join(rootDir, 'node_modules', 'libsignal');
  const vendorSourceDir = path.join(rootDir, 'vendor', `libsignal-${arch}`);

  if (!fs.existsSync(vendorSourceDir)) {
    console.error(`[libsignal-plugins] Error: No se encontró la carpeta precompilada en ${vendorSourceDir}`);
    process.exit(1);
  }

  try {
    if (fs.existsSync(targetDir)) {
      console.log(`[libsignal-plugins] Eliminando node_modules/libsignal por defecto...`);
      fs.rmSync(targetDir, { recursive: true, force: true });
    }

    console.log(`[libsignal-plugins] Copiando ${vendorSourceDir} -> ${targetDir}...`);
    fs.cpSync(vendorSourceDir, targetDir, { recursive: true });

    console.log(`[libsignal-plugins] Reemplazo para ${arch} completado con éxito.`);
  } catch (error) {
    console.error(`[libsignal-plugins] Error al reemplazar libsignal:`, error.message);
    process.exit(1);
  }
} else {
  console.log('[libsignal-plugins] Arquitectura x64 detectada. Se mantiene la instalación estándar de npm.');
}
