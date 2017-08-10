<script>

    /**
     * Vue container holding all vue components inside the barba container.
     *
     * This module is mounted as a parent module. If you use barba, place it inside the barba container.
     * All components with "inline-template" inside get mounted automatically and can be nested as far as you want.
     */
    export default {

        name: 'VueContainer',
        el: '.js-vueContainer',

    };
</script>
