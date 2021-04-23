<template>
     <nav>
            <h1>
                {{$route.name}}
            </h1>
           <slot></slot>
        </nav>
</template>
<style scoped>
nav{
    padding: 2vh;
    display: flex;
    justify-content: space-between;
}
</style>