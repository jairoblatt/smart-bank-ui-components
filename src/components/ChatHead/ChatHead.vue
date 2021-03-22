<template>
  <s-card class="chat-head__container">
    <div class="head__username">
      <h2>{{ userName }}</h2>
      <div class="username__status">
        <span
          class="status__dot"
          :class="{ 'status__dot--online': status === 'online' }"
        ></span>
        <p>{{ status }} Now</p>
      </div>
    </div>

    <div class="head__actions">
      <ul class="action__items">
        <li class="action__item">
          <s-button text>
            <i class="mdi mdi-phone"></i>
          </s-button>
        </li>

        <li class="action__item">
          <s-button text>
            <i class="mdi mdi-magnify"></i>
          </s-button>
        </li>
        <hr class="divider" />
        <li class="action__item">
          <s-button text>
            <i class="mdi mdi-dots-vertical"></i>
          </s-button>
        </li>
      </ul>
    </div>
  </s-card>
</template>
<script>
import './ChatHead.scss';

export default {
  props: {
    userName: String,
    status: {
      type: String,
      default: 'offline',
      validator: v => ['online', 'offline'].includes(v),
    },
  },
};
</script>
