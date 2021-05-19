import path from "path";
import { Command } from "commander";
import { serve } from "@preview-pack/local-api";

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "port to run server on", "9007")
  .action(async (filename = "previews.js", options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename))

      await serve(parseInt(options.port), path.basename(filename), dir, !isProduction);
      console.log(`
  Opened ${filename}. Navigate to http://localhost:${options.port} to edit document
  `)
    } catch (err) {
      if (err.code === "EADDRINUSE") {
        console.error("Port is in use. Try running ona a different port")
      } else {
        console.log("Problem occured:" + err.message)

      }
      process.exit(1)
    }

  });

  