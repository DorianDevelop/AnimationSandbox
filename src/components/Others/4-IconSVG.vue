<template>
    <div class="content">
        <i>Icon styling</i>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.content svg {
    height: 100px;
    width: 100px;

    animation: rainbowStroke infinite 5s linear;
}

@keyframes rainbowStroke {
    0%   { stroke: red; }
    14%  { stroke: orange; }
    28%  { stroke: yellow; }
    42%  { stroke: green; }
    57%  { stroke: blue; }
    71%  { stroke: indigo; }
    85%  { stroke: violet; }
    100% { stroke: red; } /* This is to ensure a smooth transition back to the start when looping */
}
</style>