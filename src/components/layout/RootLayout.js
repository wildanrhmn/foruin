import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="root-layout">
        {/* <Header /> */}
        <main>
            <Outlet />
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default RootLayout