<template id="userlist">
    <section>
        <h1>Choose user</h1>
        <ul style="list-style-type:none;">
            <li style="padding:10px;margin-bottom:10px;"><input type="checkbox" name="userForCan" value="alexr" /><label>Alex R.</label></li>
            <li style="padding:10px;margin-bottom:10px;"><input type="checkbox" name="userForCan" value="anjad" /><label>Anja D.</label></li>
            <li style="padding:10px;margin-bottom:10px;"><input type="checkbox" name="userForCan" value="emilioy" /><label>Emilio Y.</label></li>
        </ul>
        <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
            <!-- First button will activate the "user prepares a can now" button on Lobby -->
            <router-link to="/" class="main-nav__link main-nav__home-link" style="background:#b5c176;width:45%">Open Up</router-link>
            <!-- Second button finishes the can -->
            <router-link to="/confirmation" class="main-nav__link main-nav__home-link" style="background:green;width:45%">Finish It</router-link>
        </div>
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'UserList',
	components: {
		MainNavigation
	}
}
</script>