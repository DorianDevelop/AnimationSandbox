<template>
    <div class="content">
        <i>Strong Fade and switch color</i>
        <div class="btn-container">
            <button>&lt;Button&gt;</button>
        </div>
        <div class="btn-container">
            <a href="#">&lt;A&gt;</a>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: relative;
    padding-top: 3rem;

    .btn-container{
        padding: 1px;

        &:hover {
            button, a{
                opacity: 0.4;
            }
        }

        button, a{
            border: 1px solid rgba(253, 253, 253, 0.247);
            background: #252525;
            text-align: center;
            color: white;

            padding: 1rem 2.5rem;
            width: 150px;
            font-size: 1rem;

            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease, color 0.15s ease;

            display: inline-block;

            
            &:active{
                opacity: 1;
                background: white;
                color: #252525;
            }
        }
    }
}
</style>