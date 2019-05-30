# remark-oembed

[![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Wraps headings and their contents in `<section>` elements.

## Installation

[npm][]:

```bash
npm install @agentofuser/remark-oembed
```

## Usage

Say we have the following file, `fragment.html`:

<!-- prettier-ignore -->
```html
<h1>h1</h1>
  <h2>h2a</h2>
    <h3>h3ai</h3>
      <p>text3ai</p>
    <h3>h3aj</h3>
      <p>text3aj</p>
  <h2>h2b</h2>
    <h3>h3bi</h3>
      <h4>h4bix</h4>
        <p>text4bix</p>
  <h2>h2c</h2>
    <h3>h3ci</h3>
      <p>text3ci</p>
```

And our script, `example.js`, looks as follows:

```javascript
var fs = require('fs')
var rehype = require('rehype')
var section = require('remark-oembed')

rehype()
  .data('settings', { fragment: true })
  .use(section)
  .process(fs.readFileSync('fragment.html'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

<!-- prettier-ignore -->
```html
<section class="h0Wrapper headingWrapper">
  <section class="h1Wrapper headingWrapper">
    <h1>h1</h1>
    <section class="h2Wrapper headingWrapper">
      <h2>h2a</h2>
      <section class="h3Wrapper headingWrapper">
        <h3>h3ai</h3>
        <p>text3ai</p>
      </section>
      <section class="h3Wrapper headingWrapper">
        <h3>h3aj</h3>
        <p>text3aj</p>
      </section>
    </section>
    <section class="h2Wrapper headingWrapper">
      <h2>h2b</h2>
      <section class="h3Wrapper headingWrapper">
        <h3>h3bi</h3>
        <section class="h4Wrapper headingWrapper">
          <h4>h4bix</h4>
          <p>text4bix</p>
        </section>
      </section>
    </section>
    <section class="h2Wrapper headingWrapper">
      <h2>h2c</h2>
      <section class="h3Wrapper headingWrapper">
        <h3>h3ci</h3>
        <p>text3ci</p>
      </section>
    </section>
  </section>
</section>
```

## API

### `rehype().use(section)`

Wraps headings and their contents in `<section>` elements.

## Contribute

See [`contributing.md` in `rehypejs/rehype`][contribute] for ways to get
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
[chat]: https://spectrum.chat/unified/rehype
[npm]: https://docs.npmjs.com/cli/install
[license]: license
[author]: https://agentofuser.com
[rehype]: https://github.com/rehypejs/rehype
[contribute]: https://github.com/rehypejs/rehype/blob/master/contributing.md
[coc]: https://github.com/rehypejs/rehype/blob/master/code-of-conduct.md
