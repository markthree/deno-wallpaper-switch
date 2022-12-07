import { fromFileUrl } from "https://deno.land/std@0.167.0/path/mod.ts";

const process = Deno.run({
  cmd: ["deno", "run", "-A", fromFileUrl(import.meta.resolve(`./main.ts`))],
});

await process.status();
