import React from 'react'
function childrenWithProps(children, props) {
    return React.Children.map(children,
            child => React.cloneElement(child, {...props}))
}
export { childrenWithProps }