import React from 'react'
import Ballpit from './Ballpit'
import './404.css'
const NaeFound = () => {
    return (
        <>
            <div className="page-container">
                <div className="background-gradient" />
                <main className="content-wrapper">
                    <h1 className="error-title">
                        404 - <span className="gradient-text">Page Not Found</span>
                    </h1>

                    <div className="action-buttons">
                    </div>
                </main>

                <div className="animation-container">
                    <Ballpit
                        count={60}
                        gravity={0.1}
                        friction={0.998}
                        wallBounce={0.95}
                        followCursor={false}
                        colors={[0x09090b, 0x71717a, 0x18181b]}
                        materialParams={{
                            transmission: 0.2,
                            thickness: 1.5,
                            roughness: 0.2,
                            ior: 1,
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default NaeFound