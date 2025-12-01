import { Provider } from "react-redux"
import { VideoProvider } from "./modals/VideoContext"
import { AuthProvider } from "./contexts/AuthContext"
import AppNavigation from "./navigation/Navigation"
import store from "./redux/store"


function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <VideoProvider>
          <AppNavigation />
        </VideoProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App