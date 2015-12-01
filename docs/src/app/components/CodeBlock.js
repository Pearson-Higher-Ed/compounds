import React, { PropTypes } from 'react';
import hljs from 'highlight.js';

hljs.configure({ useBR: true });

function CodeBlock(props) {
  const code = hljs.fixMarkup(hljs.highlight(props.lang, props.code.trim()).value);

  return (
    <pre><code><div dangerouslySetInnerHTML={{ __html: code }} /></code></pre>
  );
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  lang: PropTypes.string
};

CodeBlock.defaultProps = {
  lang: 'html'
};

export default CodeBlock;
