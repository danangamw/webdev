import React from "react";
import Term from "./Term";
import emojipedia from '../emojipedia';

const createContent = (emojis) => {
  return(
    <Term 
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      description={emojis.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createContent)}
      </dl>
    </div>
  );
}

export default App;
