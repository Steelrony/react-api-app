import React from 'react';
import NumberList from './NumberList';
import Blog from './Blog';

class Lists extends React.Component {
   

    render() {
        const numbers = [1, 2, 3 , 4, 5]; 
        const content = [
            {id: 1, title: 'Hello World',
             content: 'Welcome to learnig React!'}, 
            {id: 2, title: 'Installation',
             content: 'You can install react from npm.'}
        ];       
        
        return(
            <div>
                <NumberList numbers={numbers}/>            
                <Blog posts={content}/>
            </div>
            
        );
    }

}

export default Lists;