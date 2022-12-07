import { generateImg } from "./generate.ts";
import { setWallpaper } from "npm:wallpaper@6.1.1";
import { fromFileUrl } from "https://deno.land/std@0.167.0/path/mod.ts";

const imagePath = fromFileUrl(import.meta.resolve(`./desktop.jpg`));

await generateImg({ path: imagePath });

await setWallpaper(imagePath);
