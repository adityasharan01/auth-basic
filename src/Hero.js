import React from 'react';

const Hero = ({email,handlelogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>
                 Welcome !! {email}
                </h2>
                <button onClick={handlelogout}> Logout </button>
            </nav>

        </section>
    )
}

export default Hero;
