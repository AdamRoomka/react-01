import Header from "./Tema1/Header";
import Headerimage from "./Tema1/asd.jpg";
import Box from "./Tema1/Box";
import PostImage from "./Tema1/PostImage";
import PoostImage from "./Tema1/image.gif";
import PostList from "./Tema1/PostList";

function Tema1() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          
          <Header 
            HeaderTitle = "Zdarova"
            HeaderImage = {Headerimage}
            />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <PostImage 
            PostImage = {PoostImage}
          />
        </div>
        <div className="col-6">
          <PostImage 
              PostImage = {PoostImage}
          />
        </div>
        <div className="col-12">
          <PostList />
        </div>
      </div>
      <div className="row">
        <div className="col-3 mb-3">
          <Box 
            margin = "0 auto"
            width = "100px"
            height = "100px"
            background_color = "aqua"
          />
        </div>
        <div className="col-3 mb-3">
          <Box 
            margin = "0 auto"
            width = "100px"
            height = "100px"
            background_color = "red"
          />
        </div>
        <div className="col-3 mb-3">
          <Box 
            margin = "0 auto"
            width = "100px"
            height = "100px"
            background_color = "green"
          />
        </div>
        <div className="col-3 mb-3">
          <Box 
            margin = "0 auto"
            width = "100px"
            height = "100px"
            background_color = "yellow"
          />
        </div>
      </div>
    </div>
  );
}
export default Tema1;