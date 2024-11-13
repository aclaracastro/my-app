import React, {useState, useEffect} from 'react';
import DogsCards from './DogsCards';

function Dogs(){
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDogImage(data.message);
            setLoading(false    )
            setVisible(false)
        })
        .catch(error => setVisible(true));
    }, []);

    return(
        <div className='app'>
            {loading ? <p>Loading...</p> : <DogsCards imageUrl={dogImage} isVisible={isVisible} />}
        </div>
    );
}

export default Dogs;