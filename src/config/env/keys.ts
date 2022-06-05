import dev from "@config/env/dev";

let env;

if (process.env.NODE_ENV === "production") {
  env = {};
} else if (process.env.NODE_ENV === "staging") {
    env = {};
} else {
    env = dev;
}
export const keys = {
  ...env,
};
