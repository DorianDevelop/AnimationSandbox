<template>
    <div class="content">
        <i>Perfect border radius</i>
        <div class="outer">
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
</template>

<script>
export default {
    name : "Other-3",
}
</script>

<style scoped>
.outer{
    width: 250px;
    height: 300px;
    margin: 1rem 0;
    border: 1px solid white;
    border-radius: 80px;

    transition: scale 1s ease;
    animation: zooming 3s infinite reverse linear;
}
.outer, .outer div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
}
.outer div{
    width: 100%;
    height: 100%;
    border: 1px solid white;
}

.inner{
    border-radius: 20px;
}
.inner-maybe-but-no{
    border-radius: 30px;
}
.close-to-inner{
    border-radius: 40px;
}
.not-inner{
    border-radius: 50px;
}
.less-less-outer{
    border-radius: 60px;
}
.less-outer{
    border-radius: 70px;
}

.outer:hover{
    scale: 0.5;
}
@keyframes zooming{
    0%{
        scale: 1;
    }
    15%{
        scale: 1.3;
    }
    85%{
        scale: 0.3;
    }
    100%{
        scale: 1;
    }
}
</style>