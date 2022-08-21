import "./styles.css";
import { useState } from "react";
import Markdown from "marked-react";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.ddf.studio), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![ddf.studio Logo](https://ddf.studio/logoddf.png)
`;

const MarkdownComponent = ({ text }) => {
  return <Markdown>{text}</Markdown>;
};

export default function App() {
  const [text, setText] = useState(placeholder);

  const getText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <textarea
        id="textarea"
        onChange={getText}
        rows="10"
        cols="70"
        value={text}
      ></textarea>
      <div id="preview">
        <MarkdownComponent text={text} />
      </div>
    </div>
  );
}
