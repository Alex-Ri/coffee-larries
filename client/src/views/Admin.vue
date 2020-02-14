<template id="admin">
    <section>
        <h1>Hey Admin!</h1>
        <button style="padding:5px;margin:5px;border:1px solid #ccc;">Add new user</button>
        <button style="padding:5px;margin:5px;border:1px solid #ccc;">Add new coffee</button>
        <button style="padding:5px;margin:5px;border:1px solid #ccc;">Delete User</button>
        <button style="padding:5px;margin:5px;border:1px solid #ccc;">Delete Coffee</button>
        <hr>
        <table>
            <tr>
                <th style="width:25%">Name</th>
                <th style="width:25%">Gram</th>
                <th style="width:25%">EUR</th>
                <th style="width:25%"></th>
            </tr>
            <tr>
                <td>Alex R.</td>
                <td>43,19</td>
                <td>0,59</td>
                <td><button style="padding:5px;border:1px solid #ccc;">Paid</button></td>
            </tr>
            <tr>
                <td>Emilio Y.</td>
                <td>132,09</td>
                <td>8,93</td>
                <td><button style="padding:5px;border:1px solid #ccc;">Paid</button></td>
            </tr>
        </table>
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Admin',
	components: {
		MainNavigation
	}
}
</script>