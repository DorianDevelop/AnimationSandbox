<template>
    <div class="content">
        <div class="scratch-container">
            <div class="scratch-front"></div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Other-2",
}
</script>

<style scoped>
.scratch-container{
    width: 350px;
    height: 50px;
    border: 1px dashed white;
    border-radius: 25px;
    background: #353535;
    overflow: hidden;
}

.scratch-front{
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: white;

    transition: transform 8s ease;
    position: relative;
}

.scratch-front::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 1rem;
    font-size: 0.5rem;
    transform: translateY(-50%);

    background:#353535;
    border-radius: 100%;

    width: 1.2rem;
    height: 1.2rem;

    opacity: 0.7;

    transition: width 8s ease, height 8s ease;
}

.scratch-front::after{
    content: '';
    position: absolute;
    top: 50%;
    left: -11%;
    font-size: 0.5rem;
    transform: translateY(-50%);
    
    width: 10%;
    height: 100%;

    border-radius: 25px;

    background: linear-gradient(90deg, #252525 10%, #fff 75%, #252525 100%);
    background-color: #252525;
    border: 1px solid #252525;

    transition: left 0.5s linear, width 8s ease;
}

.scratch-container:hover .scratch-front{
    transform: translateX(100%);
}

.scratch-container:hover .scratch-front::before{
    width: 0;
    height: 0;
}
.scratch-container:hover .scratch-front::after{
    left:0%;
    width: 80%;
}
</style>