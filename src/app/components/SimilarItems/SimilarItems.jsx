import React from 'react';
import styles from './SimilarItems.module.css';
import SmartphoneCard from '../SmartphoneCard/SmartphoneCard';
import PropTypes from 'prop-types';

export default function SimilarItems({ similarItems }) {
    const carouselRef = React.useRef(null);
    const [scrollPosition, setScrollPosition] = React.useState(0);

    const handleScroll = () => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
            const newScrollPosition = (carouselRef.current.scrollLeft / scrollWidth) * 100; // Calculate scroll percentage
            setScrollPosition(newScrollPosition);
        }
    };

    return (
        <div className={styles.similar_items}>
            <h2>SIMILAR ITEMS</h2>
            <div className={styles.carousel} ref={carouselRef} onScroll={handleScroll}>
                {similarItems.map((item) => (
                    <SmartphoneCard key={item.id} phone={item} />
                ))}
            </div>
            <div className={styles.scroll_bar}>
                <div className={styles.scroll_runner} style={{ width: `${scrollPosition}%` }} />
            </div>
        </div>
    );
}

SimilarItems.propTypes = {
    similarItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        basePrice: PropTypes.number.isRequired,
    })).isRequired,
};