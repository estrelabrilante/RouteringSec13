<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
      // Dummy data
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' }
      // ]
    };
  },
  methods: {
    // loadTeamMembers(route) {
    //   const tId = route.params.tmId;
    //   const selectedTeam = this.teams.find(team => team.Id === tId);
    //   const members = selectedTeam.members;
    //   const selectedMembers = [];
    //   for (const member of members) {
    //     const selectedUser = this.users.find(user => user.Id === member);
    //     selectedMembers.push(selectedUser);
    //   }
    //   this.members = selectedMembers;
    //   this.teamName = selectedTeam.name;
    // }
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  // Created life cycle hook
  created() {
    //$route.path => path responsible for loading this page
    // this.$route.path;
    // console.log(this.$route);
    // passing datas with router params
    //$route.params => Holds all route params
    // this.loadTeamMembers(this.$route);
    // passing datas with props
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  // When route change
  watch: {
    // $route(newRoute) {
    //   this.loadTeamMembers(newRoute);
    // }
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
