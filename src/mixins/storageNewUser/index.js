export default {
  data: () => ({
    favorites: [],
  }),
  methods: {
    storageNewUserCard(card) {
      this.userCards.push(card);
    },

    generateFavoriteUser() {
      const sort = (Math.random() * (100 - 0) + 0).toFixed(0);
      const genderAvatar = ['men', 'women'][
        (Math.random() * (1 - 0) + 0).toFixed(0)
      ];
      this.favorites.push({
        id: this.favorites.length + 1,
        name: 'Lorem Ipsum',
        avatarPath: `https://randomuser.me/api/portraits/${genderAvatar}/${sort}.jpg`,
      });
    },

    deleteFavoriteUser(e) {
      let index = this.favorites.indexOf(e);
      this.favorites.splice(index, 1);
    },
  },
};
