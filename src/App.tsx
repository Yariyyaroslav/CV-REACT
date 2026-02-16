import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx'
import Home from './pages/Home';
import Skills from './pages/Skills';
import {store} from "./app/store/store.ts";
import {Provider} from "react-redux";
import Projects from './pages/Projects';
import Toast from "./components/ui/ToastPortal.tsx";
import ScrollHash from "./components/ui/ScrollHash.tsx";
function App() {

  return (

      <Provider store={store}>
          <Layout>
              <ScrollHash />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
              </Routes>
          </Layout>

          <Toast />
      </Provider>

  )
}

export default App
