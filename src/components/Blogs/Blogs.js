import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
                <h3>What is Context API?</h3>
                <p>
                    <b>Answer: </b>
                    When we want to send props from parent components to children components then if we use props drilling then there will be inconsistent props to some child components but our target is to send props to the targeted component without sending to all child components. For that reason, context api is used to solve this problem.
                </p>
            </div>
            <div>
                <h3>What is Semantic Tag?</h3>
                <p>
                    <b>Answer: </b>
                    The tags mostly used in html5 are semantic tag. As an example before html5 we need to create a section then decleare a lot of div inside that section. There were very complex to find a simple div. For that reason in html5 we can easily divide a html body with 3 semantic tags named header, main, footer then it is very easy to find an item of div using semantic tag. The nav, article, section etc are also some examples of semantic tag.
                </p>
            </div>
            <div>
                <h3>What are the differences between block element and inline block element?</h3>
                <p>
                    <b>Answer: </b>
                    The main difference between block element and inline block element is - the block element takes the whole space of the width of it's parent div but the inline block element take it's own width inside a div. Inline block elements can sit beside one by one with their size but more than one block element can never sits besides.
                </p>
            </div>
        </div>
    );
};

export default Blogs;