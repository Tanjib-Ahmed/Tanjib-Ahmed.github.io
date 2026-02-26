import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target directory: client/assets/projects/other
const targetDir = path.resolve(__dirname, '../client/assets/projects/other');

if (!fs.existsSync(targetDir)) {
    console.error(`Target directory not found: ${targetDir}`);
    process.exit(1);
}

async function optimizeImages() {
    const files = fs.readdirSync(targetDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
            const filePath = path.join(targetDir, file);
            const tempFilePath = path.join(targetDir, `temp-${file}`);

            try {
                const originalSize = fs.statSync(filePath).size;
                console.log(`Optimizing ${file} (${(originalSize / 1024 / 1024).toFixed(2)} MB)...`);

                // Process to buffer first
                const buffer = await sharp(filePath)
                    .resize(1920, 1920, { // Max width/height
                        fit: 'inside',
                        withoutEnlargement: true
                    })
                    .jpeg({ quality: 80, mozjpeg: true })
                    .toBuffer();

                // Write to temp file
                fs.writeFileSync(tempFilePath, buffer);

                // Replace original
                // fs.renameSync(tempFilePath, filePath); // This might still fail if locked
                // Let's try copy and delete
                fs.copyFileSync(tempFilePath, filePath);
                fs.unlinkSync(tempFilePath);

                const newSize = fs.statSync(filePath).size;
                console.log(`  -> Done! New size: ${(newSize / 1024 / 1024).toFixed(2)} MB (${((1 - newSize / originalSize) * 100).toFixed(0)}% reduction)`);
            } catch (err) {
                console.error(`  -> Error optimizing ${file}:`, err);
                // Clean up temp if exists
                if (fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
            }
        }
    }
}

optimizeImages();
