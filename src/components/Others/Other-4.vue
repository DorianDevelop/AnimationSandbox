<template>
    <div class="content">
        <i>Infinite mirror effect</i>
        <div class="container-div"  @mousemove="handleMouseMove">
            <div class="outer" >
                <div class="less-outer">
                    <div class="less-less-outer">
                        <div class="not-inner">
                            <div class="close-to-inner">
                                <div class="inner-maybe-but-no">
                                    <div class="inner"></div>
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
    name : "Other-4",
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
    background: rgba(128, 128, 128, 0.295);
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
</style>
