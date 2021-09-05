<template>
    <q-layout view="hHh LpR fFf" class="non-selectable">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
                <q-toolbar-title>Unoffical Spectre Operations Player Aids</q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
            <!-- drawer content -->
            <q-scroll-area class="fit">
                <q-list>
                    <template
                        v-for="(menuItem, index) in menuList"
                        :key="index"
                        >
                        <q-item
                            clickable
                            :active="menuItem.label === 'Main'"
                            v-ripple
                            :to="menuItem.route"
                            >
                            <q-item-section avatar>
                                <q-icon :name="menuItem.icon" />
                            </q-item-section>
                            <q-item-section>
                                {{ menuItem.label }}
                            </q-item-section>
                        </q-item>
                        <q-separator
                            :key="'sep' + index"
                            v-if="menuItem.separator"
                        />
                    </template>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <!--
        <q-footer elevated class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    <div>Title</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>
        -->
    </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const menuList = [
    {
        icon: '',
        label: 'Main',
        route: '/',
        separator: true
    },
    {
        icon: 'casino',
        label: 'Player Aids',
        route: '/aids',
        separator: true
    },
    {
        icon: 'list_alt',
        label: 'Lists',
        route: '/lists',
        separator: true
    },
    {
        icon: 'ballot',
        label: 'Units',
        route: '/units',
        separator: false
    },
    {
        icon: 'ballot',
        label: 'Equipment',
        route: '/equipment',
        separator: false
    },
    {
        icon: 'ballot',
        label: 'Vehicles',
        route: '/vehicles',
        separator: true
    },
    /* {
        icon: 'movie',
        label: 'Videos',
        route: '/videos',
        separator: true
    }, */
    /* {
        icon: 'settings',
        label: 'Settings',
        separator: false
    },
    {
        icon: 'feedback',
        label: 'Send Feedback',
        separator: false
    },
    {
        icon: 'help',
        iconColor: 'primary',
        label: 'Help',
        separator: false
    } */
    {
        icon: 'info',
        iconColor: 'primary',
        label: 'About',
        route: '/about',
        separator: false
    }
];

export default {
    setup() {
        const leftDrawerOpen = ref(false);
        const $q = useQuasar();
        $q.dark.set(true);

        return {
            leftDrawerOpen,
            menuList,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            }
        };
    }
};
</script>
