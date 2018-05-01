import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import config from "../../data/site-config"

class Disqus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postNode.fields.slug;
    console.log(url);
    return (
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={post.title}
        title={post.title}
        url={url}
        category_id={post.category_id}
      />
    );
  }
}

export default Disqus;
