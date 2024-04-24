<template>
    <div class="container">
        <span class="loader"></span>
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: black;
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: absolute;
    top: 40%;
    left: 45%;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>