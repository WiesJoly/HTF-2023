<script>
  import logo from "$lib/assets/jhl3.jpeg";
  import Modal from "./Modal.svelte";
  import { enhance } from "$app/forms";
  let showModalSignUp = false;
  let showModelLogIn = false;
  let showModelAccount = false;
  let uuidCurrentUser = null;
</script>

<nav>
  <div>
    <img alt="The project logo" src={logo} />
    <span class="title">Jungle Hike Logger</span>
  </div>
  <div>
    {#if uuidCurrentUser === null}
      <button on:click={() => (showModalSignUp = true)}>Sign up</button>
      <button on:click={() => (showModelLogIn = true)}>Log in</button>
    {/if}
    {#if uuidCurrentUser !== null}
      <button on:click={() => (showModelAccount = true)}>Account</button>
    {/if}
    {#if showModalSignUp}
      <Modal showModal={showModalSignUp}>
        <h2 slot="header">Sign up for an account!</h2>
        <form method="POST" action="?/signUp" use:enhance>
          <p>
            <label>
              Username:
              <input name="username" autocomplete="off" />
            </label>
          </p>
          <button formaction="?/signUp">Sign up!</button>
        </form>
      </Modal>
    {/if}
    {#if showModelLogIn}
      <Modal showModal={showModelLogIn}>
        <h2 slot="header">Sign in to your account</h2>
        <form method="POST" action="?/signIn" use:enhance>
          <p>
            <label>
              Username:
              <input name="username" autocomplete="off" />
            </label>
          </p>
          <button formaction="?/signIn">Sign in!</button>
        </form>
      </Modal>
    {/if}
    {#if showModelAccount}
      <Modal showModal={showModelAccount}>
        <h2 slot="header">Sign in to your account</h2>
        <form method="POST" action="?/signIn" use:enhance>
          <p>
            <label>
              Username:
              <input name="username" autocomplete="off" />
            </label>
          </p>
          <button formaction="?/signIn">Sign up!</button>
        </form>
      </Modal>
    {/if}
  </div>
</nav>
<div class="container">
  <slot />
</div>

<style>
  :root {
    --nav-height: 120px;
    --border-width: 3px;
  }
  nav {
    height: var(--nav-height);
    border-bottom: var(--border-width) solid #1c4532;
    display: flex;
    align-items: center;
    padding-inline: 2rem;
    justify-content: space-between;
  }

  img {
    width: calc(var(--nav-height) - var(--border-width));
    height: calc(var(--nav-height) - var(--border-width));
    margin-right: 2rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  .container {
    height: calc(100% - var(--nav-height));
  }
</style>
