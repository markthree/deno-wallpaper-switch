/**
 * 该 cli.ts 主要用来编译出二进制执行文件，因为 deno 还不支持 npm 标识符依赖的编译
 */
import { fromFileUrl } from "https://deno.land/std@0.167.0/path/mod.ts";

const process = Deno.run({
  cmd: ["deno", "run", "-A", fromFileUrl(import.meta.resolve(`./main.ts`))],
});

await process.status();
