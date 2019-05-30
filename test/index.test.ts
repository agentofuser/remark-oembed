// describe('blah', () => {
//   it('works', () => {
//     expect(sum(1, 1)).toEqual(2);
//   });
// });

const rehype = require('rehype')
import section from '../src/.'

test('section', () => {
rehype()
  .data('settings', { fragment: true })
  .use(section)
  .process(
    `
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
`.replace(/\s+/g, ''),
    function(_: any, file: any) {
        expect(String(file).replace(/\s+/g, '')).toEqual(
          // prettier-ignore
          `
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
`.replace(/\s+/g, '')
        )
      })
    }
  )
