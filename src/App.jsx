import { AppContext } from './Context/Contextapi.jsx'

import Header from './components/Header.jsx'
import Feed from './components/Feed.jsx'
import SearchResult from './components/SearchResult.jsx'
import VideoDetails from './components/VideoDetails.jsx'
import { Routes ,BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
