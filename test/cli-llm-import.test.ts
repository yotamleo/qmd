import { describe, expect, test } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

describe("LLM module loading", () => {
  test("importing the CLI for lightweight commands succeeds", async () => {
    const mod = await import("../src/cli/qmd.ts");
    expect(mod).toMatchObject({
      buildEditorUri: expect.any(Function),
      termLink: expect.any(Function),
    });
  });
});
