import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthController } from './context/AuthContext.jsx'
import { ServicesController } from './context/ServicesContext.jsx'
import './index.css'
import MyRouter from './MyRouter.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ServicesController>
    <AuthController>
      <MyRouter/>
    </AuthController>
  </ServicesController>
  </BrowserRouter>,
)
