import { RuleTester } from "eslint";
import rule from "../../../src/rules/quoted-keys";
import { loadTestCases } from "../../utils/utils";

const tester = new RuleTester({
  parser: require.resolve("toml-eslint-parser"),
  parserOptions: {
    tomlVersion: "next",
  },
});

tester.run("quoted-keys", rule as any, loadTestCases("quoted-keys"));
