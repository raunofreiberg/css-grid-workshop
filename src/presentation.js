import React, {Component} from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text, Link
} from 'spectacle';
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
    primary: "#161f3c;",
    secondary: "#fff",
    tertiary: "#00E5BC",
}, {
    primary: "Circular Air, Helvetica",
    secondary: {name: "Droid Serif", googleFont: true, styles: ["400", "700i"]}
});


const testingExample = `
    const iterator = fetchProducts();
    assert.deepEqual(iterator.next().value, ??)
`;

const testingResult = `
{
  CALL: {
    fn: Resource.post,
    args: [{example: 1}]
  }
}
`;

const testingPart2 = `
import { call } from 'redux-saga/effects'
import Resource from '...'
const iterator = fetchProducts()
// expects a call instruction
assert.deepEqual(
  iterator.next().value,
  call(Resource.post, {example: 1}),
  "fetchProducts should yield an Effect call(Resource.post, './products')"
);
`;

const gridBasicHtml = `
<section class="container">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</section>
`;

const gridBasicCss = `
.container {
  display: grid;
  width: 100%;
  height: 250px;
}

.container > header {
  background-color: #8ca0ff;
}

.container > nav {
  background-color: #ffa08c;
}

.container > main {
  background-color: #ffff64;
}

.container > footer {
  background-color: #8cffa0;
}

`;

const uglyHtmlExample = `
<div class="container">
  <div class="row"> // extra boilerplate
    <nav class="col-md-3">
      ...
    </nav>
    <div class="col-md-9">
      <header class="row">
        <div class="col-md-12">
          ...
        </div>
      </header>
      <div class="row"> // extra boilerplate
        <main class="col-md-8">
          ...
        </main>
        <aside class="col-md-4">
          ...
        </aside>
      </div>
      <div class="row"> // extra boilerplate
        <footer class="col-md-12">
          ...
        </footer>
      </div>
    </div>
  </div>
</div>
`;

const cssGridMarkupExample = `
<section class="gridContainer">
    <header>...</header>
    <nav>...</nav>
    <main>...</main>
    <aside>...</aside>
    <footer>...</footer>
</section>
`;

const styleSheetExample = `
.gridContainer {
    display: grid;
    width: 100%;
    height: 500px;
    grid-template-areas:
            "nav header header"
            "nav main aside"
            "nav footer footer";
    grid-template-rows: 0.3fr 1fr 0.3fr;
    grid-template-columns: 0.3fr 1fr 0.3fr;

    header { grid-area: header; }
    footer { grid-area: footer; }
    main   { grid-area: main; }
    nav    { grid-area: nav; }
    aside  { grid-area: aside; }
    
    // Presentational styles
    nav,
    aside { background: #6f6f6f; }
    
    main { background: #444; }

    header,
    footer {
        background-color: #fff;
        color: #000;
    }
}`;


export default class extends Component {
    render() {
        return (
            <Deck theme={theme} transition={["slide", "fade"]}>
                <Slide>
                    <Heading size={1} textColor="secondary" style={{ fontWeight: 300 }}>
                        <span style={{ color: "#00E5BC", paddingRight: '26px', fontWeight: 'bold' }}>
                            CSS
                        </span>
                        Grid
                    </Heading>
                    <Text size={6} textColor="secondary" padding="32px 0 0">Rauno Freiberg</Text>
                </Slide>
                <Slide>
                    <Heading size={1} lineHeight={1} textColor="tertiary">
                        What?
                    </Heading>
                    <Appear>
                        <Text textColor="secondary" padding="32px 0 0">
                            CSS grid is a 2-dimensional layout system inherent to CSS which can handle both rows and
                            columns.
                        </Text>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={1} lineHeight={1} textColor="tertiary">
                        Why?
                    </Heading>
                    <Text size={6} textColor="secondary" padding="32px 0 0">
                        CSS has gone through multiple hacks in terms of what to use for layouts. We have had:
                    </Text>
                    <List>
                        <Appear>
                            <ListItem>Tables</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Floats</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Position</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Finally, we got flex</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Now, we have CSS grid</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <List>
                        <ListItem>No hacks (floats, clearfixes)</ListItem>
                        <Appear><ListItem>Cleaner markup</ListItem></Appear>
                        <Appear><ListItem>Multidimensional unlike flexbox</ListItem></Appear>
                        <Appear><ListItem>Responsive design</ListItem></Appear>
                        <Appear><ListItem>Enables you to create complex layout structures</ListItem></Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={1} lineHeight={1} textColor="tertiary">
                        How?
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={1} fit lineHeight={1}>
                        Think for a moment - how would you create this layout?
                    </Heading>
                    <section className="gridContainer">
                        <header>Header</header>
                        <nav>Nav</nav>
                        <main>Main</main>
                        <aside>Aside</aside>
                        <footer>Footer</footer>
                    </section>
                </Slide>
                <Slide>
                    <Heading size={1} fit lineHeight={1}>
                        Probably something along the lines of...
                    </Heading>
                    <CodePane lang="html" source={uglyHtmlExample} margin="64px 0 0"/>
                </Slide>
                <Slide>
                    <Heading size={1} fit lineHeight={1}>
                        With CSS grid...
                    </Heading>
                    <Appear>
                        <CodePane lang="html" source={cssGridMarkupExample} margin="64px 0 0"/>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="tertiary" lineHeight={1}>
                        Stylesheet
                    </Heading>
                    <CodePane lang="css" source={styleSheetExample} margin="64px 0 0"/>
                </Slide>
                <Slide>
                    <Heading size={4} textColor="tertiary" lineHeight={1}>
                        Responsive
                    </Heading>
                    <section className="gridContainer">
                        <header>Header</header>
                        <nav>Nav</nav>
                        <main>Main</main>
                        <aside>Aside</aside>
                        <footer>Footer</footer>
                    </section>
                </Slide>
            </Deck>
        );
    }
}
