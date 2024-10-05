import js from "@eslint/core";

export default [
    js.configs.recommended,

   {
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn"
       }
   }
];
