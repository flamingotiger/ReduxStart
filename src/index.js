import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';
const APP_KEY = "AIzaSyCvWaZrwKP1XEjMMASb8nhth-mW8Adh4q0";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };
    this.videoSearch("surfboards")
  }
  videoSearch(term){
    YTSearch({ key: APP_KEY, term:term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }
  /*
  componentDidMount(){
    this.videoSearch("surfboards")
  }
  */
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
