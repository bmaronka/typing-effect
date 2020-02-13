const bars = () => {
    const tl = new TimelineMax({
        onComplete: bars,
    });
    const barsElement = document.querySelectorAll('#voice-bars > rect');
    const scale = () => {
        return 0.1 + Math.random() * 2.5;
    }
    const color = () => {
        const colors = ['green', 'red', 'blue', 'yellow'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    tl.set(barsElement, {
        y: -30,
        transformOrigin: '50% 50%',
    })
    tl.staggerTo(barsElement, .7, {
        scaleY: scale,
        repeat: 1,
        yoyo: true,
        fill: color,
        ease: Bounce.easeIn,
    }, .2);

    return tl;
}

const blink = () => {
    const tl = new TimelineMax({
        onComplete: blink,
    });
    const eyes = document.querySelectorAll('#eye-left, #eye-right');

    tl.set(eyes, {
        transformOrigin: '50% 50%'
    });
    tl.to(eyes, .2, {
        scaleY: 0,
        yoyo: true,
        delay: 2,
        repeat: 1,
        ease: Power0.easeNone,
    });

    return tl;
}

const move = () => {
    const tl = new TimelineMax();
    const legs = document.querySelectorAll('#leg-left, #leg-right');

    tl.staggerTo(legs, .5, {
        y: -60,
        yoyo: true,
        repeat: -1,
        ease: Power0.easeNone,
    }, .5)

    return tl;
}




//Master Timeline
const master = new TimelineMax();
master.add('start');
master.add(bars(), 'start');
master.add(move(), 'start');
master.add(blink(), 'start');