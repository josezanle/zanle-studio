import React from 'react'

const Navigation = ({ paths, isSticky }) => {
    const handleClick = (path) => {
        // Lógica para manejar la navegación usando el ID
        const element = document.getElementById(path);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <ul>
                {paths.map((path , index) => (
                    <li key={index} onClick={() => handleClick(path.href)}>
                        <a rel="noreferrer noopener" href={`#${path.href}`}>{path.name}</a>
                    </li>
                ))}
            </ul>


            <style jsx>{`
                    nav ul{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 25px;
                    }
                    ul, ol {list-style: none}
                
                    nav ul li a {
                        position: relative;
                        font-size: 30px;
                        color: ${isSticky ? "white" : "black"};
                        cursor: pointer;
                        font-weight: bold;
                        text-decoration: none;
                    }

                    nav ul li a::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        height: 3px;
                        width: 0;
                        background-color: ${isSticky ? "white" : "black"}; 
                        transition: width 0.3s ease; 
                    }

                    nav ul li a:hover::after {width: 100%}
                    nav ul li a:hover {color: ${isSticky ? "white" : "black"}}
                            
            `}</style>

            </nav>
    );
}

export default Navigation