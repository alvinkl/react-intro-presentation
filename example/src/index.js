import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  react: require('../assets/React-icon.png'),
  quincy: require('../assets/quincy.png'),
  charts: require('../assets/Charts.png'),
  component1: require('../assets/component1.png'),
  component2: require('../assets/component2.png'),
  component3: require('../assets/component3.png'),
  component4: require('../assets/component4.png'),
  component5: require('../assets/component5.png'),
  todo1: require('../assets/todolist.png'),
  todo2: require('../assets/todolist2.png'),
  stateComp: require('../assets/stateful-stateless.jpg'),
  smartDumb: require('../assets/smart-dumb.png'),
  lifecycle: require('../assets/lifecycle.png'),
};

preloader(images);

const theme = createTheme({
  primary: "#FFD700"
});

export default class Presentation extends React.Component {
  render() {
    return <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide id="title" transition={["slide"]} bgColor="primary">
          <Image src={images.react} width="600" />
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Introduction to React JS
          </Heading>
        </Slide>
        <Slide id="introduction-myself" transition={["slide"]} bgColor="black">
          <Heading size={3} textColor="primary" textFont="primary" fit>
            Hello, my name is Alvin
          </Heading>
          <Appear fid="1">
            <Heading size={5} lineHeight={2} fit textColor="primary" HeadingFont="primary">
              A Software Engineer Intern
            </Heading>
          </Appear>
        </Slide>
        <Slide id="react-intro-1" transition={["slide"]} bgColor="black">
          <Heading caps fit textColor="primary" textFont="primary">
            What is React?
          </Heading>
        </Slide>
        <Slide id="react-list-1" transition={["slide"]} bgColor="black">
          <List ordered>
            <ListItem textColor='white' textFont='primary'>Think in Components</ListItem>
            <ListItem textColor='white' textFont='primary'>Props vs State</ListItem>
            <ListItem textColor='white' textFont='primary'>Smart & Dumb Components</ListItem>
          </List>
        </Slide>
        <Slide id="react-list-2" transition={["none"]} bgColor="black">
          <List ordered>
            <ListItem textColor='primary' textFont='primary'>Think in Components</ListItem>
            <ListItem textColor='white' textFont='primary'>Props vs State</ListItem>
            <ListItem textColor='white' textFont='primary'>Smart & Dumb Components</ListItem>
          </List>
        </Slide>
        <Slide id="component1" transition={"slide"} bgColor="black">
          <Image src={images.component1} width="600px" />
        </Slide>
        <Slide id="component2" transition={"none"} bgColor="black">
          <Image src={images.component2} width="600px" />
        </Slide>
        <Slide id="component3" transition={"none"} bgColor="black">
          <Image src={images.component3} width="600px" />
        </Slide>
        <Slide id="component4" transition={"none"} bgColor="black">
          <Image src={images.component4} width="600px" />
        </Slide>
        <Slide id="component5" transition={"none"} bgColor="black">
          <Image src={images.component5} width="600px" />
        </Slide>
        <Slide id="live-coding1" transition={["slide"]} bgColor="white">
          <Heading size={2} caps fit textColor="black" textFont="primary">
            Live Coding....
          </Heading>
          <Appear>
            <div>
              <Heading size={2} caps fit textColor="black" textFont="primary">
                Build a Component for ...
              </Heading>
              <Image src={images.todo1} width='400' />
            </div>
          </Appear>
        </Slide>
        <Slide id="github-live-coding" transition={["slide"]} bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            https://github.com/alvinkl/react-tutorial
          </Heading>
        </Slide>
        <Slide id="live-coding1-res" transition={["slide"]} bgColor="black" align='center'>
          <CodePane lang="jsx" source={require("raw-loader!../assets/code/live-coding-1.example")} margin="20px auto" />
        </Slide>
        <Slide id="react-list-3" transition={["none"]} bgColor="black">
          <List ordered>
            <ListItem textColor='white' textFont='primary'>Think in Components</ListItem>
            <ListItem textColor='primary' textFont='primary'>Props vs State</ListItem>
            <ListItem textColor='white' textFont='primary'>Smart & Dumb Components</ListItem>
          </List>
        </Slide>
        <Slide id="live-coding2" transition={["slide"]} bgColor="white">
          <Heading size={2} caps fit textColor="black" textFont="primary">
            Another Live Coding.... Let's continue!!
          </Heading>
          <Image src={images.todo2} width='400' />
        </Slide>
        <Slide id="live-coding2-res" transition={["slide"]} bgColor="black" align='center'>
          <CodePane lang="jsx" source={require("raw-loader!../assets/code/live-coding-2.example")} margin="20px auto" />
        </Slide>
        <Slide id="live-coding2-res1" transition={["slide"]} bgColor="black" align='center'>
          <Heading size={6} fit textColor="primary" textFont="primary">
            One Liner to the rescue!!!
          </Heading>
          <CodePane lang="jsx" source={require("raw-loader!../assets/code/live-coding-2-1.example")} margin="20px auto" />
        </Slide>
        <Slide id="react-list-4" transition={["none"]} bgColor="black">
          <List ordered>
            <ListItem textColor='white' textFont='primary'>Think in Components</ListItem>
            <ListItem textColor='white' textFont='primary'>Props vs State</ListItem>
            <ListItem textColor='primary' textFont='primary'>Smart & Dumb Components</ListItem>
          </List>
        </Slide>
        <Slide id="smart-dumb" transition={["slide"]} bgColor="white" >
          <Image src={images.smartDumb} width='1000'/>
        </Slide>
        <Slide id="smart-dumb-1" transition={["slide"]} bgColor="black" align='center'>
          <CodePane lang="jsx" source={require("raw-loader!../assets/code/smart-dumb-comp1.example")} margin="20px auto" />
        </Slide>
        <Slide id="smart-dumb-2" transition={["slide"]} bgColor="black" align='center'>
          <Heading size={6} fit textColor="primary" textFont="primary">
            Smart Component
          </Heading>
          <CodePane lang="jsx" source={require("raw-loader!../assets/code/smart-dumb-comp2.example")} margin="20px auto" />
        </Slide>
        <Slide id="smart-dumb-3" transition={["slide"]} bgColor="black" align='center'>
          <Heading size={6} fit textColor="primary" textFont="primary">
            DUHHHH Component
          </Heading>
          <CodePane lang="jsx" source={require("raw-loader!../assets/code/smart-dumb-comp3.example")} margin="20px auto" />
        </Slide>
        <Slide id="smart-dumb-3-1" transition={["slide"]} bgColor="black" align='center'>
          <Heading size={6} fit textColor="primary" textFont="primary">
            One Liner to the rescue!!!
          </Heading>
          <CodePane lang="jsx" source={require("raw-loader!../assets/code/smart-dumb-comp-3-1.example")} margin="20px auto" />
          <Appear>
            <CodePane lang="jsx" source={require("raw-loader!../assets/code/smart-dumb-comp-3-2.example")} margin="20px auto" />
          </Appear>
        </Slide>
        <Slide id="live-coding3" transition={["slide"]} bgColor="white">
          <Heading size={2} caps fit textColor="black" textFont="primary">
            Live Coding....
          </Heading>
        </Slide>
        <Slide id="component-life" transition={["slide"]} bgColor="black" align='center'>
          <Heading size={6} fit textColor="primary" textFont="primary">
            Component Lifecycle
          </Heading>
          <Image src={ images.lifecycle } width='1000' />
        </Slide>
        <Slide id="react-intro-3" transition={["slide"]} bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary" display="absolute">
            Why React?
          </Heading>
          <Appear>
            <Image src={images.charts} display="absolute" />
          </Appear>
        </Slide>
        <Slide id="react-sum-1" transition={["slide"]} bgColor="black">
          <Heading caps fit textColor="primary" textFont="primary">
            Sum up
          </Heading>
          <List ordered>
            <ListItem textColor='primary' textFont='primary'>Think in Components</ListItem>
            <ListItem textColor='primary' textFont='primary'>Props vs State</ListItem>
            <ListItem textColor='primary' textFont='primary'>Smart & Dumb Components</ListItem>
          </List>
        </Slide>
        <Slide id="react-sum-2" transition={["zoom"]} bgColor="black">
          <Heading caps fit textColor="primary" textFont="primary">
            React is awesome!!
          </Heading>
        </Slide>
      </Deck>;
  }
}
