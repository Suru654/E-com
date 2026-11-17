import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestComponents from './TestComponents.jsx'
import { ContextProvider } from './context/MyContext.jsx'
import { MyShopContextProvider } from './context/MyWebsite.jsx'

createRoot(document.getElementById('root')).render(
    <MyShopContextProvider>
        <App />
    </MyShopContextProvider>
)



// STEPS FOR CREATING CONTEXT PROVIDER 

// Context Api

// 1. Make a folder name as -> Contex
// 2. Create your context(store) -> createContext()
// 3. Make your Context Provide:
//        - Make a ContextProvider function which accepts a cchildren
//        - return <MyStore.Provider>{Children}</MyStore>
// 4. Hold your data inside COntext Provider
// 5. Pass value prop & pass the Data