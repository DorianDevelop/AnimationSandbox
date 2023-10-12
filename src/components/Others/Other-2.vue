<template>
    <div class="content">
        <i>Light in fog</i>
        <div class="fog-center">
            <div class="cloud cloud1"></div>
            <div class="cloud cloud2"></div>
            <div class="cloud cloud3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Other-2",
}
</script>

<style scoped>
.fog-center{
    margin: 4rem;

    width: 50px;
    aspect-ratio: 1;
    border-radius: 100%;

    background: radial-gradient(#c04af7, #a20ae934);
    filter: drop-shadow(0 5px 18px #a20ae9) blur(8px);

    position: relative;
}

.cloud{
    position: absolute;
    width: 100px;
    height: 100px;

    background: #a20ae91c;
    border-radius: 100%;

    filter: drop-shadow(0 2px 20px #a20ae9) blur(10px);
}

.cloud2{
    top: -50%;
    left:-100%;
    background: #a20ae938;
}

.cloud3{
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    width: 200px;
    height: 170px;
    background: #a20ae911;
}
</style>