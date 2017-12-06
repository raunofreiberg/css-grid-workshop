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

export default class extends Component {
    render() {
        return (
            <Deck theme={theme} transition={["slide", "fade"]}>
                <Slide
                    bgImage="https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                    bgDarken="0.75">
                    <Heading size={1} textColor="secondary">
                        <span style={{color: "#00E5BC", paddingRight: '26px'}}>
                            CSS
                        </span>
                        Grid
                    </Heading>
                    <Text size={6} textColor="secondary" padding="32px 0 0">Rauno Freiberg</Text>
                </Slide>
                <Slide>
                    <Heading size={1} lineHeight={1} textColor="tertiary">
                        Okay, what?
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
                        Why is this game-changing?
                    </Heading>
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
                    <Heading size={1} fit lineHeight={1}>
                        Think for a moment - how would you create this layout?
                    </Heading>
                    <section className="gridContainer">
                        <header>Header</header>
                        <nav>Nav</nav>
                        <main>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </main>
                        <aside>Aside</aside>
                        <footer>Footer</footer>
                    </section>
                </Slide>
            </Deck>
        );
    }
}
