<script>
	const formatter = Intl.DateTimeFormat('nl-BE', { dateStyle: 'medium', timeStyle: 'short' });
	import Map from '$lib/Map/Map.svelte';
	import { enhance } from '$app/forms';
	export let data;
	import Modal from './Modal.svelte';

let showModal = false;
	$: sightings = data.sightings.map((s) => ({
		...s,
		timestamp: formatter.format(new Date(s.timestamp))
	}))
</script>




<div class="container">
	<div class="map-container">
		<Map markers={sightings.map((s) => ({ id: s.id, location: s.location, title:s.title, description:s.description, type:s.type }))} />
	</div>
	<div class="list-container">
		<div class="menu">
		<h1 class="HeadingSight">Sightings</h1>
		<button class="BtnAdd" on:click={() => (showModal = true)}> + </button>
	</div>
		<Modal bind:showModal>
			<h2 slot="header">
				Add A Sighting
			</h2>
		
			<form method="POST" action="?/add" use:enhance>
				<p>
				<label>
					Title Sighting:
					<input
						name="title"	
						autocomplete="off"
					/>
				</label>
			</p>
			<p>
				<label>
					Desc Sighting:
					<input
						name="description"	
						autocomplete="off"
					/>
				</label>
			</p>
			<p>
				<label>
					Username:
					<input
						name="username"	
						autocomplete="off"
					/>
				</label>
			</p>
			<p>
				<label>
					Type:
					<input type="radio" name="type" value=1 checked="checked" /> Tree
				</label>
				<label>
					<input type="radio" name="type" value=2 />Animal
				</label>
			</p>
			<p>
				<label>
					Latitude:
					<input
						name="lat"
						autocomplete="off"
					/>
				</label>
			</p>
			<p>
				<label>
					Longitude:
					<input
						name="long"
						autocomplete="off"
					/>
				</label>
			</p>
				<button formaction="?/add">Add Sighting</button>
			</form>
		</Modal>


		{#each sightings as sighting}
		<div class="list-item">
			<span  class="time">{sighting.timestamp} by <span class="name"><span> {sighting.username}</span></span>
			<h2>{sighting.title}</h2>
			<span class="content">{sighting.description}</span>
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

	.menu{
		display: flex;
		flex-flow: row;
		align-items: center;
	}

	.BtnAdd {
	  background-color: #04AA6D; /* Green */
	  border: none;
	  margin-left: 30px;
	  color: white;
	  height: 40px;
	  padding: 10px 10px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  border-radius: 10px;
	  font-size: 16px;
	}

	.HeadingSight {
	  display: flex;
	}



	.map-container {
		width: 70%;
		height: 100%;
	}

	.list-container {
		display: flex;
		width: 30%;
		height: 100%;
		padding: 1rem 2rem;
		overflow-y: scroll;
		position: static;
		background-color: F5F5F5;;
		border: 3px grey;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-left: 1px solid black;
	}

	.list-item {
		border-radius: 20px;
		border: 1px solid black;
		padding: 1rem;
	}
	
	.time {
		font-style: italic;
	}

	.name {
		font-weight: 200;
	}

	.content {
		font-family: Arial, Helvetica, sans-serif;
	}

</style>
