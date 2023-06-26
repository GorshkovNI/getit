import React, { useEffect, useState, useRef, FC } from "react";
import styles from './Slider.module.css';
import cn from 'classnames';
import {Arrow} from "../../../../shared/Icons";

const PAGE_WIDTH = 250;
const TRANSITION_DURATION = 300;

interface ISlider {
    photos?: { id: number; url: string }[];
}

export const Slider: FC<ISlider> = ({ photos }) => {
    const [offset, setOffset] = useState<number>(0);
    const [transitionDuration, setTransitionDuration] = useState(TRANSITION_DURATION);

    const windowElRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizeHandler = () => {
            const windowElWidth = windowElRef.current?.offsetWidth;
            const maxOffset = -(PAGE_WIDTH * (photos?.length ?? 0 - 1));
            setOffset((currentOffset) => {
                if (currentOffset < maxOffset) {
                    return maxOffset;
                }
                return currentOffset;
            });
        };

        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [photos]);

    const handleClickLeftArrow = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setOffset((currentOffset) => {
            if (!transitionDuration) {
                setTransitionDuration(TRANSITION_DURATION);
            }
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
    };

    const handleClickRightArrow = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        setOffset((currentOffset) => {
            if (!transitionDuration) {
                setTransitionDuration(TRANSITION_DURATION);
            }
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (photos?.length ?? 0 - 1));
            return Math.max(newOffset, maxOffset);
        });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.window} ref={windowElRef}>
                <div className={cn(styles.arrowArea, styles.arrowAreaLeft)} onClick={handleClickLeftArrow}>
                    <Arrow className={styles.arrowLeft} />
                </div>
                <div
                    className={styles.allPagesContainer}
                    style={{ transitionDuration: `${transitionDuration}ms`, transform: `translateX(${offset}px)` }}
                >
                    {photos?.map((photo, index) => (
                        <div key={photo.id} className={styles.slide} style={{ width: `${PAGE_WIDTH}px` }}>
                            <img src={photo.url} alt={`Slide ${index + 1}`} className={styles.slideImage} />
                            {index === Math.floor((photos?.length ?? 0) / 2) && <div className={styles.activeIndicator} />}
                        </div>
                    ))}
                </div>
                <div className={cn(styles.arrowArea, styles.arrowAreaRight)} onClick={handleClickRightArrow}>
                    <Arrow className={styles.arrowRight} />
                </div>
            </div>
        </div>
    );
};