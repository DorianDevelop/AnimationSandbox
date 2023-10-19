<template>
    <div class="content">
        <i>Sliding front</i>
        <div class="scratch-container">
            <div class="scratch-front"></div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.scratch-container{
    width: 350px;
    height: 50px;
    border: 1px dashed white;
    border-radius: 25px;
    background: #353535;
    position: relative;

    overflow: hidden;
}

.scratch-container::before{
    content: 'Hello World!';
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translateX(-50%) translateY(-50%);

    color: rgb(255, 255, 255);

    z-index: 5;
}

.scratch-front{
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: rgb(177, 177, 177);

    transition: transform 1s ease;

    z-index: 10;
}

.scratch-container:hover .scratch-front{
    transform: translateX(100%);
}
</style>