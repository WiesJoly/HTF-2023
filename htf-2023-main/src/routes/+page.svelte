<script>
  const formatter = Intl.DateTimeFormat("nl-BE", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  import Map from "$lib/Map/Map.svelte";
  import { enhance } from "$app/forms";
  export let data;
  import Modal from "./Modal.svelte";

  let showModal = false;
  $: sightings = data.sightings.map((s) => ({
    ...s,
    timestamp: formatter.format(new Date(s.timestamp)),
  }));
</script>

<div class="container">
  <div class="map-container">
    <Map markers={sightings.map((s) => ({ id: s.id, location: s.location }))} />
  </div>
  <div class="list-container">
    <h1>Sightings</h1>
    <button on:click={() => (showModal = true)}> + </button>
    <Modal bind:showModal>
      <h2 slot="header">Add A Sighting</h2>

      <form method="POST" action="?/add" use:enhance>
        <p>
          <label>
            Title Sighting:
            <input name="title" autocomplete="off" />
          </label>
        </p>
        <p>
          <label>
            Desc Sighting:
            <input name="description" autocomplete="off" />
          </label>
        </p>
        <p>
          <label>
            Username:
            <input name="username" autocomplete="off" />
          </label>
        </p>
        <p>
          <label>
            Type:
            <input type="radio" name="type" value="1" checked="checked" /> Tree
          </label>
          <label>
            <input type="radio" name="type" value="2" />Animal
          </label>
        </p>
        <p>
          <label>
            Latitude:
            <input name="lat" autocomplete="off" />
          </label>
        </p>
        <p>
          <label>
            Longitude:
            <input name="long" autocomplete="off" />
          </label>
        </p>
        <button formaction="?/add">Add Sighting</button>
      </form>
    </Modal>

    {#each sightings as sighting}
      <div class="list-item">
        <span>{sighting.timestamp} by {sighting.username}</span>
        <h2>{sighting.title}</h2>
        <span>{sighting.description}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .map-container {
    width: 70%;
    height: 100%;
  }

  .list-container {
    width: 30%;
    height: 100%;
    padding: 1rem 2rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-left: 1px solid black;
  }

  .list-item {
    border: 1px solid black;
    padding: 1rem;
  }
</style>
