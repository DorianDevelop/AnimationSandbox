<template>
    <div class="content">
        <i>Infinite mirror effect</i>
        <div class="container-div"  @mousemove="handleMouseMove">
            <div class="outer" >
                <div>
                <div>
                <div>
                <div>
                <div>
                <div>
                <div>
                <div>
                <div>
                    <div class="inner"></div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        handleMouseMove(event) {
            const outer = event.currentTarget;
            const rect = outer.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;

            let displacement = 0.1; // Adjust this value to control the intensity of the effect

            let current = outer.firstElementChild;
            while (current) {
                const dx = deltaX * displacement;
                const dy = deltaY * displacement;

                current.style.transform = `translate(${dx}px, ${dy}px)`;

                displacement *= 0.9; // Reduce displacement for inner divs
                current = current.firstElementChild;
            }
        }
    }
}
</script>

<style scoped>
.outer{
    width: 250px;
    height: 300px;
    margin: 1rem 0;
    border: 1px solid white;
    position: relative;
    overflow: hidden;
}
.outer, .outer div{
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rainbow infinite 5s linear;
}
.outer div{
    width: 90%;
    height: 90%;
    border: 1px solid white;
    transition: transform 0.1s ease-out; /* Add smoothness to the movement */
}

.container-div{
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
}

.inner{
    background: #252525 !important;
}



@keyframes rainbow {
    0%   { background: rgba(255, 0, 0, 0.233); }
    14%  { background: rgba(255, 166, 0, 0.233); }
    28%  { background: rgba(255, 255, 0, 0.233); }
    42%  { background: rgba(0, 128, 0, 0.233); }
    57%  { background: rgba(0, 0, 255, 0.233); }
    71%  { background: rgba(76, 0, 130, 0.233); }
    85%  { background: rgba(238, 130, 238, 0.233); }
    100% { background: rgba(255, 0, 0, 0.233); } /* This is to ensure a smooth transition back to the start when looping */
}
</style>
