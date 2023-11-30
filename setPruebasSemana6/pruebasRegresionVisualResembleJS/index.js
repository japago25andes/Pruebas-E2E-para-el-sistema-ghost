const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

const images = [
  "changeTitle.png",
  "darkMode.png",
  "editTag.png",
  "newColab.png",
  "revokeColab.png",
];

async function getDiff(imageName) {
  const options = {
    output: {
      errorColor: {
        red: 255,
        green: 0,
        blue: 255,
      },
      errorType: "movement",
      transparency: 0.3,
      largeImageThreshold: 1200,
      useCrossOrigin: false,
      outputDiff: true,
    },
    scaleToSameSize: true,
    ignore: "antialiasing",
  };

  const data = await compareImages(
    await fs.readFile(`version4/${imageName}`),
    await fs.readFile(`version5/${imageName}`),
    options
  );

  await fs.writeFile(`diffImages/diff_${imageName}`, data.getBuffer());
  return data;
}

async function compareAllImages() {
  let results = [];

  for (const imageName of images) {
    const result = await getDiff(imageName);
    results.push({ imageName, misMatchPercentage: result.misMatchPercentage });
  }
  await createHtmlReport(results);
}

async function createHtmlReport(results) {
  let htmlContent = `
        <html>
        <head>
            <title>Reporte de Comparación de Imágenes</title>
            <style>
                body { font-family: Arial, sans-serif; }
                .image-container { margin: 20px; }
                .image-box { margin: 10px; }
            </style>
        </head>
        <body>
            <h1>Reporte de Comparación de Imágenes</h1>
    `;

  for (const result of results) {
    htmlContent += `
            <div class="image-container">
                <h2>${result.imageName}</h2>
                <div class="image-box">
                    <img src="diffImages/diff_${result.imageName}" alt="Diferencia de ${result.imageName}">
                </div>
                <p>Porcentaje de diferencia: ${result.misMatchPercentage}%</p>
            </div>
        `;
  }

  htmlContent += `
        </body>
        </html>
    `;

  await fs.writeFile("report.html", htmlContent);
}

compareAllImages();
