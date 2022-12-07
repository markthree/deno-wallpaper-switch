import { ensureFile } from "https://deno.land/std@0.167.0/fs/mod.ts";
import { writableStreamFromWriter } from "https://deno.land/std@0.167.0/streams/writable_stream_from_writer.ts";

type categories =
  | "food"
  | "nature"
  | "people"
  | "technology"
  | "objects"
  | "buildings";

interface IGenerateImgOptions {
  path?: string;
  width?: number;
  height?: number;
  keyword?: categories;
}

export async function generateImg(
  options: IGenerateImgOptions = {},
) {
  const {
    width = 1920,
    height = 1080,
    path = "./desktop.jpg",
    keyword = randomKeyWord(),
  } = options;

  await ensureFile(path);

  const url = `https://source.unsplash.com/${width}x${height}?${keyword}`;

  const img = await fetch(url);

  if (img.body) {
    const file = await Deno.open(path, {
      read: true,
      write: true,
    });

    const writableStream = writableStreamFromWriter(file);

    await img.body.pipeTo(writableStream);
  }
}

function randomKeyWord() {
  const keywords = [
    "food",
    "nature",
    "people",
    "technology",
    "objects",
    "buildings",
  ] as const;

  const index = Math.floor(Math.random() * (keywords.length - 1));
  return keywords[index];
}
