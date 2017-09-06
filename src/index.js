import _ from 'lodash';
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyDEQ3geyP6WkuLxgy3CUmCGp1yzDjiun1E';



//Create a new component html
class App extends Component {
    
  constructor(props) {
    console.log('constructor');
    
    super(props);
    this.state = { 
      videos:[],
      selectedVideo: null 
    };
    this.videoSearch('surfboards');
    

  }
  
  videoSearch(term){
    //get videos from youtube API
    YTSearch({key: API_KEY, term:term }, (videos) => {
      //every time we use setState we re-render
      this.setState({ 
        videos, // is equal as { videos: videos }
        selectedVideo:videos[0]
       }); 
    });
  }

  render() {
    //delay onChange event to every 3s
    const videoSearch = _.debounce((term) => 
      {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
      </div>
    );
  }
} 


//Take this components generate HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));


//Start with L17

