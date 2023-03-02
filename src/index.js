import 'animate.css';

L.GeoJSON.include({

    animate: function({
        type = 'fadeIn',
        speed = 'slow',
        repeat = 'infinite',
        delay = undefined
    } = {}){
        this.eachLayer(lyr => {
            const path = lyr.hasOwnProperty('_path') ? lyr._path : '';
            if(path) {
                const repeatClass = repeat === 'infinite' ? 'animate__infinite' : `animate__repeat-${repeat}`;
                const classNames = ['animate__animated',`animate__${type}`, repeatClass, `animate__${speed}`];
                const delayClass = delay ? `animate__delay-${delay}` : '';
                if( delayClass) classNames.push( delayClass );
    
                path.addEventListener("animationend", (event) => {
                    classNames.forEach( className => path.classList.remove(className) )
                })
    
                classNames.forEach( className => path.classList.add(className) )
            }
        })
    }
})
