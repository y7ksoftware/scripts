<script>

    /**
     * Vue Module that is mounted directly onto the DOM via a class "js-demoModule"
     */
    export default {

        name: 'DemoModule',
        el: '.js-demoModule',

        data() {
            return {};
        },

        mounted() {
            console.log('Module mounted to ' + this.$el);
        }

    };
</script>
