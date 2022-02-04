import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTag = (props) => {

    const initial= "https://hritam-dutta.me";
    
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name= 'description' content= {props.description} />
            <meta property= "og:title" content= {props.title} />
            <meta property= "og:description" content= {props.description} />
            <meta property= "og:image" content= {initial + props.imageUrl} />
            <meta property= "og:url" content= {initial + window.location.pathname + window.location.search} />
            <meta property= "twitter:card" content= "summary_large_image" />
            <meta property= "twitter:image:alt" content= {props.imageAlt} />
        </Helmet>
    );
};

export default MetaTag;
