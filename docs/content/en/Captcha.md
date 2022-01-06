---
title: Captcha Generation
description: ""
position: 3
category: Guide
---

## How To Generate Audio Captchas
<code-group>
  <code-block label="Javascript" active>

```js
const newCaptcha = require('audio-captcha').default;
const fs = require('fs');

// 6 is the Length of Captcha String
// Here The `captcha` is an Array of an AudioBuffer and a String
newCaptcha(6).then(captcha => {
  var file = fs.createWriteStream("captcha.mp3")
  file.write(captcha[0])
  console.log("Captcha Code: " + captcha[1])
  file.end()
}).catch(error => {
  console.error(error)
})
```

  </code-block>
  <code-block label="Typescript">

```ts
import newCaptcha from 'audio-captcha';

// 6 is the Length of Captcha String
// Captcha is a Array Consisting Of Audio Buffer and The Captcha Code
newCaptcha(6).then(captcha => {
  var file = fs.createWriteStream("captcha.mp3")
  file.write(captcha[0])
  console.log("Captcha Code: " + captcha[1])
  file.end()
}).catch(error => {
  console.error(error)
})
```

  </code-block>
</code-group>


## Generate a Captcha String
<code-group>
  <code-block label="Javascript" active>

```js
const Generator = require('audio-captcha').Generator

// If You Want a Custom Charset
let gen = new Generator('CHARSET_HERE');

//Default Charset
let gen = new Generator()

// 10 is the Length
console.log(gen.generate(10))
```

  </code-block>
  <code-block label="Typescript">

```ts
import Generator from "audio-captcha/lib/Generator/Generator";

// If You Want a Custom Charset
let gen = new Generator('CHARSET_HERE');

//Default Charset
let gen = new Generator()

// 7 is The Length of String
console.log(gen.generate(7))
```

  </code-block>
</code-group>
