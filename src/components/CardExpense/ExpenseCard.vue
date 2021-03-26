<template>
  <SCard>
    <SCardBody>
      <div class="expense-card">
        <SAvatar size="63" rounded>{{ title.charAt() }}</SAvatar>
        <div class="expense-card__content">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
        <div class="expense-card__action">
          <SButton text>
            <i class="mdi mdi-arrow-right"></i>
          </SButton>
        </div>
      </div>
    </SCardBody>
  </SCard>
</template>
<script>
import './ExpenseCard.scss';

export default {
  props: {
    title: String,
    description: String,
  },
};
</script>
