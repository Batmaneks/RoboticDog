import React from 'react';

import {Link} from 'gatsby';

const sindleTagIndex = ({data, pageContext}) => {
    const { posts, tagName } = pageContext
    const strucPost = posts.map((post, index) => {
        return <li key={index}><Link to ={post.frontmatter.path}>{post.frontmatter.title} </Link></li>
    })
    return(
        <div>
            <div>
                Posts about {tagName}
            </div>
            <div>
                <ul>
                    {strucPost}
                </ul>
            </div>
        </div>
    )
}

export default sindleTagIndex