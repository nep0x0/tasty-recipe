<template>
    <div class="header__navbar row
    justify-content-between align-items-center" style="width: 450px">
        <!-- Component SearchMenu -->
        <!-- Component SignupMenu -->
        <SearchMenu />
        <SignupMenu />
    </div>
</template>

<script>
import SearchMenu from './SearchMenu.vue';
import SignupMenu from './SignupMenu.vue';

export default {
    components: {
        SearchMenu,
        SignupMenu,
    },
};
</script>