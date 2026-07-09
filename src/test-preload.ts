/**
 * Test preload file to ensure proper cleanup of native resources.
 *
 * Uses bun:test afterAll to dispose of llama.cpp resources before the
 * process exits.
 */
import { afterAll } from "bun:test";
import { disposeDefaultLlamaCpp } from "./llm";

// Global afterAll runs after all test files complete
afterAll(async () => {
  await disposeDefaultLlamaCpp();
});
