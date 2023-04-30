import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laborum non natus aspernatur assumenda fugit similique doloremque eaque ex accusamus blanditiis tempore, fuga recusandae culpa repellendus architecto repudiandae nemo. Adipisci nesciunt itaque eius recusandae possimus deserunt ratione cupiditate quos debitis, facilis accusantium error quae atque veritatis amet quo. Quas, nihil!</p>
            <p>GO back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;