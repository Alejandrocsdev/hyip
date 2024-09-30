// ShowListContext.js
import { createContext, useContext, useState } from 'react'

// Create the context
const ShowListContext = createContext()

// Custom hook to access the context
export function useShowList() {
  return useContext(ShowListContext)
}

// Provider component to wrap the app or layout
export function ShowListProvider({ children }) {
  const [showList, setShowList] = useState(false)

  return (
    <ShowListContext.Provider value={{ showList, setShowList }}>
      {children}
    </ShowListContext.Provider>
  )
}
