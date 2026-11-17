 STEPS FOR CREATING CONTEXT PROVIDER 

 Context Api:

 1. Make a folder name as -> Contex
 2. Create your context(store) -> createContext()
 3. Make your Context Provide:
        - Make a ContextProvider function which accepts a cchildren
        - return <MyStore.Provider>{Children}</MyStore>
 4. Hold your data inside COntext Provider
 5. Pass value prop & pass the Data
 6. Wrap your main single functional Component in Main.jsx 