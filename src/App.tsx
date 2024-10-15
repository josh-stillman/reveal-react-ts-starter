import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm';

import './App.css';

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      // other config oXptions
      transition: 'slide',
      hash: true,
      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
        <section>
          <h1>hello</h1>Slide 2
        </section>
      </div>
    </div>
  );
}

export default App;
