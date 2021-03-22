<template>
  <div class="client-history__wrapper">
    <div class="client-history__issues">
      <h2>
        Resolved Issues
        <s-chip :type="resolveIssueType(resolvedIssues)" small>{{
          resolvedIssues
        }}</s-chip>
      </h2>
      <ul v-if="tags">
        <li v-for="(tag, index) in tags" :key="`tag-${index}`">
          <s-chip small :type="resolveTagType(tag)">{{ tag }}</s-chip>
        </li>
      </ul>
    </div>

    <div class="client-history">
      <div class="client-history__card" v-for="i in 3" :key="i">
        <div class="client-history__card-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            nostrum
          </p>
          <small>21 Jun 2019</small>
        </div>
        <div class="client-history__card-action">
          <i class="mdi mdi-dots-vertical"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './ClientHistory.scss';

export default {
  props: {
    resolvedIssues: {
      type: [Number, String],
      default: 0,
    },

    tags: {
      type: [Array, Boolean],
      default: false,
    },
  },

  methods: {
    resolveTagType(tag) {
      switch (tag) {
        case 'Mobile App':
          return 'danger';
        case 'Transfers':
          return 'info';
        case 'Account':
          return 'success';
        case 'Debit Card':
          return 'secondary';
      }
    },

    resolveIssueType(issue) {
      if (issue < 1) return 'secondary';
      if (issue > 1 && issue < 10) return 'primary';
      if (issue > 10 && issue < 20) return 'success';
      if (issue > 20) return 'info';
    },
  },
};
</script>
