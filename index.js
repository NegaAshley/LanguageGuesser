import { franc, francAll } from 'franc';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prompt = require("prompt-sync")({ sigint: true });
let langs = require('langs');

let frenchPhrase = "Bonjour, comment t'allez vous?";
let calcLang = franc(frenchPhrase);
let langResult = langs.where("3", calcLang);
console.log(`The following phrase was pre-entered: ${frenchPhrase} This is the language guess: ${langResult.name}`);

let promptResponse = prompt("This is a program that guesses the language of a phrase.  Enter a phrase: ");
calcLang = franc(promptResponse);
langResult = langs.where("3", calcLang);
if (!langResult) {
    langResult = "undefined";
}
console.log(`Language guess for phrase "${promptResponse}": ${langResult.name}`);