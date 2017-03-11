import React, { Component } from 'react';
import styles from './LoadingSpinner.css';

class LoadingSpinner extends Component {
    render() {
        let bars = [];
        const props = this.props;

        for (let i = 0; i < 12; i++) {
            let barStyle = {};
            // Set bar color
            barStyle.backgroundColor = props.barColor;

            // Set animation delay
            barStyle.WebkitAnimationDelay = barStyle.animationDelay =
            (i - 12) / 10 + 's';

            // Set radian positioning
            barStyle.WebkitTransform = barStyle.transform =
            'rotate(' + (i * 30) + 'deg) translate(146%)';

            bars.push(
                <div
                    style={barStyle}
                    className={styles['custom-spinner-bar']}
                    key={i}
                />
            );
        }

        return (
          <div className={`${props.className} ${styles['custom-spinner']}`}>
            {bars}
          </div>
        );
    }
}

export default LoadingSpinner;
