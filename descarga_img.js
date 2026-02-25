import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch'; // si no funciona, Node 20+ ya tiene fetch nativo, puedes eliminar esta línea

// Reemplazo de __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta local donde guardar las imágenes
const localFolder = path.join(__dirname, 'assets/galeria');
const jsonFile = path.join(localFolder, 'imagenes.json');

const token = 'sl.u.AGWmA1ZU6S7cUu1oxJhPsLOC9t4UiDhnqX-Jmuu8DuDVJ-6lmV5ytLMjCT41LSe45Y0noT6ewNQdAkQT-KtpoeetNL1MnFVQWVb0_YHyAk8NxSMxNhExGo7dC4Q55psa286GNbN7YDjB_nQggdouNLEsHe7mDpboC9bUXGB8256bBCWN2pL76xra89Ah7D0hqV2_qa6LjBGeCq2L8U3EfAhMXnIxPH_NF_c2fpzl3V6Fz6VNooRzC7WQErX3z4ekBeDo_zk-go8NJfKD30w6bKB3tsJ-77yfmqVnIZ3iN7XSueipGVxLcFquqehX-IaaH3fO4xSEosH9PJEfTrzPL7fvG2TwRlt9aweVE-599bYaeo0iFz3IVGySwqBX4t2FbpGJFDr5GCDel7hDzxcmipTn4OUPXP8p6mQ_fS8HY5Ijgm5uMoW3FUzS7IWHuYp-blYnq32eFpBh8pa3VXZs6Dz5ia6w6GEH4fUW_lLJZU2eIxOhiH9NEWecf1SZYn7IY8YM61XimIj5EGAI-hQTK2kpS4ZTHLBSToWmKso--uq_aU3P64pwncjUy5D9GDb98KLeHawDAh-Dvw3juZQOuL5P2zxUjNhDt9OL9rzM6Dmsjz_NbeCjQQx0GJ5Il_xF2zlimCETyhGF2g5pEh7XdokSuPaIT0xASzoYQxiIfarvxy-lzplgKKQzEfZ2DqPNNe698k30nmqCo4HBiJuiy_I63FoOPWZV1G2AeQNGLm20Ks5QC8iuDO0WAv_Y-MlP3vVrK8jSrz5olvDFU0OYBc6OKcVc7_SUxbOGUMxo64wT7QJUr7K4b7dNy2587wQ6vo0n7_Z_LujEm6Ojxev2Y2FP5401Wr626TjdQkROh5R-z9QslnzAW-MkU-vacpZeQODjBPgIlil7Q4TbTVHqD_IsG78oQvx2TvMOdJp0CI_53ldmU7EHXgpSKjG8-5OM5gcBBX6WhaUSh3k7ugvtcDIJlPxmShs2csr0FF3JewU9KLWNCWf48Uw2wucDAMWdoXxpkHtpkg3nq6uwnxZE3FTpFx9WYLvG0Dq62qAjpSaJ0vj6yvbR4bIkjb-3fPL0fovKlw20ACLvodmth-hKVu_yecBW01KF8btkSjNXBjq0a07rdRYON_m94LYkfZOsRh4EuzPtq_UVFmugQaJiY-YmZcdSmZUUMIBHnI3ty0T8EV5SU16jz0hYO_dMJS9p35qFqacR7lonxui6FKP3BrTm9ya3pZgSdveR_mGtmuwsPNxQbDlkKwbh54PxA93joU5mXJkU5jIPMYkId8GMGpRh8Qhs9GKhxfO_eq4XOXxsgRAsScIHvBNSL4tIDJUHY9Sd8vjCRAw4W9PEhA0OPXdnlN_-ui6KnatA_N2KoF8A1ija6sVCJT-f9OEJD6d8rEu0-Sqitwnwm32kl-uGuWYeLp6iXg5w8qtTjjjs8qQDQw';
const  folderPath = '/galeria';

async function descargarImagenes() {
  if (!fs.existsSync(localFolder)) fs.mkdirSync(localFolder, { recursive: true });

  // 1️⃣ Listar archivos en Dropbox
  const resList = await fetch('https://api.dropboxapi.com/2/files/list_folder', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ path: folderPath }),
  });

  const data = await resList.json();

  const imagenes = [];

  // 2️⃣ Descargar imágenes
  for (const file of data.entries) {
    if (file['.tag'] === 'file' && /\.(jpg|jpeg|png)$/i.test(file.name)) {
      const resDownload = await fetch('https://content.dropboxapi.com/2/files/download', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Dropbox-API-Arg': JSON.stringify({ path: file.path_lower }),
        },
      });

      const buffer = await resDownload.arrayBuffer();
      const localPath = path.join(localFolder, file.name);
      fs.writeFileSync(localPath, Buffer.from(buffer));
      console.log('Descargada:', file.name);
      imagenes.push(file.name);
    }
  }

  // 3️⃣ Guardar JSON con los nombres de las imágenes
  fs.writeFileSync(jsonFile, JSON.stringify(imagenes, null, 2));
  console.log('Archivo imagenes.json generado con', imagenes.length, 'imágenes.');
}

descargarImagenes().catch(console.error);