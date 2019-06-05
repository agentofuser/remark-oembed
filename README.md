# remark-oembed

[![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Converts URLs surrounded by newlines into embeds.

The important part of this code is taken directly from
[Benedicte Raae](https://www.raae.codes/)'s excellent
[gatsby-remark-oembed](https://github.com/raae/gatsby-remark-oembed) plugin, so
thank you very much [@raae](https://github.com/raae) 🙏

## Installation

[yarn][]:

```bash
yarn add @agentofuser/remark-oembed
```

## Usage

Say we have the following file, `demo.md`:

<!-- prettier-ignore -->
```markdown
Hey this is a nice youtube video about making modern react apps with gatsby:

https://www.youtube.com/watch?v=GN0xHSk2P8Q

Check it out 👆
```

And our script, `example.js`, looks as follows:

```javascript
var fs = require('fs')
var remark = require('remark')
var oembed = require('@agentofuser/remark-oembed')

remark()
  .use(oembed)
  .process(fs.readFileSync('demo.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

```markdown
Hey this is a nice youtube video about making modern react apps with gatsby:

<iframe 
  width="480" 
  height="270" 
  src="https://www.youtube.com/embed/GN0xHSk2P8Q?feature=oembed" 
  frameborder="0" 
  allow="accelerometer; 
    autoplay; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture" 
  allowfullscreen>
</iframe>

Check it out 👆
```

## API

### `remark().use(oembed)`

Converts URLs surrounded by newlines into embeds.

## Contribute

See [`contributing.md` in `remarkjs/remark`][contribute] for ways to get
started.

This organisation has a [Code of Conduct][coc]. By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Agent of User][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/agentofuser/remark-oembed.svg
[build]: https://travis-ci.org/agentofuser/remark-oembed
[downloads-badge]: https://img.shields.io/npm/dm/remark-oembed.svg
[downloads]: https://www.npmjs.com/package/@agentofuser/remark-oembed
[chat-badge]:
  https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg
[chat]: https://spectrum.chat/unified/remark
[yarn]: https://yarnpkg.com/en/docs/install
[license]: LICENSE.md
[author]: https://agentofuser.com
[remark]: https://github.com/remarkjs/remark
[contribute]: https://github.com/remarkjs/remark/blob/master/contributing.md
[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md
