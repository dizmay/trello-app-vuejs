<template>
  <div class="home__container">
    <div class="home">
      <div class="home__description">
        <h1>Trello helps teams move work forward.</h1>
        <p>
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is unique —
          accomplish it all with Trello.
        </p>
        <custom-btn text="Try now" light />
      </div>
      <div class="home__image">
        <img src="@/assets/svg/teamwork.svg" alt="Teamwork" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home__container {
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  display: flex;
  width: 75%;

  &__description {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  &__image {
    width: 50%;

    img {
      width: 100%;
    }
  }
}
</style>
