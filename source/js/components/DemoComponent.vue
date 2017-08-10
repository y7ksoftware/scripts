<script>

    /**
     * Vue Component to use with "inline-template" in twig templates.
     *
     * As long as it is inside a parent vue MODULE (e.g. "VueContainer"), it
     * is mounted automatically and can be nested as far as you want.
     *
     * <demo-component inline-template>
     *    <div class="demoComponent">
     *    </div>
     * </demo-component>
     *
     *
     */
    export default {

        name: 'DemoComponent',

        data() {
            return {};
        },

        mounted() {
            console.log('Component ready.');
        }

    };
</script>
