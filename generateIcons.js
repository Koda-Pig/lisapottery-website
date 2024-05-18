const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "public", "images", "icons");
const icons = fs.readdirSync(iconsDir);

const processIcons = (icons, iconsDir, outputFilename) => {
  const iconArray = icons.map((icon) => {
    const iconPath = path.join(iconsDir, icon);
    const svgContent = fs.readFileSync(iconPath, "utf8");
    const encodedSVG = encodeURIComponent(svgContent);
    return `  ${icon.replace(
      ".svg",
      ""
    )}:\n    url("data:image/svg+xml,${encodedSVG}")`;
  });

  const sassContent = `$icons: (\n${iconArray.join(",\n")}\n);`;
  fs.writeFileSync(
    path.join(__dirname, "src", "components", "icon", outputFilename),
    sassContent
  );
};
const generateIconSchema = (icons) => {
  const iconTypes = icons.map((icon) => icon.replace(".svg", ""));
  const iconSchemaContent = `export type IconSchema = {iconName:  ${iconTypes
    .map((icon) => `'${icon}'`)
    .join(" | ")}};`;
  fs.writeFileSync(
    path.join(__dirname, "src", "components", "icon", "icon-schema.ts"),
    iconSchemaContent
  );
};

generateIconSchema(icons);
processIcons(icons, iconsDir, "icon-vars.scss");
