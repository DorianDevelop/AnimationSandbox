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
}
</script>

<style scoped>
.fog-center{
    margin: 4rem;

    width: 50px;
    aspect-ratio: 1;
    border-radius: 100%;

    animation: rainbowLight infinite 5s linear;

    position: relative;
}

.cloud{
    position: absolute;
    width: 100px;
    height: 100px;

    background: #a20ae91c;
    border-radius: 100%;

    animation: rainbowFilter infinite 5s linear;
}

.cloud2{
    top: -50%;
    left:-100%;
    animation: rainbowCloud2 infinite 5s linear;
}

.cloud3{
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    width: 200px;
    height: 170px;
    animation: rainbowCloud infinite 5s linear;
}



@keyframes rainbowCloud {
    0%   { background: rgba(255, 0, 0, 0.067); }
    14%  { background: rgba(255, 166, 0, 0.067); }
    28%  { background: rgba(255, 255, 0, 0.067); }
    42%  { background: rgba(0, 128, 0, 0.067); }
    57%  { background: rgba(0, 0, 255, 0.067); }
    71%  { background: rgba(76, 0, 130, 0.067); }
    85%  { background: rgba(238, 130, 238, 0.067); }
    100% { background: rgba(255, 0, 0, 0.067); } /* This is to ensure a smooth transition back to the start when looping */
}
@keyframes rainbowCloud2 {
    0%   { background: rgba(255, 0, 0, 0.22); }
    14%  { background: rgba(255, 166, 0, 0.22); }
    28%  { background: rgba(255, 255, 0, 0.22); }
    42%  { background: rgba(0, 128, 0, 0.22); }
    57%  { background: rgba(0, 0, 255, 0.22); }
    71%  { background: rgba(76, 0, 130, 0.22); }
    85%  { background: rgba(238, 130, 238, 0.22); }
    100% { background: rgba(255, 0, 0, 0.22); } /* This is to ensure a smooth transition back to the start when looping */
}

@keyframes rainbowFilter {
    0%   { filter: drop-shadow(0 2px 20px rgba(255, 0, 0)) blur(10px); }
    14%  { filter: drop-shadow(0 2px 20px rgba(255, 166, 0)) blur(10px); }
    28%  { filter: drop-shadow(0 2px 20px rgba(255, 255, 0)) blur(10px); }
    42%  { filter: drop-shadow(0 2px 20px rgba(0, 128, 0)) blur(10px); }
    57%  { filter: drop-shadow(0 2px 20px rgba(0, 0, 255)) blur(10px); }
    71%  { filter: drop-shadow(0 2px 20px rgba(76, 0, 130)) blur(10px); }
    85%  { filter: drop-shadow(0 2px 20px rgba(238, 130, 238)) blur(10px); }
    100% { filter: drop-shadow(0 2px 20px rgba(255, 0, 0)) blur(10px); } /* This is to ensure a smooth transition back to the start when looping */
}

@keyframes rainbowLight {
    0%   { background: radial-gradient( red, rgba(161, 2, 2, 0.204));  
    filter: drop-shadow(0 5px 18px rgba(255, 0, 0)) blur(10px); }
    14%  { background: radial-gradient( orange, rgba(160, 104, 1, 0.204)); 
    filter: drop-shadow(0 5px 18px rgba(255, 166, 0)) blur(10px);}
    28%  { background: radial-gradient( yellow, rgba(167, 167, 3, 0.204)); 
    filter: drop-shadow(0 5px 18px rgba(255, 255, 0)) blur(10px); }
    42%  { background: radial-gradient( green, rgba(0, 128, 0, 0.204)); 
    filter: drop-shadow(0 5px 18px rgba(0, 128, 0)) blur(10px);}
    57%  { background: radial-gradient( blue, rgba(1, 1, 145, 0.204));
    filter: drop-shadow(0 5px 18px rgba(0, 0, 255)) blur(10px); }
    71%  { background: radial-gradient( indigo, rgba(76, 0, 130, 0.204));
    filter: drop-shadow(0 5px 18px rgba(76, 0, 130)) blur(10px); }
    85%  { background: radial-gradient( violet, rgba(119, 2, 119, 0.204));
    filter: drop-shadow(0 5px 18px rgba(238, 130, 238)) blur(10px); }
    100% { background: radial-gradient( red, rgba(102, 2, 2, 0.204));
    filter: drop-shadow(0 5px 18px rgba(255, 0, 0)) blur(10px); } /* This is to ensure a smooth transition back to the start when looping */
}
</style>