import React from 'react';

import Cloud from './Cloud';

export default (props) => {
        const style = {
            clouds: {
                height: 200,
                width: '100%',
            },
        }
        return (
            <div style={{ ...style.clouds, ...props.style }}>
                <Cloud
                    styleWrapper={{
                        width: "10%",
                        top: 20,
                        left: "60%",
                    }}
                />
                <Cloud
                    styleWrapper={{
                        width: "5%",
                        top: 120,
                        left: "70%",
                    }}
                />
            </div>
        )
    }

