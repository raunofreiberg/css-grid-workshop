import React, {Component} from 'react';
import {
    Appear, CodePane, Deck,
    Heading, ListItem, List, Slide, Text, Link
} from 'spectacle';
import createTheme from "spectacle/lib/themes/default";

import Bg from './images/bg.jpeg';

const theme = createTheme({
    primary: "#161f3c;",
    secondary: "#fff",
    tertiary: "#00E5BC",
}, {
    primary: "Circular Air, Helvetica",
});

const uglyHtmlExample = `
<div class="container">
  <div class="row"> // extra boilerplate
    <nav class="col-md-3 col-sm-12">
      ...
    </nav>
    <div class="col-md-9">
      <header class="row">
        <div class="col-md-12">
          ...
        </div>
      </header>
      <div class="row"> // extra boilerplate
        <main class="col-md-8 col-sm-12">
          ...
        </main>
        <aside class="col-md-4 col-sm-12">
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
}`;

const responsiveMediumStyleSheetExample = `
@media (max-width: 800px) {
    .gridContainer {
        grid-template-areas:
                "nav nav"
                "main aside"
                "header footer";
        grid-template-columns: 0.5fr 0.5fr;
        grid-template-rows: 0.3fr 1fr 0.3fr;
    }
}`;

const responsiveSmallStyleSheetExample = `
@media (max-width: 500px) {
    .gridContainer {
        grid-template-areas:
                "header"
                "main"
                "footer";
        grid-template-columns: 1fr;
        grid-template-rows: 0.3fr 1fr 0.3fr;

        aside,
        nav {
            display: none;
        }    
    }
}
`;

const Presentation = () => {
    const linkStyles = {
        fontWeight: 'bold',
        color: theme.screen.colors.tertiary,
        textDecoration: 'underline'
    };

    return (
        <Deck theme={theme} transition={["slide", "fade"]} progress="none">
            <Slide bgImage={Bg} bgDarken="0.85">
                <Heading size={1} textColor="secondary" style={{fontWeight: 300}}>
                        <span style={{color: "#00E5BC", paddingRight: '26px', fontWeight: 'bold'}}>
                            CSS
                        </span>
                    Grid
                </Heading>
                <Text size={6} textColor="secondary" padding="32px 0 0">Rauno Freiberg</Text>
                <Link
                    href="https://github.com/raunofreiberg/css-grid-workshop"
                    textColor="secondary"
                    target="_blank"
                    style={{
                        display: 'inline-block',
                        padding: '32px 0 0'
                    }}
                >
                    Full code available at&#160;
                    <span style={linkStyles}>Github</span>
                </Link>
            </Slide>
            <Slide>
                <Heading size={1} lineHeight={1} textColor="tertiary">
                    Preface
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
                        <ListItem>Finally, we got something proper - flex</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Now, we have CSS grid</ListItem>
                    </Appear>
                </List>
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
                <CodePane lang="html" source={uglyHtmlExample} margin="64px 0 0" />
            </Slide>
            <Slide>
                <Heading size={1} fit lineHeight={1}>
                    With CSS grid...
                </Heading>
                <Appear>
                    <CodePane lang="html" source={cssGridMarkupExample} margin="64px 0 0" />
                </Appear>
            </Slide>
            <Slide>
                <Heading size={4} textColor="tertiary" lineHeight={1}>
                    Styles
                </Heading>
                <CodePane lang="scss" source={styleSheetExample} margin="64px 0 0" />
            </Slide>
            <Slide>
                <Heading size={4} textColor="tertiary" lineHeight={1} margin="0 0 64px 0">
                    The magic
                </Heading>
                <List>
                    <ListItem style={{fontSize: '2rem', lineHeight: 2}}>
                        <span style={{color: "#00E5BC"}}>grid-template-rows</span> - Adjust the sizings of rows
                    </ListItem>
                    <ListItem style={{fontSize: '2rem', lineHeight: 2}}>
                        <span style={{color: "#00E5BC"}}>grid-template-columns</span> - Adjust the sizings of
                        columns
                    </ListItem>
                    <ListItem style={{fontSize: '2rem', lineHeight: 2}}>
                        <span style={{color: "#00E5BC"}}>grid-template-areas</span> - A row is created for every
                        separate string listed, and a column is created for each cell in the string.
                    </ListItem>
                    <ListItem style={{fontSize: '2rem', lineHeight: 2}}>
                        <span style={{color: "#00E5BC"}}>grid-area</span> - Gives a tag a name so that it can be
                        referenced in grid-template-areas.
                    </ListItem>
                </List>
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
            <Slide>
                <Heading size={4} textColor="tertiary" lineHeight={1}>
                    Responsive styles
                </Heading>
                <CodePane lang="scss" source={responsiveMediumStyleSheetExample} margin="64px 0 0" />
                <CodePane lang="scss" source={responsiveSmallStyleSheetExample} margin="64px 0 0" />
            </Slide>
            <Slide bgImage={Bg} bgDarken="0.85">
                <Heading size={4} textColor="tertiary" lineHeight={1}>
                    Thanks!
                </Heading>
                <Link
                    href="https://github.com/raunofreiberg/css-grid-workshop"
                    textColor="secondary"
                    target="_blank"
                    style={{
                        display: 'inline-block',
                        padding: '32px 0 0'
                    }}
                >
                    Full code available at&#160;
                    <span style={linkStyles}>Github</span>
                </Link>
                <Text size={6} textColor="secondary" padding="32px 0 0">Rauno Freiberg</Text>
            </Slide>
        </Deck>
    );
};

export default Presentation;
