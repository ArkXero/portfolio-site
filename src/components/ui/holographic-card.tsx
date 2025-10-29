import { useRef, useCallback, memo } from 'react';

const HolographicCard = memo(() => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 7.5;
        const rotateY = (centerX - x) / 7.5;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    }, []);

    return (
        <div
            className="component-card holographic-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="holo-content text-center">
                <h3 className="component-title" style={{fontWeight: 700, fontSize: '1.25rem', color: '#000000', letterSpacing: '-0.025em'}}>
                    Ronit Singh
                </h3>
                <p style={{color: '#000000', fontSize: '0.875rem'}}>
                    TJHSST Class of 2028
                </p>
                <p style={{color: '#000000', fontSize: '0.875rem'}}>
                    Aspiring Computer Science & Engineering Student
                </p>
            </div>
            <div className="holo-glow"></div>
        </div>
    );
});

HolographicCard.displayName = 'HolographicCard';

export default HolographicCard;
