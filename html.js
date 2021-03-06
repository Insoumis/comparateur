import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';

const BUILD_TIME = new Date().getTime();

const HTML = ({ body }) => {
  const head = Helmet.rewind();

  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
  }

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {head.title.toComponent()}
        {head.meta.toComponent()}

        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,300i,400,500|Roboto+Slab:400,700" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />

        <link rel="icon" href="https://actus.jlm2017.fr//app/uploads/2017/01/cropped-cropped-phi-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://actus.jlm2017.fr//app/uploads/2017/01/cropped-cropped-phi-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="https://actus.jlm2017.fr//app/uploads/2017/01/cropped-cropped-phi-180x180.png" />
        <meta name="msapplication-TileImage" content="https://actus.jlm2017.fr//app/uploads/2017/01/cropped-cropped-phi-270x270.png" />

        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        <script async src="https://cdn.emailjs.com/dist/email.min.js"></script>
      </body>
    </html>
  );
};

HTML.propTypes = {
  body: React.PropTypes.string,
};

export default HTML;
