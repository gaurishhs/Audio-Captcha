/**
 * @fileoverview A Captcha Generator 
 * @license Creative-Commons-v1.0
 * @copyright ApiDev234, All rights reserved.
 */
import TextError from "../Errors/TextError";

/**
 * The Captcha Generator
 * @class generator
 * @param {charset} Charset 
 */
export default class Generator {
  charset?: string | undefined;
  constructor(charset?: string | undefined) {
    this.charset = charset;
  }
  public generate(length: number): String {
    if(length < 5) {
      throw new TextError("Length must be greater than 5 characters");
    }
    var chars = this.charset || "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = length;
    var randomstring = "";

    for (var x = 0; x < string_length; x++) {
      var letterOrNumber = Math.floor(Math.random() * 2);
      if (letterOrNumber == 0) {
        var newNum = Math.floor(Math.random() * 9);
        randomstring += newNum;
      } else {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }
    }
    const string = randomstring
    return string.split("").join(" ")
  }
}