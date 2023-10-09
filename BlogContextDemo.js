import React,{useContext} from "react";
import {BlogContext} from './App';
 
function BlogContextDemo(){
    const binfo= useContext(BlogContext);
    return(
        <div>
            <p><h1> Topic:{ binfo.React.post}</h1></p>
            <p><h2>Author:{binfo.React.author}</h2></p>
        </div>

    );

}
export default BlogContextDemo;