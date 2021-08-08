<template>
    <div>
        <h5 class="text-h5 text-center">Units</h5>
        <div class="q-pa-md row items-start q-gutter-md">
            <unit-gallery :units="units" />
        </div>
    </div>
</template>

<script>
    import UnitGallery from '../components/UnitGallery.vue'

    export default {
        name: 'Gallery',
        data () {
            return {
                units: [
                    {
                        name: 'Cartel Soldato Enforcer Alfa',
                        faction: 'Criminal Element/Cartel',
                        desc: 'This Soldato Enforcer is a squad leader and up and coming name in the cartel. He prefers up close and personal engagements with a pistol.',
                        image: '/images/units/cartel-soldato-enforcer-alfa.jpg',
                        vendor: 'Spectre Miniatures',
                        link: 'https://www.spectreminiatures.com/collections/in-stock-items/products/cartel-soldato-enforcer-alfa'
                    },
                    {
                        name: 'Rifleman A4',
                        faction: 'Militia/US/Survivalists',
                        desc: null,
                        image: '/images/units/militia-survialists-rifleman-a4.jpg',
                        vendor: 'Militia Miniatures',
                        link: 'https://www.pendraken.co.uk/nmil-sur-a-nsurvivalists-pack-a-5771-p.asp'
                    },
                    {
                        name: 'Cartel Soldato Enforcer Alfa',
                        faction: 'Criminal Element/Cartel',
                        desc: 'This Soldato Enforcer is a squad leader and up and coming name in the cartel. He prefers up close and personal engagements with a pistol.',
                        image: '/images/units/cartel-soldato-enforcer-alfa.jpg',
                        vendor: 'Spectre Miniatures',
                        link: 'https://www.spectreminiatures.com/collections/in-stock-items/products/cartel-soldato-enforcer-alfa'
                    },
                    {
                        name: 'Rifleman A4',
                        faction: 'Militia/US/Survivalists',
                        desc: null,
                        image: '/images/units/militia-survialists-rifleman-a4.jpg',
                        vendor: 'Militia Miniatures',
                        link: 'https://www.pendraken.co.uk/nmil-sur-a-nsurvivalists-pack-a-5771-p.asp'
                    },
                    {
                        name: 'Cartel Soldato Enforcer Alfa',
                        faction: 'Criminal Element/Cartel',
                        desc: 'This Soldato Enforcer is a squad leader and up and coming name in the cartel. He prefers up close and personal engagements with a pistol.',
                        image: '/images/units/cartel-soldato-enforcer-alfa.jpg',
                        vendor: 'Spectre Miniatures',
                        link: 'https://www.spectreminiatures.com/collections/in-stock-items/products/cartel-soldato-enforcer-alfa'
                    },
                    {
                        name: 'Rifleman A4',
                        faction: 'Militia/US/Survivalists',
                        desc: null,
                        image: '/images/units/militia-survialists-rifleman-a4.jpg',
                        vendor: 'Militia Miniatures',
                        link: 'https://www.pendraken.co.uk/nmil-sur-a-nsurvivalists-pack-a-5771-p.asp'
                    },
                    {
                        name: 'Cartel Soldato Enforcer Alfa',
                        faction: 'Criminal Element/Cartel',
                        desc: 'This Soldato Enforcer is a squad leader and up and coming name in the cartel. He prefers up close and personal engagements with a pistol.',
                        image: '/images/units/cartel-soldato-enforcer-alfa.jpg',
                        vendor: 'Spectre Miniatures',
                        link: 'https://www.spectreminiatures.com/collections/in-stock-items/products/cartel-soldato-enforcer-alfa'
                    },
                    {
                        name: 'Rifleman A4',
                        faction: 'Militia/US/Survivalists',
                        desc: null,
                        image: '/images/units/militia-survialists-rifleman-a4.jpg',
                        vendor: 'Militia Miniatures',
                        link: 'https://www.pendraken.co.uk/nmil-sur-a-nsurvivalists-pack-a-5771-p.asp'
                    },
                    {
                        name: 'Cartel Soldato Enforcer Alfa',
                        faction: 'Criminal Element/Cartel',
                        desc: 'This Soldato Enforcer is a squad leader and up and coming name in the cartel. He prefers up close and personal engagements with a pistol.',
                        image: '/images/units/cartel-soldato-enforcer-alfa.jpg',
                        vendor: 'Spectre Miniatures',
                        link: 'https://www.spectreminiatures.com/collections/in-stock-items/products/cartel-soldato-enforcer-alfa'
                    },
                    {
                        name: 'Rifleman A4',
                        faction: 'Militia/US/Survivalists',
                        desc: null,
                        image: '/images/units/militia-survialists-rifleman-a4.jpg',
                        vendor: 'Militia Miniatures',
                        link: 'https://www.pendraken.co.uk/nmil-sur-a-nsurvivalists-pack-a-5771-p.asp'
                    },
                    {
                        name: 'Cartel Soldato Enforcer Alfa',
                        faction: 'Criminal Element/Cartel',
                        desc: 'This Soldato Enforcer is a squad leader and up and coming name in the cartel. He prefers up close and personal engagements with a pistol.',
                        image: '/images/units/cartel-soldato-enforcer-alfa.jpg',
                        vendor: 'Spectre Miniatures',
                        link: 'https://www.spectreminiatures.com/collections/in-stock-items/products/cartel-soldato-enforcer-alfa'
                    },
                    {
                        name: 'Rifleman A4',
                        faction: 'Militia/US/Survivalists',
                        desc: null,
                        image: '/images/units/militia-survialists-rifleman-a4.jpg',
                        vendor: 'Militia Miniatures',
                        link: 'https://www.pendraken.co.uk/nmil-sur-a-nsurvivalists-pack-a-5771-p.asp'
                    },
                ]
            }
        },
        components: {
            UnitGallery
        }
    }
</script>