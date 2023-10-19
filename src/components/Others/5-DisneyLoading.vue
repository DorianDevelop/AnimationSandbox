<template>
    <div class="content">
        <i>Bad Disney Loading Effect</i>
       <div class="circle"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.circle{
    width: 106px;
    height: 106px;
    border-radius: 100%;
    background: conic-gradient(from 90deg, #ffffff 0%, #10aafd 35%, rgba(32,0,255,0.48) 80%);


    position: relative;
    transition: transform 1s linear;

    animation: loading 3s linear infinite;
}

.circle::after{
    content: '';
    display: block;
    width: 88px;
    height: 88px;
    background: #252525;
    border-radius: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.circle::before{
    content: '';
    display: block;
    width: 50px;
    height: 60px;
    background: #252525;
    box-shadow: -5px 0px 2px -3px #25252569;

    position: absolute;
    top: -7px;
    right: -10px;
}

@keyframes loading{
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(-360deg);
    }
}

</style>