import * as React from "react";
// Praktika 1
import Button from "./Tema2/Praktika1/Button";
// Praktika 2
import Post from "./Tema2/Praktika2/Post";
// Praktika 3
import LessText from "./Tema2/Praktika3/LessText";
// Praktika 4
import PostsList from "./Tema2/Praktika4/PostsList";
// Praktika 5
import TodoList from "./Tema2/Praktika5/TodoList";
// Praktika 6
// import PageData from "./Tema2/Praktika6/PageData";
//Praktika 7
import Data from "./Tema2/Praktika7/Data";

function Tema2() {
    return(
        <>                
            {/* <button className="btn btn-danger m-1" onClick={() =>{
                navigate("/Praktika1/Button")
            }}> Praktika 0 </button> */}

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <Button />
                    <Post />
                    <LessText
                        color = "blue"
                        textDecoration = "underline"
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis et excepturi delectus quibusdam harum debitis illum blanditiis obcaecati vel, consequatur sequi in repellat voluptatem, minima doloribus sed magni tenetur!'}
                        maxLength = {35}
                    />
                    <div className="col-12 p-2 border border-dark m-2">
                        <h2 className='text-danger text-center'>Praktika 4</h2>
                        <PostsList />
                    </div>
                    <div className="col-12 p-2 border border-dark m-2">
                        <h2 className='text-danger text-center'>Praktika 5</h2>
                        <TodoList />
                    </div>
                    {/* Praktika 6
                    <div>
                    <PageData />
                    </div> */}
                    <Data />
                </div>
            </div>
        </>
  );
}
export default Tema2;