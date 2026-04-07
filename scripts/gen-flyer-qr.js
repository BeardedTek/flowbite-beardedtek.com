/**
 * Writes static/images/monthly-contracts-meeting-qr.png for the marketing flyer.
 * URL must match the flyer layout QR link: {baseURL from config.yml}monthly-contracts/
 */
const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");

function flyerQrUrl() {
  const configPath = path.join(__dirname, "..", "config.yml");
  const text = fs.readFileSync(configPath, "utf8");
  const m = text.match(/^baseURL:\s*(\S+)/m);
  const base = (m ? m[1] : "https://beardedtek.com").replace(/\/$/, "");
  return `${base}/monthly-contracts/`;
}
const outDir = path.join(__dirname, "..", "static", "images");
const outFile = path.join(outDir, "monthly-contracts-meeting-qr.png");

async function main() {
  await fs.promises.mkdir(outDir, { recursive: true });
  await QRCode.toFile(outFile, flyerQrUrl(), {
    type: "png",
    width: 480,
    margin: 2,
    errorCorrectionLevel: "M",
    color: {
      dark: "#0f172a",
      light: "#ffffff",
    },
  });
  console.log("Wrote", outFile);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
